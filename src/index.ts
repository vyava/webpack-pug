// import Map from "./map";
window.addEventListener("load", e => {
  let bayiler: any[] = loadMap("map");
});

function loadMap(_element?: string) {
  let _map = new Map(_element);
  let elements = document.getElementsByClassName("list-group-item");

  let bayiler = [];

  let _iterate = new Iterate(elements);

  let element = null;
  while ((element = _iterate.next()) != null) {
    let bayiInfo = JSON.parse(element.getAttribute("data-info"));

    _map.getLatLng(bayiInfo.adres, coords => {
      _map.insertMarker(coords);
    });

    // bayiInfo["coords"] = coords;
    bayiler.push(bayiInfo);

    element.onclick = _map.doSoemthing;
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


declare var mapboxgl;
declare var google;

class Map {
    API_KEY =
      "pk.eyJ1IjoiemFmZXJnZW5jIiwiYSI6ImNqZmR1MGd3MTJyMzgycm52ZmN5MG93ZWIifQ.EArl8wm-RmbkSczT76TDEw";
  
    public map : any;
    constructor(elementId : string) {
      mapboxgl.accessToken = this.API_KEY;
      this.map = new mapboxgl.Map({
        container: elementId,
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 15,
        center: [29.176843299999973, 40.90901789999999]
      });
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
  
  //   mark(result, status) {
  //     if (status != "OK") {
  //       console.log("hata");
  //     } else {
  //       this.insertMarker(coords);
  //     }
  //   }
  
    insertMarker(coords) {
      var element = this.createMarkerElement("marker");
  
      new mapboxgl.Marker(element).setLngLat(coords).addTo(this.map);
    };
  
    createMarkerElement(className) {
      var el = document.createElement("a");
      el.addEventListener("click", (e) => {
        console.log(e.target)
      })
      el.className = className;
      return el;
    };
  
    addLayer(layer) {
      this.map.addLayer(layer);
    }
    
    doSoemthing(e) {
      console.log(e.target);
    }
  }