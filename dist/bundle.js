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
          map = MapObject.init();
          MarkerObject = new marker_1.default();
          MapObject.listen('click', function (event) {
            MarkerObject.clickOutsideOfMarker(this);
          }); // Get elementlist

          elementList = getElementList();
          bayiler = parseBayiler(elementList);
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

var Marker =
/** @class */
function () {
  function Marker() {
    this.markers = [];
    this.map = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2luZG93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7QUFBQTs7QUFDQTs7QUFJQSxJQUFJLEdBQUo7QUFDQSxJQUFJLFdBQVcsR0FBdUIsRUFBdEM7QUFDQSxJQUFJLG1CQUFK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NEI7QUFDMUIsU0FBSyxlQUFMO0FBQ0EsU0FBSyxvQkFBTDtBQUNELEdBSEQ7O0FBS0E7QUFDRSxTQUFLLE9BQUwsQ0FBYSxHQUFiLENBQWlCLGNBQUU7QUFDakIsUUFBRSxDQUFDLFNBQUgsQ0FBYSxHQUFiOztBQUNBLFFBQUUsQ0FBQyxVQUFILENBQWMsR0FBZDtBQUNELEtBSEQ7QUFJRCxHQUxEOztBQU9BO0FBQ0UsU0FBSyxPQUFMLENBQWEsR0FBYixDQUFpQixjQUFFO0FBQ2pCLFFBQUUsQ0FBQyxVQUFILENBQWMsR0FBZDtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQUtGO0FBQUMsQ0EzRkQ7O0FBNkZBLGtCQUFlLE1BQWYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZBO0FBQUE7QUFBQTtBQUVFO0FBQ0ksV0FBTyxDQUFDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLFNBQUssYUFBTDtBQUNILEdBTEgsQ0FNRTs7O0FBQ08sNkNBQVAsVUFBcUIsT0FBckIsRUFBdUMsUUFBdkMsRUFBcUQ7QUFDbkQsUUFBSSxDQUFDLEtBQUssVUFBVixFQUFzQjtBQUNwQixXQUFLLFVBQUwsR0FBa0IsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLFVBQWhCLENBQTJCO0FBQzNDLGVBQU87QUFEb0MsT0FBM0IsQ0FBbEI7QUFHRDtBQUNGLEdBTk07O0FBUUEsc0NBQVAsVUFBYyxFQUFkLEVBQTBCO0FBQ3hCLFNBQUssVUFBTCxDQUFnQixXQUFoQixDQUE0QixZQUE1QixFQUEwQyxhQUFDO0FBQUk7QUFBRSxLQUFqRDtBQUNELEdBRk07O0FBR1Q7QUFBQyxDQWxCRDs7QUFvQkEsa0JBQWUsZ0JBQWYsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBNYXAgZnJvbSBcIi4vbWFwXCI7XHJcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4vbWFya2VyXCI7XHJcbi8vIGRlY2xhcmUgdmFyIGdvb2dsZTtcclxuZGVjbGFyZSB2YXIgTWFya2VyQ2x1c3RlcmVyO1xyXG5cclxudmFyIG1hcDogZ29vZ2xlLm1hcHMuTWFwO1xyXG52YXIgZWxlbWVudExpc3Q6IFtIVE1MRWxlbWVudF0gPSA8YW55PltdO1xyXG5sZXQgbGFzdFNlbGVjdGVkRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcclxuICAvLyBJbnN0YW5jZSBvZiBNYXBcclxuICBsZXQgTWFwT2JqZWN0ID0gbmV3IE1hcCgpO1xyXG4gIG1hcCA9IE1hcE9iamVjdC5pbml0KCk7XHJcbiAgLy8gSW5zdGFuY2Ugb2YgTWFya2VyXHJcbiAgbGV0IE1hcmtlck9iamVjdCA9IG5ldyBNYXJrZXIoKTtcclxuICBcclxuICAgIFxyXG5cclxuICBNYXBPYmplY3QubGlzdGVuKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgIE1hcmtlck9iamVjdC5jbGlja091dHNpZGVPZk1hcmtlcih0aGlzKVxyXG4gIH0pO1xyXG5cclxuICAvLyBHZXQgZWxlbWVudGxpc3RcclxuICBlbGVtZW50TGlzdCA9IGdldEVsZW1lbnRMaXN0KCk7XHJcblxyXG4gIGxldCBiYXlpbGVyID0gcGFyc2VCYXlpbGVyKGVsZW1lbnRMaXN0KTtcclxuXHJcbiAgXHJcblxyXG4gIC8vIEl0ZXJhdGUgZm9yIENvb3Jkc1xyXG4gIGxldCBiYXlpSXRlcmF0b3IgPSBuZXcgSXRlcmF0ZShiYXlpbGVyKTtcclxuXHJcbiAgbGV0IGJheWkgPSBudWxsO1xyXG5cclxuICB3aGlsZSAoKGJheWkgPSBiYXlpSXRlcmF0b3IubmV4dCgpKSAhPSBudWxsKSB7XHJcbiAgICAvLyBHZXQgY29vcmRzIGZyb20gYWRkcmVzXHJcbiAgICBsZXQgW2xhdCwgbG5nXTogW251bWJlciwgbnVtYmVyXSA9IGF3YWl0IGdldExhdExuZyhiYXlpLmFkcmVzKTtcclxuXHJcbiAgICBNYXJrZXJPYmplY3QuY3JlYXRlKHtcclxuICAgICAgbWFwLFxyXG4gICAgICBwb3NpdGlvbjogeyBsYXQsIGxuZyB9LFxyXG4gICAgICB1bnZhbjogYmF5aVtcInVudmFuXCJdLFxyXG4gICAgICBydWhzYXRObzogYmF5aVtcInJ1aHNhdE5vXCJdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyT25jZShtYXAsICd0aWxlc2xvYWRlZCcsIGZ1bmN0aW9uKGUpe1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJsb2FkZWRcIilcclxuICAvLyB9KVxyXG4gIHZhciBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlcihtYXAsIE1hcmtlck9iamVjdC5tYXJrZXJzLCB7XHJcbiAgICBpbWFnZVBhdGg6XHJcbiAgICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL21cIlxyXG4gIH0pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHNlbGVjdEJheWlGcm9tTGlzdChydWhzYXRObzogc3RyaW5nKSB7XHJcbiAgaWYgKGxhc3RTZWxlY3RlZEVsZW1lbnQpIHtcclxuICAgIGxhc3RTZWxlY3RlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9XHJcbiAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocnVoc2F0Tm8pO1xyXG4gIGVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gIGxhc3RTZWxlY3RlZEVsZW1lbnQgPSBlbDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VCYXlpbGVyKGVsZW1lbnRzKSB7XHJcbiAgbGV0IGJheWlsZXIgPSBbXTtcclxuICAvLyBJdGVyYXRlIGluc3RhbmNlXHJcbiAgbGV0IGVsZW1lbnRBcnJheSA9IG5ldyBJdGVyYXRlKGVsZW1lbnRzKTtcclxuICBsZXQgZWxlbWVudCA9IG51bGw7XHJcblxyXG4gIC8vIEl0ZXJhdGUgZm9yIGVsZW1lbnRzXHJcbiAgd2hpbGUgKChlbGVtZW50ID0gZWxlbWVudEFycmF5Lm5leHQoKSkgIT0gbnVsbCkge1xyXG4gICAgbGV0IGJheWlJbmZvID0gSlNPTi5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5mb1wiKSk7XHJcblxyXG4gICAgYmF5aWxlci5wdXNoKGJheWlJbmZvKTtcclxuICB9XHJcbiAgcmV0dXJuIGJheWlsZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRMaXN0KCkge1xyXG4gIHJldHVybiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0LWdyb3VwLWl0ZW1cIikpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMYXRMbmcoYWRyZXMpOiBQcm9taXNlPGFueT4ge1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB2YXIgZ2VvY29kZXI7XHJcbiAgICBpZiAoZ2VvY29kZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInphdGVuIHZhclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW9jb2RlIGFuIGFkZHJlc3MuXHJcbiAgICBnZW9jb2Rlci5nZW9jb2RlKFxyXG4gICAgICB7XHJcbiAgICAgICAgYWRkcmVzczogYWRyZXNcclxuICAgICAgfSxcclxuICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHN0YXR1cyA9PSBcIk9LXCIpIHtcclxuICAgICAgICAgIHZhciBsYXQgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XHJcbiAgICAgICAgICB2YXIgbG5nID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgICAgdmFyIGNvb3JkczogbnVtYmVyW10gPSBbbGF0LCBsbmddO1xyXG4gICAgICAgICAgcmVzb2x2ZShjb29yZHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZWplY3Qoc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNsYXNzIEl0ZXJhdGUge1xyXG4gIGFycmF5ID0gW107XHJcbiAgaSA9IDA7XHJcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcclxuICAgIHRoaXMuYXJyYXkgPSBbXS5zbGljZS5jYWxsKGFycmF5KTtcclxuICB9XHJcblxyXG4gIG5leHQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZWwgPSB0aGlzLmFycmF5W3RoaXMuaV07XHJcbiAgICB0aGlzLmkrKztcclxuICAgIHJldHVybiBlbDtcclxuICB9O1xyXG59XHJcbiIsImNsYXNzIE1hcCB7XHJcbiAgbWFwOiBnb29nbGUubWFwcy5NYXA7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1hcCBMb2FkZWRcIilcclxuICAgIHRoaXMuaW5pdCgpXHJcbiAgICAvLyB0aGlzLmxpc3RlbignY2xpY2snKTtcclxuICB9XHJcblxyXG4gIGluaXQoKTogZ29vZ2xlLm1hcHMuTWFwIHtcclxuICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XHJcbiAgICAgIHpvb206IDEwLFxyXG4gICAgICBjZW50ZXI6IHsgbGF0OiA0MC45MDc5MSwgbG5nOiAyOS4xNzY5NSB9XHJcbiAgICB9KTtcclxuICAgIC8vIG1hcC5kYXRhLmxvYWRHZW9Kc29uKFxyXG4gICAgLy8gICBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9tYXBzZGV2c2l0ZS9qc29uL2dvb2dsZS5qc29uXCJcclxuICAgIC8vICk7XHJcbiAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIHJldHVybiB0aGlzLm1hcFxyXG4gIH1cclxuXHJcbiAgbGlzdGVuKGV2ZW50TmFtZTogc3RyaW5nLCBsaXN0ZW5lcikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMubWFwLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy8gbWFwQ2xpY2tIYW5kbGVyKGUpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwibWFwQ2xpY2tIYW5kbGVyXCIpXHJcbiAgLy8gICB0aGlzLk1hcmtlck9iamVjdC5jbG9zZUluZm9XaW5kb3coKTtcclxuICAvLyAgIHRoaXMuTWFya2VyT2JqZWN0LnNldEFsbE1hcmtlcnNEZWZhdWx0KCk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiIsImltcG9ydCBJbmZvV2luZG93T2JqZWN0IGZyb20gXCIuL3dpbmRvd1wiO1xyXG5cclxuY2xhc3MgTWFya2VyIHtcclxuICBwdWJsaWMgbWFya2VyOiBnb29nbGUubWFwcy5NYXJrZXI7XHJcbiAgcHVibGljIG1hcmtlcnM6IFtnb29nbGUubWFwcy5NYXJrZXJdID0gPGFueT5bXTtcclxuICBwdWJsaWMgbWFwOiBnb29nbGUubWFwcy5NYXAgPSBudWxsO1xyXG4gIHB1YmxpYyBsYXN0V2luZG93OiBnb29nbGUubWFwcy5JbmZvV2luZG93O1xyXG4gIHB1YmxpYyBJbmZvV2luZG93O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5JbmZvV2luZG93ID0gbmV3IEluZm9XaW5kb3dPYmplY3QoKTtcclxuICAgIHRoaXMubGFzdFdpbmRvdyA9IHRoaXMuSW5mb1dpbmRvdy5sYXN0V2luZG93O1xyXG4gICAgLy8gdGhpcy5sYXN0V2luZG93ID0gdGhpcy5jcmVhdGVJbmZvV2luZG93KFwibG9hZGluZ1wiKTspXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKHsgbWFwLCBwb3NpdGlvbiwgdW52YW4sIHJ1aHNhdE5vIH0pIHtcclxuICAgIC8vIENyZWF0ZSBhIG1hcmtlclxyXG4gICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBtYXAsXHJcbiAgICAgIHBvc2l0aW9uLFxyXG4gICAgICB0aXRsZTogdW52YW4sXHJcbiAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXHJcbiAgICAgIG9wYWNpdHk6IDAuOVxyXG4gICAgICAvLyBvcHRpbWl6ZWQgOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBtYXJrZXIuc2V0VmFsdWVzKHtcclxuICAgICAgcnVoc2F0Tm86IHJ1aHNhdE5vLnRyaW0oKVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXRoaXMubWFwKSB7XHJcbiAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgfVxyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5zZXRaSW5kZXgoMTAwKTtcclxuICAgICAgdGhpcy5zZXRPcGFjaXR5KDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIHRoaXMuc2V0WkluZGV4KDEwMCk7XHJcbiAgICAgIHRoaXMuc2V0T3BhY2l0eSgwLjkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2V0IGNsaWNrIGhhbmRsZXIgdG8gdGhlIE1hcmtlclxyXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAvLyBDbG9zZSBsYXN0IEluZm9XaW5kb3dcclxuICAgICAgdGhhdC5jbG9zZUluZm9XaW5kb3coKTtcclxuXHJcbiAgICAgIGxldCB3aW5kb3dDb250ZW50SHRtbCA9IGBcclxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOjI1MHB4O21pbi1oZWlnaHQ6MzAwcHhcIj5cclxuICAgICAgICAgICAgICA8aDQ+JHt0aGlzLmdldFRpdGxlKCl9PC9oND5cclxuICAgICAgICAgICAgICDEsMOnZXJpa1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgLy8gc2VsZWN0QmF5aUZyb21MaXN0KHRoaXMucnVoc2F0Tm8pO1xyXG5cclxuICAgICAgLy8gQ3JlYXRlIG5ldyBJbmZvV2luZG93IGZvciBjbGlja2VkIG1hcmtlclxyXG4gICAgICB0aGF0LkluZm9XaW5kb3cuc2V0SW5mb1dpbmRvdyhgJHt3aW5kb3dDb250ZW50SHRtbH1gLCB0aGlzLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAvLyBMaXN0ZW4gZm9yIEluZm9XaW5kb3cgY2hhbmdlIGV2ZW50XHJcbiAgICAgIHRoYXQuSW5mb1dpbmRvdy5saXN0ZW4odGhhdC5zZXRBbGxNYXJrZXJzRGVmYXVsdCk7XHJcbiAgICAgIC8vIE9wZW4gdGhlIEluZm9XaW5kb3cgZm9yIGNsaWNrZWQgbWFya2VyXHJcbiAgICAgIHRoYXQubGFzdFdpbmRvdy5vcGVuKHRoYXQubWFwLCB0aGlzKTtcclxuICAgICAgLy8gU2V0IDAgdG8gYWxsIG1hcmtlcnNcclxuICAgICAgdGhhdC5zZXRBbGxNYXJrZXJzUGFzc2l2ZSgpO1xyXG4gICAgICAvLyBTZXQgaGlnaCBpbmRleCB0byB0aGUgbWFya2VyXHJcbiAgICAgIHRoaXMuc2V0WkluZGV4KDEwMCk7XHJcbiAgICAgIHRoaXMuc2V0T3BhY2l0eSgwLjkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICB9XHJcblxyXG4gIGNsb3NlSW5mb1dpbmRvdygpIHtcclxuICAgIGlmICh0aGlzLmxhc3RXaW5kb3cpIHRoaXMubGFzdFdpbmRvdy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tPdXRzaWRlT2ZNYXJrZXIoY29udGV4dCkge1xyXG4gICAgdGhpcy5jbG9zZUluZm9XaW5kb3coKTtcclxuICAgIHRoaXMuc2V0QWxsTWFya2Vyc0RlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHNldEFsbE1hcmtlcnNQYXNzaXZlKCkge1xyXG4gICAgdGhpcy5tYXJrZXJzLm1hcChfbSA9PiB7XHJcbiAgICAgIF9tLnNldFpJbmRleCgxMDApO1xyXG4gICAgICBfbS5zZXRPcGFjaXR5KDAuNSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFsbE1hcmtlcnNEZWZhdWx0KCkge1xyXG4gICAgdGhpcy5tYXJrZXJzLm1hcChfbSA9PiB7XHJcbiAgICAgIF9tLnNldE9wYWNpdHkoMC45KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xyXG4iLCJjbGFzcyBJbmZvV2luZG93T2JqZWN0IHtcclxuICBwdWJsaWMgbGFzdFdpbmRvdztcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJJbmZvV2luZG93IExvYWRlZFwiKVxyXG4gICAgICB0aGlzLnNldEluZm9XaW5kb3coKTtcclxuICB9XHJcbiAgLy8gQ3JlYXRlIEluZm9XaW5kb3cgaW5zdGFuY2UgZm9yIG1hcmtlclxyXG4gIHB1YmxpYyBzZXRJbmZvV2luZG93KGNvbnRlbnQ/OiBzdHJpbmcsIHBvc2l0aW9uPzogYW55KSB7XHJcbiAgICBpZiAoIXRoaXMubGFzdFdpbmRvdykge1xyXG4gICAgICB0aGlzLmxhc3RXaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcbiAgICAgICAgY29udGVudFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oZm46IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLmxhc3RXaW5kb3cuYWRkTGlzdGVuZXIoXCJjbG9zZWNsaWNrXCIsIGUgPT4gZm4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb1dpbmRvd09iamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==