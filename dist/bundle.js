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

var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts"); // declare var google;
// declare var MarkerClusterer;


var map;
window.addEventListener("load", function () {
  return __awaiter(_this, void 0, void 0, function () {
    var MapObject, MarkerObject, ListObject, UtilsObject, elementList, bayiler, bayiIterator, bayi, _a, lat, lng;

    return __generator(this, function (_b) {
      MapObject = new map_1.default();
      map = MapObject.init();
      MarkerObject = new marker_1.default();
      ListObject = new list_1.default();
      UtilsObject = new utils_1.Utils(); // Click handler for `map` element

      MapObject.listen('click', function () {
        MarkerObject.clickOutsideOfMarker();
      }); // Add click handler to the list elements

      ListObject.addClickHandlerList(function (id) {
        var ruhsatNo = id;
        var marker = MarkerObject.findMarker(ruhsatNo);
        MapObject.zoom(marker.getPosition(), 16);
        MarkerObject.markerClickHandler(marker);
      });
      elementList = ListObject.getElementList(); // Get headerlist

      ListObject.getHeaderList();
      ListObject.setHeaderDisable();
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
    this.headerList = []; // this.MarkerObject = new Marker();
    // this.getHeaderList();
    // this.headerList.map(el => el.addEventListener('click', this.headerClick))
  }

  List.prototype.selectBayiFromList = function (ruhsatNo) {
    this.removeActiveElementFromList();
    var el = document.getElementById(ruhsatNo);
    el.classList.add("active");
    this.lastSelectedListElement = el;
    return JSON.parse(el.getAttribute("data-info"));
  };

  List.prototype.headerClick = function (e) {
    var header = e.target;
    var id = header.getAttribute("id");
    this.removeActiveElementFromHeader();
    header.classList.add("active");
    this.lastSelectedHeaderElement = header;

    for (var _i = 0, _a = this.elementList; _i < _a.length; _i++) {
      var el = _a[_i];

      if (!el.classList.contains(id)) {
        el.classList.add("d-none");
      } else {
        el.classList.remove("d-none");
      }
    }
  };

  List.prototype.removeActiveElementFromList = function () {
    if (this.lastSelectedListElement) {
      this.lastSelectedListElement.classList.remove("active");
    }
  };

  List.prototype.removeActiveElementFromHeader = function () {
    if (this.lastSelectedHeaderElement) {
      return this.lastSelectedHeaderElement.classList.remove("active");
    }
  };

  List.prototype.getElementList = function () {
    this.elementList = [].slice.call(document.getElementsByClassName("list-group-item"));
    return this.elementList;
  };

  List.prototype.setHeaderDisable = function () {
    var _this = this;

    var headersStatus = {
      aktif: 0,
      pasif: 0,
      iptal: 0
    };

    for (var _i = 0, _a = this.elementList; _i < _a.length; _i++) {
      var el = _a[_i];
      var durum = el.getAttribute("data-durum");
      headersStatus[durum] = 1;
    }

    ;
    Object.keys(headersStatus).map(function (key) {
      if (headersStatus[key] == 0) {
        [].slice.call(_this.headerList).find(function (h) {
          return h.getAttribute("id") == key;
        }).classList.add("disabled");
      }
    });
  };

  List.prototype.getHeaderList = function () {
    var _this = this;

    this.headerList = document.getElementsByClassName("nav-link");

    for (var _i = 0, _a = this.headerList; _i < _a.length; _i++) {
      var header = _a[_i];
      header.addEventListener('click', function (ev) {
        return _this.headerClick(ev);
      });
    }

    this.lastSelectedHeaderElement = this.headerList[0];
    return this.headerList;
  };

  List.prototype.addClickHandlerList = function (fn) {
    var listWrapper = document.getElementById("list");
    listWrapper.addEventListener('click', function (e) {
      var target = e.target;

      if (target.classList.contains("list-group-item")) {
        var ruhsatNo = target.getAttribute("id");
        fn(ruhsatNo);
      }
    });
  };

  ;

  List.prototype.addClickHandlerHeader = function (fn) {
    var headerWrapper = document.getElementById("filter");
    headerWrapper.addEventListener('click', function (e) {
      var target = e.target;

      if (target.classList.contains("nav-link")) {
        var durum = target.getAttribute("id");
        fn(durum);
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
    this.markerIcon = {
      url: "http://maps.google.com/mapfiles/ms/icons/purple-dot.png"
    };
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
      icon: this.markerIcon,
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
    // Remove active list element
    var bayiData = this.ListObject.selectBayiFromList(marker.ruhsatNo); // Close last InfoWindow

    this.closeInfoWindow(); // Create new InfoWindow for clicked marker

    this.InfoWindow.setInfoWindow(bayiData, marker.getPosition()); // Listen for InfoWindow change event

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
    this.ListObject.removeActiveElementFromList();
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
    this.DEFAULT_CONTENT = {
      il: "",
      ilce: "",
      ruhsatNo: "",
      unvan: "",
      adres: "",
      tip: "",
      durum: ""
    };
    this.setInfoWindow();
  } // Create InfoWindow instance for marker


  InfoWindowObject.prototype.setInfoWindow = function (data) {
    if (data === void 0) {
      data = this.DEFAULT_CONTENT;
    }

    console.log(data);
    var content = "\n      <div style=\"width:350px;min-height:270px\" class=\"table-responsive\">\n        <h5>" + data["unvan"] + "</h5>\n        <a href=\"javascript:;\" class=\"badge badge-primary float-right clipboard\" onmouseleave=\"setTimeout(() => {resetClipboard(event)} ,1500)\" onClick=\"selectElementContents(document.getElementById('InfoTable'), event);\">Kopyala</a>\n        <table class=\"table table-hover\" id=\"InfoTable\">\n          <tbody>\n              <tr>\n                <th class=\"w-40\">Ad\u0131 Soyad\u0131</th>\n                  <td>Mehmet Gen\u00E7</td>\n              </tr>\n              <tr>\n                <th>\u0130l</th>\n                  <td>" + data["il"] + "</td>\n              </tr>\n              <tr>\n                <th>\u0130l\u00E7e</th>\n                  <td>" + data["ilce"] + "</td>\n              </tr>\n              <tr>\n                <th>Ruhsat No</th>\n                  <td>" + data["ruhsatNo"] + "</td>\n              </tr>\n              <tr>\n                <th>T\u0130P</th>\n                  <td>" + data["tip"] + "</td>\n              </tr>\n              <tr>\n                <th>T\u0130P DSD</th>\n                  <td>" + (data["tipDsd"] || "") + "</td>\n              </tr>\n              <tr>\n                <th>Adres</th>\n                  <td>" + data["adres"] + "</td>\n              </tr>\n          </tbody>\n      </table>\n      </div>\n    ";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBQUE7O0FBQ0E7O0FB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QUEwQyxhQUFDO0FBQUk7QUFBRSxLQUFqRDtBQUNELEdBRk07O0FBR1Q7QUFBQyxDQXRFRDs7QUF3RUEsa0JBQWUsZ0JBQWYsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBNYXAgZnJvbSBcIi4vbWFwXCI7XHJcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4vbWFya2VyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcclxuaW1wb3J0IHtJdGVyYXRlLCBVdGlsc30gZnJvbSBcIi4vdXRpbHNcIjtcclxuLy8gZGVjbGFyZSB2YXIgZ29vZ2xlO1xyXG4vLyBkZWNsYXJlIHZhciBNYXJrZXJDbHVzdGVyZXI7XHJcblxyXG52YXIgbWFwOiBnb29nbGUubWFwcy5NYXA7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgYXN5bmMgKCkgPT4ge1xyXG4gIC8vIEluc3RhbmNlIG9mIE1hcFxyXG4gIGNvbnN0IE1hcE9iamVjdCA9IG5ldyBNYXAoKTtcclxuICBtYXAgPSBNYXBPYmplY3QuaW5pdCgpO1xyXG5cclxuICAvLyBJbnN0YW5jZSBvZiBNYXJrZXJcclxuICBjb25zdCBNYXJrZXJPYmplY3QgPSBuZXcgTWFya2VyKCk7XHJcblxyXG4gIC8vIEluc3RhbmNlIG9mIExpc3RcclxuICBjb25zdCBMaXN0T2JqZWN0ID0gbmV3IExpc3QoKTtcclxuXHJcbiAgLy8gSW5zdGFuY2Ugb2YgVXRpbHMgYW5kIEl0ZXJhdGVcclxuICBjb25zdCBVdGlsc09iamVjdCA9IG5ldyBVdGlscygpO1xyXG4gIFxyXG4gIC8vIENsaWNrIGhhbmRsZXIgZm9yIGBtYXBgIGVsZW1lbnRcclxuICBNYXBPYmplY3QubGlzdGVuKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBNYXJrZXJPYmplY3QuY2xpY2tPdXRzaWRlT2ZNYXJrZXIoKTtcclxuICB9KTtcclxuXHJcbiAgLy8gQWRkIGNsaWNrIGhhbmRsZXIgdG8gdGhlIGxpc3QgZWxlbWVudHNcclxuICBMaXN0T2JqZWN0LmFkZENsaWNrSGFuZGxlckxpc3QoKGlkKSA9PiB7XHJcbiAgICBsZXQgcnVoc2F0Tm8gPSBpZDtcclxuXHJcbiAgICBsZXQgbWFya2VyID0gTWFya2VyT2JqZWN0LmZpbmRNYXJrZXIocnVoc2F0Tm8pO1xyXG4gICAgTWFwT2JqZWN0Lnpvb20obWFya2VyLmdldFBvc2l0aW9uKCksIDE2KTtcclxuICAgIE1hcmtlck9iamVjdC5tYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKTtcclxuICB9KTtcclxuICAvLyBHZXQgZWxlbWVudGxpc3RcclxuICBsZXQgZWxlbWVudExpc3QgOiBbSFRNTEVsZW1lbnRdID0gTGlzdE9iamVjdC5nZXRFbGVtZW50TGlzdCgpO1xyXG4gIFxyXG4gIC8vIEdldCBoZWFkZXJsaXN0XHJcbiAgTGlzdE9iamVjdC5nZXRIZWFkZXJMaXN0KCk7XHJcbiAgTGlzdE9iamVjdC5zZXRIZWFkZXJEaXNhYmxlKCk7XHJcbiAgLy8gQWRkIGNsaWNrIGhhbmRsZXIgdG8gdGhlIGhlYWRlciBlbGVtZW50c1xyXG4gIC8vIExpc3RPYmplY3QuYWRkQ2xpY2tIYW5kbGVySGVhZGVyKChpZCkgPT4ge1xyXG4gIC8vICAgbGV0IGR1cnVtID0gaWQ7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhkdXJ1bSk7XHJcbiAgLy8gfSk7XHJcbiAgXHJcblxyXG4gIGxldCBiYXlpbGVyID0gVXRpbHNPYmplY3QucGFyc2VCYXlpbGVyKGVsZW1lbnRMaXN0KTtcclxuXHJcbiAgLy8gSXRlcmF0ZSBmb3IgQ29vcmRzXHJcbiAgbGV0IGJheWlJdGVyYXRvciA9IG5ldyBJdGVyYXRlKGJheWlsZXIpO1xyXG5cclxuICBsZXQgYmF5aSA9IG51bGw7XHJcbiAgd2hpbGUgKChiYXlpID0gYmF5aUl0ZXJhdG9yLm5leHQoKSkgIT0gbnVsbCkge1xyXG4gICAgLy8gR2V0IGNvb3JkcyBmcm9tIGFkZHJlcyBieSBHZW9Db2RlclxyXG4gICAgLy8gbGV0IFtsYXQsIGxuZ106IFtudW1iZXIsIG51bWJlcl0gPSBhd2FpdCBVdGlsc09iamVjdC5nZXRMYXRMbmcoYmF5aS5hZHJlcyk7XHJcbiAgICBcclxuICAgIC8vIEdldCBjb29yZHMgZnJvbSBkYXRhXHJcbiAgICBsZXQgW2xhdCwgbG5nXTogW251bWJlciwgbnVtYmVyXSA9IGJheWkucG9zaXRpb24gPyBiYXlpLnBvc2l0aW9uIDogWzAsMF1cclxuXHJcbiAgICBNYXJrZXJPYmplY3QuY3JlYXRlKHtcclxuICAgICAgbWFwLFxyXG4gICAgICBwb3NpdGlvbjogeyBsYXQsIGxuZyB9LFxyXG4gICAgICB1bnZhbjogYmF5aVtcInVudmFuXCJdLFxyXG4gICAgICBydWhzYXRObzogYmF5aVtcInJ1aHNhdE5vXCJdXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyT25jZShtYXAsICd0aWxlc2xvYWRlZCcsIGZ1bmN0aW9uKGUpe1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJsb2FkZWRcIilcclxuICAvLyB9KVxyXG4gIC8vIHZhciBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlcihtYXAsIE1hcmtlck9iamVjdC5tYXJrZXJzLCB7XHJcbiAgLy8gICBpbWFnZVBhdGg6XHJcbiAgLy8gICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvbWFya2VyY2x1c3RlcmVyL21cIlxyXG4gIC8vIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyBmdW5jdGlvbiBTZWxlY3RDb250ZW50IChlbCkgeyAgICBcclxuLy8gICB2YXIgYXV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuLy8gICBhdXguc2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcclxuLy8gICBhdXguaW5uZXJIVE1MID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpLmlubmVySFRNTDtcclxuLy8gICBhdXguc2V0QXR0cmlidXRlKFwib25mb2N1c1wiLCBcImRvY3VtZW50LmV4ZWNDb21tYW5kKCdzZWxlY3RBbGwnLGZhbHNlLG51bGwpXCIpOyBcclxuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1eCk7XHJcbi8vICAgYXV4LmZvY3VzKCk7XHJcbi8vICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4vLyAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYXV4KTtcclxuLy8gfSIsIi8vIGltcG9ydCBNYXJrZXIgZnJvbSBcIi4vbWFya2VyXCI7XHJcblxyXG5jbGFzcyBMaXN0IHtcclxuICBNYXJrZXJPYmplY3Q7XHJcbiAgZWxlbWVudExpc3QgOiBbSFRNTEVsZW1lbnRdO1xyXG4gIGhlYWRlckxpc3QgOiBbSFRNTEVsZW1lbnRdID0gPGFueT5bXTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIC8vIHRoaXMuTWFya2VyT2JqZWN0ID0gbmV3IE1hcmtlcigpO1xyXG4gICAgLy8gdGhpcy5nZXRIZWFkZXJMaXN0KCk7XHJcbiAgICAvLyB0aGlzLmhlYWRlckxpc3QubWFwKGVsID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oZWFkZXJDbGljaykpXHJcbiAgfVxyXG4gIGxhc3RTZWxlY3RlZExpc3RFbGVtZW50O1xyXG4gIGxhc3RTZWxlY3RlZEhlYWRlckVsZW1lbnQ7XHJcbiAgc2VsZWN0QmF5aUZyb21MaXN0KHJ1aHNhdE5vOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVtb3ZlQWN0aXZlRWxlbWVudEZyb21MaXN0KCk7XHJcbiAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChydWhzYXRObyk7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgIHRoaXMubGFzdFNlbGVjdGVkTGlzdEVsZW1lbnQgPSBlbDtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGVsLmdldEF0dHJpYnV0ZShcImRhdGEtaW5mb1wiKSk7XHJcbiAgfVxyXG5cclxuICBoZWFkZXJDbGljayhlKXtcclxuICAgIGxldCBoZWFkZXIgOiBIVE1MRWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgbGV0IGlkID0gaGVhZGVyLmdldEF0dHJpYnV0ZShcImlkXCIpO1xyXG4gICAgdGhpcy5yZW1vdmVBY3RpdmVFbGVtZW50RnJvbUhlYWRlcigpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICB0aGlzLmxhc3RTZWxlY3RlZEhlYWRlckVsZW1lbnQgPSBoZWFkZXI7XHJcbiAgICBmb3IobGV0IGVsIG9mIHRoaXMuZWxlbWVudExpc3Qpe1xyXG4gICAgICBpZighZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGlkKSl7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuICBcclxuICByZW1vdmVBY3RpdmVFbGVtZW50RnJvbUxpc3QoKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0U2VsZWN0ZWRMaXN0RWxlbWVudCkge1xyXG4gICAgICB0aGlzLmxhc3RTZWxlY3RlZExpc3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVBY3RpdmVFbGVtZW50RnJvbUhlYWRlcigpIHtcclxuICAgIGlmKHRoaXMubGFzdFNlbGVjdGVkSGVhZGVyRWxlbWVudCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmxhc3RTZWxlY3RlZEhlYWRlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRMaXN0KCkge1xyXG4gICAgdGhpcy5lbGVtZW50TGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpc3QtZ3JvdXAtaXRlbVwiKSk7XHJcbiAgICBcclxuICAgIHJldHVybiB0aGlzLmVsZW1lbnRMaXN0O1xyXG4gIH1cclxuXHJcbiAgc2V0SGVhZGVyRGlzYWJsZSgpIHtcclxuICAgIGxldCBoZWFkZXJzU3RhdHVzID0ge1xyXG4gICAgICBha3RpZiA6IDAsXHJcbiAgICAgIHBhc2lmIDogMCxcclxuICAgICAgaXB0YWwgOiAwXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmb3IobGV0IGVsIG9mIHRoaXMuZWxlbWVudExpc3Qpe1xyXG4gICAgICBsZXQgZHVydW0gPSBlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWR1cnVtXCIpO1xyXG4gICAgICBoZWFkZXJzU3RhdHVzW2R1cnVtXSA9IDE7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMoaGVhZGVyc1N0YXR1cykubWFwKGtleSA9PiB7XHJcbiAgICAgIFxyXG4gICAgICBpZihoZWFkZXJzU3RhdHVzW2tleV0gPT0gMCl7XHJcbiAgICAgICAgW10uc2xpY2UuY2FsbCh0aGlzLmhlYWRlckxpc3QpXHJcbiAgICAgICAgICAuZmluZChoID0+IGguZ2V0QXR0cmlidXRlKFwiaWRcIikgPT0gIGtleSlcclxuICAgICAgICAgIC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldEhlYWRlckxpc3QoKXtcclxuICAgIHRoaXMuaGVhZGVyTGlzdCA9IDxhbnk+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdi1saW5rXCIpO1xyXG5cclxuICAgIGZvcihsZXQgaGVhZGVyIG9mIHRoaXMuaGVhZGVyTGlzdCl7XHJcbiAgICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4gdGhpcy5oZWFkZXJDbGljayhldikpXHJcbiAgICB9XHJcbiAgICB0aGlzLmxhc3RTZWxlY3RlZEhlYWRlckVsZW1lbnQgPSB0aGlzLmhlYWRlckxpc3RbMF07XHJcbiAgICByZXR1cm4gdGhpcy5oZWFkZXJMaXN0O1xyXG4gIH1cclxuXHJcbiAgYWRkQ2xpY2tIYW5kbGVyTGlzdChmbikge1xyXG4gICAgY29uc3QgbGlzdFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3RcIik7XHJcbiAgICBsaXN0V3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHRhcmdldDogSFRNTEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJsaXN0LWdyb3VwLWl0ZW1cIikpIHtcclxuICAgICAgICBsZXQgcnVoc2F0Tm8gPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgZm4ocnVoc2F0Tm8pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGFkZENsaWNrSGFuZGxlckhlYWRlcihmbil7XHJcbiAgICBjb25zdCBoZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWx0ZXJcIik7XHJcblxyXG4gICAgaGVhZGVyV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlIDogYW55KSA9PiB7XHJcbiAgICAgIGxldCB0YXJnZXQgOiBIVE1MRWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmF2LWxpbmtcIikpIHtcclxuICAgICAgICBsZXQgZHVydW0gPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XHJcbiAgICAgICAgZm4oZHVydW0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xyXG4iLCJjbGFzcyBNYXAge1xyXG4gIG1hcDogZ29vZ2xlLm1hcHMuTWFwO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJNYXAgTG9hZGVkXCIpXHJcbiAgICB0aGlzLmluaXQoKVxyXG4gICAgLy8gdGhpcy5saXN0ZW4oJ2NsaWNrJyk7XHJcbiAgfVxyXG5cclxuICBpbml0KCk6IGdvb2dsZS5tYXBzLk1hcCB7XHJcbiAgICBsZXQgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xyXG4gICAgICB6b29tOiAxMCxcclxuICAgICAgY2VudGVyOiB7IGxhdDogNDAuOTA3OTEsIGxuZzogMjkuMTc2OTUgfSxcclxuICAgICAgZ2VzdHVyZUhhbmRsaW5nOiAnZ3JlZWR5JyxcclxuICAgICAga2V5Ym9hcmRTaG9ydGN1dHMgOiB0cnVlXHJcbiAgICAgIC8vIHpvb21Db250cm9sT3B0aW9ucyA6IHtcclxuICAgICAgLy8gICBzdHlsZSA6IFxyXG4gICAgICAvLyB9XHJcbiAgICB9KTtcclxuICAgIC8vIG1hcC5kYXRhLmxvYWRHZW9Kc29uKFxyXG4gICAgLy8gICBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9tYXBzZGV2c2l0ZS9qc29uL2dvb2dsZS5qc29uXCJcclxuICAgIC8vICk7XHJcbiAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIHJldHVybiB0aGlzLm1hcFxyXG4gIH1cclxuXHJcbiAgem9vbShwb3NpdGlvbiA6IGdvb2dsZS5tYXBzLkxhdExuZywgem9vbUxldmVsIDogbnVtYmVyID0gMTUpe1xyXG4gICAgLy8gdGhpcy5tYXAuc2V0Wm9vbSgxMCk7XHJcbiAgICB0aGlzLm1hcC5zZXRab29tKHpvb21MZXZlbCk7XHJcbiAgICB0aGlzLm1hcC5zZXRDZW50ZXIocG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgbGlzdGVuKGV2ZW50TmFtZTogc3RyaW5nLCBsaXN0ZW5lcikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMubWFwLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xyXG4gICAgfSlcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLy8gbWFwQ2xpY2tIYW5kbGVyKGUpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKFwibWFwQ2xpY2tIYW5kbGVyXCIpXHJcbiAgLy8gICB0aGlzLk1hcmtlck9iamVjdC5jbG9zZUluZm9XaW5kb3coKTtcclxuICAvLyAgIHRoaXMuTWFya2VyT2JqZWN0LnNldEFsbE1hcmtlcnNEZWZhdWx0KCk7XHJcbiAgLy8gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXA7XHJcbiIsImltcG9ydCBJbmZvV2luZG93T2JqZWN0IGZyb20gXCIuL3dpbmRvd1wiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi9saXN0XCI7XHJcblxyXG5jbGFzcyBNYXJrZXIge1xyXG4gIHB1YmxpYyBtYXJrZXI6IGdvb2dsZS5tYXBzLk1hcmtlcjtcclxuICBwdWJsaWMgbWFya2VyczogW2dvb2dsZS5tYXBzLk1hcmtlcl0gPSA8YW55PltdO1xyXG4gIHB1YmxpYyBtYXA6IGdvb2dsZS5tYXBzLk1hcCA9IG51bGw7XHJcbiAgcHVibGljIGxhc3RXaW5kb3c6IGdvb2dsZS5tYXBzLkluZm9XaW5kb3c7XHJcbiAgcHVibGljIEluZm9XaW5kb3c7XHJcbiAgcHVibGljIExpc3RPYmplY3Q7XHJcbiAgcHJpdmF0ZSBERUZBVUxUX09QQUNJVFkgPSAwLjk7XHJcbiAgcHJpdmF0ZSBQQVNTSVZFX09QQUNJVFkgPSAwLjU7XHJcblxyXG4gIG1hcmtlckljb24gPSB7XHJcbiAgICB1cmw6IFwiaHR0cDovL21hcHMuZ29vZ2xlLmNvbS9tYXBmaWxlcy9tcy9pY29ucy9wdXJwbGUtZG90LnBuZ1wiLFxyXG4gICAgLy8gZmlsbENvbG9yOiAnIzAwMCcsXHJcbiAgICAvLyBmaWxsT3BhY2l0eTogLjksXHJcbiAgICAvLyBzY2FsZTogMTAsXHJcbiAgICAvLyBzdHJva2VDb2xvcjogJyMwMDAnLFxyXG4gICAgLy8gc3Ryb2tlV2VpZ2h0OiAxXHJcbiAgfTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuSW5mb1dpbmRvdyA9IG5ldyBJbmZvV2luZG93T2JqZWN0KCk7XHJcbiAgICB0aGlzLmxhc3RXaW5kb3cgPSB0aGlzLkluZm9XaW5kb3cubGFzdFdpbmRvdztcclxuICAgIHRoaXMuTGlzdE9iamVjdCA9IG5ldyBMaXN0KCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKHsgbWFwLCBwb3NpdGlvbiwgdW52YW4sIHJ1aHNhdE5vIH0pIHtcclxuICAgIC8vIENyZWF0ZSBhIG1hcmtlclxyXG4gICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBpY29uIDogdGhpcy5tYXJrZXJJY29uLFxyXG4gICAgICBtYXAsXHJcbiAgICAgIHBvc2l0aW9uLFxyXG4gICAgICB0aXRsZTogdW52YW4sXHJcbiAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXHJcbiAgICAgIG9wYWNpdHk6IHRoaXMuREVGQVVMVF9PUEFDSVRZXHJcbiAgICAgIC8vIG9wdGltaXplZCA6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIG1hcmtlci5zZXRWYWx1ZXMoe1xyXG4gICAgICBydWhzYXRObzogcnVoc2F0Tm8udHJpbSgpXHJcbiAgICB9KTtcclxuICAgIGlmICghdGhpcy5tYXApIHtcclxuICAgICAgdGhpcy5tYXAgPSBtYXA7XHJcbiAgICB9XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLnNldFpJbmRleCgxMDApO1xyXG4gICAgICB0aGlzLnNldE9wYWNpdHkoMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgLy8gdGhpcy5zZXRaSW5kZXgoMTAwKTtcclxuICAgICAgdGhpcy5zZXRPcGFjaXR5KDAuOSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTZXQgY2xpY2sgaGFuZGxlciB0byB0aGUgTWFya2VyXHJcbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoYXQubWFya2VyQ2xpY2tIYW5kbGVyKHRoaXMpXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gIH1cclxuXHJcbiAgbWFya2VyQ2xpY2tIYW5kbGVyKG1hcmtlcikge1xyXG4gICAgLy8gUmVtb3ZlIGFjdGl2ZSBsaXN0IGVsZW1lbnRcclxuICAgIGxldCBiYXlpRGF0YSA9IHRoaXMuTGlzdE9iamVjdC5zZWxlY3RCYXlpRnJvbUxpc3QobWFya2VyLnJ1aHNhdE5vKVxyXG4gICAgLy8gQ2xvc2UgbGFzdCBJbmZvV2luZG93XHJcbiAgICB0aGlzLmNsb3NlSW5mb1dpbmRvdygpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBuZXcgSW5mb1dpbmRvdyBmb3IgY2xpY2tlZCBtYXJrZXJcclxuICAgIHRoaXMuSW5mb1dpbmRvdy5zZXRJbmZvV2luZG93KGJheWlEYXRhLCBtYXJrZXIuZ2V0UG9zaXRpb24oKSk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciBJbmZvV2luZG93IGNoYW5nZSBldmVudFxyXG4gICAgdGhpcy5JbmZvV2luZG93Lmxpc3Rlbih0aGlzLnNldEFsbE1hcmtlcnNEZWZhdWx0KTtcclxuICAgIC8vIE9wZW4gdGhlIEluZm9XaW5kb3cgZm9yIGNsaWNrZWQgbWFya2VyXHJcbiAgICB0aGlzLmxhc3RXaW5kb3cub3Blbih0aGlzLm1hcCwgbWFya2VyKTtcclxuICAgIC8vIFNldCAwIHRvIGFsbCBtYXJrZXJzXHJcbiAgICB0aGlzLnNldEFsbE1hcmtlcnNQYXNzaXZlKCk7XHJcbiAgICAvLyBTZXQgaGlnaCBpbmRleCB0byB0aGUgbWFya2VyXHJcbiAgICBtYXJrZXIuc2V0WkluZGV4KDEwMCk7XHJcbiAgICBtYXJrZXIuc2V0T3BhY2l0eSh0aGlzLkRFRkFVTFRfT1BBQ0lUWSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZUluZm9XaW5kb3coKSB7XHJcbiAgICBpZiAodGhpcy5sYXN0V2luZG93KSB0aGlzLmxhc3RXaW5kb3cuY2xvc2UoKTtcclxuICB9XHJcblxyXG4gIGZpbmRNYXJrZXIobWFya2VySWQgOiBzdHJpbmcpe1xyXG4gICAgcmV0dXJuIHRoaXMubWFya2Vycy5maW5kKChfbWFya2VyIDogYW55KSA9PiBfbWFya2VyLnJ1aHNhdE5vID09IG1hcmtlcklkKVxyXG4gIH1cclxuXHJcbiAgY2xpY2tPdXRzaWRlT2ZNYXJrZXIoKSB7XHJcbiAgICB0aGlzLmNsb3NlSW5mb1dpbmRvdygpO1xyXG4gICAgdGhpcy5MaXN0T2JqZWN0LnJlbW92ZUFjdGl2ZUVsZW1lbnRGcm9tTGlzdCgpXHJcbiAgICB0aGlzLnNldEFsbE1hcmtlcnNEZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBzZXRBbGxNYXJrZXJzUGFzc2l2ZSgpIHtcclxuICAgIHRoaXMubWFya2Vycy5tYXAoX20gPT4ge1xyXG4gICAgICBfbS5zZXRaSW5kZXgoMTAwKTtcclxuICAgICAgX20uc2V0T3BhY2l0eSh0aGlzLlBBU1NJVkVfT1BBQ0lUWSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHNldEFsbE1hcmtlcnNEZWZhdWx0KCkge1xyXG4gICAgdGhpcy5tYXJrZXJzLm1hcChfbSA9PiB7XHJcbiAgICAgIF9tLnNldE9wYWNpdHkodGhpcy5ERUZBVUxUX09QQUNJVFkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XHJcbiIsImNsYXNzIFV0aWxzIHtcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHBhcnNlQmF5aWxlcihlbGVtZW50cykge1xyXG4gICAgbGV0IGJheWlsZXIgPSBbXTtcclxuICAgIC8vIEl0ZXJhdGUgaW5zdGFuY2VcclxuICAgIGxldCBlbGVtZW50QXJyYXkgPSBuZXcgSXRlcmF0ZShlbGVtZW50cyk7XHJcbiAgICBsZXQgZWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgLy8gSXRlcmF0ZSBmb3IgZWxlbWVudHNcclxuICAgIHdoaWxlICgoZWxlbWVudCA9IGVsZW1lbnRBcnJheS5uZXh0KCkpICE9IG51bGwpIHtcclxuICAgICAgbGV0IGJheWlJbmZvID0gSlNPTi5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5mb1wiKSk7XHJcblxyXG4gICAgICBiYXlpbGVyLnB1c2goYmF5aUluZm8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJheWlsZXI7XHJcbiAgfVxyXG5cclxuICBnZXRMYXRMbmcoYWRyZXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdmFyIGdlb2NvZGVyO1xyXG4gICAgICBpZiAoZ2VvY29kZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR2VvY29kZSBhbiBhZGRyZXNzLlxyXG4gICAgICBnZW9jb2Rlci5nZW9jb2RlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGFkZHJlc3M6IGFkcmVzXHJcbiAgICAgICAgfSxcclxuICAgICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT0gXCJPS1wiKSB7XHJcbiAgICAgICAgICAgIHZhciBsYXQgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XHJcbiAgICAgICAgICAgIHZhciBsbmcgPSByZXN1bHRbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCk7XHJcbiAgICAgICAgICAgIHZhciBjb29yZHM6IG51bWJlcltdID0gW2xhdCwgbG5nXTtcclxuICAgICAgICAgICAgcmVzb2x2ZShjb29yZHMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVqZWN0KHN0YXR1cyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBJdGVyYXRlIHtcclxuICBhcnJheSA9IFtdO1xyXG4gIGkgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XHJcbiAgICB0aGlzLmFycmF5ID0gW10uc2xpY2UuY2FsbChhcnJheSk7XHJcbiAgfVxyXG5cclxuICBuZXh0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGVsID0gdGhpcy5hcnJheVt0aGlzLmldO1xyXG4gICAgdGhpcy5pKys7XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IHsgVXRpbHMsIEl0ZXJhdGUgfTtcclxuIiwiY2xhc3MgSW5mb1dpbmRvd09iamVjdCB7XHJcbiAgcHVibGljIGxhc3RXaW5kb3c6IGdvb2dsZS5tYXBzLkluZm9XaW5kb3c7XHJcbiAgREVGQVVMVF9DT05URU5UID0ge1xyXG4gICAgaWw6IFwiXCIsXHJcbiAgICBpbGNlOiBcIlwiLFxyXG4gICAgcnVoc2F0Tm86IFwiXCIsXHJcbiAgICB1bnZhbjogXCJcIixcclxuICAgIGFkcmVzOiBcIlwiLFxyXG4gICAgdGlwOiBcIlwiLFxyXG4gICAgZHVydW06IFwiXCJcclxuICB9O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZXRJbmZvV2luZG93KCk7XHJcbiAgfVxyXG4gIC8vIENyZWF0ZSBJbmZvV2luZG93IGluc3RhbmNlIGZvciBtYXJrZXJcclxuICBwdWJsaWMgc2V0SW5mb1dpbmRvdyhkYXRhOiBPYmplY3QgPSB0aGlzLkRFRkFVTFRfQ09OVEVOVCkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYFxyXG4gICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MzUwcHg7bWluLWhlaWdodDoyNzBweFwiIGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgIDxoNT4ke2RhdGFbXCJ1bnZhblwiXX08L2g1PlxyXG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnkgZmxvYXQtcmlnaHQgY2xpcGJvYXJkXCIgb25tb3VzZWxlYXZlPVwic2V0VGltZW91dCgoKSA9PiB7cmVzZXRDbGlwYm9hcmQoZXZlbnQpfSAsMTUwMClcIiBvbkNsaWNrPVwic2VsZWN0RWxlbWVudENvbnRlbnRzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdJbmZvVGFibGUnKSwgZXZlbnQpO1wiPktvcHlhbGE8L2E+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIiBpZD1cIkluZm9UYWJsZVwiPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInctNDBcIj5BZMSxIFNveWFkxLE8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+TWVobWV0IEdlbsOnPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD7EsGw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+JHtkYXRhW1wiaWxcIl19PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD7EsGzDp2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+JHtkYXRhW1wiaWxjZVwiXX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlJ1aHNhdCBObzwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4ke2RhdGFbXCJydWhzYXROb1wiXX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPlTEsFA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+JHtkYXRhW1widGlwXCJdfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+VMSwUCBEU0Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+JHtkYXRhW1widGlwRHNkXCJdIHx8IFwiXCJ9PC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5BZHJlczwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD4ke2RhdGFbXCJhZHJlc1wiXX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxhc3RXaW5kb3cpIHtcclxuICAgICAgdGhpcy5sYXN0V2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG4gICAgICAgIGNvbnRlbnRcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxhc3RXaW5kb3cuc2V0Q29udGVudChjb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgc2V0SW5mb1dpbmRvd0h0bWwobWFya2VyOiBnb29nbGUubWFwcy5NYXJrZXIpIHt9XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oZm46IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLmxhc3RXaW5kb3cuYWRkTGlzdGVuZXIoXCJjbG9zZWNsaWNrXCIsIGUgPT4gZm4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb1dpbmRvd09iamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==