declare var google;

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 40.90791, lng: 29.17695 }
  });

  map.data.loadGeoJson(
    'https://storage.googleapis.com/mapsdevsite/json/google.json');
  return map;
}

var map;

window.addEventListener("load", () => {
  let bayiler = [];
  let elements = [].slice.call(
    document.getElementsByClassName("list-group-item")
  );

  // Iterate for elements
  let elementArray = new Iterate(elements);
  let element = null;
  while ((element = elementArray.next()) != null) {
    let bayiInfo = JSON.parse(element.getAttribute("data-info"));

    bayiler.push(bayiInfo);
  }

  // Init map to the #map element
  map = initMap();

  // Iterate for Coords
  let coordsArray = new Iterate(bayiler);

  // Iterate coords array
  let coords = null;
  while ((coords = coordsArray.next()) != null) {
    // Get coords from addres
    getLatLng(coords.adres, _coords => {
      // Set marker to the Map
      setMarkers(map, ["coords.bayiAdi", _coords[0], _coords[1], 100]);
    });
  }
});

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.

function getLatLng(adres, fn) {
  var geocoder;
  if (geocoder == undefined) {
    geocoder = new google.maps.Geocoder();
  } else {
    console.log("zaten var");
  }

  // Geocode an address.
  return geocoder.geocode(
    {
      address: adres
    },
    (result, status) => {
      if (status == "OK") {
        var lat = result[0].geometry.location.lat();
        var lng = result[0].geometry.location.lng();
        var coords = [lat, lng];
        fn(coords);
      } else {
        fn(status);
      }
    }
  );
}

function setMarkers(map, beach) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly"
  };
  var beach;
  var marker = new google.maps.Marker({
    position: { lat: beach[1], lng: beach[2] },
    map: map,
    icon: image,
    labels: 11,
    shape: shape,
    title: beach[0],
    zIndex: beach[3]
  });

  let html = `<h1>Gizli Mesaj</h1>`
  attachSecretMessage(marker, html);
  //   marker.setAttribute("id", "ddd")
  marker.addListener("click", e => {
    markerClickHandler(marker, e.latLng);
  });
}

function markerClickHandler(marker, latLng) {
  // map.setZoom(8);
  map.panTo(latLng);
  // console.log(e)
}

function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener("click", function() {
    infowindow.open(marker.get("map"), marker);
  });
}

class Iterate {
  array = [];
  i = 0;
  constructor(array) {
    this.array = [].slice.call(array);
  }

  next = () => {
    let el = this.array[this.i];
    this.i++;
    return el;
  };
}
