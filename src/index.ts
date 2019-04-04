// import Map from "./map";

declare var mapboxgl;
declare var google;

window.addEventListener("load", e => {
  let bayiler: any[] = loadMap("map");
});

function loadMap(_element?: string) {
  let MapObject = new Map();

  let _Map = MapObject.createMap(_element);

  let elements = document.getElementsByClassName("list-group-item");

  let bayiler = [];
  // console.log(_Map.map);

  _Map.on("load", () => {});

  let _iterate = new Iterate(elements);

  let element = null;
  while ((element = _iterate.next()) != null) {
    let bayiInfo = JSON.parse(element.getAttribute("data-info"));

    MapObject.getLatLng(bayiInfo.adres, coords => {
      MapObject.insertMarker(coords);
    });

    // bayiInfo["coords"] = coords;
    bayiler.push(bayiInfo);

    element.onclick = _Map.doSoemthing;
  }

  return bayiler || [];
}

class Iterate {
  array = [];
  i = 0;
  constructor(array) {
    this.array = array;
  }

  next = () => {
    let el = this.array[this.i];
    this.i++;
    return el;
  };
}

class Map {
  API_KEY =
    "pk.eyJ1IjoiemFmZXJnZW5jIiwiYSI6ImNqZmR1MGd3MTJyMzgycm52ZmN5MG93ZWIifQ.EArl8wm-RmbkSczT76TDEw";

  private map: any;
  constructor() {
    // this.map.addLayer({
    //   id: "places",
    //   type: "symbol"
    // });
    // this.map.on("click", e => {
    //   var coordinates = e.features[0].geometry.coordinates.slice();
    //   var description = e.features[0].properties.description;
    //   // Popup init
    //   let popup = new mapboxgl.Popup({ offset: 25 }).setText("Popup");
    // });
  }

  createMap(elementId: string) {
    mapboxgl.accessToken = this.API_KEY;
    this.map = new mapboxgl.Map({
      container: elementId,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 15,
      center: [29.176843299999973, 40.90901789999999]
    });

    return this.map;
  }

  getLatLng(adres, fn) {
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
          var coords = [lng, lat];
          fn(coords);
        } else {
          fn(status);
        }
      }
    );
  }

  insertMarker(coords) {
    let element = this.createMarkerElement();

    let options = {
      // draggable : true,
      anchor: "top"
    };

    new mapboxgl.Marker(element, options)
      .setLngLat(coords)
      // .setPopup(popup)
      .addTo(this.map);
  }

  addLayer(){
    this.map.addLayer({
      
    })
  }

  createMarkerElement() {
    var el = document.createElement("a");
    el.className = "marker";
    return el;
  }
}
