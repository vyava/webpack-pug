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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var _this = this;

Object.defineProperty(exports, "__esModule", {
  value: true
});

var map_1 = __webpack_require__(/*! ./map */ "./src/map.ts");

var marker_1 = __webpack_require__(/*! ./marker */ "./src/marker.ts");

var map;
var elementList = [];
var lastSelectedElement;
window.addEventListener("load", function () {
  return __awaiter(_this, void 0, void 0, function () {
    var MapObject, MarkerObject, bayiler, bayiIterator, bayi, _a, lat, lng, markerCluster;

    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          MapObject = new map_1.default();
          MarkerObject = new marker_1.default();
          MapObject.listen('click', function (event) {
            console.log("inside");
            console.log(event);
            MarkerObject.clickOutsideOfMarker(this);
          }); // Get elementlist

          elementList = getElementList();
          bayiler = parseBayiler(elementList); // Init map to the #map element

          map = MapObject.init();
          bayiIterator = new Iterate(bayiler);
          bayi = null;
          _b.label = 1;

        case 1:
          if (!((bayi = bayiIterator.next()) != null)) return [3
          /*break*/
          , 3];
          return [4
          /*yield*/
          , getLatLng(bayi.adres)];

        case 2:
          _a = _b.sent(), lat = _a[0], lng = _a[1];
          MarkerObject.create({
            map: map,
            position: {
              lat: lat,
              lng: lng
            },
            unvan: bayi["unvan"],
            ruhsatNo: bayi["ruhsatNo"]
          });
          return [3
          /*break*/
          , 1];

        case 3:
          markerCluster = new MarkerClusterer(map, MarkerObject.markers, {
            imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
          });
          return [2
          /*return*/
          ];
      }
    });
  });
});

function selectBayiFromList(ruhsatNo) {
  if (lastSelectedElement) {
    lastSelectedElement.classList.remove("active");
  }

  var el = document.getElementById(ruhsatNo);
  el.classList.add("active");
  lastSelectedElement = el;
}

function parseBayiler(elements) {
  var bayiler = []; // Iterate instance

  var elementArray = new Iterate(elements);
  var element = null; // Iterate for elements

  while ((element = elementArray.next()) != null) {
    var bayiInfo = JSON.parse(element.getAttribute("data-info"));
    bayiler.push(bayiInfo);
  }

  return bayiler;
}

function getElementList() {
  return [].slice.call(document.getElementsByClassName("list-group-item"));
}

function getLatLng(adres) {
  return new Promise(function (resolve, reject) {
    var geocoder;

    if (geocoder == undefined) {
      geocoder = new google.maps.Geocoder();
    } else {
      console.log("zaten var");
    } // Geocode an address.


    geocoder.geocode({
      address: adres
    }, function (result, status) {
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

/***/ }),

/***/ "./src/map.ts":
/*!********************!*\
  !*** ./src/map.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Map =
/** @class */
function () {
  function Map() {
    console.log("Map Loaded");
    this.map = this.init(); // this.listen('click');
  }

  Map.prototype.init = function () {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: {
        lat: 40.90791,
        lng: 29.17695
      }
    });
    map.data.loadGeoJson("https://storage.googleapis.com/mapsdevsite/json/google.json");
    return map;
  };

  Map.prototype.listen = function (eventName, fn) {
    this.map.addListener(eventName, function (event, _fn) {
      console.log("inside 2");

      _fn(event);

      return [1];
    }(event, fn));
  };

  return Map;
}();

exports.default = Map;

/***/ }),

/***/ "./src/marker.ts":
/*!***********************!*\
  !*** ./src/marker.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var window_1 = __webpack_require__(/*! ./window */ "./src/window.ts");

var Marker =
/** @class */
function () {
  function Marker() {
    this.markers = [];
    this.map = null;
    console.log("Marker Loaded");
    this.InfoWindow = new window_1.default();
    this.lastWindow = this.InfoWindow.lastWindow; // this.lastWindow = this.createInfoWindow("loading");)
  }

  Marker.prototype.create = function (_a) {
    var map = _a.map,
        position = _a.position,
        unvan = _a.unvan,
        ruhsatNo = _a.ruhsatNo; // Create a marker

    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: unvan,
      animation: google.maps.Animation.DROP,
      opacity: 0.9 // optimized : false

    });
    marker.setValues({
      ruhsatNo: ruhsatNo.trim()
    });

    if (!this.map) {
      this.map = map;
    }

    var that = this;
    marker.addListener("mouseover", function () {
      this.setZIndex(100);
      this.setOpacity(1);
    });
    marker.addListener("mouseout", function () {
      // this.setZIndex(100);
      this.setOpacity(0.9);
    }); // Set click handler to the Marker

    marker.addListener("click", function (e) {
      // Close last InfoWindow
      that.closeInfoWindow();
      var windowContentHtml = "\n            <div style=\"width:250px;min-height:300px\">\n              <h4>" + this.getTitle() + "</h4>\n              \u0130\u00E7erik\n            </div>\n        "; // selectBayiFromList(this.ruhsatNo);
      // Create new InfoWindow for clicked marker

      that.InfoWindow.setInfoWindow("" + windowContentHtml, this.getPosition()); // Listen for InfoWindow change event

      that.InfoWindow.listen(that.setAllMarkersDefault); // Open the InfoWindow for clicked marker

      that.lastWindow.open(that.map, this); // Set 0 to all markers

      that.setAllMarkersPassive(); // Set high index to the marker

      this.setZIndex(100);
      this.setOpacity(0.9);
    });
    this.markers.push(marker);
  };

  Marker.prototype.closeInfoWindow = function () {
    if (this.lastWindow) this.lastWindow.close();
  };

  Marker.prototype.clickOutsideOfMarker = function (context) {
    console.log("clickOutsideOfMarker");
    this.closeInfoWindow();
    this.setAllMarkersDefault();
  };

  Marker.prototype.setAllMarkersPassive = function () {
    this.markers.map(function (_m) {
      _m.setZIndex(100);

      _m.setOpacity(0.5);
    });
  };

  Marker.prototype.setAllMarkersDefault = function () {
    this.markers.map(function (_m) {
      _m.setOpacity(0.9);
    });
  };

  return Marker;
}();

exports.default = Marker;

/***/ }),

/***/ "./src/window.ts":
/*!***********************!*\
  !*** ./src/window.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var InfoWindowObject =
/** @class */
function () {
  function InfoWindowObject() {
    console.log("InfoWindow Loaded");
    this.setInfoWindow();
  } // Create InfoWindow instance for marker


  InfoWindowObject.prototype.setInfoWindow = function (content, position) {
    if (!this.lastWindow) {
      this.lastWindow = new google.maps.InfoWindow({
        content: content
      });
    }
  };

  InfoWindowObject.prototype.listen = function (fn) {
    this.lastWindow.addListener("closeclick", function (e) {
      return fn;
    });
  };

  return InfoWindowObject;
}();

exports.default = InfoWindowObject;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2luZG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFBQTs7QUFDQTs7QUFJQSxJQUFJLEdBQUo7QUFDQSxJQUFJLFdBQVcsR0FBdUIsRUFBdEM7QUFDQSxJQUFJLG1CQUFK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OztBQUdUO0FBQUMsQ0FsQkQ7O0FBb0JBLGtCQUFlLGdCQUFmLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgTWFwIGZyb20gXCIuL21hcFwiO1xyXG5pbXBvcnQgTWFya2VyIGZyb20gXCIuL21hcmtlclwiO1xyXG4vLyBkZWNsYXJlIHZhciBnb29nbGU7XHJcbmRlY2xhcmUgdmFyIE1hcmtlckNsdXN0ZXJlcjtcclxuXHJcbnZhciBtYXA6IGdvb2dsZS5tYXBzLk1hcDtcclxudmFyIGVsZW1lbnRMaXN0OiBbSFRNTEVsZW1lbnRdID0gPGFueT5bXTtcclxubGV0IGxhc3RTZWxlY3RlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcclxuICAvLyBJbnN0YW5jZSBvZiBNYXBcclxuICBsZXQgTWFwT2JqZWN0ID0gbmV3IE1hcCgpO1xyXG4gIC8vIEluc3RhbmNlIG9mIE1hcmtlclxyXG4gIGxldCBNYXJrZXJPYmplY3QgPSBuZXcgTWFya2VyKCk7XHJcblxyXG4gIE1hcE9iamVjdC5saXN0ZW4oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgY29uc29sZS5sb2coXCJpbnNpZGVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudClcclxuICAgIE1hcmtlck9iamVjdC5jbGlja091dHNpZGVPZk1hcmtlcih0aGlzKVxyXG4gIH0pXHJcblxyXG4gIC8vIEdldCBlbGVtZW50bGlzdFxyXG4gIGVsZW1lbnRMaXN0ID0gZ2V0RWxlbWVudExpc3QoKTtcclxuXHJcbiAgbGV0IGJheWlsZXIgPSBwYXJzZUJheWlsZXIoZWxlbWVudExpc3QpO1xyXG5cclxuICAvLyBJbml0IG1hcCB0byB0aGUgI21hcCBlbGVtZW50XHJcbiAgbWFwID0gTWFwT2JqZWN0LmluaXQoKTtcclxuXHJcbiAgLy8gSXRlcmF0ZSBmb3IgQ29vcmRzXHJcbiAgbGV0IGJheWlJdGVyYXRvciA9IG5ldyBJdGVyYXRlKGJheWlsZXIpO1xyXG5cclxuICBsZXQgYmF5aSA9IG51bGw7XHJcblxyXG4gIHdoaWxlICgoYmF5aSA9IGJheWlJdGVyYXRvci5uZXh0KCkpICE9IG51bGwpIHtcclxuICAgIC8vIEdldCBjb29yZHMgZnJvbSBhZGRyZXNcclxuICAgIGxldCBbbGF0LCBsbmddOiBbbnVtYmVyLCBudW1iZXJdID0gYXdhaXQgZ2V0TGF0TG5nKGJheWkuYWRyZXMpO1xyXG5cclxuICAgIE1hcmtlck9iamVjdC5jcmVhdGUoe1xyXG4gICAgICBtYXAsXHJcbiAgICAgIHBvc2l0aW9uOiB7IGxhdCwgbG5nIH0sXHJcbiAgICAgIHVudmFuOiBiYXlpW1widW52YW5cIl0sXHJcbiAgICAgIHJ1aHNhdE5vOiBiYXlpW1wicnVoc2F0Tm9cIl1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKG1hcCwgJ3RpbGVzbG9hZGVkJywgZnVuY3Rpb24oZSl7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKVxyXG4gIC8vIH0pXHJcblxyXG4gIHZhciBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlcihtYXAsIE1hcmtlck9iamVjdC5tYXJrZXJzLCB7XHJcbiAgICBpbWFnZVBhdGg6XHJcbiAgICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL21cIlxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdEJheWlGcm9tTGlzdChydWhzYXRObzogc3RyaW5nKSB7XHJcbiAgaWYgKGxhc3RTZWxlY3RlZEVsZW1lbnQpIHtcclxuICAgIGxhc3RTZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9XHJcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocnVoc2F0Tm8pO1xyXG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gIGxhc3RTZWxlY3RlZEVsZW1lbnQgPSBlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VCYXlpbGVyKGVsZW1lbnRzKSB7XHJcbiAgbGV0IGJheWlsZXIgPSBbXTtcclxuICAvLyBJdGVyYXRlIGluc3RhbmNlXHJcbiAgbGV0IGVsZW1lbnRBcnJheSA9IG5ldyBJdGVyYXRlKGVsZW1lbnRzKTtcclxuICBsZXQgZWxlbWVudCA9IG51bGw7XHJcblxyXG4gIC8vIEl0ZXJhdGUgZm9yIGVsZW1lbnRzXHJcbiAgd2hpbGUgKChlbGVtZW50ID0gZWxlbWVudEFycmF5Lm5leHQoKSkgIT0gbnVsbCkge1xyXG4gICAgbGV0IGJheWlJbmZvID0gSlNPTi5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5mb1wiKSk7XHJcblxyXG4gICAgYmF5aWxlci5wdXNoKGJheWlJbmZvKTtcclxuICB9XHJcbiAgcmV0dXJuIGJheWlsZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRMaXN0KCkge1xyXG4gIHJldHVybiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0LWdyb3VwLWl0ZW1cIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYXRMbmcoYWRyZXMpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB2YXIgZ2VvY29kZXI7XHJcbiAgICBpZiAoZ2VvY29kZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInphdGVuIHZhclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW9jb2RlIGFuIGFkZHJlc3MuXHJcbiAgICBnZW9jb2Rlci5nZW9jb2RlKFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogYWRyZXNcclxuICAgICAgfSxcclxuICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PSBcIk9LXCIpIHtcclxuICAgICAgICAgIHZhciBsYXQgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XHJcbiAgICAgICAgICB2YXIgbG5nID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgICAgdmFyIGNvb3JkczogbnVtYmVyW10gPSBbbGF0LCBsbmddO1xyXG4gICAgICAgICAgcmVzb2x2ZShjb29yZHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3Qoc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNsYXNzIEl0ZXJhdGUge1xyXG4gIGFycmF5ID0gW107XHJcbiAgaSA9IDA7XHJcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcclxuICAgIHRoaXMuYXJyYXkgPSBbXS5zbGljZS5jYWxsKGFycmF5KTtcclxuICB9XHJcblxyXG4gIG5leHQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZWwgPSB0aGlzLmFycmF5W3RoaXMuaV07XHJcbiAgICB0aGlzLmkrKztcclxuICAgIHJldHVybiBlbDtcclxuICB9O1xyXG59XHJcbiIsImNsYXNzIE1hcCB7XHJcbiAgbWFwOiBnb29nbGUubWFwcy5NYXA7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1hcCBMb2FkZWRcIilcclxuICAgIHRoaXMubWFwID0gdGhpcy5pbml0KClcclxuICAgIC8vIHRoaXMubGlzdGVuKCdjbGljaycpO1xyXG4gIH1cclxuXHJcbiAgaW5pdCgpOiBnb29nbGUubWFwcy5NYXAge1xyXG4gICAgbGV0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcclxuICAgICAgem9vbTogMTAsXHJcbiAgICAgIGNlbnRlcjogeyBsYXQ6IDQwLjkwNzkxLCBsbmc6IDI5LjE3Njk1IH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1hcC5kYXRhLmxvYWRHZW9Kc29uKFxyXG4gICAgICBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9tYXBzZGV2c2l0ZS9qc29uL2dvb2dsZS5qc29uXCJcclxuICAgICk7XHJcbiAgICByZXR1cm4gbWFwO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuKGV2ZW50TmFtZTogc3RyaW5nLCBmbiA6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLm1hcC5hZGRMaXN0ZW5lcihldmVudE5hbWUsIChmdW5jdGlvbihldmVudCwgX2ZuKXtcclxuICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgMlwiKVxyXG4gICAgICBfZm4oZXZlbnQpXHJcbiAgICAgIHJldHVybiA8YW55PlsxXVxyXG4gICAgfSkoZXZlbnQsIGZuKSk7XHJcbiAgfVxyXG5cclxuICAvLyBtYXBDbGlja0hhbmRsZXIoZSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJtYXBDbGlja0hhbmRsZXJcIilcclxuICAvLyAgIHRoaXMuTWFya2VyT2JqZWN0LmNsb3NlSW5mb1dpbmRvdygpO1xyXG4gIC8vICAgdGhpcy5NYXJrZXJPYmplY3Quc2V0QWxsTWFya2Vyc0RlZmF1bHQoKTtcclxuICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDtcclxuIiwiaW1wb3J0IEluZm9XaW5kb3dPYmplY3QgZnJvbSBcIi4vd2luZG93XCI7XHJcblxyXG5jbGFzcyBNYXJrZXIge1xyXG4gIHB1YmxpYyBtYXJrZXI6IGdvb2dsZS5tYXBzLk1hcmtlcjtcclxuICBwdWJsaWMgbWFya2VyczogW2dvb2dsZS5tYXBzLk1hcmtlcl0gPSA8YW55PltdO1xyXG4gIHB1YmxpYyBtYXA6IGdvb2dsZS5tYXBzLk1hcCA9IG51bGw7XHJcbiAgcHVibGljIGxhc3RXaW5kb3c6IGdvb2dsZS5tYXBzLkluZm9XaW5kb3c7XHJcbiAgcHVibGljIEluZm9XaW5kb3c7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1hcmtlciBMb2FkZWRcIik7XHJcbiAgICB0aGlzLkluZm9XaW5kb3cgPSBuZXcgSW5mb1dpbmRvd09iamVjdCgpO1xyXG4gICAgdGhpcy5sYXN0V2luZG93ID0gdGhpcy5JbmZvV2luZG93Lmxhc3RXaW5kb3c7XHJcbiAgICAvLyB0aGlzLmxhc3RXaW5kb3cgPSB0aGlzLmNyZWF0ZUluZm9XaW5kb3coXCJsb2FkaW5nXCIpOylcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoeyBtYXAsIHBvc2l0aW9uLCB1bnZhbiwgcnVoc2F0Tm8gfSkge1xyXG4gICAgLy8gQ3JlYXRlIGEgbWFya2VyXHJcbiAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgIG1hcCxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICAgIHRpdGxlOiB1bnZhbixcclxuICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcclxuICAgICAgb3BhY2l0eTogMC45XHJcbiAgICAgIC8vIG9wdGltaXplZCA6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIG1hcmtlci5zZXRWYWx1ZXMoe1xyXG4gICAgICBydWhzYXRObzogcnVoc2F0Tm8udHJpbSgpXHJcbiAgICB9KTtcclxuICAgIGlmICghdGhpcy5tYXApIHtcclxuICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICB9XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnNldFpJbmRleCgxMDApO1xyXG4gICAgICB0aGlzLnNldE9wYWNpdHkoMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gdGhpcy5zZXRaSW5kZXgoMTAwKTtcclxuICAgICAgdGhpcy5zZXRPcGFjaXR5KDAuOSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTZXQgY2xpY2sgaGFuZGxlciB0byB0aGUgTWFya2VyXHJcbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIC8vIENsb3NlIGxhc3QgSW5mb1dpbmRvd1xyXG4gICAgICB0aGF0LmNsb3NlSW5mb1dpbmRvdygpO1xyXG5cclxuICAgICAgbGV0IHdpbmRvd0NvbnRlbnRIdG1sID0gYFxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MjUwcHg7bWluLWhlaWdodDozMDBweFwiPlxyXG4gICAgICAgICAgICAgIDxoND4ke3RoaXMuZ2V0VGl0bGUoKX08L2g0PlxyXG4gICAgICAgICAgICAgIMSww6dlcmlrXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAvLyBzZWxlY3RCYXlpRnJvbUxpc3QodGhpcy5ydWhzYXRObyk7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgbmV3IEluZm9XaW5kb3cgZm9yIGNsaWNrZWQgbWFya2VyXHJcbiAgICAgIHRoYXQuSW5mb1dpbmRvdy5zZXRJbmZvV2luZG93KGAke3dpbmRvd0NvbnRlbnRIdG1sfWAsIHRoaXMuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgIC8vIExpc3RlbiBmb3IgSW5mb1dpbmRvdyBjaGFuZ2UgZXZlbnRcclxuICAgICAgdGhhdC5JbmZvV2luZG93Lmxpc3Rlbih0aGF0LnNldEFsbE1hcmtlcnNEZWZhdWx0KTtcclxuICAgICAgLy8gT3BlbiB0aGUgSW5mb1dpbmRvdyBmb3IgY2xpY2tlZCBtYXJrZXJcclxuICAgICAgdGhhdC5sYXN0V2luZG93Lm9wZW4odGhhdC5tYXAsIHRoaXMpO1xyXG4gICAgICAvLyBTZXQgMCB0byBhbGwgbWFya2Vyc1xyXG4gICAgICB0aGF0LnNldEFsbE1hcmtlcnNQYXNzaXZlKCk7XHJcbiAgICAgIC8vIFNldCBoaWdoIGluZGV4IHRvIHRoZSBtYXJrZXJcclxuICAgICAgdGhpcy5zZXRaSW5kZXgoMTAwKTtcclxuICAgICAgdGhpcy5zZXRPcGFjaXR5KDAuOSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VJbmZvV2luZG93KCkge1xyXG4gICAgaWYgKHRoaXMubGFzdFdpbmRvdykgdGhpcy5sYXN0V2luZG93LmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBjbGlja091dHNpZGVPZk1hcmtlcihjb250ZXh0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrT3V0c2lkZU9mTWFya2VyXCIpO1xyXG4gICAgdGhpcy5jbG9zZUluZm9XaW5kb3coKTtcclxuICAgIHRoaXMuc2V0QWxsTWFya2Vyc0RlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHNldEFsbE1hcmtlcnNQYXNzaXZlKCkge1xyXG4gICAgdGhpcy5tYXJrZXJzLm1hcChfbSA9PiB7XHJcbiAgICAgIF9tLnNldFpJbmRleCgxMDApO1xyXG4gICAgICBfbS5zZXRPcGFjaXR5KDAuNSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFsbE1hcmtlcnNEZWZhdWx0KCkge1xyXG4gICAgdGhpcy5tYXJrZXJzLm1hcChfbSA9PiB7XHJcbiAgICAgIF9tLnNldE9wYWNpdHkoMC45KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xyXG4iLCJjbGFzcyBJbmZvV2luZG93T2JqZWN0IHtcclxuICBwdWJsaWMgbGFzdFdpbmRvdztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJbmZvV2luZG93IExvYWRlZFwiKVxyXG4gICAgICB0aGlzLnNldEluZm9XaW5kb3coKTtcclxuICB9XHJcbiAgLy8gQ3JlYXRlIEluZm9XaW5kb3cgaW5zdGFuY2UgZm9yIG1hcmtlclxyXG4gIHB1YmxpYyBzZXRJbmZvV2luZG93KGNvbnRlbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMubGFzdFdpbmRvdykge1xyXG4gICAgICB0aGlzLmxhc3RXaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcbiAgICAgICAgY29udGVudFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oZm46IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLmxhc3RXaW5kb3cuYWRkTGlzdGVuZXIoXCJjbG9zZWNsaWNrXCIsIGUgPT4gZm4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb1dpbmRvd09iamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==