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
        MapObject.zoom(marker.getPosition(), 16);
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
  function List() {
    var _this = this; // this.MarkerObject = new Marker();


    this.headerList = this.getHeaderList();
    this.headerList.map(function (el) {
      return el.addEventListener('click', _this.headerClick);
    });
  }

  List.prototype.selectBayiFromList = function (ruhsatNo) {
    this.removeActiveElement();
    var el = document.getElementById(ruhsatNo);
    el.classList.add("active");
    this.lastSelectedElement = el;
  };

  List.prototype.setPassiveHeadersByClassName = function (className) {
    console.log("dsfsdf"); // this.headerList.map(el => {
    //   if(el.classList.contains(className)){
    //     el.classList.add("d-none")
    //   }
    // })
  };

  List.prototype.headerClick = function (e) {
    var header = e.target;
    console.log(this.headerList); // this.headerList.map(el => {
    //   if(el.classList.contains(header.getAttribute("id"))){
    //     el.classList.add("d-none")
    //   }
    // })
    // this.setPassiveHeadersByClassName("")
  };

  List.prototype.removeActiveElement = function () {
    if (this.lastSelectedElement) {
      this.lastSelectedElement.classList.remove("active");
    }
  };

  List.prototype.getElementList = function () {
    this.elementList = [].slice.call(document.getElementsByClassName("list-group-item"));
    return this.elementList;
  };

  List.prototype.getHeaderList = function () {
    this.elementList = [].slice.call(document.getElementsByClassName("nav-link"));
    return this.elementList;
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
      },
      gestureHandling: 'greedy',
      keyboardShortcuts: true // zoomControlOptions : {
      //   style : 
      // }

    }); // map.data.loadGeoJson(
    //   "https://storage.googleapis.com/mapsdevsite/json/google.json"
    // );

    this.map = map;
    return this.map;
  };

  Map.prototype.zoom = function (position, zoomLevel) {
    if (zoomLevel === void 0) {
      zoomLevel = 15;
    } // this.map.setZoom(10);


    this.map.setZoom(zoomLevel);
    this.map.setCenter(position);
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
    this.DEFAULT_OPACITY = 0.9;
    this.PASSIVE_OPACITY = 0.5;
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
      opacity: this.DEFAULT_OPACITY // optimized : false

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
    marker.setOpacity(this.DEFAULT_OPACITY);
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
    var _this = this;

    this.markers.map(function (_m) {
      _m.setZIndex(100);

      _m.setOpacity(_this.PASSIVE_OPACITY);
    });
  };

  Marker.prototype.setAllMarkersDefault = function () {
    var _this = this;

    this.markers.map(function (_m) {
      _m.setOpacity(_this.DEFAULT_OPACITY);
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
    var content = "\n      <div style=\"width:350px;min-height:270px\" class=\"table-responsive\">\n        <h5>" + message + "</h5>\n        <a href=\"javascript:;\" class=\"badge badge-primary float-right clipboard\" onmouseleave=\"setTimeout(() => {resetClipboard(event)} ,1500)\" onClick=\"selectElementContents(document.getElementById('InfoTable'), event);\">Kopyala</a>\n        <table class=\"table table-hover\" id=\"InfoTable\">\n          <tbody>\n              <tr>\n                <th class=\"w-40\">Ad\u0131 Soyad\u0131</th>\n                  <td>Mehmet Gen\u00E7</td>\n              </tr>\n              <tr>\n                <th>\u0130l</th>\n                  <td>\u0130STANBUL</td>\n              </tr>\n              <tr>\n                <th>\u0130l\u00E7e</th>\n                  <td>KADIK\u00D6Y</td>\n              </tr>\n              <tr>\n                <th>Ruhsat No</th>\n                  <td>3435867PT</td>\n              </tr>\n              <tr>\n                <th>T\u0130P</th>\n                  <td>BAKKAL</td>\n              </tr>\n              <tr>\n                <th>T\u0130P DSD</th>\n                  <td>01BAK</td>\n              </tr>\n              <tr>\n                <th>Adres</th>\n                  <td>Atalar Mah K\u00F6ro\u011Flu Cad No:46 D:7</td>\n              </tr>\n          </tbody>\n      </table>\n      </div>\n    ";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBQUE7O0FBQ0E7O0FB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TSxDQUFQO0FBdUJELEdBeEJEOztBQXlCRjtBQUFDLENBM0NEOztBQTJEUzs7QUFkVDtBQUFBO0FBQUE7QUFHRSxtQkFBWSxLQUFaLEVBQWlCO0FBQWpCOztBQUZBLGlCQUFRLEVBQVI7QUFDQSxhQUFJLENBQUo7O0FBS0EsZ0JBQU87QUFDTCxVQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsS0FBTCxDQUFXLEtBQUksQ0FBQyxDQUFoQixDQUFUO0FBQ0EsV0FBSSxDQUFDLENBQUw7QUFDQSxhQUFPLEVBQVA7QUFDRCxLQUpEOztBQUhFLFNBQUssS0FBTCxHQUFhLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxLQUFkLENBQWI7QUFDRDs7QUFPSDtBQUFDLENBWkQ7O0FBY2dCLDBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRGhCO0FBQUE7QUFBQTtBQUVFO0FBQ0UsU0FBSyxhQUFMO0FBQ0QsR0FKSCxDQUtFOzs7QUFDTyw2Q0FBUCxVQUFxQixPQUFyQixFQUFxQztBQUNuQyxRQUFNLE9BQU8sR0FBRyxrR0FFTixPQUZNLEdBRUMsMnVDQUZqQjs7QUF1Q0EsUUFBSSxDQUFDLEtBQUssVUFBVixFQUFzQjtBQUNwQixXQUFLLFVBQUwsR0FBa0IsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLFVBQWhCLENBQTJCO0FBQzNDLGVBQU87QUFEb0MsT0FBM0IsQ0FBbEI7QUFHRCxLQUpELE1BSU87QUFDTCxXQUFLLFVBQUwsQ0FBZ0IsVUFBaEIsQ0FBMkIsT0FBM0I7QUFDRDtBQUNGLEdBL0NNLENBTlQsQ0F1REU7OztBQUVPLHNDQUFQLFVBQWMsRUFBZCxFQUEwQjtBQUN4QixTQUFLLFVBQUwsQ0FBZ0IsV0FBaEIsQ0FBNEIsWUFBNUIsRUFBMEMsYUFBQztBQUFJO0FBQUUsS0FBakQ7QUFDRCxHQUZNOztBQUdUO0FBQUMsQ0E1REQ7O0FBOERBLGtCQUFlLGdCQUFmLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgTWFwIGZyb20gXCIuL21hcFwiO1xyXG5pbXBvcnQgTWFya2VyIGZyb20gXCIuL21hcmtlclwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcbmltcG9ydCB7SXRlcmF0ZSwgVXRpbHN9IGZyb20gXCIuL3V0aWxzXCI7XHJcbi8vIGRlY2xhcmUgdmFyIGdvb2dsZTtcclxuZGVjbGFyZSB2YXIgTWFya2VyQ2x1c3RlcmVyO1xyXG5cclxudmFyIG1hcDogZ29vZ2xlLm1hcHMuTWFwO1xyXG52YXIgZWxlbWVudExpc3Q6IFtIVE1MRWxlbWVudF0gPSA8YW55PltdO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGFzeW5jICgpID0+IHtcclxuICAvLyBJbnN0YW5jZSBvZiBNYXBcclxuICBjb25zdCBNYXBPYmplY3QgPSBuZXcgTWFwKCk7XHJcbiAgbWFwID0gTWFwT2JqZWN0LmluaXQoKTtcclxuXHJcbiAgLy8gSW5zdGFuY2Ugb2YgTWFya2VyXHJcbiAgY29uc3QgTWFya2VyT2JqZWN0ID0gbmV3IE1hcmtlcigpO1xyXG5cclxuICAvLyBJbnN0YW5jZSBvZiBMaXN0XHJcbiAgY29uc3QgTGlzdE9iamVjdCA9IG5ldyBMaXN0KCk7XHJcblxyXG4gIC8vIEluc3RhbmNlIG9mIFV0aWxzIGFuZCBJdGVyYXRlXHJcbiAgY29uc3QgVXRpbHNPYmplY3QgPSBuZXcgVXRpbHMoKTtcclxuXHJcbiAgTWFwT2JqZWN0Lmxpc3RlbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgTWFya2VyT2JqZWN0LmNsaWNrT3V0c2lkZU9mTWFya2VyKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIEFkZCBjbGljayBoYW5kbGVyIHRvIHRoZSBsaXN0IGVsZW1lbnRzXHJcbiAgTGlzdE9iamVjdC5hZGRDbGlja0hhbmRsZXIoKGlkKSA9PiB7XHJcbiAgICBsZXQgcnVoc2F0Tm8gPSBpZDtcclxuXHJcbiAgICBsZXQgbWFya2VyID0gTWFya2VyT2JqZWN0LmZpbmRNYXJrZXIocnVoc2F0Tm8pO1xyXG4gICAgTWFwT2JqZWN0Lnpvb20obWFya2VyLmdldFBvc2l0aW9uKCksIDE2KTtcclxuICAgIE1hcmtlck9iamVjdC5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKTtcclxuICB9KTtcclxuXHJcbiAgLy8gR2V0IGVsZW1lbnRsaXN0XHJcbiAgZWxlbWVudExpc3QgPSBMaXN0T2JqZWN0LmdldEVsZW1lbnRMaXN0KCk7XHJcblxyXG4gIGxldCBiYXlpbGVyID0gVXRpbHNPYmplY3QucGFyc2VCYXlpbGVyKGVsZW1lbnRMaXN0KTtcclxuXHJcbiAgLy8gSXRlcmF0ZSBmb3IgQ29vcmRzXHJcbiAgbGV0IGJheWlJdGVyYXRvciA9IG5ldyBJdGVyYXRlKGJheWlsZXIpO1xyXG5cclxuICBsZXQgYmF5aSA9IG51bGw7XHJcbiAgd2hpbGUgKChiYXlpID0gYmF5aUl0ZXJhdG9yLm5leHQoKSkgIT0gbnVsbCkge1xyXG4gICAgLy8gR2V0IGNvb3JkcyBmcm9tIGFkZHJlcyBieSBHZW9Db2RlclxyXG4gICAgLy8gbGV0IFtsYXQsIGxuZ106IFtudW1iZXIsIG51bWJlcl0gPSBhd2FpdCBVdGlsc09iamVjdC5nZXRMYXRMbmcoYmF5aS5hZHJlcyk7XHJcbiAgICBcclxuICAgIC8vIEdldCBjb29yZHMgZnJvbSBkYXRhXHJcbiAgICBsZXQgW2xhdCwgbG5nXTogW251bWJlciwgbnVtYmVyXSA9IGJheWkucG9zaXRpb24gPyBiYXlpLnBvc2l0aW9uIDogWzAsMF1cclxuXHJcbiAgICBNYXJrZXJPYmplY3QuY3JlYXRlKHtcclxuICAgICAgbWFwLFxyXG4gICAgICBwb3NpdGlvbjogeyBsYXQsIGxuZyB9LFxyXG4gICAgICB1bnZhbjogYmF5aVtcInVudmFuXCJdLFxyXG4gICAgICBydWhzYXRObzogYmF5aVtcInJ1aHNhdE5vXCJdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyT25jZShtYXAsICd0aWxlc2xvYWRlZCcsIGZ1bmN0aW9uKGUpe1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJsb2FkZWRcIilcclxuICAvLyB9KVxyXG4gIC8vIHZhciBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlcihtYXAsIE1hcmtlck9iamVjdC5tYXJrZXJzLCB7XHJcbiAgLy8gICBpbWFnZVBhdGg6XHJcbiAgLy8gICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL21cIlxyXG4gIC8vIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBTZWxlY3RDb250ZW50IChlbCkgeyAgICBcclxuLy8gICB2YXIgYXV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICBhdXguc2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcclxuLy8gICBhdXguaW5uZXJIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTDtcclxuLy8gICBhdXguc2V0QXR0cmlidXRlKFwib25mb2N1c1wiLCBcImRvY3VtZW50LmV4ZWNDb21tYW5kKCdzZWxlY3RBbGwnLGZhbHNlLG51bGwpXCIpOyBcclxuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1eCk7XHJcbi8vICAgYXV4LmZvY3VzKCk7XHJcbi8vICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4vLyAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYXV4KTtcclxuLy8gfSIsIi8vIGltcG9ydCBNYXJrZXIgZnJvbSBcIi4vbWFya2VyXCI7XHJcblxyXG5jbGFzcyBMaXN0IHtcclxuICBNYXJrZXJPYmplY3Q7XHJcbiAgZWxlbWVudExpc3QgOiBbSFRNTEVsZW1lbnRdO1xyXG4gIGhlYWRlckxpc3QgOiBbSFRNTEVsZW1lbnRdO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy5NYXJrZXJPYmplY3QgPSBuZXcgTWFya2VyKCk7XHJcbiAgICB0aGlzLmhlYWRlckxpc3QgPSB0aGlzLmdldEhlYWRlckxpc3QoKTtcclxuICAgIHRoaXMuaGVhZGVyTGlzdC5tYXAoZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhlYWRlckNsaWNrKSlcclxuICB9XHJcbiAgbGFzdFNlbGVjdGVkRWxlbWVudDtcclxuICBzZWxlY3RCYXlpRnJvbUxpc3QocnVoc2F0Tm86IHN0cmluZykge1xyXG4gICAgdGhpcy5yZW1vdmVBY3RpdmVFbGVtZW50KCk7XHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChydWhzYXRObyk7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIHRoaXMubGFzdFNlbGVjdGVkRWxlbWVudCA9IGVsO1xyXG4gIH1cclxuXHJcbiAgc2V0UGFzc2l2ZUhlYWRlcnNCeUNsYXNzTmFtZShjbGFzc05hbWUgOiBzdHJpbmcpe1xyXG4gICAgY29uc29sZS5sb2coXCJkc2ZzZGZcIilcclxuICAgIC8vIHRoaXMuaGVhZGVyTGlzdC5tYXAoZWwgPT4ge1xyXG4gICAgLy8gICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSl7XHJcbiAgICAvLyAgICAgZWwuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gIH1cclxuXHJcbiAgaGVhZGVyQ2xpY2soZSl7XHJcbiAgICBsZXQgaGVhZGVyIDogSFRNTEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaGVhZGVyTGlzdClcclxuICAgIC8vIHRoaXMuaGVhZGVyTGlzdC5tYXAoZWwgPT4ge1xyXG4gICAgLy8gICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoaGVhZGVyLmdldEF0dHJpYnV0ZShcImlkXCIpKSl7XHJcbiAgICAvLyAgICAgZWwuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9KVxyXG4gICAgLy8gdGhpcy5zZXRQYXNzaXZlSGVhZGVyc0J5Q2xhc3NOYW1lKFwiXCIpXHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgcmVtb3ZlQWN0aXZlRWxlbWVudCgpIHtcclxuICAgIGlmICh0aGlzLmxhc3RTZWxlY3RlZEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEVsZW1lbnRMaXN0KCkge1xyXG4gICAgdGhpcy5lbGVtZW50TGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpc3QtZ3JvdXAtaXRlbVwiKSk7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50TGlzdDtcclxuICB9XHJcblxyXG4gIGdldEhlYWRlckxpc3QoKXtcclxuICAgIHRoaXMuZWxlbWVudExpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuYXYtbGlua1wiKSk7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50TGlzdDtcclxuICB9XHJcblxyXG4gIGFkZENsaWNrSGFuZGxlcihmbikge1xyXG4gICAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIik7XHJcbiAgICBsaXN0V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGU6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpc3QtZ3JvdXAtaXRlbVwiKSkge1xyXG4gICAgICAgIGxldCBydWhzYXRObyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBmbihydWhzYXRObylcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCJjbGFzcyBNYXAge1xyXG4gIG1hcDogZ29vZ2xlLm1hcHMuTWFwO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJNYXAgTG9hZGVkXCIpXHJcbiAgICB0aGlzLmluaXQoKVxyXG4gICAgLy8gdGhpcy5saXN0ZW4oJ2NsaWNrJyk7XHJcbiAgfVxyXG5cclxuICBpbml0KCk6IGdvb2dsZS5tYXBzLk1hcCB7XHJcbiAgICBsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xyXG4gICAgICB6b29tOiAxMCxcclxuICAgICAgY2VudGVyOiB7IGxhdDogNDAuOTA3OTEsIGxuZzogMjkuMTc2OTUgfSxcclxuICAgICAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5JyxcclxuICAgICAga2V5Ym9hcmRTaG9ydGN1dHMgOiB0cnVlXHJcbiAgICAgIC8vIHpvb21Db250cm9sT3B0aW9ucyA6IHtcclxuICAgICAgLy8gICBzdHlsZSA6IFxyXG4gICAgICAvLyB9XHJcbiAgICB9KTtcclxuICAgIC8vIG1hcC5kYXRhLmxvYWRHZW9Kc29uKFxyXG4gICAgLy8gICBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9tYXBzZGV2c2l0ZS9qc29uL2dvb2dsZS5qc29uXCJcclxuICAgIC8vICk7XHJcbiAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIHJldHVybiB0aGlzLm1hcFxyXG4gIH1cclxuXHJcbiAgem9vbShwb3NpdGlvbiA6IGdvb2dsZS5tYXBzLkxhdExuZywgem9vbUxldmVsIDogbnVtYmVyID0gMTUpe1xyXG4gICAgLy8gdGhpcy5tYXAuc2V0Wm9vbSgxMCk7XHJcbiAgICB0aGlzLm1hcC5zZXRab29tKHpvb21MZXZlbCk7XHJcbiAgICB0aGlzLm1hcC5zZXRDZW50ZXIocG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuKGV2ZW50TmFtZTogc3RyaW5nLCBsaXN0ZW5lcikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMubWFwLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy8gbWFwQ2xpY2tIYW5kbGVyKGUpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwibWFwQ2xpY2tIYW5kbGVyXCIpXHJcbiAgLy8gICB0aGlzLk1hcmtlck9iamVjdC5jbG9zZUluZm9XaW5kb3coKTtcclxuICAvLyAgIHRoaXMuTWFya2VyT2JqZWN0LnNldEFsbE1hcmtlcnNEZWZhdWx0KCk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiIsImltcG9ydCBJbmZvV2luZG93T2JqZWN0IGZyb20gXCIuL3dpbmRvd1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG5jbGFzcyBNYXJrZXIge1xyXG4gIHB1YmxpYyBtYXJrZXI6IGdvb2dsZS5tYXBzLk1hcmtlcjtcclxuICBwdWJsaWMgbWFya2VyczogW2dvb2dsZS5tYXBzLk1hcmtlcl0gPSA8YW55PltdO1xyXG4gIHB1YmxpYyBtYXA6IGdvb2dsZS5tYXBzLk1hcCA9IG51bGw7XHJcbiAgcHVibGljIGxhc3RXaW5kb3c6IGdvb2dsZS5tYXBzLkluZm9XaW5kb3c7XHJcbiAgcHVibGljIEluZm9XaW5kb3c7XHJcbiAgcHVibGljIExpc3RPYmplY3Q7XHJcbiAgcHJpdmF0ZSBERUZBVUxUX09QQUNJVFkgPSAwLjk7XHJcbiAgcHJpdmF0ZSBQQVNTSVZFX09QQUNJVFkgPSAwLjU7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLkluZm9XaW5kb3cgPSBuZXcgSW5mb1dpbmRvd09iamVjdCgpO1xyXG4gICAgdGhpcy5sYXN0V2luZG93ID0gdGhpcy5JbmZvV2luZG93Lmxhc3RXaW5kb3c7XHJcbiAgICB0aGlzLkxpc3RPYmplY3QgPSBuZXcgTGlzdCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNyZWF0ZSh7IG1hcCwgcG9zaXRpb24sIHVudmFuLCBydWhzYXRObyB9KSB7XHJcbiAgICAvLyBDcmVhdGUgYSBtYXJrZXJcclxuICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgbWFwLFxyXG4gICAgICBwb3NpdGlvbixcclxuICAgICAgdGl0bGU6IHVudmFuLFxyXG4gICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxyXG4gICAgICBvcGFjaXR5OiB0aGlzLkRFRkFVTFRfT1BBQ0lUWVxyXG4gICAgICAvLyBvcHRpbWl6ZWQgOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICBtYXJrZXIuc2V0VmFsdWVzKHtcclxuICAgICAgcnVoc2F0Tm86IHJ1aHNhdE5vLnRyaW0oKVxyXG4gICAgfSk7XHJcbiAgICBpZiAoIXRoaXMubWFwKSB7XHJcbiAgICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgfVxyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgdGhpcy5zZXRaSW5kZXgoMTAwKTtcclxuICAgICAgdGhpcy5zZXRPcGFjaXR5KDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vIHRoaXMuc2V0WkluZGV4KDEwMCk7XHJcbiAgICAgIHRoaXMuc2V0T3BhY2l0eSgwLjkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gU2V0IGNsaWNrIGhhbmRsZXIgdG8gdGhlIE1hcmtlclxyXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGF0Lm1hcmtlckNsaWNrSGFuZGxlcih0aGlzKVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICB9XHJcblxyXG4gIG1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpIHtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhtYXJrZXIucnVoc2F0Tm8pXHJcblxyXG4gICAgLy8gUmVtb3ZlIGFjdGl2ZSBsaXN0IGVsZW1lbnRcclxuICAgIHRoaXMuTGlzdE9iamVjdC5zZWxlY3RCYXlpRnJvbUxpc3QobWFya2VyLnJ1aHNhdE5vKVxyXG4gICAgLy8gQ2xvc2UgbGFzdCBJbmZvV2luZG93XHJcbiAgICB0aGlzLmNsb3NlSW5mb1dpbmRvdygpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgSW5mb1dpbmRvdyBmb3IgY2xpY2tlZCBtYXJrZXJcclxuICAgIHRoaXMuSW5mb1dpbmRvdy5zZXRJbmZvV2luZG93KGAke21hcmtlci5nZXRUaXRsZSgpfWAsIG1hcmtlci5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAvLyBMaXN0ZW4gZm9yIEluZm9XaW5kb3cgY2hhbmdlIGV2ZW50XHJcbiAgICB0aGlzLkluZm9XaW5kb3cubGlzdGVuKHRoaXMuc2V0QWxsTWFya2Vyc0RlZmF1bHQpO1xyXG4gICAgLy8gT3BlbiB0aGUgSW5mb1dpbmRvdyBmb3IgY2xpY2tlZCBtYXJrZXJcclxuICAgIHRoaXMubGFzdFdpbmRvdy5vcGVuKHRoaXMubWFwLCBtYXJrZXIpO1xyXG4gICAgLy8gU2V0IDAgdG8gYWxsIG1hcmtlcnNcclxuICAgIHRoaXMuc2V0QWxsTWFya2Vyc1Bhc3NpdmUoKTtcclxuICAgIC8vIFNldCBoaWdoIGluZGV4IHRvIHRoZSBtYXJrZXJcclxuICAgIG1hcmtlci5zZXRaSW5kZXgoMTAwKTtcclxuICAgIG1hcmtlci5zZXRPcGFjaXR5KHRoaXMuREVGQVVMVF9PUEFDSVRZKTtcclxuICB9XHJcblxyXG4gIGNsb3NlSW5mb1dpbmRvdygpIHtcclxuICAgIGlmICh0aGlzLmxhc3RXaW5kb3cpIHRoaXMubGFzdFdpbmRvdy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgZmluZE1hcmtlcihtYXJrZXJJZCA6IHN0cmluZyl7XHJcbiAgICByZXR1cm4gdGhpcy5tYXJrZXJzLmZpbmQoKF9tYXJrZXIgOiBhbnkpID0+IF9tYXJrZXIucnVoc2F0Tm8gPT0gbWFya2VySWQpXHJcbiAgfVxyXG5cclxuICBjbGlja091dHNpZGVPZk1hcmtlcigpIHtcclxuICAgIHRoaXMuY2xvc2VJbmZvV2luZG93KCk7XHJcbiAgICB0aGlzLkxpc3RPYmplY3QucmVtb3ZlQWN0aXZlRWxlbWVudCgpXHJcbiAgICB0aGlzLnNldEFsbE1hcmtlcnNEZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRBbGxNYXJrZXJzUGFzc2l2ZSgpIHtcclxuICAgIHRoaXMubWFya2Vycy5tYXAoX20gPT4ge1xyXG4gICAgICBfbS5zZXRaSW5kZXgoMTAwKTtcclxuICAgICAgX20uc2V0T3BhY2l0eSh0aGlzLlBBU1NJVkVfT1BBQ0lUWSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFsbE1hcmtlcnNEZWZhdWx0KCkge1xyXG4gICAgdGhpcy5tYXJrZXJzLm1hcChfbSA9PiB7XHJcbiAgICAgIF9tLnNldE9wYWNpdHkodGhpcy5ERUZBVUxUX09QQUNJVFkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XHJcbiIsImNsYXNzIFV0aWxzIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHBhcnNlQmF5aWxlcihlbGVtZW50cykge1xyXG4gICAgbGV0IGJheWlsZXIgPSBbXTtcclxuICAgIC8vIEl0ZXJhdGUgaW5zdGFuY2VcclxuICAgIGxldCBlbGVtZW50QXJyYXkgPSBuZXcgSXRlcmF0ZShlbGVtZW50cyk7XHJcbiAgICBsZXQgZWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgLy8gSXRlcmF0ZSBmb3IgZWxlbWVudHNcclxuICAgIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnRBcnJheS5uZXh0KCkpICE9IG51bGwpIHtcclxuICAgICAgbGV0IGJheWlJbmZvID0gSlNPTi5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5mb1wiKSk7XHJcblxyXG4gICAgICBiYXlpbGVyLnB1c2goYmF5aUluZm8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJheWlsZXI7XHJcbiAgfVxyXG5cclxuICBnZXRMYXRMbmcoYWRyZXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdmFyIGdlb2NvZGVyO1xyXG4gICAgICBpZiAoZ2VvY29kZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR2VvY29kZSBhbiBhZGRyZXNzLlxyXG4gICAgICBnZW9jb2Rlci5nZW9jb2RlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGFkZHJlc3M6IGFkcmVzXHJcbiAgICAgICAgfSxcclxuICAgICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT0gXCJPS1wiKSB7XHJcbiAgICAgICAgICAgIHZhciBsYXQgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XHJcbiAgICAgICAgICAgIHZhciBsbmcgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XHJcbiAgICAgICAgICAgIHZhciBjb29yZHM6IG51bWJlcltdID0gW2xhdCwgbG5nXTtcclxuICAgICAgICAgICAgcmVzb2x2ZShjb29yZHMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVqZWN0KHN0YXR1cyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBJdGVyYXRlIHtcclxuICBhcnJheSA9IFtdO1xyXG4gIGkgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XHJcbiAgICB0aGlzLmFycmF5ID0gW10uc2xpY2UuY2FsbChhcnJheSk7XHJcbiAgfVxyXG5cclxuICBuZXh0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGVsID0gdGhpcy5hcnJheVt0aGlzLmldO1xyXG4gICAgdGhpcy5pKys7XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgVXRpbHMsIEl0ZXJhdGUgfTtcclxuIiwiY2xhc3MgSW5mb1dpbmRvd09iamVjdCB7XHJcbiAgcHVibGljIGxhc3RXaW5kb3c6IGdvb2dsZS5tYXBzLkluZm9XaW5kb3c7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNldEluZm9XaW5kb3coKTtcclxuICB9XHJcbiAgLy8gQ3JlYXRlIEluZm9XaW5kb3cgaW5zdGFuY2UgZm9yIG1hcmtlclxyXG4gIHB1YmxpYyBzZXRJbmZvV2luZG93KG1lc3NhZ2U/OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBgXHJcbiAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDozNTBweDttaW4taGVpZ2h0OjI3MHB4XCIgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCI+XHJcbiAgICAgICAgPGg1PiR7bWVzc2FnZX08L2g1PlxyXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnkgZmxvYXQtcmlnaHQgY2xpcGJvYXJkXCIgb25tb3VzZWxlYXZlPVwic2V0VGltZW91dCgoKSA9PiB7cmVzZXRDbGlwYm9hcmQoZXZlbnQpfSAsMTUwMClcIiBvbkNsaWNrPVwic2VsZWN0RWxlbWVudENvbnRlbnRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbmZvVGFibGUnKSwgZXZlbnQpO1wiPktvcHlhbGE8L2E+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIiBpZD1cIkluZm9UYWJsZVwiPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInctNDBcIj5BZMSxIFNveWFkxLE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+TWVobWV0IEdlbsOnPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD7EsGw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+xLBTVEFOQlVMPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD7EsGzDp2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+S0FESUvDllk8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlJ1aHNhdCBObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4zNDM1ODY3UFQ8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlTEsFA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+QkFLS0FMPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5UxLBQIERTRDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4wMUJBSzwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+QWRyZXM8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+QXRhbGFyIE1haCBLw7Zyb8SfbHUgQ2FkIE5vOjQ2IEQ6NzwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICBpZiAoIXRoaXMubGFzdFdpbmRvdykge1xyXG4gICAgICB0aGlzLmxhc3RXaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XHJcbiAgICAgICAgY29udGVudFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGFzdFdpbmRvdy5zZXRDb250ZW50KGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcHJpdmF0ZSBzZXRJbmZvV2luZG93SHRtbChtYXJrZXI6IGdvb2dsZS5tYXBzLk1hcmtlcikge31cclxuXHJcbiAgcHVibGljIGxpc3RlbihmbjogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMubGFzdFdpbmRvdy5hZGRMaXN0ZW5lcihcImNsb3NlY2xpY2tcIiwgZSA9PiBmbik7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmZvV2luZG93T2JqZWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9