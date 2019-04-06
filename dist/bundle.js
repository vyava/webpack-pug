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

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 40.90791,
      lng: 29.17695
    }
  });
  map.data.loadGeoJson("https://storage.googleapis.com/mapsdevsite/json/google.json");
  return map;
}

var map;
window.addEventListener("load", () => __awaiter(this, void 0, void 0, function* () {
  // Get elementlist
  let bayiler = getElementList(); // Init map to the #map element

  map = initMap(); // Iterate for Coords

  let coordsIterator = new Iterate(bayiler); // Iterate coords array
  // let coordsArray = [];

  let markerArray = [];
  let coords = null;

  while ((coords = coordsIterator.next()) != null) {
    // Get coords from addres
    let [lat, lng] = yield getLatLng(coords.adres); // Set marker to the Map
    // coordsArray.push([lat, lng]);

    let marker = setMarkers(map, ["coords.bayiAdi", lat, lng, 100]);
    markerArray.push(marker);
  }

  console.log(markerArray); // console.log(coordsArray);

  var markerCluster = new MarkerClusterer(map, markerArray, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  });
}));

function getElementList() {
  let bayiler = [];
  let elements = [].slice.call(document.getElementsByClassName("list-group-item")); // Iterate instance

  let elementArray = new Iterate(elements);
  let element = null; // Iterate for elements

  while ((element = elementArray.next()) != null) {
    let bayiInfo = JSON.parse(element.getAttribute("data-info"));
    bayiler.push(bayiInfo);
  }

  return bayiler;
} // Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.


function getLatLng(adres) {
  return new Promise((resolve, reject) => {
    var geocoder;

    if (geocoder == undefined) {
      geocoder = new google.maps.Geocoder();
    } else {
      console.log("zaten var");
    } // Geocode an address.


    geocoder.geocode({
      address: adres
    }, (result, status) => {
      if (status == "OK") {
        var lat = result[0].geometry.location.lat();
        var lng = result[0].geometry.location.lng();
        var coords = [lat, lng];
        resolve(coords);
      } else {
        reject(status);
      }
    });
  });
}

function setMarkers(map, [title, lat, lng, index]) {
  // Adds markers to the map.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  }; // var shape = {
  //   coords: [1, 1, 1, 20, 18, 20, 18, 1],
  //   type: "poly"
  // };

  var marker = new google.maps.Marker({
    position: {
      lat,
      lng
    },
    map: map,
    // icon: {
    //   path: google.maps.SymbolPath.CIRCLE, //or any others
    //   scale: 0
    // },
    labels: {
      fontFamily: "FontAwesome",
      text: "\uf140",
      fontSize: "15px",
      color: "blue"
    },
    // shape: shape,
    id: "id"
  });
  let html = `<h1>Gizli Mesaj</h1>`;
  attachSecretMessage(marker, html); //   marker.setAttribute("id", "ddd")
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
  marker.addListener("click", function () {
    infowindow.open(marker.get("map"), marker);
  });
  marker.addListener("mouseover", function () {
    console.log(this); // infowindow.open(marker.get("map"), marker);
  });
}

class Iterate {
  constructor(array) {
    this.array = [];
    this.i = 0;

    this.next = () => {
      let el = this.array[this.i];
      this.i++;
      return el;
    };

    this.array = [].slice.call(array);
  }

}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkEsU0FBUyxPQUFULEdBQWdCO0FBQ2QsTUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQWhCLENBQW9CLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLENBQXBCLEVBQW9EO0FBQzVELFFBQUksRUFBRSxFQURzRDtBQUU1RCxVQUFNLEVBQUU7QUFBRSxTQUFHLEVBQUUsUUFBUDtBQUFpQixTQUFHLEVBQUU7QUFBdEI7QUFGb0QsR0FBcEQsQ0FBVjtBQUtBLEtBQUcsQ0FBQyxJQUFKLENBQVMsV0FBVCxDQUNFLDZEQURGO0FBR0EsU0FBTyxHQUFQO0FBQ0Q7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QUFYLENBQWxCO0FBQ0QsR0FGRDtBQUlBLFNBQU8sTUFBUDtBQUNEOztBQUVELFNBQVMsa0JBQVQsQ0FBNEIsTUFBNUIsRUFBb0MsTUFBcEMsRUFBMEM7QUFDeEMsU0FBTyxDQUFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsS0FBRyxDQUFDLEtBQUosQ0FBVSxNQUFWO0FBQ0Q7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixNQUE3QixFQUFxQyxhQUFyQyxFQUFrRDtBQUNoRCxNQUFJLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFQLENBQVksVUFBaEIsQ0FBMkI7QUFDMUMsV0FBTyxFQUFFO0FBRGlDLEdBQTNCLENBQWpCO0FBSUEsUUFBTSxDQUFDLFdBQVAsQ0FBbUIsT0FBbkIsRUFBNEI7QUFDMUIsY0FBVSxDQUFDLElBQVgsQ0FBZ0IsTUFBTSxDQUFDLEdBQVAsQ0FBVyxLQUFYLENBQWhCLEVBQW1DLE1BQW5DO0FBQ0QsR0FGRDtBQUlBLFFBQU0sQ0FBQyxXQUFQLENBQW1CLFdBQW5CLEVBQWdDO0FBQzlCLFdBQU8sQ0FBQyxHQUFSLENBQVksSUFBWixFQUQ4QixDQUU5QjtBQUNELEdBSEQ7QUFJRDs7QUFFRCxNQUFNLE9BQU4sQ0FBYTtBQUdYLGNBQVksS0FBWixFQUFpQjtBQUZqQixpQkFBUSxFQUFSO0FBQ0EsYUFBSSxDQUFKOztBQUtBLGdCQUFPLE1BQUs7QUFDVixVQUFJLEVBQUUsR0FBRyxLQUFLLEtBQUwsQ0FBVyxLQUFLLENBQWhCLENBQVQ7QUFDQSxXQUFLLENBQUw7QUFDQSxhQUFPLEVBQVA7QUFDRCxLQUpEOztBQUhFLFNBQUssS0FBTCxHQUFhLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxLQUFkLENBQWI7QUFDRDs7QUFMVSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZGVjbGFyZSB2YXIgZ29vZ2xlO1xyXG5kZWNsYXJlIHZhciBNYXJrZXJDbHVzdGVyZXI7XHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcclxuICAgIHpvb206IDEwLFxyXG4gICAgY2VudGVyOiB7IGxhdDogNDAuOTA3OTEsIGxuZzogMjkuMTc2OTUgfVxyXG4gIH0pO1xyXG5cclxuICBtYXAuZGF0YS5sb2FkR2VvSnNvbihcclxuICAgIFwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL21hcHNkZXZzaXRlL2pzb24vZ29vZ2xlLmpzb25cIlxyXG4gICk7XHJcbiAgcmV0dXJuIG1hcDtcclxufVxyXG5cclxudmFyIG1hcDtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgLy8gR2V0IGVsZW1lbnRsaXN0XHJcbiAgbGV0IGJheWlsZXIgPSBnZXRFbGVtZW50TGlzdCgpO1xyXG5cclxuICAvLyBJbml0IG1hcCB0byB0aGUgI21hcCBlbGVtZW50XHJcbiAgbWFwID0gaW5pdE1hcCgpO1xyXG5cclxuICAvLyBJdGVyYXRlIGZvciBDb29yZHNcclxuICBsZXQgY29vcmRzSXRlcmF0b3IgPSBuZXcgSXRlcmF0ZShiYXlpbGVyKTtcclxuICAvLyBJdGVyYXRlIGNvb3JkcyBhcnJheVxyXG4gIC8vIGxldCBjb29yZHNBcnJheSA9IFtdO1xyXG4gIGxldCBtYXJrZXJBcnJheSA9IFtdO1xyXG4gIGxldCBjb29yZHMgPSBudWxsO1xyXG4gIHdoaWxlICgoY29vcmRzID0gY29vcmRzSXRlcmF0b3IubmV4dCgpKSAhPSBudWxsKSB7XHJcbiAgICAvLyBHZXQgY29vcmRzIGZyb20gYWRkcmVzXHJcbiAgICBsZXQgW2xhdCwgbG5nXTogW251bWJlciwgbnVtYmVyXSA9IGF3YWl0IGdldExhdExuZyhjb29yZHMuYWRyZXMpO1xyXG4gICAgLy8gU2V0IG1hcmtlciB0byB0aGUgTWFwXHJcbiAgICAvLyBjb29yZHNBcnJheS5wdXNoKFtsYXQsIGxuZ10pO1xyXG4gICAgbGV0IG1hcmtlciA9IHNldE1hcmtlcnMobWFwLCBbXCJjb29yZHMuYmF5aUFkaVwiLCBsYXQsIGxuZywgMTAwXSk7XHJcbiAgICBtYXJrZXJBcnJheS5wdXNoKG1hcmtlcik7XHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhtYXJrZXJBcnJheSk7XHJcbiAgLy8gY29uc29sZS5sb2coY29vcmRzQXJyYXkpO1xyXG5cclxuICB2YXIgbWFya2VyQ2x1c3RlciA9IG5ldyBNYXJrZXJDbHVzdGVyZXIobWFwLCBtYXJrZXJBcnJheSwge1xyXG4gICAgaW1hZ2VQYXRoOlxyXG4gICAgICBcImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2V4YW1wbGVzL21hcmtlcmNsdXN0ZXJlci9tXCJcclxuICB9KTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRFbGVtZW50TGlzdCgpIHtcclxuICBsZXQgYmF5aWxlciA9IFtdO1xyXG4gIGxldCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdC1ncm91cC1pdGVtXCIpXHJcbiAgKTtcclxuXHJcbiAgLy8gSXRlcmF0ZSBpbnN0YW5jZVxyXG4gIGxldCBlbGVtZW50QXJyYXkgPSBuZXcgSXRlcmF0ZShlbGVtZW50cyk7XHJcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAvLyBJdGVyYXRlIGZvciBlbGVtZW50c1xyXG4gIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnRBcnJheS5uZXh0KCkpICE9IG51bGwpIHtcclxuICAgIGxldCBiYXlpSW5mbyA9IEpTT04ucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZm9cIikpO1xyXG5cclxuICAgIGJheWlsZXIucHVzaChiYXlpSW5mbyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYmF5aWxlcjtcclxufVxyXG5cclxuLy8gRGF0YSBmb3IgdGhlIG1hcmtlcnMgY29uc2lzdGluZyBvZiBhIG5hbWUsIGEgTGF0TG5nIGFuZCBhIHpJbmRleCBmb3IgdGhlXHJcbi8vIG9yZGVyIGluIHdoaWNoIHRoZXNlIG1hcmtlcnMgc2hvdWxkIGRpc3BsYXkgb24gdG9wIG9mIGVhY2ggb3RoZXIuXHJcblxyXG5mdW5jdGlvbiBnZXRMYXRMbmcoYWRyZXMpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB2YXIgZ2VvY29kZXI7XHJcbiAgICBpZiAoZ2VvY29kZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInphdGVuIHZhclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW9jb2RlIGFuIGFkZHJlc3MuXHJcbiAgICBnZW9jb2Rlci5nZW9jb2RlKFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogYWRyZXNcclxuICAgICAgfSxcclxuICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PSBcIk9LXCIpIHtcclxuICAgICAgICAgIHZhciBsYXQgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XHJcbiAgICAgICAgICB2YXIgbG5nID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgICAgdmFyIGNvb3JkczogbnVtYmVyW10gPSBbbGF0LCBsbmddO1xyXG4gICAgICAgICAgcmVzb2x2ZShjb29yZHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3Qoc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE1hcmtlcnMobWFwLCBbdGl0bGUsIGxhdCwgbG5nLCBpbmRleF0pIHtcclxuICAvLyBBZGRzIG1hcmtlcnMgdG8gdGhlIG1hcC5cclxuXHJcbiAgLy8gT3JpZ2lucywgYW5jaG9yIHBvc2l0aW9ucyBhbmQgY29vcmRpbmF0ZXMgb2YgdGhlIG1hcmtlciBpbmNyZWFzZSBpbiB0aGUgWFxyXG4gIC8vIGRpcmVjdGlvbiB0byB0aGUgcmlnaHQgYW5kIGluIHRoZSBZIGRpcmVjdGlvbiBkb3duLlxyXG4gIHZhciBpbWFnZSA9IHtcclxuICAgIHVybDpcclxuICAgICAgXCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9mdWxsL2ltYWdlcy9iZWFjaGZsYWcucG5nXCIsXHJcbiAgICAvLyBUaGlzIG1hcmtlciBpcyAyMCBwaXhlbHMgd2lkZSBieSAzMiBwaXhlbHMgaGlnaC5cclxuICAgIHNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDIwLCAzMiksXHJcbiAgICAvLyBUaGUgb3JpZ2luIGZvciB0aGlzIGltYWdlIGlzICgwLCAwKS5cclxuICAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxyXG4gICAgLy8gVGhlIGFuY2hvciBmb3IgdGhpcyBpbWFnZSBpcyB0aGUgYmFzZSBvZiB0aGUgZmxhZ3BvbGUgYXQgKDAsIDMyKS5cclxuICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDMyKVxyXG4gIH07XHJcblxyXG4gIC8vIHZhciBzaGFwZSA9IHtcclxuICAvLyAgIGNvb3JkczogWzEsIDEsIDEsIDIwLCAxOCwgMjAsIDE4LCAxXSxcclxuICAvLyAgIHR5cGU6IFwicG9seVwiXHJcbiAgLy8gfTtcclxuICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICBwb3NpdGlvbjogeyBsYXQsIGxuZyB9LFxyXG4gICAgbWFwOiBtYXAsXHJcbiAgICAvLyBpY29uOiB7XHJcbiAgICAvLyAgIHBhdGg6IGdvb2dsZS5tYXBzLlN5bWJvbFBhdGguQ0lSQ0xFLCAvL29yIGFueSBvdGhlcnNcclxuICAgIC8vICAgc2NhbGU6IDBcclxuICAgIC8vIH0sXHJcbiAgICBsYWJlbHM6IHtcclxuICAgICAgZm9udEZhbWlseTogXCJGb250QXdlc29tZVwiLFxyXG4gICAgICB0ZXh0OiBcIlxcdWYxNDBcIiwgLy9jb2RlIGZvciBmb250LWF3ZXNvbWUgaWNvblxyXG4gICAgICBmb250U2l6ZTogXCIxNXB4XCIsXHJcbiAgICAgIGNvbG9yOiBcImJsdWVcIlxyXG4gICAgfSxcclxuICAgIC8vIHNoYXBlOiBzaGFwZSxcclxuICAgIGlkOiBcImlkXCIsXHJcbiAgICAvLyB0aXRsZTogdGl0bGUsXHJcbiAgICAvLyB6SW5kZXg6IGluZGV4XHJcbiAgfSk7XHJcblxyXG4gIGxldCBodG1sID0gYDxoMT5HaXpsaSBNZXNhajwvaDE+YDtcclxuXHJcbiAgYXR0YWNoU2VjcmV0TWVzc2FnZShtYXJrZXIsIGh0bWwpO1xyXG4gIC8vICAgbWFya2VyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGRkXCIpXHJcblxyXG4gIC8vIG1hcmtlci5zZXQoXCJpZFwiLCAxMilcclxuICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcclxuICAgIG1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIsIGUubGF0TG5nKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG1hcmtlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciwgbGF0TG5nKSB7XHJcbiAgY29uc29sZS5sb2cobWFya2VyKTtcclxuICBtYXAucGFuVG8obGF0TG5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXR0YWNoU2VjcmV0TWVzc2FnZShtYXJrZXIsIHNlY3JldE1lc3NhZ2UpIHtcclxuICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuICAgIGNvbnRlbnQ6IHNlY3JldE1lc3NhZ2VcclxuICB9KTtcclxuXHJcbiAgbWFya2VyLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpbmZvd2luZG93Lm9wZW4obWFya2VyLmdldChcIm1hcFwiKSwgbWFya2VyKTtcclxuICB9KTtcclxuXHJcbiAgbWFya2VyLmFkZExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAvLyBpbmZvd2luZG93Lm9wZW4obWFya2VyLmdldChcIm1hcFwiKSwgbWFya2VyKTtcclxuICB9KTtcclxufVxyXG5cclxuY2xhc3MgSXRlcmF0ZSB7XHJcbiAgYXJyYXkgPSBbXTtcclxuICBpID0gMDtcclxuICBjb25zdHJ1Y3RvcihhcnJheSkge1xyXG4gICAgdGhpcy5hcnJheSA9IFtdLnNsaWNlLmNhbGwoYXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCA9ICgpID0+IHtcclxuICAgIGxldCBlbCA9IHRoaXMuYXJyYXlbdGhpcy5pXTtcclxuICAgIHRoaXMuaSsrO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==