import Map from "./map";
import Marker from "./marker";
// declare var google;
declare var MarkerClusterer;

var map: google.maps.Map;
var elementList: [HTMLElement] = <any>[];
let lastSelectedElement: HTMLElement;


window.addEventListener("load", async () => {
  // Instance of Map
  let MapObject = new Map();
  map = MapObject.init();
  // Instance of Marker
  let MarkerObject = new Marker();
  
    

  MapObject.listen('click', function(event){
    MarkerObject.clickOutsideOfMarker(this)
  });

  // Get elementlist
  elementList = getElementList();

  let bayiler = parseBayiler(elementList);

  

  // Iterate for Coords
  let bayiIterator = new Iterate(bayiler);

  let bayi = null;

  while ((bayi = bayiIterator.next()) != null) {
    // Get coords from addres
    let [lat, lng]: [number, number] = await getLatLng(bayi.adres);

    MarkerObject.create({
      map,
      position: { lat, lng },
      unvan: bayi["unvan"],
      ruhsatNo: bayi["ruhsatNo"]
    });
  }

  // google.maps.event.addListenerOnce(map, 'tilesloaded', function(e){
  //   console.log("loaded")
  // })
  var markerCluster = new MarkerClusterer(map, MarkerObject.markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  });
});

function selectBayiFromList(ruhsatNo: string) {
  if (lastSelectedElement) {
    lastSelectedElement.classList.remove("active");
  }
  let el = document.getElementById(ruhsatNo);
  el.classList.add("active");

  lastSelectedElement = el;
}

function parseBayiler(elements) {
  let bayiler = [];
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

function getElementList() {
  return [].slice.call(document.getElementsByClassName("list-group-item"));
}

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
