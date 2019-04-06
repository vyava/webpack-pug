declare var google;
declare var MarkerClusterer;
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 40.90791, lng: 29.17695 }
  });

  map.data.loadGeoJson(
    "https://storage.googleapis.com/mapsdevsite/json/google.json"
  );
  return map;
}

var map;

window.addEventListener("load", async () => {
  // Get elementlist
  let bayiler = getElementList();

  // Init map to the #map element
  map = initMap();

  // Iterate for Coords
  let coordsIterator = new Iterate(bayiler);
  // Iterate coords array
  // let coordsArray = [];
  let markerArray = [];
  let coords = null;
  while ((coords = coordsIterator.next()) != null) {
    // Get coords from addres
    let [lat, lng]: [number, number] = await getLatLng(coords.adres);
    // Set marker to the Map
    // coordsArray.push([lat, lng]);
    let marker = setMarkers(map, ["coords.bayiAdi", lat, lng, 100]);
    markerArray.push(marker);
  }

  console.log(markerArray);
  // console.log(coordsArray);

  var markerCluster = new MarkerClusterer(map, markerArray, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  });
});

function getElementList() {
  let bayiler = [];
  let elements = [].slice.call(
    document.getElementsByClassName("list-group-item")
  );

  // Iterate instance
  let elementArray = new Iterate(elements);
  let element = null;

  // Iterate for elements
  while ((element = elementArray.next()) != null) {
    let bayiInfo = JSON.parse(element.getAttribute("data-info"));

    bayiler.push(bayiInfo);
  }

  return bayiler;
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.

function getLatLng(adres): Promise<any> {
  return new Promise((resolve, reject) => {
    var geocoder;
    if (geocoder == undefined) {
      geocoder = new google.maps.Geocoder();
    } else {
      console.log("zaten var");
    }

    // Geocode an address.
    geocoder.geocode(
      {
        address: adres
      },
      (result, status) => {
        if (status == "OK") {
          var lat = result[0].geometry.location.lat();
          var lng = result[0].geometry.location.lng();
          var coords: number[] = [lat, lng];
          resolve(coords);
        } else {
          reject(status);
        }
      }
    );
  });
}

function setMarkers(map, [title, lat, lng, index]) {
  // Adds markers to the map.

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

  // var shape = {
  //   coords: [1, 1, 1, 20, 18, 20, 18, 1],
  //   type: "poly"
  // };
  var marker = new google.maps.Marker({
    position: { lat, lng },
    map: map,
    // icon: {
    //   path: google.maps.SymbolPath.CIRCLE, //or any others
    //   scale: 0
    // },
    labels: {
      fontFamily: "FontAwesome",
      text: "\uf140", //code for font-awesome icon
      fontSize: "15px",
      color: "blue"
    },
    // shape: shape,
    id: "id",
    // title: title,
    // zIndex: index
  });

  let html = `<h1>Gizli Mesaj</h1>`;

  attachSecretMessage(marker, html);
  //   marker.setAttribute("id", "ddd")

  // marker.set("id", 12)
  marker.addListener("click", e => {
    markerClickHandler(marker, e.latLng);
  });

  return marker;
}

function markerClickHandler(marker, latLng) {
  console.log(marker);
  map.panTo(latLng);
}

function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });

  marker.addListener("click", function() {
    infowindow.open(marker.get("map"), marker);
  });

  marker.addListener("mouseover", function() {
    console.log(this);
    // infowindow.open(marker.get("map"), marker);
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
