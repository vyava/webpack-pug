// declare var google;
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
  let MarkerObject = new Marker();
  while ((coords = coordsIterator.next()) != null) {
    // Get coords from addres
    let [lat, lng]: [number, number] = await getLatLng(coords.adres);
    // Set marker to the Map
    // coordsArray.push([lat, lng]);

    // Instance of Marker

    let marker = MarkerObject.create({ map, position: { lat, lng } });
    markerArray.push(marker);
  }

  // console.log(markerArray);
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

function markerClickHandler(marker, latLng) {
  // console.log(marker);
  map.panTo(latLng);
}

// function attachSecretMessage(marker, secretMessage) {
//   var infowindow = new google.maps.InfoWindow({
//     content: secretMessage
//   });

//   marker.addListener("click", function(e) {
//     infowindow.open(marker.get("map"), marker);
//   });

//   marker.addListener("mouseover", function() {
//     console.log(this);
//     // infowindow.open(marker.get("map"), marker);
//   });
// }

class Marker {
  DEFAULT_IMAGE = {
    url:
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };

  marker: google.maps.Marker;
  map: google.maps.Map = null;
  lastWindow: [google.maps.InfoWindow] = <any>[];
  constructor() {
    this.lastWindow.push(this.createInfoWindow("loading"));
    console.log(this.lastWindow);
  }

  public create({ map, position }) {
    // Create a marker
    this.marker = new google.maps.Marker({
      map,
      position
    });

    if (!this.map) {
      this.map = map;
    }
    // let handler = function(a,b){
    // }
    // handler.apply(this.markerClickHandler)
    let that = this;
    // Set click handler to the Marker
    this.marker.addListener("click", function(e) {
      if (that.lastWindow.length > 2) {
        that.lastWindow.map((_w, i) => (i == 1) ? _w.close() : true).shift()
        console.log(that.lastWindow)
      }
      let _window = that.createInfoWindow("mesaj", this.getPosition());
      _window.open(that.map, this);

      that.lastWindow.push(_window);

      // handler(this, "mesaj")
      // this.markerClickHandler(e, "Mesaj");
    });
  }

  // Create InfoWindow instance for marker
  public createInfoWindow(content?: string, position?: any) {
    return new google.maps.InfoWindow();
  }

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
