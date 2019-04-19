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
}); // function SelectContent (el) {    
//   var aux = document.createElement("div");
//   aux.setAttribute("contentEditable", "true");
//   aux.innerHTML = document.getElementById("main").innerHTML;
//   aux.setAttribute("onfocus", "document.execCommand('selectAll',false,null)"); 
//   document.body.appendChild(aux);
//   aux.focus();
//   document.execCommand("copy");
//   document.body.removeChild(aux);
// }

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
    var content = "\n      <div style=\"width:350px;min-height:270px\" class=\"table-responsive\">\n        <h5>" + message + "</h5>\n        <a href=\"javascript:;\" onmouseleave=\"setTimeout(() => {resetClipboard(event)} ,1500)\" onClick=\"selectElementContents(document.getElementById('InfoTable'), event);\">Kopyala</a>\n        <table class=\"table table-hover\" id=\"InfoTable\">\n          <tbody>\n              <tr>\n                <th class=\"w-40\">Ad\u0131 Soyad\u0131</th>\n                  <td>Mehmet Gen\u00E7</td>\n              </tr>\n              <tr>\n                <th>\u0130l</th>\n                  <td>\u0130STANBUL</td>\n              </tr>\n              <tr>\n                <th>\u0130l\u00E7e</th>\n                  <td>KADIK\u00D6Y</td>\n              </tr>\n              <tr>\n                <th>Ruhsat No</th>\n                  <td>3435867PT</td>\n              </tr>\n              <tr>\n                <th>T\u0130P</th>\n                  <td>BAKKAL</td>\n              </tr>\n              <tr>\n                <th>T\u0130P DSD</th>\n                  <td>01BAK</td>\n              </tr>\n              <tr>\n                <th>Adres</th>\n                  <td>Atalar Mah K\u00F6ro\u011Flu Cad No:46 D:7</td>\n              </tr>\n          </tbody>\n      </table>\n      </div>\n    ";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBQUE7O0FBQ0E7O0FB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Ykg7QUFlRCxLQXRCTSxDQUFQO0FBdUJELEdBeEJEOztBQXlCRjtBQUFDLENBM0NEOztBQTJEUzs7QUFkVDtBQUFBO0FBQUE7QUFHRSxtQkFBWSxLQUFaLEVBQWlCO0FBQWpCOztBQUZBLGlCQUFRLEVBQVI7QUFDQSxhQUFJLENBQUo7O0FBS0EsZ0JBQU87QUFDTCxVQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsS0FBTCxDQUFXLEtBQUksQ0FBQyxDQUFoQixDQUFUO0FBQ0EsV0FBSSxDQUFDLENBQUw7QUFDQSxhQUFPLEVBQVA7QUFDRCxLQUpEOztBQUhFLFNBQUssS0FBTCxHQUFhLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxLQUFkLENBQWI7QUFDRDs7QUFPSDtBQUFDLENBWkQ7O0FBY2dCLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRGhCO0FBQUE7QUFBQTtBQUVFO0FBQ0UsU0FBSyxhQUFMO0FBQ0QsR0FKSCxDQUtFOzs7QUFDTyw2Q0FBUCxVQUFxQixPQUFyQixFQUFxQztBQUNuQyxRQUFNLE9BQU8sR0FBRyxrR0FFTixPQUZNLEdBRUMsdXJDQUZqQjs7QUF1Q0EsUUFBSSxDQUFDLEtBQUssVUFBVixFQUFzQjtBQUNwQixXQUFLLFVBQUwsR0FBa0IsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLFVBQWhCLENBQTJCO0FBQzNDLGVBQU87QUFEb0MsT0FBM0IsQ0FBbEI7QUFHRCxLQUpELE1BSU87QUFDTCxXQUFLLFVBQUwsQ0FBZ0IsVUFBaEIsQ0FBMkIsT0FBM0I7QUFDRDtBQUNGLEdBL0NNLENBTlQsQ0F1REU7OztBQUVPLHNDQUFQLFVBQWMsRUFBZCxFQUEwQjtBQUN4QixTQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsWUFBNUIsRUFBMEMsYUFBQztBQUFJO0FBQUUsS0FBakQ7QUFDRCxHQUZNOztBQUdUO0FBQUMsQ0E1REQ7O0FBOERBLGtCQUFlLGdCQUFmLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgTWFwIGZyb20gXCIuL21hcFwiO1xyXG5pbXBvcnQgTWFya2VyIGZyb20gXCIuL21hcmtlclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcbmltcG9ydCB7SXRlcmF0ZSwgVXRpbHN9IGZyb20gXCIuL3V0aWxzXCI7XHJcbi8vIGRlY2xhcmUgdmFyIGdvb2dsZTtcclxuZGVjbGFyZSB2YXIgTWFya2VyQ2x1c3RlcmVyO1xyXG5cclxudmFyIG1hcDogZ29vZ2xlLm1hcHMuTWFwO1xyXG52YXIgZWxlbWVudExpc3Q6IFtIVE1MRWxlbWVudF0gPSA8YW55PltdO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcclxuICAvLyBJbnN0YW5jZSBvZiBNYXBcclxuICBjb25zdCBNYXBPYmplY3QgPSBuZXcgTWFwKCk7XHJcbiAgbWFwID0gTWFwT2JqZWN0LmluaXQoKTtcclxuXHJcbiAgLy8gSW5zdGFuY2Ugb2YgTWFya2VyXHJcbiAgY29uc3QgTWFya2VyT2JqZWN0ID0gbmV3IE1hcmtlcigpO1xyXG5cclxuICAvLyBJbnN0YW5jZSBvZiBMaXN0XHJcbiAgY29uc3QgTGlzdE9iamVjdCA9IG5ldyBMaXN0KCk7XHJcblxyXG4gIC8vIEluc3RhbmNlIG9mIFV0aWxzIGFuZCBJdGVyYXRlXHJcbiAgY29uc3QgVXRpbHNPYmplY3QgPSBuZXcgVXRpbHMoKTtcclxuXHJcbiAgTWFwT2JqZWN0Lmxpc3RlbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgTWFya2VyT2JqZWN0LmNsaWNrT3V0c2lkZU9mTWFya2VyKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFkZCBjbGljayBoYW5kbGVyIHRvIHRoZSBsaXN0IGVsZW1lbnRzXHJcbiAgTGlzdE9iamVjdC5hZGRDbGlja0hhbmRsZXIoKGlkKSA9PiB7XHJcbiAgICBsZXQgcnVoc2F0Tm8gPSBpZDtcclxuXHJcbiAgICBsZXQgbWFya2VyID0gTWFya2VyT2JqZWN0LmZpbmRNYXJrZXIocnVoc2F0Tm8pO1xyXG4gICAgTWFya2VyT2JqZWN0Lm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpXHJcbiAgfSk7XHJcblxyXG4gIC8vIEdldCBlbGVtZW50bGlzdFxyXG4gIGVsZW1lbnRMaXN0ID0gTGlzdE9iamVjdC5nZXRFbGVtZW50TGlzdCgpO1xyXG5cclxuICBsZXQgYmF5aWxlciA9IFV0aWxzT2JqZWN0LnBhcnNlQmF5aWxlcihlbGVtZW50TGlzdCk7XHJcblxyXG4gIC8vIEl0ZXJhdGUgZm9yIENvb3Jkc1xyXG4gIGxldCBiYXlpSXRlcmF0b3IgPSBuZXcgSXRlcmF0ZShiYXlpbGVyKTtcclxuXHJcbiAgbGV0IGJheWkgPSBudWxsO1xyXG4gIHdoaWxlICgoYmF5aSA9IGJheWlJdGVyYXRvci5uZXh0KCkpICE9IG51bGwpIHtcclxuICAgIC8vIEdldCBjb29yZHMgZnJvbSBhZGRyZXMgYnkgR2VvQ29kZXJcclxuICAgIC8vIGxldCBbbGF0LCBsbmddOiBbbnVtYmVyLCBudW1iZXJdID0gYXdhaXQgVXRpbHNPYmplY3QuZ2V0TGF0TG5nKGJheWkuYWRyZXMpO1xyXG4gICAgXHJcbiAgICAvLyBHZXQgY29vcmRzIGZyb20gZGF0YVxyXG4gICAgbGV0IFtsYXQsIGxuZ106IFtudW1iZXIsIG51bWJlcl0gPSBiYXlpLnBvc2l0aW9uID8gYmF5aS5wb3NpdGlvbiA6IFswLDBdXHJcblxyXG4gICAgTWFya2VyT2JqZWN0LmNyZWF0ZSh7XHJcbiAgICAgIG1hcCxcclxuICAgICAgcG9zaXRpb246IHsgbGF0LCBsbmcgfSxcclxuICAgICAgdW52YW46IGJheWlbXCJ1bnZhblwiXSxcclxuICAgICAgcnVoc2F0Tm86IGJheWlbXCJydWhzYXROb1wiXVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lck9uY2UobWFwLCAndGlsZXNsb2FkZWQnLCBmdW5jdGlvbihlKXtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwibG9hZGVkXCIpXHJcbiAgLy8gfSlcclxuICAvLyB2YXIgbWFya2VyQ2x1c3RlciA9IG5ldyBNYXJrZXJDbHVzdGVyZXIobWFwLCBNYXJrZXJPYmplY3QubWFya2Vycywge1xyXG4gIC8vICAgaW1hZ2VQYXRoOlxyXG4gIC8vICAgICBcImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2V4YW1wbGVzL21hcmtlcmNsdXN0ZXJlci9tXCJcclxuICAvLyB9KTtcclxufSk7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gU2VsZWN0Q29udGVudCAoZWwpIHsgICAgXHJcbi8vICAgdmFyIGF1eCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbi8vICAgYXV4LnNldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiLCBcInRydWVcIik7XHJcbi8vICAgYXV4LmlubmVySFRNTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5pbm5lckhUTUw7XHJcbi8vICAgYXV4LnNldEF0dHJpYnV0ZShcIm9uZm9jdXNcIiwgXCJkb2N1bWVudC5leGVjQ29tbWFuZCgnc2VsZWN0QWxsJyxmYWxzZSxudWxsKVwiKTsgXHJcbi8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhdXgpO1xyXG4vLyAgIGF1eC5mb2N1cygpO1xyXG4vLyAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuLy8gICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGF1eCk7XHJcbi8vIH0iLCIvLyBpbXBvcnQgTWFya2VyIGZyb20gXCIuL21hcmtlclwiO1xyXG5cclxuY2xhc3MgTGlzdCB7XHJcbiAgTWFya2VyT2JqZWN0O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy5NYXJrZXJPYmplY3QgPSBuZXcgTWFya2VyKCk7XHJcbiAgfVxyXG4gIGxhc3RTZWxlY3RlZEVsZW1lbnQ7XHJcbiAgc2VsZWN0QmF5aUZyb21MaXN0KHJ1aHNhdE5vOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVtb3ZlQWN0aXZlRWxlbWVudCgpO1xyXG4gICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocnVoc2F0Tm8pO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuXHJcbiAgICB0aGlzLmxhc3RTZWxlY3RlZEVsZW1lbnQgPSBlbDtcclxuICB9XHJcblxyXG4gIHJlbW92ZUFjdGl2ZUVsZW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0U2VsZWN0ZWRFbGVtZW50KSB7XHJcbiAgICAgIHRoaXMubGFzdFNlbGVjdGVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRFbGVtZW50TGlzdCgpIHtcclxuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0LWdyb3VwLWl0ZW1cIikpO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2xpY2tIYW5kbGVyKGZuKSB7XHJcbiAgICBjb25zdCBsaXN0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcclxuICAgIGxpc3RXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZTogYW55KSA9PiB7XHJcbiAgICAgIGxldCB0YXJnZXQ6IEhUTUxFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlzdC1ncm91cC1pdGVtXCIpKSB7XHJcbiAgICAgICAgbGV0IHJ1aHNhdE5vID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgICAgIGZuKHJ1aHNhdE5vKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiIsImNsYXNzIE1hcCB7XHJcbiAgbWFwOiBnb29nbGUubWFwcy5NYXA7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1hcCBMb2FkZWRcIilcclxuICAgIHRoaXMuaW5pdCgpXHJcbiAgICAvLyB0aGlzLmxpc3RlbignY2xpY2snKTtcclxuICB9XHJcblxyXG4gIGluaXQoKTogZ29vZ2xlLm1hcHMuTWFwIHtcclxuICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XHJcbiAgICAgIHpvb206IDEwLFxyXG4gICAgICBjZW50ZXI6IHsgbGF0OiA0MC45MDc5MSwgbG5nOiAyOS4xNzY5NSB9XHJcbiAgICB9KTtcclxuICAgIC8vIG1hcC5kYXRhLmxvYWRHZW9Kc29uKFxyXG4gICAgLy8gICBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9tYXBzZGV2c2l0ZS9qc29uL2dvb2dsZS5qc29uXCJcclxuICAgIC8vICk7XHJcbiAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIHJldHVybiB0aGlzLm1hcFxyXG4gIH1cclxuXHJcbiAgbGlzdGVuKGV2ZW50TmFtZTogc3RyaW5nLCBsaXN0ZW5lcikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMubWFwLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy8gbWFwQ2xpY2tIYW5kbGVyKGUpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwibWFwQ2xpY2tIYW5kbGVyXCIpXHJcbiAgLy8gICB0aGlzLk1hcmtlck9iamVjdC5jbG9zZUluZm9XaW5kb3coKTtcclxuICAvLyAgIHRoaXMuTWFya2VyT2JqZWN0LnNldEFsbE1hcmtlcnNEZWZhdWx0KCk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiIsImltcG9ydCBJbmZvV2luZG93T2JqZWN0IGZyb20gXCIuL3dpbmRvd1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG5jbGFzcyBNYXJrZXIge1xyXG4gIHB1YmxpYyBtYXJrZXI6IGdvb2dsZS5tYXBzLk1hcmtlcjtcclxuICBwdWJsaWMgbWFya2VyczogW2dvb2dsZS5tYXBzLk1hcmtlcl0gPSA8YW55PltdO1xyXG4gIHB1YmxpYyBtYXA6IGdvb2dsZS5tYXBzLk1hcCA9IG51bGw7XHJcbiAgcHVibGljIGxhc3RXaW5kb3c6IGdvb2dsZS5tYXBzLkluZm9XaW5kb3c7XHJcbiAgcHVibGljIEluZm9XaW5kb3c7XHJcbiAgcHVibGljIExpc3RPYmplY3Q7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLkluZm9XaW5kb3cgPSBuZXcgSW5mb1dpbmRvd09iamVjdCgpO1xyXG4gICAgdGhpcy5sYXN0V2luZG93ID0gdGhpcy5JbmZvV2luZG93Lmxhc3RXaW5kb3c7XHJcbiAgICB0aGlzLkxpc3RPYmplY3QgPSBuZXcgTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSh7IG1hcCwgcG9zaXRpb24sIHVudmFuLCBydWhzYXRObyB9KSB7XHJcbiAgICAvLyBDcmVhdGUgYSBtYXJrZXJcclxuICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgbWFwLFxyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgdGl0bGU6IHVudmFuLFxyXG4gICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxyXG4gICAgICBvcGFjaXR5OiAwLjlcclxuICAgICAgLy8gb3B0aW1pemVkIDogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgbWFya2VyLnNldFZhbHVlcyh7XHJcbiAgICAgIHJ1aHNhdE5vOiBydWhzYXROby50cmltKClcclxuICAgIH0pO1xyXG4gICAgaWYgKCF0aGlzLm1hcCkge1xyXG4gICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIH1cclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuc2V0WkluZGV4KDEwMCk7XHJcbiAgICAgIHRoaXMuc2V0T3BhY2l0eSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyB0aGlzLnNldFpJbmRleCgxMDApO1xyXG4gICAgICB0aGlzLnNldE9wYWNpdHkoMC45KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNldCBjbGljayBoYW5kbGVyIHRvIHRoZSBNYXJrZXJcclxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhhdC5tYXJrZXJDbGlja0hhbmRsZXIodGhpcylcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgfVxyXG5cclxuICBtYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKSB7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2cobWFya2VyLnJ1aHNhdE5vKVxyXG5cclxuICAgIC8vIFJlbW92ZSBhY3RpdmUgbGlzdCBlbGVtZW50XHJcbiAgICB0aGlzLkxpc3RPYmplY3Quc2VsZWN0QmF5aUZyb21MaXN0KG1hcmtlci5ydWhzYXRObylcclxuICAgIC8vIENsb3NlIGxhc3QgSW5mb1dpbmRvd1xyXG4gICAgdGhpcy5jbG9zZUluZm9XaW5kb3coKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgbmV3IEluZm9XaW5kb3cgZm9yIGNsaWNrZWQgbWFya2VyXHJcbiAgICB0aGlzLkluZm9XaW5kb3cuc2V0SW5mb1dpbmRvdyhgJHttYXJrZXIuZ2V0VGl0bGUoKX1gLCBtYXJrZXIuZ2V0UG9zaXRpb24oKSk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciBJbmZvV2luZG93IGNoYW5nZSBldmVudFxyXG4gICAgdGhpcy5JbmZvV2luZG93Lmxpc3Rlbih0aGlzLnNldEFsbE1hcmtlcnNEZWZhdWx0KTtcclxuICAgIC8vIE9wZW4gdGhlIEluZm9XaW5kb3cgZm9yIGNsaWNrZWQgbWFya2VyXHJcbiAgICB0aGlzLmxhc3RXaW5kb3cub3Blbih0aGlzLm1hcCwgbWFya2VyKTtcclxuICAgIC8vIFNldCAwIHRvIGFsbCBtYXJrZXJzXHJcbiAgICB0aGlzLnNldEFsbE1hcmtlcnNQYXNzaXZlKCk7XHJcbiAgICAvLyBTZXQgaGlnaCBpbmRleCB0byB0aGUgbWFya2VyXHJcbiAgICBtYXJrZXIuc2V0WkluZGV4KDEwMCk7XHJcbiAgICBtYXJrZXIuc2V0T3BhY2l0eSgwLjkpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VJbmZvV2luZG93KCkge1xyXG4gICAgaWYgKHRoaXMubGFzdFdpbmRvdykgdGhpcy5sYXN0V2luZG93LmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBmaW5kTWFya2VyKG1hcmtlcklkIDogc3RyaW5nKXtcclxuICAgIHJldHVybiB0aGlzLm1hcmtlcnMuZmluZCgoX21hcmtlciA6IGFueSkgPT4gX21hcmtlci5ydWhzYXRObyA9PSBtYXJrZXJJZClcclxuICB9XHJcblxyXG4gIGNsaWNrT3V0c2lkZU9mTWFya2VyKCkge1xyXG4gICAgdGhpcy5jbG9zZUluZm9XaW5kb3coKTtcclxuICAgIHRoaXMuTGlzdE9iamVjdC5yZW1vdmVBY3RpdmVFbGVtZW50KClcclxuICAgIHRoaXMuc2V0QWxsTWFya2Vyc0RlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHNldEFsbE1hcmtlcnNQYXNzaXZlKCkge1xyXG4gICAgdGhpcy5tYXJrZXJzLm1hcChfbSA9PiB7XHJcbiAgICAgIF9tLnNldFpJbmRleCgxMDApO1xyXG4gICAgICBfbS5zZXRPcGFjaXR5KDAuNSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFsbE1hcmtlcnNEZWZhdWx0KCkge1xyXG4gICAgdGhpcy5tYXJrZXJzLm1hcChfbSA9PiB7XHJcbiAgICAgIF9tLnNldE9wYWNpdHkoMC45KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xyXG4iLCJjbGFzcyBVdGlscyB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwYXJzZUJheWlsZXIoZWxlbWVudHMpIHtcclxuICAgIGxldCBiYXlpbGVyID0gW107XHJcbiAgICAvLyBJdGVyYXRlIGluc3RhbmNlXHJcbiAgICBsZXQgZWxlbWVudEFycmF5ID0gbmV3IEl0ZXJhdGUoZWxlbWVudHMpO1xyXG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIC8vIEl0ZXJhdGUgZm9yIGVsZW1lbnRzXHJcbiAgICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50QXJyYXkubmV4dCgpKSAhPSBudWxsKSB7XHJcbiAgICAgIGxldCBiYXlpSW5mbyA9IEpTT04ucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZm9cIikpO1xyXG5cclxuICAgICAgYmF5aWxlci5wdXNoKGJheWlJbmZvKTtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXlpbGVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGF0TG5nKGFkcmVzKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHZhciBnZW9jb2RlcjtcclxuICAgICAgaWYgKGdlb2NvZGVyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEdlb2NvZGUgYW4gYWRkcmVzcy5cclxuICAgICAgZ2VvY29kZXIuZ2VvY29kZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhZGRyZXNzOiBhZHJlc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09IFwiT0tcIikge1xyXG4gICAgICAgICAgICB2YXIgbGF0ID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgICAgICB2YXIgbG5nID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgICAgICB2YXIgY29vcmRzOiBudW1iZXJbXSA9IFtsYXQsIGxuZ107XHJcbiAgICAgICAgICAgIHJlc29sdmUoY29vcmRzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlamVjdChzdGF0dXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgSXRlcmF0ZSB7XHJcbiAgYXJyYXkgPSBbXTtcclxuICBpID0gMDtcclxuICBjb25zdHJ1Y3RvcihhcnJheSkge1xyXG4gICAgdGhpcy5hcnJheSA9IFtdLnNsaWNlLmNhbGwoYXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCA9ICgpID0+IHtcclxuICAgIGxldCBlbCA9IHRoaXMuYXJyYXlbdGhpcy5pXTtcclxuICAgIHRoaXMuaSsrO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IFV0aWxzLCBJdGVyYXRlIH07XHJcbiIsImNsYXNzIEluZm9XaW5kb3dPYmplY3Qge1xyXG4gIHB1YmxpYyBsYXN0V2luZG93OiBnb29nbGUubWFwcy5JbmZvV2luZG93O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZXRJbmZvV2luZG93KCk7XHJcbiAgfVxyXG4gIC8vIENyZWF0ZSBJbmZvV2luZG93IGluc3RhbmNlIGZvciBtYXJrZXJcclxuICBwdWJsaWMgc2V0SW5mb1dpbmRvdyhtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYFxyXG4gICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MzUwcHg7bWluLWhlaWdodDoyNzBweFwiIGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgIDxoNT4ke21lc3NhZ2V9PC9oNT5cclxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25tb3VzZWxlYXZlPVwic2V0VGltZW91dCgoKSA9PiB7cmVzZXRDbGlwYm9hcmQoZXZlbnQpfSAsMTUwMClcIiBvbkNsaWNrPVwic2VsZWN0RWxlbWVudENvbnRlbnRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbmZvVGFibGUnKSwgZXZlbnQpO1wiPktvcHlhbGE8L2E+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIiBpZD1cIkluZm9UYWJsZVwiPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInctNDBcIj5BZMSxIFNveWFkxLE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+TWVobWV0IEdlbsOnPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD7EsGw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+xLBTVEFOQlVMPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD7EsGzDp2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+S0FESUvDllk8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlJ1aHNhdCBObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4zNDM1ODY3UFQ8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlTEsFA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+QkFLS0FMPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5UxLBQIERTRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4wMUJBSzwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+QWRyZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+QXRhbGFyIE1haCBLw7Zyb8SfbHUgQ2FkIE5vOjQ2IEQ6NzwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBpZiAoIXRoaXMubGFzdFdpbmRvdykge1xyXG4gICAgICB0aGlzLmxhc3RXaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcbiAgICAgICAgY29udGVudFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGFzdFdpbmRvdy5zZXRDb250ZW50KGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBzZXRJbmZvV2luZG93SHRtbChtYXJrZXI6IGdvb2dsZS5tYXBzLk1hcmtlcikge31cclxuXHJcbiAgcHVibGljIGxpc3RlbihmbjogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMubGFzdFdpbmRvdy5hZGRMaXN0ZW5lcihcImNsb3NlY2xpY2tcIiwgZSA9PiBmbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvV2luZG93T2JqZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9