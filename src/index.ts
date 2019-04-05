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

  _Map.on("load", () => {
    _Map.addLayer({
      id: "room-extrusion",
      type: "fill-extrusion",
      source: {
        // GeoJSON Data source used in vector tiles, documented at
        // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
        type: "geojson",
        data: {
          "type" : "FeatureCollection",
          "features": [
            {
              type: "Feature",
              properties: {
                level: 1,
                name: "Bird Exhibit",
                height: 0,
                base_height: 0,
                color: "orange"
              },
              geometry: {
                coordinates: [
                  [
                    [-87.618312, 41.866282],
                    [-87.61832, 41.866674],
                    [-87.618087, 41.866676],
                    // [-87.618087, 41.866661],
                    // [-87.617423, 41.86667],
                    // [-87.617416, 41.8663],
                    // [-87.618312, 41.866282]
                  ]
                ],
                type: "Polygon"
              },
              id: "06e8fa0b3f851e3ae0e1da5fc17e111e"
            }
          ]
        }
      },
      paint: {
        // See the Mapbox Style Specification for details on data expressions.
        // https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions

        // Get the fill-extrusion-color from the source 'color' property.
        "fill-extrusion-color": ["get", "color"],

        // Get fill-extrusion-height from the source 'height' property.
        "fill-extrusion-height": ["get", "height"],

        // Get fill-extrusion-base from the source 'base_height' property.
        "fill-extrusion-base": ["get", "base_height"],

        // Make extrusions slightly opaque for see through indoor walls.
        "fill-extrusion-opacity": 0.5
      }
    });

    _Map.addLayer({
      id: "clusters",
      type: "circle",
      source: "room-extrusion"
    });

    // let _iterate = new Iterate(elements);

    // let element = null;
    // while ((element = _iterate.next()) != null) {
    //   let bayiInfo = JSON.parse(element.getAttribute("data-info"));

    //   MapObject.getLatLng(bayiInfo.adres, coords => {
    //     MapObject.insertMarker(coords);
    //   });

    //   // bayiInfo["coords"] = coords;
    //   bayiler.push(bayiInfo);

    //   element.onclick = _Map.doSoemthing;
    // }

    _Map.on("click", "clusters", e => {
      let features = _Map.queryRenderedFeatures(e.point, {
        layers: ["clusters"]
      });
      console.log(features);
    });
    // MapObject.addSource();
  });

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
    this.map.addControl(new mapboxgl.NavigationControl());

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

  addSource() {
    let emptyGJ = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            "marker-color": "#7e7e7e",
            "marker-size": "large",
            "marker-symbol": "star-stroked"
          },
          geometry: {
            type: "Point",
            coordinates: [29.099864959716797, 40.96304869940295]
          }
        }
      ]
    };

    this.map.addSource("land", { type: "geojson", data: emptyGJ });

    this.map.addLayer({
      id: "landed",
      type: "fill",
      source: "bayiler",
      "source-layer": {},
      interactive: true,
      paint: {
        "fill-color": "#a89b97",
        "fill-opacity": 0.8
      }
    });
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

  createMarkerElement() {
    var el = document.createElement("a");
    el.className = "marker";
    return el;
  }
}
