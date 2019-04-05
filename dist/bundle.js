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

function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: 40.90791,
      lng: 29.17695
    }
  });
  map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json');
  return map;
}

var map;
window.addEventListener("load", function () {
  var bayiler = [];
  var elements = [].slice.call(document.getElementsByClassName("list-group-item")); // Iterate for elements

  var elementArray = new Iterate(elements);
  var element = null;

  while ((element = elementArray.next()) != null) {
    var bayiInfo = JSON.parse(element.getAttribute("data-info"));
    bayiler.push(bayiInfo);
  } // Init map to the #map element


  map = initMap(); // Iterate for Coords

  var coordsArray = new Iterate(bayiler); // Iterate coords array

  var coords = null;

  while ((coords = coordsArray.next()) != null) {
    // Get coords from addres
    getLatLng(coords.adres, function (_coords) {
      // Set marker to the Map
      setMarkers(map, ["coords.bayiAdi", _coords[0], _coords[1], 100]);
    });
  }
}); // Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.

function getLatLng(adres, fn) {
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
      var coords = [lat, lng];
      fn(coords);
    } else {
      fn(status);
    }
  });
}

function setMarkers(map, beach) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
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
  }; // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.

  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly"
  };
  var beach;
  var marker = new google.maps.Marker({
    position: {
      lat: beach[1],
      lng: beach[2]
    },
    map: map,
    icon: image,
    labels: 11,
    shape: shape,
    title: beach[0],
    zIndex: beach[3]
  });
  var html = "<h1>Gizli Mesaj</h1>";
  attachSecretMessage(marker, html); //   marker.setAttribute("id", "ddd")

  marker.addListener("click", function (e) {
    markerClickHandler(marker, e.latLng);
  });
}

function markerClickHandler(marker, latLng) {
  // map.setZoom(8);
  map.panTo(latLng); // console.log(e)
}

function attachSecretMessage(marker, secretMessage) {
  var infowindow = new google.maps.InfoWindow({
    content: secretMessage
  });
  marker.addListener("click", function () {
    infowindow.open(marker.get("map"), marker);
  });
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

    this.array = [].slice.call(array);
  }

  return Iterate;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hGQSxTQUFTLE9BQVQsR0FBZ0I7QUFDZCxNQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFQLENBQVksR0FBaEIsQ0FBb0IsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEIsRUFBb0Q7QUFDNUQsUUFBSSxFQUFFLEVBRHNEO0FBRTVELFVBQU0sRUFBRTtBQUFFLFNBQUcsRUFBRSxRQUFQO0FBQWlCLFNBQUcsRUFBRTtBQUF0QjtBQUZvRCxHQUFwRCxDQUFWO0FBS0EsS0FBRyxDQUFDLElBQUosQ0FBUyxXQUFULENBQ0UsNkRBREY7QUFFQSxTQUFPLEdBQVA7QUFDRDs7QUFFRCxJQUFJLEdBQUo7QUFFQSxNQUFNLENB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QyxXQUFPLEVBQUU7QUFEaUMsR0FBM0IsQ0FBakI7QUFJQSxRQUFNLENBQUMsV0FBUCxDQUFtQixPQUFuQixFQUE0QjtBQUMxQixjQUFVLENBQUMsSUFBWCxDQUFnQixNQUFNLENBQUMsR0FBUCxDQUFXLEtBQVgsQ0FBaEIsRUFBbUMsTUFBbkM7QUFDRCxHQUZEO0FBR0Q7O0FBRUQ7QUFBQTtBQUFBO0FBR0UsbUJBQVksS0FBWixFQUFpQjtBQUFqQjs7QUFGQSxpQkFBUSxFQUFSO0FBQ0EsYUFBSSxDQUFKOztBQUtBLGdCQUFPO0FBQ0wsVUFBSSxFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUwsQ0FBVyxLQUFJLENBQUMsQ0FBaEIsQ0FBVDtBQUNBLFdBQUksQ0FBQyxDQUFMO0FBQ0EsYUFBTyxFQUFQO0FBQ0QsS0FKRDs7QUFIRSxTQUFLLEtBQUwsR0FBYSxHQUFHLEtBQUgsQ0FBUyxJQUFULENBQWMsS0FBZCxDQUFiO0FBQ0Q7O0FBT0g7QUFBQyxDQVpELEciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJkZWNsYXJlIHZhciBnb29nbGU7XHJcblxyXG5mdW5jdGlvbiBpbml0TWFwKCkge1xyXG4gIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XHJcbiAgICB6b29tOiAxMCxcclxuICAgIGNlbnRlcjogeyBsYXQ6IDQwLjkwNzkxLCBsbmc6IDI5LjE3Njk1IH1cclxuICB9KTtcclxuXHJcbiAgbWFwLmRhdGEubG9hZEdlb0pzb24oXHJcbiAgICAnaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL21hcHNkZXZzaXRlL2pzb24vZ29vZ2xlLmpzb24nKTtcclxuICByZXR1cm4gbWFwO1xyXG59XHJcblxyXG52YXIgbWFwO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcclxuICBsZXQgYmF5aWxlciA9IFtdO1xyXG4gIGxldCBlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdC1ncm91cC1pdGVtXCIpXHJcbiAgKTtcclxuXHJcbiAgLy8gSXRlcmF0ZSBmb3IgZWxlbWVudHNcclxuICBsZXQgZWxlbWVudEFycmF5ID0gbmV3IEl0ZXJhdGUoZWxlbWVudHMpO1xyXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcclxuICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50QXJyYXkubmV4dCgpKSAhPSBudWxsKSB7XHJcbiAgICBsZXQgYmF5aUluZm8gPSBKU09OLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmZvXCIpKTtcclxuXHJcbiAgICBiYXlpbGVyLnB1c2goYmF5aUluZm8pO1xyXG4gIH1cclxuXHJcbiAgLy8gSW5pdCBtYXAgdG8gdGhlICNtYXAgZWxlbWVudFxyXG4gIG1hcCA9IGluaXRNYXAoKTtcclxuXHJcbiAgLy8gSXRlcmF0ZSBmb3IgQ29vcmRzXHJcbiAgbGV0IGNvb3Jkc0FycmF5ID0gbmV3IEl0ZXJhdGUoYmF5aWxlcik7XHJcblxyXG4gIC8vIEl0ZXJhdGUgY29vcmRzIGFycmF5XHJcbiAgbGV0IGNvb3JkcyA9IG51bGw7XHJcbiAgd2hpbGUgKChjb29yZHMgPSBjb29yZHNBcnJheS5uZXh0KCkpICE9IG51bGwpIHtcclxuICAgIC8vIEdldCBjb29yZHMgZnJvbSBhZGRyZXNcclxuICAgIGdldExhdExuZyhjb29yZHMuYWRyZXMsIF9jb29yZHMgPT4ge1xyXG4gICAgICAvLyBTZXQgbWFya2VyIHRvIHRoZSBNYXBcclxuICAgICAgc2V0TWFya2VycyhtYXAsIFtcImNvb3Jkcy5iYXlpQWRpXCIsIF9jb29yZHNbMF0sIF9jb29yZHNbMV0sIDEwMF0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIERhdGEgZm9yIHRoZSBtYXJrZXJzIGNvbnNpc3Rpbmcgb2YgYSBuYW1lLCBhIExhdExuZyBhbmQgYSB6SW5kZXggZm9yIHRoZVxyXG4vLyBvcmRlciBpbiB3aGljaCB0aGVzZSBtYXJrZXJzIHNob3VsZCBkaXNwbGF5IG9uIHRvcCBvZiBlYWNoIG90aGVyLlxyXG5cclxuZnVuY3Rpb24gZ2V0TGF0TG5nKGFkcmVzLCBmbikge1xyXG4gIHZhciBnZW9jb2RlcjtcclxuICBpZiAoZ2VvY29kZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInphdGVuIHZhclwiKTtcclxuICB9XHJcblxyXG4gIC8vIEdlb2NvZGUgYW4gYWRkcmVzcy5cclxuICByZXR1cm4gZ2VvY29kZXIuZ2VvY29kZShcclxuICAgIHtcclxuICAgICAgYWRkcmVzczogYWRyZXNcclxuICAgIH0sXHJcbiAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgaWYgKHN0YXR1cyA9PSBcIk9LXCIpIHtcclxuICAgICAgICB2YXIgbGF0ID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgIHZhciBsbmcgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XHJcbiAgICAgICAgdmFyIGNvb3JkcyA9IFtsYXQsIGxuZ107XHJcbiAgICAgICAgZm4oY29vcmRzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBmbihzdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0TWFya2VycyhtYXAsIGJlYWNoKSB7XHJcbiAgLy8gQWRkcyBtYXJrZXJzIHRvIHRoZSBtYXAuXHJcblxyXG4gIC8vIE1hcmtlciBzaXplcyBhcmUgZXhwcmVzc2VkIGFzIGEgU2l6ZSBvZiBYLFkgd2hlcmUgdGhlIG9yaWdpbiBvZiB0aGUgaW1hZ2VcclxuICAvLyAoMCwwKSBpcyBsb2NhdGVkIGluIHRoZSB0b3AgbGVmdCBvZiB0aGUgaW1hZ2UuXHJcblxyXG4gIC8vIE9yaWdpbnMsIGFuY2hvciBwb3NpdGlvbnMgYW5kIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgaW5jcmVhc2UgaW4gdGhlIFhcclxuICAvLyBkaXJlY3Rpb24gdG8gdGhlIHJpZ2h0IGFuZCBpbiB0aGUgWSBkaXJlY3Rpb24gZG93bi5cclxuICB2YXIgaW1hZ2UgPSB7XHJcbiAgICB1cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvZnVsbC9pbWFnZXMvYmVhY2hmbGFnLnBuZ1wiLFxyXG4gICAgLy8gVGhpcyBtYXJrZXIgaXMgMjAgcGl4ZWxzIHdpZGUgYnkgMzIgcGl4ZWxzIGhpZ2guXHJcbiAgICBzaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyMCwgMzIpLFxyXG4gICAgLy8gVGhlIG9yaWdpbiBmb3IgdGhpcyBpbWFnZSBpcyAoMCwgMCkuXHJcbiAgICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgIC8vIFRoZSBhbmNob3IgZm9yIHRoaXMgaW1hZ2UgaXMgdGhlIGJhc2Ugb2YgdGhlIGZsYWdwb2xlIGF0ICgwLCAzMikuXHJcbiAgICBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAzMilcclxuICB9O1xyXG4gIC8vIFNoYXBlcyBkZWZpbmUgdGhlIGNsaWNrYWJsZSByZWdpb24gb2YgdGhlIGljb24uIFRoZSB0eXBlIGRlZmluZXMgYW4gSFRNTFxyXG4gIC8vIDxhcmVhPiBlbGVtZW50ICdwb2x5JyB3aGljaCB0cmFjZXMgb3V0IGEgcG9seWdvbiBhcyBhIHNlcmllcyBvZiBYLFkgcG9pbnRzLlxyXG4gIC8vIFRoZSBmaW5hbCBjb29yZGluYXRlIGNsb3NlcyB0aGUgcG9seSBieSBjb25uZWN0aW5nIHRvIHRoZSBmaXJzdCBjb29yZGluYXRlLlxyXG4gIHZhciBzaGFwZSA9IHtcclxuICAgIGNvb3JkczogWzEsIDEsIDEsIDIwLCAxOCwgMjAsIDE4LCAxXSxcclxuICAgIHR5cGU6IFwicG9seVwiXHJcbiAgfTtcclxuICB2YXIgYmVhY2g7XHJcbiAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgcG9zaXRpb246IHsgbGF0OiBiZWFjaFsxXSwgbG5nOiBiZWFjaFsyXSB9LFxyXG4gICAgbWFwOiBtYXAsXHJcbiAgICBpY29uOiBpbWFnZSxcclxuICAgIGxhYmVsczogMTEsXHJcbiAgICBzaGFwZTogc2hhcGUsXHJcbiAgICB0aXRsZTogYmVhY2hbMF0sXHJcbiAgICB6SW5kZXg6IGJlYWNoWzNdXHJcbiAgfSk7XHJcblxyXG4gIGxldCBodG1sID0gYDxoMT5HaXpsaSBNZXNhajwvaDE+YFxyXG4gIGF0dGFjaFNlY3JldE1lc3NhZ2UobWFya2VyLCBodG1sKTtcclxuICAvLyAgIG1hcmtlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRkZFwiKVxyXG4gIG1hcmtlci5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgbWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlciwgZS5sYXRMbmcpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXJrZXJDbGlja0hhbmRsZXIobWFya2VyLCBsYXRMbmcpIHtcclxuICAvLyBtYXAuc2V0Wm9vbSg4KTtcclxuICBtYXAucGFuVG8obGF0TG5nKTtcclxuICAvLyBjb25zb2xlLmxvZyhlKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhdHRhY2hTZWNyZXRNZXNzYWdlKG1hcmtlciwgc2VjcmV0TWVzc2FnZSkge1xyXG4gIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG4gICAgY29udGVudDogc2VjcmV0TWVzc2FnZVxyXG4gIH0pO1xyXG5cclxuICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgIGluZm93aW5kb3cub3BlbihtYXJrZXIuZ2V0KFwibWFwXCIpLCBtYXJrZXIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jbGFzcyBJdGVyYXRlIHtcclxuICBhcnJheSA9IFtdO1xyXG4gIGkgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XHJcbiAgICB0aGlzLmFycmF5ID0gW10uc2xpY2UuY2FsbChhcnJheSk7XHJcbiAgfVxyXG5cclxuICBuZXh0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGVsID0gdGhpcy5hcnJheVt0aGlzLmldO1xyXG4gICAgdGhpcy5pKys7XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9