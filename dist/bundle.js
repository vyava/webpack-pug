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
  let MarkerObject = new Marker();

  while ((coords = coordsIterator.next()) != null) {
    // Get coords from addres
    let [lat, lng] = yield getLatLng(coords.adres); // Set marker to the Map
    // coordsArray.push([lat, lng]);
    // Instance of Marker

    let marker = MarkerObject.create({
      map,
      position: {
        lat,
        lng
      }
    });
    markerArray.push(marker);
  } // console.log(markerArray);
  // console.log(coordsArray);


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

function markerClickHandler(marker, latLng) {
  // console.log(marker);
  map.panTo(latLng);
} // function attachSecretMessage(marker, secretMessage) {
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
  constructor() {
    this.DEFAULT_IMAGE = {
      url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
    this.map = null;
    this.lastWindow = [];
    this.lastWindow.push(this.createInfoWindow("loading"));
    console.log(this.lastWindow);
  }

  create({
    map,
    position
  }) {
    // Create a marker
    this.marker = new google.maps.Marker({
      map,
      position
    });

    if (!this.map) {
      this.map = map;
    } // let handler = function(a,b){
    // }
    // handler.apply(this.markerClickHandler)


    let that = this; // Set click handler to the Marker

    this.marker.addListener("click", function (e) {
      if (that.lastWindow.length > 2) {
        that.lastWindow.map((_w, i) => i == 1 ? _w.close() : true).shift();
        console.log(that.lastWindow);
      }

      let _window = that.createInfoWindow("mesaj", this.getPosition());

      _window.open(that.map, this);

      that.lastWindow.push(_window); // handler(this, "mesaj")
      // this.markerClickHandler(e, "Mesaj");
    });
  } // Create InfoWindow instance for marker


  createInfoWindow(content, position) {
    return new google.maps.InfoWindow();
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRkEsU0FBUyxPQUFULEdBQWdCO0FBQ2QsTUFBSSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLEdBQWhCLENBQW9CLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLENBQXBCLEVBQW9EO0FBQzVELFFBQUksRUFBRSxFQURzRDtBQUU1RCxVQUFNLEVBQUU7QUFBRSxTQUFHLEVBQUUsUUFBUDtBQUFpQixTQUFHLEVBQUU7QUFBdEI7QUFGb0QsR0FBcEQsQ0FBVjtBQUtBLEtBQUcsQ0FBQyxJQUFKLENBQVMsV0FBVCxDQUNFLDZEQURGO0FBR0EsU0FBTyxHQUFQO0FBQ0Q7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bnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIvLyBkZWNsYXJlIHZhciBnb29nbGU7XHJcbmRlY2xhcmUgdmFyIE1hcmtlckNsdXN0ZXJlcjtcclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xyXG4gICAgem9vbTogMTAsXHJcbiAgICBjZW50ZXI6IHsgbGF0OiA0MC45MDc5MSwgbG5nOiAyOS4xNzY5NSB9XHJcbiAgfSk7XHJcblxyXG4gIG1hcC5kYXRhLmxvYWRHZW9Kc29uKFxyXG4gICAgXCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbWFwc2RldnNpdGUvanNvbi9nb29nbGUuanNvblwiXHJcbiAgKTtcclxuICByZXR1cm4gbWFwO1xyXG59XHJcblxyXG52YXIgbWFwO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcclxuICAvLyBHZXQgZWxlbWVudGxpc3RcclxuICBsZXQgYmF5aWxlciA9IGdldEVsZW1lbnRMaXN0KCk7XHJcblxyXG4gIC8vIEluaXQgbWFwIHRvIHRoZSAjbWFwIGVsZW1lbnRcclxuICBtYXAgPSBpbml0TWFwKCk7XHJcblxyXG4gIC8vIEl0ZXJhdGUgZm9yIENvb3Jkc1xyXG4gIGxldCBjb29yZHNJdGVyYXRvciA9IG5ldyBJdGVyYXRlKGJheWlsZXIpO1xyXG4gIC8vIEl0ZXJhdGUgY29vcmRzIGFycmF5XHJcbiAgLy8gbGV0IGNvb3Jkc0FycmF5ID0gW107XHJcbiAgbGV0IG1hcmtlckFycmF5ID0gW107XHJcbiAgbGV0IGNvb3JkcyA9IG51bGw7XHJcbiAgbGV0IE1hcmtlck9iamVjdCA9IG5ldyBNYXJrZXIoKTtcclxuICB3aGlsZSAoKGNvb3JkcyA9IGNvb3Jkc0l0ZXJhdG9yLm5leHQoKSkgIT0gbnVsbCkge1xyXG4gICAgLy8gR2V0IGNvb3JkcyBmcm9tIGFkZHJlc1xyXG4gICAgbGV0IFtsYXQsIGxuZ106IFtudW1iZXIsIG51bWJlcl0gPSBhd2FpdCBnZXRMYXRMbmcoY29vcmRzLmFkcmVzKTtcclxuICAgIC8vIFNldCBtYXJrZXIgdG8gdGhlIE1hcFxyXG4gICAgLy8gY29vcmRzQXJyYXkucHVzaChbbGF0LCBsbmddKTtcclxuXHJcbiAgICAvLyBJbnN0YW5jZSBvZiBNYXJrZXJcclxuXHJcbiAgICBsZXQgbWFya2VyID0gTWFya2VyT2JqZWN0LmNyZWF0ZSh7IG1hcCwgcG9zaXRpb246IHsgbGF0LCBsbmcgfSB9KTtcclxuICAgIG1hcmtlckFycmF5LnB1c2gobWFya2VyKTtcclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKG1hcmtlckFycmF5KTtcclxuICAvLyBjb25zb2xlLmxvZyhjb29yZHNBcnJheSk7XHJcblxyXG4gIHZhciBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlcihtYXAsIG1hcmtlckFycmF5LCB7XHJcbiAgICBpbWFnZVBhdGg6XHJcbiAgICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL21cIlxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRMaXN0KCkge1xyXG4gIGxldCBiYXlpbGVyID0gW107XHJcbiAgbGV0IGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0LWdyb3VwLWl0ZW1cIilcclxuICApO1xyXG5cclxuICAvLyBJdGVyYXRlIGluc3RhbmNlXHJcbiAgbGV0IGVsZW1lbnRBcnJheSA9IG5ldyBJdGVyYXRlKGVsZW1lbnRzKTtcclxuICBsZXQgZWxlbWVudCA9IG51bGw7XHJcblxyXG4gIC8vIEl0ZXJhdGUgZm9yIGVsZW1lbnRzXHJcbiAgd2hpbGUgKChlbGVtZW50ID0gZWxlbWVudEFycmF5Lm5leHQoKSkgIT0gbnVsbCkge1xyXG4gICAgbGV0IGJheWlJbmZvID0gSlNPTi5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5mb1wiKSk7XHJcblxyXG4gICAgYmF5aWxlci5wdXNoKGJheWlJbmZvKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBiYXlpbGVyO1xyXG59XHJcblxyXG4vLyBEYXRhIGZvciB0aGUgbWFya2VycyBjb25zaXN0aW5nIG9mIGEgbmFtZSwgYSBMYXRMbmcgYW5kIGEgekluZGV4IGZvciB0aGVcclxuLy8gb3JkZXIgaW4gd2hpY2ggdGhlc2UgbWFya2VycyBzaG91bGQgZGlzcGxheSBvbiB0b3Agb2YgZWFjaCBvdGhlci5cclxuXHJcbmZ1bmN0aW9uIGdldExhdExuZyhhZHJlcyk6IFByb21pc2U8YW55PiB7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIHZhciBnZW9jb2RlcjtcclxuICAgIGlmIChnZW9jb2RlciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiemF0ZW4gdmFyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlb2NvZGUgYW4gYWRkcmVzcy5cclxuICAgIGdlb2NvZGVyLmdlb2NvZGUoXHJcbiAgICAgIHtcclxuICAgICAgICBhZGRyZXNzOiBhZHJlc1xyXG4gICAgICB9LFxyXG4gICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09IFwiT0tcIikge1xyXG4gICAgICAgICAgdmFyIGxhdCA9IHJlc3VsdFswXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcclxuICAgICAgICAgIHZhciBsbmcgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XHJcbiAgICAgICAgICB2YXIgY29vcmRzOiBudW1iZXJbXSA9IFtsYXQsIGxuZ107XHJcbiAgICAgICAgICByZXNvbHZlKGNvb3Jkcyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlamVjdChzdGF0dXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciwgbGF0TG5nKSB7XHJcbiAgLy8gY29uc29sZS5sb2cobWFya2VyKTtcclxuICBtYXAucGFuVG8obGF0TG5nKTtcclxufVxyXG5cclxuLy8gZnVuY3Rpb24gYXR0YWNoU2VjcmV0TWVzc2FnZShtYXJrZXIsIHNlY3JldE1lc3NhZ2UpIHtcclxuLy8gICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuLy8gICAgIGNvbnRlbnQ6IHNlY3JldE1lc3NhZ2VcclxuLy8gICB9KTtcclxuXHJcbi8vICAgbWFya2VyLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcmtlci5nZXQoXCJtYXBcIiksIG1hcmtlcik7XHJcbi8vICAgfSk7XHJcblxyXG4vLyAgIG1hcmtlci5hZGRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4vLyAgICAgLy8gaW5mb3dpbmRvdy5vcGVuKG1hcmtlci5nZXQoXCJtYXBcIiksIG1hcmtlcik7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuXHJcbmNsYXNzIE1hcmtlciB7XHJcbiAgREVGQVVMVF9JTUFHRSA9IHtcclxuICAgIHVybDpcclxuICAgICAgXCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9mdWxsL2ltYWdlcy9iZWFjaGZsYWcucG5nXCIsXHJcbiAgICAvLyBUaGlzIG1hcmtlciBpcyAyMCBwaXhlbHMgd2lkZSBieSAzMiBwaXhlbHMgaGlnaC5cclxuICAgIHNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDIwLCAzMiksXHJcbiAgICAvLyBUaGUgb3JpZ2luIGZvciB0aGlzIGltYWdlIGlzICgwLCAwKS5cclxuICAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxyXG4gICAgLy8gVGhlIGFuY2hvciBmb3IgdGhpcyBpbWFnZSBpcyB0aGUgYmFzZSBvZiB0aGUgZmxhZ3BvbGUgYXQgKDAsIDMyKS5cclxuICAgIGFuY2hvcjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDMyKVxyXG4gIH07XHJcblxyXG4gIG1hcmtlcjogZ29vZ2xlLm1hcHMuTWFya2VyO1xyXG4gIG1hcDogZ29vZ2xlLm1hcHMuTWFwID0gbnVsbDtcclxuICBsYXN0V2luZG93OiBbZ29vZ2xlLm1hcHMuSW5mb1dpbmRvd10gPSA8YW55PltdO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5sYXN0V2luZG93LnB1c2godGhpcy5jcmVhdGVJbmZvV2luZG93KFwibG9hZGluZ1wiKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxhc3RXaW5kb3cpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSh7IG1hcCwgcG9zaXRpb24gfSkge1xyXG4gICAgLy8gQ3JlYXRlIGEgbWFya2VyXHJcbiAgICB0aGlzLm1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBtYXAsXHJcbiAgICAgIHBvc2l0aW9uXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXRoaXMubWFwKSB7XHJcbiAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgfVxyXG4gICAgLy8gbGV0IGhhbmRsZXIgPSBmdW5jdGlvbihhLGIpe1xyXG4gICAgLy8gfVxyXG4gICAgLy8gaGFuZGxlci5hcHBseSh0aGlzLm1hcmtlckNsaWNrSGFuZGxlcilcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIC8vIFNldCBjbGljayBoYW5kbGVyIHRvIHRoZSBNYXJrZXJcclxuICAgIHRoaXMubWFya2VyLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICBpZiAodGhhdC5sYXN0V2luZG93Lmxlbmd0aCA+IDIpIHtcclxuICAgICAgICB0aGF0Lmxhc3RXaW5kb3cubWFwKChfdywgaSkgPT4gKGkgPT0gMSkgPyBfdy5jbG9zZSgpIDogdHJ1ZSkuc2hpZnQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoYXQubGFzdFdpbmRvdylcclxuICAgICAgfVxyXG4gICAgICBsZXQgX3dpbmRvdyA9IHRoYXQuY3JlYXRlSW5mb1dpbmRvdyhcIm1lc2FqXCIsIHRoaXMuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgIF93aW5kb3cub3Blbih0aGF0Lm1hcCwgdGhpcyk7XHJcblxyXG4gICAgICB0aGF0Lmxhc3RXaW5kb3cucHVzaChfd2luZG93KTtcclxuXHJcbiAgICAgIC8vIGhhbmRsZXIodGhpcywgXCJtZXNhalwiKVxyXG4gICAgICAvLyB0aGlzLm1hcmtlckNsaWNrSGFuZGxlcihlLCBcIk1lc2FqXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgSW5mb1dpbmRvdyBpbnN0YW5jZSBmb3IgbWFya2VyXHJcbiAgcHVibGljIGNyZWF0ZUluZm9XaW5kb3coY29udGVudD86IHN0cmluZywgcG9zaXRpb24/OiBhbnkpIHtcclxuICAgIHJldHVybiBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdygpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIEl0ZXJhdGUge1xyXG4gIGFycmF5ID0gW107XHJcbiAgaSA9IDA7XHJcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcclxuICAgIHRoaXMuYXJyYXkgPSBbXS5zbGljZS5jYWxsKGFycmF5KTtcclxuICB9XHJcblxyXG4gIG5leHQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZWwgPSB0aGlzLmFycmF5W3RoaXMuaV07XHJcbiAgICB0aGlzLmkrKztcclxuICAgIHJldHVybiBlbDtcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=