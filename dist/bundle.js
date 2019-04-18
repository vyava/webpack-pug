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

var list_1 = __webpack_require__(/*! ./list */ "./src/list.ts");

var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");

var map;
var elementList = [];
window.addEventListener("load", function () {
  return __awaiter(_this, void 0, void 0, function () {
    var MapObject, MarkerObject, ListObject, UtilsObject, bayiler, bayiIterator, bayi, _a, lat, lng;

    return __generator(this, function (_b) {
      MapObject = new map_1.default();
      map = MapObject.init();
      MarkerObject = new marker_1.default();
      ListObject = new list_1.default();
      UtilsObject = new utils_1.Utils();
      MapObject.listen('click', function () {
        MarkerObject.clickOutsideOfMarker();
      }); // Add click handler to the list elements

      ListObject.addClickHandler(function (id) {
        var ruhsatNo = id;
        var marker = MarkerObject.findMarker(ruhsatNo);
        MarkerObject.markerClickHandler(marker);
      }); // Get elementlist

      elementList = ListObject.getElementList();
      bayiler = UtilsObject.parseBayiler(elementList);
      bayiIterator = new utils_1.Iterate(bayiler);
      bayi = null;

      while ((bayi = bayiIterator.next()) != null) {
        _a = bayi.position ? bayi.position : [0, 0], lat = _a[0], lng = _a[1];
        MarkerObject.create({
          map: map,
          position: {
            lat: lat,
            lng: lng
          },
          unvan: bayi["unvan"],
          ruhsatNo: bayi["ruhsatNo"]
        });
      }

      return [2
      /*return*/
      ];
    });
  });
});

/***/ }),

/***/ "./src/list.ts":
/*!*********************!*\
  !*** ./src/list.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // import Marker from "./marker";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var List =
/** @class */
function () {
  function List() {// this.MarkerObject = new Marker();
  }

  List.prototype.selectBayiFromList = function (ruhsatNo) {
    this.removeActiveElement();
    var el = document.getElementById(ruhsatNo);
    el.classList.add("active");
    this.lastSelectedElement = el;
  };

  List.prototype.removeActiveElement = function () {
    if (this.lastSelectedElement) {
      this.lastSelectedElement.classList.remove("active");
    }
  };

  List.prototype.getElementList = function () {
    return [].slice.call(document.getElementsByClassName("list-group-item"));
  };

  List.prototype.addClickHandler = function (fn) {
    var listWrapper = document.getElementById("list");
    listWrapper.addEventListener("click", function (e) {
      var target = e.target;

      if (target.classList.contains("list-group-item")) {
        var ruhsatNo = target.getAttribute("id");
        fn(ruhsatNo);
      }
    });
  };

  return List;
}();

exports.default = List;

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
    this.init(); // this.listen('click');
  }

  Map.prototype.init = function () {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: {
        lat: 40.90791,
        lng: 29.17695
      }
    }); // map.data.loadGeoJson(
    //   "https://storage.googleapis.com/mapsdevsite/json/google.json"
    // );

    this.map = map;
    return this.map;
  };

  Map.prototype.listen = function (eventName, listener) {
    var _this = this;

    return new Promise(function (resolve) {
      _this.map.addListener(eventName, listener);
    });
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

var list_1 = __webpack_require__(/*! ./list */ "./src/list.ts");

var Marker =
/** @class */
function () {
  function Marker() {
    this.markers = [];
    this.map = null;
    this.InfoWindow = new window_1.default();
    this.lastWindow = this.InfoWindow.lastWindow;
    this.ListObject = new list_1.default();
  }

  Marker.prototype.create = function (_a) {
    var map = _a.map,
        position = _a.position,
        unvan = _a.unvan,
        ruhsatNo = _a.ruhsatNo;
    console.log([position.lat, position.lng]); // Create a marker

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
      that.markerClickHandler(this);
    });
    this.markers.push(marker);
  };

  Marker.prototype.markerClickHandler = function (marker) {
    // console.log(marker.ruhsatNo)
    // Remove active list element
    this.ListObject.selectBayiFromList(marker.ruhsatNo); // Close last InfoWindow

    this.closeInfoWindow(); // Create new InfoWindow for clicked marker

    this.InfoWindow.setInfoWindow("" + marker.getTitle(), marker.getPosition()); // Listen for InfoWindow change event

    this.InfoWindow.listen(this.setAllMarkersDefault); // Open the InfoWindow for clicked marker

    this.lastWindow.open(this.map, marker); // Set 0 to all markers

    this.setAllMarkersPassive(); // Set high index to the marker

    marker.setZIndex(100);
    marker.setOpacity(0.9);
  };

  Marker.prototype.closeInfoWindow = function () {
    if (this.lastWindow) this.lastWindow.close();
  };

  Marker.prototype.findMarker = function (markerId) {
    console.log(markerId);
    return this.markers.find(function (_marker) {
      return _marker.ruhsatNo == markerId;
    });
  };

  Marker.prototype.clickOutsideOfMarker = function () {
    this.closeInfoWindow();
    this.ListObject.removeActiveElement();
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

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Utils =
/** @class */
function () {
  function Utils() {}

  Utils.prototype.parseBayiler = function (elements) {
    var bayiler = []; // Iterate instance

    var elementArray = new Iterate(elements);
    var element = null; // Iterate for elements

    while ((element = elementArray.next()) != null) {
      var bayiInfo = JSON.parse(element.getAttribute("data-info"));
      bayiler.push(bayiInfo);
    }

    return bayiler;
  };

  Utils.prototype.getLatLng = function (adres) {
    return new Promise(function (resolve, reject) {
      var geocoder;

      if (geocoder == undefined) {
        geocoder = new google.maps.Geocoder();
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
  };

  return Utils;
}();

exports.Utils = Utils;

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

exports.Iterate = Iterate;

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
    this.setInfoWindow();
  } // Create InfoWindow instance for marker


  InfoWindowObject.prototype.setInfoWindow = function (message) {
    var content = "\n      <div style=\"width:300px;min-height:270px\">\n        <h5>" + message + "</h5>\n        <table class=\"table\">\n          <tbody>\n              <tr>\n                <th>Ad\u0131 Soyad\u0131</th>\n                  <td>Mehmet Gen\u00E7</td>\n              </tr>\n              <tr>\n                <th>\u0130l</th>\n                  <td>\u0130STANBUL</td>\n              </tr>\n              <tr>\n                <th>\u0130l\u00E7e</th>\n                  <td>KADIK\u00D6Y</td>\n              </tr>\n              <tr>\n                <th>Ruhsat No</th>\n                  <td>3435867PT</td>\n              </tr>\n              <tr>\n                <th>T\u0130P</th>\n                  <td>BAKKAL</td>\n              </tr>\n              <tr>\n                <th>T\u0130P DSD</th>\n                  <td>01BAK</td>\n              </tr>\n              <tr>\n                <th>Adres</th>\n                  <td>Atalar Mah K\u00F6ro\u011Flu Cad No:46 D:7</td>\n              </tr>\n          </tbody>\n      </table>\n      </div>\n    ";

    if (!this.lastWindow) {
      this.lastWindow = new google.maps.InfoWindow({
        content: content
      });
    } else {
      this.lastWindow.setContent(content);
    }
  }; // private setInfoWindowHtml(marker: google.maps.Marker) {}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBQUE7O0FBQ0E7O0FB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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IE1hcCBmcm9tIFwiLi9tYXBcIjtcclxuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi9tYXJrZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xyXG5pbXBvcnQge0l0ZXJhdGUsIFV0aWxzfSBmcm9tIFwiLi91dGlsc1wiO1xyXG4vLyBkZWNsYXJlIHZhciBnb29nbGU7XHJcbmRlY2xhcmUgdmFyIE1hcmtlckNsdXN0ZXJlcjtcclxuXHJcbnZhciBtYXA6IGdvb2dsZS5tYXBzLk1hcDtcclxudmFyIGVsZW1lbnRMaXN0OiBbSFRNTEVsZW1lbnRdID0gPGFueT5bXTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgLy8gSW5zdGFuY2Ugb2YgTWFwXHJcbiAgY29uc3QgTWFwT2JqZWN0ID0gbmV3IE1hcCgpO1xyXG4gIG1hcCA9IE1hcE9iamVjdC5pbml0KCk7XHJcblxyXG4gIC8vIEluc3RhbmNlIG9mIE1hcmtlclxyXG4gIGNvbnN0IE1hcmtlck9iamVjdCA9IG5ldyBNYXJrZXIoKTtcclxuXHJcbiAgLy8gSW5zdGFuY2Ugb2YgTGlzdFxyXG4gIGNvbnN0IExpc3RPYmplY3QgPSBuZXcgTGlzdCgpO1xyXG5cclxuICAvLyBJbnN0YW5jZSBvZiBVdGlscyBhbmQgSXRlcmF0ZVxyXG4gIGNvbnN0IFV0aWxzT2JqZWN0ID0gbmV3IFV0aWxzKCk7XHJcblxyXG4gIE1hcE9iamVjdC5saXN0ZW4oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIE1hcmtlck9iamVjdC5jbGlja091dHNpZGVPZk1hcmtlcigpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBBZGQgY2xpY2sgaGFuZGxlciB0byB0aGUgbGlzdCBlbGVtZW50c1xyXG4gIExpc3RPYmplY3QuYWRkQ2xpY2tIYW5kbGVyKChpZCkgPT4ge1xyXG4gICAgbGV0IHJ1aHNhdE5vID0gaWQ7XHJcblxyXG4gICAgbGV0IG1hcmtlciA9IE1hcmtlck9iamVjdC5maW5kTWFya2VyKHJ1aHNhdE5vKTtcclxuICAgIE1hcmtlck9iamVjdC5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKVxyXG4gIH0pO1xyXG5cclxuICAvLyBHZXQgZWxlbWVudGxpc3RcclxuICBlbGVtZW50TGlzdCA9IExpc3RPYmplY3QuZ2V0RWxlbWVudExpc3QoKTtcclxuXHJcbiAgbGV0IGJheWlsZXIgPSBVdGlsc09iamVjdC5wYXJzZUJheWlsZXIoZWxlbWVudExpc3QpO1xyXG5cclxuICAvLyBJdGVyYXRlIGZvciBDb29yZHNcclxuICBsZXQgYmF5aUl0ZXJhdG9yID0gbmV3IEl0ZXJhdGUoYmF5aWxlcik7XHJcblxyXG4gIGxldCBiYXlpID0gbnVsbDtcclxuICB3aGlsZSAoKGJheWkgPSBiYXlpSXRlcmF0b3IubmV4dCgpKSAhPSBudWxsKSB7XHJcbiAgICAvLyBHZXQgY29vcmRzIGZyb20gYWRkcmVzIGJ5IEdlb0NvZGVyXHJcbiAgICAvLyBsZXQgW2xhdCwgbG5nXTogW251bWJlciwgbnVtYmVyXSA9IGF3YWl0IFV0aWxzT2JqZWN0LmdldExhdExuZyhiYXlpLmFkcmVzKTtcclxuICAgIFxyXG4gICAgLy8gR2V0IGNvb3JkcyBmcm9tIGRhdGFcclxuICAgIGxldCBbbGF0LCBsbmddOiBbbnVtYmVyLCBudW1iZXJdID0gYmF5aS5wb3NpdGlvbiA/IGJheWkucG9zaXRpb24gOiBbMCwwXVxyXG5cclxuICAgIE1hcmtlck9iamVjdC5jcmVhdGUoe1xyXG4gICAgICBtYXAsXHJcbiAgICAgIHBvc2l0aW9uOiB7IGxhdCwgbG5nIH0sXHJcbiAgICAgIHVudmFuOiBiYXlpW1widW52YW5cIl0sXHJcbiAgICAgIHJ1aHNhdE5vOiBiYXlpW1wicnVoc2F0Tm9cIl1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKG1hcCwgJ3RpbGVzbG9hZGVkJywgZnVuY3Rpb24oZSl7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKVxyXG4gIC8vIH0pXHJcbiAgLy8gdmFyIG1hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3RlcmVyKG1hcCwgTWFya2VyT2JqZWN0Lm1hcmtlcnMsIHtcclxuICAvLyAgIGltYWdlUGF0aDpcclxuICAvLyAgICAgXCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9tYXJrZXJjbHVzdGVyZXIvbVwiXHJcbiAgLy8gfSk7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gaW1wb3J0IE1hcmtlciBmcm9tIFwiLi9tYXJrZXJcIjtcclxuXHJcbmNsYXNzIExpc3Qge1xyXG4gIE1hcmtlck9iamVjdDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRoaXMuTWFya2VyT2JqZWN0ID0gbmV3IE1hcmtlcigpO1xyXG4gIH1cclxuICBsYXN0U2VsZWN0ZWRFbGVtZW50O1xyXG4gIHNlbGVjdEJheWlGcm9tTGlzdChydWhzYXRObzogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlbW92ZUFjdGl2ZUVsZW1lbnQoKTtcclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJ1aHNhdE5vKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgdGhpcy5sYXN0U2VsZWN0ZWRFbGVtZW50ID0gZWw7XHJcbiAgfVxyXG5cclxuICByZW1vdmVBY3RpdmVFbGVtZW50KCkge1xyXG4gICAgaWYgKHRoaXMubGFzdFNlbGVjdGVkRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmxhc3RTZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0RWxlbWVudExpc3QoKSB7XHJcbiAgICByZXR1cm4gW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdC1ncm91cC1pdGVtXCIpKTtcclxuICB9XHJcblxyXG4gIGFkZENsaWNrSGFuZGxlcihmbikge1xyXG4gICAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIik7XHJcbiAgICBsaXN0V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpc3QtZ3JvdXAtaXRlbVwiKSkge1xyXG4gICAgICAgIGxldCBydWhzYXRObyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBmbihydWhzYXRObylcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCJjbGFzcyBNYXAge1xyXG4gIG1hcDogZ29vZ2xlLm1hcHMuTWFwO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJNYXAgTG9hZGVkXCIpXHJcbiAgICB0aGlzLmluaXQoKVxyXG4gICAgLy8gdGhpcy5saXN0ZW4oJ2NsaWNrJyk7XHJcbiAgfVxyXG5cclxuICBpbml0KCk6IGdvb2dsZS5tYXBzLk1hcCB7XHJcbiAgICBsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xyXG4gICAgICB6b29tOiAxMCxcclxuICAgICAgY2VudGVyOiB7IGxhdDogNDAuOTA3OTEsIGxuZzogMjkuMTc2OTUgfVxyXG4gICAgfSk7XHJcbiAgICAvLyBtYXAuZGF0YS5sb2FkR2VvSnNvbihcclxuICAgIC8vICAgXCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbWFwc2RldnNpdGUvanNvbi9nb29nbGUuanNvblwiXHJcbiAgICAvLyApO1xyXG4gICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICByZXR1cm4gdGhpcy5tYXBcclxuICB9XHJcblxyXG4gIGxpc3RlbihldmVudE5hbWU6IHN0cmluZywgbGlzdGVuZXIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLm1hcC5hZGRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcclxuICAgIH0pXHJcbiAgICBcclxuICB9XHJcblxyXG4gIC8vIG1hcENsaWNrSGFuZGxlcihlKSB7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcIm1hcENsaWNrSGFuZGxlclwiKVxyXG4gIC8vICAgdGhpcy5NYXJrZXJPYmplY3QuY2xvc2VJbmZvV2luZG93KCk7XHJcbiAgLy8gICB0aGlzLk1hcmtlck9iamVjdC5zZXRBbGxNYXJrZXJzRGVmYXVsdCgpO1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwO1xyXG4iLCJpbXBvcnQgSW5mb1dpbmRvd09iamVjdCBmcm9tIFwiLi93aW5kb3dcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xyXG5cclxuY2xhc3MgTWFya2VyIHtcclxuICBwdWJsaWMgbWFya2VyOiBnb29nbGUubWFwcy5NYXJrZXI7XHJcbiAgcHVibGljIG1hcmtlcnM6IFtnb29nbGUubWFwcy5NYXJrZXJdID0gPGFueT5bXTtcclxuICBwdWJsaWMgbWFwOiBnb29nbGUubWFwcy5NYXAgPSBudWxsO1xyXG4gIHB1YmxpYyBsYXN0V2luZG93OiBnb29nbGUubWFwcy5JbmZvV2luZG93O1xyXG4gIHB1YmxpYyBJbmZvV2luZG93O1xyXG4gIHB1YmxpYyBMaXN0T2JqZWN0O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5JbmZvV2luZG93ID0gbmV3IEluZm9XaW5kb3dPYmplY3QoKTtcclxuICAgIHRoaXMubGFzdFdpbmRvdyA9IHRoaXMuSW5mb1dpbmRvdy5sYXN0V2luZG93O1xyXG4gICAgdGhpcy5MaXN0T2JqZWN0ID0gbmV3IExpc3QoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoeyBtYXAsIHBvc2l0aW9uLCB1bnZhbiwgcnVoc2F0Tm8gfSkge1xyXG4gICAgY29uc29sZS5sb2coW3Bvc2l0aW9uLmxhdCwgcG9zaXRpb24ubG5nXSlcclxuICAgIC8vIENyZWF0ZSBhIG1hcmtlclxyXG4gICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBtYXAsXHJcbiAgICAgIHBvc2l0aW9uLFxyXG4gICAgICB0aXRsZTogdW52YW4sXHJcbiAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXHJcbiAgICAgIG9wYWNpdHk6IDAuOVxyXG4gICAgICAvLyBvcHRpbWl6ZWQgOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBtYXJrZXIuc2V0VmFsdWVzKHtcclxuICAgICAgcnVoc2F0Tm86IHJ1aHNhdE5vLnRyaW0oKVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXRoaXMubWFwKSB7XHJcbiAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgfVxyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5zZXRaSW5kZXgoMTAwKTtcclxuICAgICAgdGhpcy5zZXRPcGFjaXR5KDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIHRoaXMuc2V0WkluZGV4KDEwMCk7XHJcbiAgICAgIHRoaXMuc2V0T3BhY2l0eSgwLjkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2V0IGNsaWNrIGhhbmRsZXIgdG8gdGhlIE1hcmtlclxyXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGF0Lm1hcmtlckNsaWNrSGFuZGxlcih0aGlzKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICB9XHJcblxyXG4gIG1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpIHtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhtYXJrZXIucnVoc2F0Tm8pXHJcblxyXG4gICAgLy8gUmVtb3ZlIGFjdGl2ZSBsaXN0IGVsZW1lbnRcclxuICAgIHRoaXMuTGlzdE9iamVjdC5zZWxlY3RCYXlpRnJvbUxpc3QobWFya2VyLnJ1aHNhdE5vKVxyXG4gICAgLy8gQ2xvc2UgbGFzdCBJbmZvV2luZG93XHJcbiAgICB0aGlzLmNsb3NlSW5mb1dpbmRvdygpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgSW5mb1dpbmRvdyBmb3IgY2xpY2tlZCBtYXJrZXJcclxuICAgIHRoaXMuSW5mb1dpbmRvdy5zZXRJbmZvV2luZG93KGAke21hcmtlci5nZXRUaXRsZSgpfWAsIG1hcmtlci5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAvLyBMaXN0ZW4gZm9yIEluZm9XaW5kb3cgY2hhbmdlIGV2ZW50XHJcbiAgICB0aGlzLkluZm9XaW5kb3cubGlzdGVuKHRoaXMuc2V0QWxsTWFya2Vyc0RlZmF1bHQpO1xyXG4gICAgLy8gT3BlbiB0aGUgSW5mb1dpbmRvdyBmb3IgY2xpY2tlZCBtYXJrZXJcclxuICAgIHRoaXMubGFzdFdpbmRvdy5vcGVuKHRoaXMubWFwLCBtYXJrZXIpO1xyXG4gICAgLy8gU2V0IDAgdG8gYWxsIG1hcmtlcnNcclxuICAgIHRoaXMuc2V0QWxsTWFya2Vyc1Bhc3NpdmUoKTtcclxuICAgIC8vIFNldCBoaWdoIGluZGV4IHRvIHRoZSBtYXJrZXJcclxuICAgIG1hcmtlci5zZXRaSW5kZXgoMTAwKTtcclxuICAgIG1hcmtlci5zZXRPcGFjaXR5KDAuOSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZUluZm9XaW5kb3coKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0V2luZG93KSB0aGlzLmxhc3RXaW5kb3cuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGZpbmRNYXJrZXIobWFya2VySWQgOiBzdHJpbmcpe1xyXG4gICAgY29uc29sZS5sb2cobWFya2VySWQpXHJcbiAgICByZXR1cm4gdGhpcy5tYXJrZXJzLmZpbmQoKF9tYXJrZXIgOiBhbnkpID0+IF9tYXJrZXIucnVoc2F0Tm8gPT0gbWFya2VySWQpXHJcbiAgfVxyXG5cclxuICBjbGlja091dHNpZGVPZk1hcmtlcigpIHtcclxuICAgIHRoaXMuY2xvc2VJbmZvV2luZG93KCk7XHJcbiAgICB0aGlzLkxpc3RPYmplY3QucmVtb3ZlQWN0aXZlRWxlbWVudCgpXHJcbiAgICB0aGlzLnNldEFsbE1hcmtlcnNEZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRBbGxNYXJrZXJzUGFzc2l2ZSgpIHtcclxuICAgIHRoaXMubWFya2Vycy5tYXAoX20gPT4ge1xyXG4gICAgICBfbS5zZXRaSW5kZXgoMTAwKTtcclxuICAgICAgX20uc2V0T3BhY2l0eSgwLjUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBbGxNYXJrZXJzRGVmYXVsdCgpIHtcclxuICAgIHRoaXMubWFya2Vycy5tYXAoX20gPT4ge1xyXG4gICAgICBfbS5zZXRPcGFjaXR5KDAuOSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcclxuIiwiY2xhc3MgVXRpbHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcGFyc2VCYXlpbGVyKGVsZW1lbnRzKSB7XHJcbiAgICBsZXQgYmF5aWxlciA9IFtdO1xyXG4gICAgLy8gSXRlcmF0ZSBpbnN0YW5jZVxyXG4gICAgbGV0IGVsZW1lbnRBcnJheSA9IG5ldyBJdGVyYXRlKGVsZW1lbnRzKTtcclxuICAgIGxldCBlbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICAvLyBJdGVyYXRlIGZvciBlbGVtZW50c1xyXG4gICAgd2hpbGUgKChlbGVtZW50ID0gZWxlbWVudEFycmF5Lm5leHQoKSkgIT0gbnVsbCkge1xyXG4gICAgICBsZXQgYmF5aUluZm8gPSBKU09OLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmZvXCIpKTtcclxuXHJcbiAgICAgIGJheWlsZXIucHVzaChiYXlpSW5mbyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmF5aWxlcjtcclxuICB9XHJcblxyXG4gIGdldExhdExuZyhhZHJlcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB2YXIgZ2VvY29kZXI7XHJcbiAgICAgIGlmIChnZW9jb2RlciA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBHZW9jb2RlIGFuIGFkZHJlc3MuXHJcbiAgICAgIGdlb2NvZGVyLmdlb2NvZGUoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYWRkcmVzczogYWRyZXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyA9PSBcIk9LXCIpIHtcclxuICAgICAgICAgICAgdmFyIGxhdCA9IHJlc3VsdFswXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKTtcclxuICAgICAgICAgICAgdmFyIGxuZyA9IHJlc3VsdFswXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKTtcclxuICAgICAgICAgICAgdmFyIGNvb3JkczogbnVtYmVyW10gPSBbbGF0LCBsbmddO1xyXG4gICAgICAgICAgICByZXNvbHZlKGNvb3Jkcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZWplY3Qoc3RhdHVzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEl0ZXJhdGUge1xyXG4gIGFycmF5ID0gW107XHJcbiAgaSA9IDA7XHJcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcclxuICAgIHRoaXMuYXJyYXkgPSBbXS5zbGljZS5jYWxsKGFycmF5KTtcclxuICB9XHJcblxyXG4gIG5leHQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZWwgPSB0aGlzLmFycmF5W3RoaXMuaV07XHJcbiAgICB0aGlzLmkrKztcclxuICAgIHJldHVybiBlbDtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgeyBVdGlscywgSXRlcmF0ZSB9O1xyXG4iLCJjbGFzcyBJbmZvV2luZG93T2JqZWN0IHtcclxuICBwdWJsaWMgbGFzdFdpbmRvdzogZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2V0SW5mb1dpbmRvdygpO1xyXG4gIH1cclxuICAvLyBDcmVhdGUgSW5mb1dpbmRvdyBpbnN0YW5jZSBmb3IgbWFya2VyXHJcbiAgcHVibGljIHNldEluZm9XaW5kb3cobWVzc2FnZT86IHN0cmluZykge1xyXG4gICAgY29uc3QgY29udGVudCA9IGBcclxuICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOjMwMHB4O21pbi1oZWlnaHQ6MjcwcHhcIj5cclxuICAgICAgICA8aDU+JHttZXNzYWdlfTwvaDU+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+QWTEsSBTb3lhZMSxPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPk1laG1ldCBHZW7DpzwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+xLBsPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPsSwU1RBTkJVTDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+xLBsw6dlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPktBRElLw5ZZPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5SdWhzYXQgTm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+MzQzNTg2N1BUPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5UxLBQPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPkJBS0tBTDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+VMSwUCBEU0Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+MDFCQUs8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkFkcmVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPkF0YWxhciBNYWggS8O2cm/En2x1IENhZCBObzo0NiBEOjc8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxhc3RXaW5kb3cpIHtcclxuICAgICAgdGhpcy5sYXN0V2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG4gICAgICAgIGNvbnRlbnRcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxhc3RXaW5kb3cuc2V0Q29udGVudChjb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgc2V0SW5mb1dpbmRvd0h0bWwobWFya2VyOiBnb29nbGUubWFwcy5NYXJrZXIpIHt9XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oZm46IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLmxhc3RXaW5kb3cuYWRkTGlzdGVuZXIoXCJjbG9zZWNsaWNrXCIsIGUgPT4gZm4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb1dpbmRvd09iamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==