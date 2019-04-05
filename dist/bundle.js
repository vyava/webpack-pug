/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// import Map from "./map";
window.addEventListener("load", function (e) {
  var bayiler = loadMap("map");
});

function loadMap(_element) {
  var MapObject = new Map();

  var _Map = MapObject.createMap(_element);

  var elements = document.getElementsByClassName("list-group-item");
  var bayiler = []; // console.log(_Map.map);

  _Map.on("load", function () {
    _Map.addLayer({
      id: "room-extrusion",
      type: "fill-extrusion",
      source: {
        // GeoJSON Data source used in vector tiles, documented at
        // https://gist.github.com/ryanbaumann/a7d970386ce59d11c16278b90dde094d
        type: "geojson",
        data: {
          "type": "FeatureCollection",
          "features": [{
            type: "Feature",
            properties: {
              level: 1,
              name: "Bird Exhibit",
              height: 0,
              base_height: 0,
              color: "orange"
            },
            geometry: {
              coordinates: [[[-87.618312, 41.866282], [-87.61832, 41.866674], [-87.618087, 41.866676]]],
              type: "Polygon"
            },
            id: "06e8fa0b3f851e3ae0e1da5fc17e111e"
          }]
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
    }); // let _iterate = new Iterate(elements);
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


    _Map.on("click", "clusters", function (e) {
      var features = _Map.queryRenderedFeatures(e.point, {
        layers: ["clusters"]
      });

      console.log(features);
    }); // MapObject.addSource();

  });

  return bayiler || [];
}

var Iterate =
/** @class */
function () {
  function Iterate(array) {
    var _this = this;

    this.array = [];
    this.i = 0;

    this.next = function () {
      var el = _this.array[_this.i];
      _this.i++;
      return el;
    };

    this.array = array;
  }

  return Iterate;
}();

var Map =
/** @class */
function () {
  function Map() {
    this.API_KEY = "pk.eyJ1IjoiemFmZXJnZW5jIiwiYSI6ImNqZmR1MGd3MTJyMzgycm52ZmN5MG93ZWIifQ.EArl8wm-RmbkSczT76TDEw"; // this.map.addLayer({
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

  Map.prototype.createMap = function (elementId) {
    mapboxgl.accessToken = this.API_KEY;
    this.map = new mapboxgl.Map({
      container: elementId,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 15,
      center: [29.176843299999973, 40.90901789999999]
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    return this.map;
  };

  Map.prototype.getLatLng = function (adres, fn) {
    var geocoder;

    if (geocoder == undefined) {
      geocoder = new google.maps.Geocoder();
    } else {
      console.log("zaten var");
    } // Geocode an address.


    return geocoder.geocode({
      address: adres
    }, function (result, status) {
      if (status == "OK") {
        var lat = result[0].geometry.location.lat();
        var lng = result[0].geometry.location.lng();
        var coords = [lng, lat];
        fn(coords);
      } else {
        fn(status);
      }
    });
  };

  Map.prototype.addSource = function () {
    var emptyGJ = {
      type: "FeatureCollection",
      features: [{
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
      }]
    };
    this.map.addSource("land", {
      type: "geojson",
      data: emptyGJ
    });
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
  };

  Map.prototype.insertMarker = function (coords) {
    var element = this.createMarkerElement();
    var options = {
      // draggable : true,
      anchor: "top"
    };
    new mapboxgl.Marker(element, options).setLngLat(coords) // .setPopup(popup)
    .addTo(this.map);
  };

  Map.prototype.createMarkerElement = function () {
    var el = document.createElement("a");
    el.className = "marker";
    return el;
  };

  return Map;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUtBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxhQUFDO0FBQy9CLE1BQUksT0FBTyxHQUFVLE9BQU8sQ0FBQyxLQUFELENBQTVCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTLE9BQVQsQ0FBaUIsUUFBakIsRUFBa0M7QUFDaEMsTUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFKLEVBQWhCOztBQUVBLE1BQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFWLENBQW9CLFFBQXBCLENBQVg7O0FBRUEsTUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLHNCQUFULENBQWdDLGlCQUFoQyxDQUFmO0FBRUEsTUFBSSxPQUFPLEdBQUcsRUFB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T0FEUTtBQUZFLEtBQWQ7QUFrQkEsU0FBSyxHQUFMLENBQVMsU0FBVCxDQUFtQixNQUFuQixFQUEyQjtBQUFFLFVBQUksRUFBRSxTQUFSO0FBQW1CLFVBQUksRUFBRTtBQUF6QixLQUEzQjtBQUVBLFNBQUssR0FBTCxDQUFTLFFBQVQsQ0FBa0I7QUFDaEIsUUFBRSxFQUFFLFFBRFk7QUFFaEIsVUFBSSxFQUFFLE1BRlU7QUFHaEIsWUFBTSxFQUFFLFNBSFE7QUFJaEIsc0JBQWdCLEVBSkE7QUFLaEIsaUJBQVcsRUFBRSxJQUxHO0FBTWhCLFdBQUssRUFBRTtBQUNMLHNCQUFjLFNBRFQ7QUFFTCx3QkFBZ0I7QUFGWDtBQU5TLEtBQWxCO0FBV0QsR0FoQ0Q7O0FBa0NBLHlDQUFhLE1BQWIsRUFBbUI7QUFDakIsUUFBSSxPQUFPLEdBQUcsS0FBSyxtQkFBTCxFQUFkO0FBRUEsUUFBSSxPQUFPLEdBQUc7QUFDWjtBQUNBLFlBQU0sRUFBRTtBQUZJLEtBQWQ7QUFLQSxRQUFJLFFBQVEsQ0FBQyxNQUFiLENBQW9CLE9BQXBCLEVBQTZCLE9BQTdCLEVBQ0csU0FESCxDQUNhLE1BRGIsRUFFRTtBQUZGLEtBR0csS0FISCxDQUdTLEtBQUssR0FIZDtBQUlELEdBWkQ7O0FBY0E7QUFDRSxRQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixHQUF2QixDQUFUO0FBQ0EsTUFBRSxDQUFDLFNBQUgsR0FBZSxRQUFmO0FBQ0EsV0FBTyxFQUFQO0FBQ0QsR0FKRDs7QUFLRjtBQUFDLENBOUdELEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBpbXBvcnQgTWFwIGZyb20gXCIuL21hcFwiO1xyXG5cclxuZGVjbGFyZSB2YXIgbWFwYm94Z2w7XHJcbmRlY2xhcmUgdmFyIGdvb2dsZTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBlID0+IHtcclxuICBsZXQgYmF5aWxlcjogYW55W10gPSBsb2FkTWFwKFwibWFwXCIpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRNYXAoX2VsZW1lbnQ/OiBzdHJpbmcpIHtcclxuICBsZXQgTWFwT2JqZWN0ID0gbmV3IE1hcCgpO1xyXG5cclxuICBsZXQgX01hcCA9IE1hcE9iamVjdC5jcmVhdGVNYXAoX2VsZW1lbnQpO1xyXG5cclxuICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdC1ncm91cC1pdGVtXCIpO1xyXG5cclxuICBsZXQgYmF5aWxlciA9IFtdO1xyXG4gIC8vIGNvbnNvbGUubG9nKF9NYXAubWFwKTtcclxuXHJcbiAgX01hcC5vbihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgX01hcC5hZGRMYXllcih7XHJcbiAgICAgIGlkOiBcInJvb20tZXh0cnVzaW9uXCIsXHJcbiAgICAgIHR5cGU6IFwiZmlsbC1leHRydXNpb25cIixcclxuICAgICAgc291cmNlOiB7XHJcbiAgICAgICAgLy8gR2VvSlNPTiBEYXRhIHNvdXJjZSB1c2VkIGluIHZlY3RvciB0aWxlcywgZG9jdW1lbnRlZCBhdFxyXG4gICAgICAgIC8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3J5YW5iYXVtYW5uL2E3ZDk3MDM4NmNlNTlkMTFjMTYyNzhiOTBkZGUwOTRkXHJcbiAgICAgICAgdHlwZTogXCJnZW9qc29uXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgXCJ0eXBlXCIgOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXHJcbiAgICAgICAgICBcImZlYXR1cmVzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiRmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGxldmVsOiAxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCaXJkIEV4aGliaXRcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcclxuICAgICAgICAgICAgICAgIGJhc2VfaGVpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGdlb21ldHJ5OiB7XHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogW1xyXG4gICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgWy04Ny42MTgzMTIsIDQxLjg2NjI4Ml0sXHJcbiAgICAgICAgICAgICAgICAgICAgWy04Ny42MTgzMiwgNDEuODY2Njc0XSxcclxuICAgICAgICAgICAgICAgICAgICBbLTg3LjYxODA4NywgNDEuODY2Njc2XSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBbLTg3LjYxODA4NywgNDEuODY2NjYxXSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBbLTg3LjYxNzQyMywgNDEuODY2NjddLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFstODcuNjE3NDE2LCA0MS44NjYzXSxcclxuICAgICAgICAgICAgICAgICAgICAvLyBbLTg3LjYxODMxMiwgNDEuODY2MjgyXVxyXG4gICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQb2x5Z29uXCJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGlkOiBcIjA2ZThmYTBiM2Y4NTFlM2FlMGUxZGE1ZmMxN2UxMTFlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcGFpbnQ6IHtcclxuICAgICAgICAvLyBTZWUgdGhlIE1hcGJveCBTdHlsZSBTcGVjaWZpY2F0aW9uIGZvciBkZXRhaWxzIG9uIGRhdGEgZXhwcmVzc2lvbnMuXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL3N0eWxlLXNwZWMvI2V4cHJlc3Npb25zXHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgZmlsbC1leHRydXNpb24tY29sb3IgZnJvbSB0aGUgc291cmNlICdjb2xvcicgcHJvcGVydHkuXHJcbiAgICAgICAgXCJmaWxsLWV4dHJ1c2lvbi1jb2xvclwiOiBbXCJnZXRcIiwgXCJjb2xvclwiXSxcclxuXHJcbiAgICAgICAgLy8gR2V0IGZpbGwtZXh0cnVzaW9uLWhlaWdodCBmcm9tIHRoZSBzb3VyY2UgJ2hlaWdodCcgcHJvcGVydHkuXHJcbiAgICAgICAgXCJmaWxsLWV4dHJ1c2lvbi1oZWlnaHRcIjogW1wiZ2V0XCIsIFwiaGVpZ2h0XCJdLFxyXG5cclxuICAgICAgICAvLyBHZXQgZmlsbC1leHRydXNpb24tYmFzZSBmcm9tIHRoZSBzb3VyY2UgJ2Jhc2VfaGVpZ2h0JyBwcm9wZXJ0eS5cclxuICAgICAgICBcImZpbGwtZXh0cnVzaW9uLWJhc2VcIjogW1wiZ2V0XCIsIFwiYmFzZV9oZWlnaHRcIl0sXHJcblxyXG4gICAgICAgIC8vIE1ha2UgZXh0cnVzaW9ucyBzbGlnaHRseSBvcGFxdWUgZm9yIHNlZSB0aHJvdWdoIGluZG9vciB3YWxscy5cclxuICAgICAgICBcImZpbGwtZXh0cnVzaW9uLW9wYWNpdHlcIjogMC41XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIF9NYXAuYWRkTGF5ZXIoe1xyXG4gICAgICBpZDogXCJjbHVzdGVyc1wiLFxyXG4gICAgICB0eXBlOiBcImNpcmNsZVwiLFxyXG4gICAgICBzb3VyY2U6IFwicm9vbS1leHRydXNpb25cIlxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbGV0IF9pdGVyYXRlID0gbmV3IEl0ZXJhdGUoZWxlbWVudHMpO1xyXG5cclxuICAgIC8vIGxldCBlbGVtZW50ID0gbnVsbDtcclxuICAgIC8vIHdoaWxlICgoZWxlbWVudCA9IF9pdGVyYXRlLm5leHQoKSkgIT0gbnVsbCkge1xyXG4gICAgLy8gICBsZXQgYmF5aUluZm8gPSBKU09OLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmZvXCIpKTtcclxuXHJcbiAgICAvLyAgIE1hcE9iamVjdC5nZXRMYXRMbmcoYmF5aUluZm8uYWRyZXMsIGNvb3JkcyA9PiB7XHJcbiAgICAvLyAgICAgTWFwT2JqZWN0Lmluc2VydE1hcmtlcihjb29yZHMpO1xyXG4gICAgLy8gICB9KTtcclxuXHJcbiAgICAvLyAgIC8vIGJheWlJbmZvW1wiY29vcmRzXCJdID0gY29vcmRzO1xyXG4gICAgLy8gICBiYXlpbGVyLnB1c2goYmF5aUluZm8pO1xyXG5cclxuICAgIC8vICAgZWxlbWVudC5vbmNsaWNrID0gX01hcC5kb1NvZW10aGluZztcclxuICAgIC8vIH1cclxuXHJcbiAgICBfTWFwLm9uKFwiY2xpY2tcIiwgXCJjbHVzdGVyc1wiLCBlID0+IHtcclxuICAgICAgbGV0IGZlYXR1cmVzID0gX01hcC5xdWVyeVJlbmRlcmVkRmVhdHVyZXMoZS5wb2ludCwge1xyXG4gICAgICAgIGxheWVyczogW1wiY2x1c3RlcnNcIl1cclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZlYXR1cmVzKTtcclxuICAgIH0pO1xyXG4gICAgLy8gTWFwT2JqZWN0LmFkZFNvdXJjZSgpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gYmF5aWxlciB8fCBbXTtcclxufVxyXG5cclxuY2xhc3MgSXRlcmF0ZSB7XHJcbiAgYXJyYXkgPSBbXTtcclxuICBpID0gMDtcclxuICBjb25zdHJ1Y3RvcihhcnJheSkge1xyXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xyXG4gIH1cclxuXHJcbiAgbmV4dCA9ICgpID0+IHtcclxuICAgIGxldCBlbCA9IHRoaXMuYXJyYXlbdGhpcy5pXTtcclxuICAgIHRoaXMuaSsrO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH07XHJcbn1cclxuXHJcbmNsYXNzIE1hcCB7XHJcbiAgQVBJX0tFWSA9XHJcbiAgICBcInBrLmV5SjFJam9pZW1GbVpYSm5aVzVqSWl3aVlTSTZJbU5xWm1SMU1HZDNNVEp5TXpneWNtNTJabU41TUc5M1pXSWlmUS5FQXJsOHdtLVJtYmtTY3pUNzZUREV3XCI7XHJcblxyXG4gIHByaXZhdGUgbWFwOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLm1hcC5hZGRMYXllcih7XHJcbiAgICAvLyAgIGlkOiBcInBsYWNlc1wiLFxyXG4gICAgLy8gICB0eXBlOiBcInN5bWJvbFwiXHJcbiAgICAvLyB9KTtcclxuICAgIC8vIHRoaXMubWFwLm9uKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAvLyAgIHZhciBjb29yZGluYXRlcyA9IGUuZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMuc2xpY2UoKTtcclxuICAgIC8vICAgdmFyIGRlc2NyaXB0aW9uID0gZS5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLmRlc2NyaXB0aW9uO1xyXG4gICAgLy8gICAvLyBQb3B1cCBpbml0XHJcbiAgICAvLyAgIGxldCBwb3B1cCA9IG5ldyBtYXBib3hnbC5Qb3B1cCh7IG9mZnNldDogMjUgfSkuc2V0VGV4dChcIlBvcHVwXCIpO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNYXAoZWxlbWVudElkOiBzdHJpbmcpIHtcclxuICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gdGhpcy5BUElfS0VZO1xyXG4gICAgdGhpcy5tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICAgICAgY29udGFpbmVyOiBlbGVtZW50SWQsXHJcbiAgICAgIHN0eWxlOiBcIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTFcIixcclxuICAgICAgem9vbTogMTUsXHJcbiAgICAgIGNlbnRlcjogWzI5LjE3Njg0MzI5OTk5OTk3MywgNDAuOTA5MDE3ODk5OTk5OTldXHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFwLmFkZENvbnRyb2wobmV3IG1hcGJveGdsLk5hdmlnYXRpb25Db250cm9sKCkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLm1hcDtcclxuICB9XHJcblxyXG4gIGdldExhdExuZyhhZHJlcywgZm4pIHtcclxuICAgIHZhciBnZW9jb2RlcjtcclxuICAgIGlmIChnZW9jb2RlciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiemF0ZW4gdmFyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlb2NvZGUgYW4gYWRkcmVzcy5cclxuICAgIHJldHVybiBnZW9jb2Rlci5nZW9jb2RlKFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogYWRyZXNcclxuICAgICAgfSxcclxuICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PSBcIk9LXCIpIHtcclxuICAgICAgICAgIHZhciBsYXQgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XHJcbiAgICAgICAgICB2YXIgbG5nID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgICAgdmFyIGNvb3JkcyA9IFtsbmcsIGxhdF07XHJcbiAgICAgICAgICBmbihjb29yZHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBmbihzdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZFNvdXJjZSgpIHtcclxuICAgIGxldCBlbXB0eUdKID0ge1xyXG4gICAgICB0eXBlOiBcIkZlYXR1cmVDb2xsZWN0aW9uXCIsXHJcbiAgICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdHlwZTogXCJGZWF0dXJlXCIsXHJcbiAgICAgICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgICAgIFwibWFya2VyLWNvbG9yXCI6IFwiIzdlN2U3ZVwiLFxyXG4gICAgICAgICAgICBcIm1hcmtlci1zaXplXCI6IFwibGFyZ2VcIixcclxuICAgICAgICAgICAgXCJtYXJrZXItc3ltYm9sXCI6IFwic3Rhci1zdHJva2VkXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBnZW9tZXRyeToge1xyXG4gICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbMjkuMDk5ODY0OTU5NzE2Nzk3LCA0MC45NjMwNDg2OTk0MDI5NV1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5tYXAuYWRkU291cmNlKFwibGFuZFwiLCB7IHR5cGU6IFwiZ2VvanNvblwiLCBkYXRhOiBlbXB0eUdKIH0pO1xyXG5cclxuICAgIHRoaXMubWFwLmFkZExheWVyKHtcclxuICAgICAgaWQ6IFwibGFuZGVkXCIsXHJcbiAgICAgIHR5cGU6IFwiZmlsbFwiLFxyXG4gICAgICBzb3VyY2U6IFwiYmF5aWxlclwiLFxyXG4gICAgICBcInNvdXJjZS1sYXllclwiOiB7fSxcclxuICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXHJcbiAgICAgIHBhaW50OiB7XHJcbiAgICAgICAgXCJmaWxsLWNvbG9yXCI6IFwiI2E4OWI5N1wiLFxyXG4gICAgICAgIFwiZmlsbC1vcGFjaXR5XCI6IDAuOFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGluc2VydE1hcmtlcihjb29yZHMpIHtcclxuICAgIGxldCBlbGVtZW50ID0gdGhpcy5jcmVhdGVNYXJrZXJFbGVtZW50KCk7XHJcblxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIC8vIGRyYWdnYWJsZSA6IHRydWUsXHJcbiAgICAgIGFuY2hvcjogXCJ0b3BcIlxyXG4gICAgfTtcclxuXHJcbiAgICBuZXcgbWFwYm94Z2wuTWFya2VyKGVsZW1lbnQsIG9wdGlvbnMpXHJcbiAgICAgIC5zZXRMbmdMYXQoY29vcmRzKVxyXG4gICAgICAvLyAuc2V0UG9wdXAocG9wdXApXHJcbiAgICAgIC5hZGRUbyh0aGlzLm1hcCk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNYXJrZXJFbGVtZW50KCkge1xyXG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBlbC5jbGFzc05hbWUgPSBcIm1hcmtlclwiO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9