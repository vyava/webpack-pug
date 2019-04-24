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
      ListObject.setHeaderDisable(); // Add click handler to the header elements

      ListObject.addClickHandlerHeader(function (id) {
        var durum = id; // console.log(durum);
      });
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
  }; // setPassiveListByClassName(){
  //   console.log("dsfsdf")
  //   this.headerList.map(el => {
  //     if(el.classList.contains(className)){
  //       el.classList.add("d-none")
  //     }
  //   })
  // }


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
      } // this.setPassiveListByClassName()

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
    var disableHeaders = [];

    for (var _i = 0, _a = this.elementList; _i < _a.length; _i++) {
      var el = _a[_i];
      var durum = el.classList;

      if (durum.contains("aktif") || durum.contains("pasif") || durum.contains("pasif")) {
        console.log(durum);
      } else {
        this.headerList.find(function (h) {
          return h.getAttribute("id") == "1";
        });
        console.log("yokkk");
      }
    }
  };

  List.prototype.getHeaderList = function () {
    var _this = this;

    this.headerList = document.getElementsByClassName("nav-link"); // console.log(this.headerList)

    for (var _i = 0, _a = this.headerList; _i < _a.length; _i++) {
      var header = _a[_i];
      header.addEventListener('click', function (ev) {
        return _this.headerClick(ev);
      });
    }

    this.lastSelectedHeaderElement = this.headerList[0]; // this.headerList.map(el => el.addEventListener('click', this.headerClick))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcmtlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7O0FBQUE7O0FBQ0E7O0FB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O0FDM0RoQjtBQUFBO0FBQUE7QUFFRTtBQUNFLFNBQUssYUFBTDtBQUNELEdBSkgsQ0FLRTs7O0FBQ08sNkNBQVAsVUFBcUIsT0FBckIsRUFBcUM7QUFDbkMsUUFBTSxPQUFPLEdBQUcsa0dBRU4sT0FGTSxHQUVDLDJ1Q0FGakI7O0FBdUNBLFFBQUksQ0FBQyxLQUFLLFVBQVYsRUFBc0I7QUFDcEIsV0FBSyxVQUFMLEdBQWtCLElBQUksTUFBTSxDQUFDLElBQVAsQ0FBWSxVQUFoQixDQUEyQjtBQUMzQyxlQUFPO0FBRG9DLE9BQTNCLENBQWxCO0FBR0QsS0FKRCxNQUlPO0FBQ0wsV0FBSyxVQUFMLENBQWdCLFVBQWhCLENBQTJCLE9BQTNCO0FBQ0Q7QUFDRixHQS9DTSxDQU5ULENBdURFOzs7QUFFTyxzQ0FBUCxVQUFjLEVBQWQsRUFBMEI7QUFDeEIsU0FBSyxVQUFMLENBQWdCLFdBQWhCLENBQTRCLFlBQTVCLEVBQTBDLGFBQUM7QUFBSTtBQUFFLEtBQWpEO0FBQ0QsR0FGTTs7QUFHVDtBQUFDLENBNUREOztBQThEQSxrQkFBZSxnQkFBZixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiaW1wb3J0IE1hcCBmcm9tIFwiLi9tYXBcIjtcclxuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi9tYXJrZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xyXG5pbXBvcnQge0l0ZXJhdGUsIFV0aWxzfSBmcm9tIFwiLi91dGlsc1wiO1xyXG4vLyBkZWNsYXJlIHZhciBnb29nbGU7XHJcbi8vIGRlY2xhcmUgdmFyIE1hcmtlckNsdXN0ZXJlcjtcclxuXHJcbnZhciBtYXA6IGdvb2dsZS5tYXBzLk1hcDtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBhc3luYyAoKSA9PiB7XHJcbiAgLy8gSW5zdGFuY2Ugb2YgTWFwXHJcbiAgY29uc3QgTWFwT2JqZWN0ID0gbmV3IE1hcCgpO1xyXG4gIG1hcCA9IE1hcE9iamVjdC5pbml0KCk7XHJcblxyXG4gIC8vIEluc3RhbmNlIG9mIE1hcmtlclxyXG4gIGNvbnN0IE1hcmtlck9iamVjdCA9IG5ldyBNYXJrZXIoKTtcclxuXHJcbiAgLy8gSW5zdGFuY2Ugb2YgTGlzdFxyXG4gIGNvbnN0IExpc3RPYmplY3QgPSBuZXcgTGlzdCgpO1xyXG5cclxuICAvLyBJbnN0YW5jZSBvZiBVdGlscyBhbmQgSXRlcmF0ZVxyXG4gIGNvbnN0IFV0aWxzT2JqZWN0ID0gbmV3IFV0aWxzKCk7XHJcbiAgXHJcbiAgLy8gQ2xpY2sgaGFuZGxlciBmb3IgYG1hcGAgZWxlbWVudFxyXG4gIE1hcE9iamVjdC5saXN0ZW4oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIE1hcmtlck9iamVjdC5jbGlja091dHNpZGVPZk1hcmtlcigpO1xyXG4gIH0pO1xyXG5cclxuICAvLyBBZGQgY2xpY2sgaGFuZGxlciB0byB0aGUgbGlzdCBlbGVtZW50c1xyXG4gIExpc3RPYmplY3QuYWRkQ2xpY2tIYW5kbGVyTGlzdCgoaWQpID0+IHtcclxuICAgIGxldCBydWhzYXRObyA9IGlkO1xyXG5cclxuICAgIGxldCBtYXJrZXIgPSBNYXJrZXJPYmplY3QuZmluZE1hcmtlcihydWhzYXRObyk7XHJcbiAgICBNYXBPYmplY3Quem9vbShtYXJrZXIuZ2V0UG9zaXRpb24oKSwgMTYpO1xyXG4gICAgTWFya2VyT2JqZWN0Lm1hcmtlckNsaWNrSGFuZGxlcihtYXJrZXIpO1xyXG4gIH0pO1xyXG4gIC8vIEdldCBlbGVtZW50bGlzdFxyXG4gIGxldCBlbGVtZW50TGlzdCA6IFtIVE1MRWxlbWVudF0gPSBMaXN0T2JqZWN0LmdldEVsZW1lbnRMaXN0KCk7XHJcbiAgXHJcbiAgLy8gR2V0IGhlYWRlcmxpc3RcclxuICBMaXN0T2JqZWN0LmdldEhlYWRlckxpc3QoKTtcclxuICBMaXN0T2JqZWN0LnNldEhlYWRlckRpc2FibGUoKTtcclxuICAvLyBBZGQgY2xpY2sgaGFuZGxlciB0byB0aGUgaGVhZGVyIGVsZW1lbnRzXHJcbiAgTGlzdE9iamVjdC5hZGRDbGlja0hhbmRsZXJIZWFkZXIoKGlkKSA9PiB7XHJcbiAgICBsZXQgZHVydW0gPSBpZDtcclxuICAgIC8vIGNvbnNvbGUubG9nKGR1cnVtKTtcclxuICB9KTtcclxuICBcclxuXHJcbiAgbGV0IGJheWlsZXIgPSBVdGlsc09iamVjdC5wYXJzZUJheWlsZXIoZWxlbWVudExpc3QpO1xyXG5cclxuICAvLyBJdGVyYXRlIGZvciBDb29yZHNcclxuICBsZXQgYmF5aUl0ZXJhdG9yID0gbmV3IEl0ZXJhdGUoYmF5aWxlcik7XHJcblxyXG4gIGxldCBiYXlpID0gbnVsbDtcclxuICB3aGlsZSAoKGJheWkgPSBiYXlpSXRlcmF0b3IubmV4dCgpKSAhPSBudWxsKSB7XHJcbiAgICAvLyBHZXQgY29vcmRzIGZyb20gYWRkcmVzIGJ5IEdlb0NvZGVyXHJcbiAgICAvLyBsZXQgW2xhdCwgbG5nXTogW251bWJlciwgbnVtYmVyXSA9IGF3YWl0IFV0aWxzT2JqZWN0LmdldExhdExuZyhiYXlpLmFkcmVzKTtcclxuICAgIFxyXG4gICAgLy8gR2V0IGNvb3JkcyBmcm9tIGRhdGFcclxuICAgIGxldCBbbGF0LCBsbmddOiBbbnVtYmVyLCBudW1iZXJdID0gYmF5aS5wb3NpdGlvbiA/IGJheWkucG9zaXRpb24gOiBbMCwwXVxyXG5cclxuICAgIE1hcmtlck9iamVjdC5jcmVhdGUoe1xyXG4gICAgICBtYXAsXHJcbiAgICAgIHBvc2l0aW9uOiB7IGxhdCwgbG5nIH0sXHJcbiAgICAgIHVudmFuOiBiYXlpW1widW52YW5cIl0sXHJcbiAgICAgIHJ1aHNhdE5vOiBiYXlpW1wicnVoc2F0Tm9cIl1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKG1hcCwgJ3RpbGVzbG9hZGVkJywgZnVuY3Rpb24oZSl7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKVxyXG4gIC8vIH0pXHJcbiAgLy8gdmFyIG1hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3RlcmVyKG1hcCwgTWFya2VyT2JqZWN0Lm1hcmtlcnMsIHtcclxuICAvLyAgIGltYWdlUGF0aDpcclxuICAvLyAgICAgXCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9tYXJrZXJjbHVzdGVyZXIvbVwiXHJcbiAgLy8gfSk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIFNlbGVjdENvbnRlbnQgKGVsKSB7ICAgIFxyXG4vLyAgIHZhciBhdXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4vLyAgIGF1eC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50RWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xyXG4vLyAgIGF1eC5pbm5lckhUTUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuaW5uZXJIVE1MO1xyXG4vLyAgIGF1eC5zZXRBdHRyaWJ1dGUoXCJvbmZvY3VzXCIsIFwiZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3NlbGVjdEFsbCcsZmFsc2UsbnVsbClcIik7IFxyXG4vLyAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXV4KTtcclxuLy8gICBhdXguZm9jdXMoKTtcclxuLy8gICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcbi8vICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhdXgpO1xyXG4vLyB9IiwiLy8gaW1wb3J0IE1hcmtlciBmcm9tIFwiLi9tYXJrZXJcIjtcclxuXHJcbmNsYXNzIExpc3Qge1xyXG4gIE1hcmtlck9iamVjdDtcclxuICBlbGVtZW50TGlzdCA6IFtIVE1MRWxlbWVudF07XHJcbiAgaGVhZGVyTGlzdCA6IFtIVE1MRWxlbWVudF0gPSA8YW55PltdO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLy8gdGhpcy5NYXJrZXJPYmplY3QgPSBuZXcgTWFya2VyKCk7XHJcbiAgICAvLyB0aGlzLmdldEhlYWRlckxpc3QoKTtcclxuICAgIC8vIHRoaXMuaGVhZGVyTGlzdC5tYXAoZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhlYWRlckNsaWNrKSlcclxuICB9XHJcbiAgbGFzdFNlbGVjdGVkTGlzdEVsZW1lbnQ7XHJcbiAgbGFzdFNlbGVjdGVkSGVhZGVyRWxlbWVudDtcclxuICBzZWxlY3RCYXlpRnJvbUxpc3QocnVoc2F0Tm86IHN0cmluZykge1xyXG4gICAgdGhpcy5yZW1vdmVBY3RpdmVFbGVtZW50RnJvbUxpc3QoKTtcclxuICAgIGxldCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJ1aHNhdE5vKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblxyXG4gICAgdGhpcy5sYXN0U2VsZWN0ZWRMaXN0RWxlbWVudCA9IGVsO1xyXG4gIH1cclxuXHJcbiAgLy8gc2V0UGFzc2l2ZUxpc3RCeUNsYXNzTmFtZSgpe1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJkc2ZzZGZcIilcclxuICAvLyAgIHRoaXMuaGVhZGVyTGlzdC5tYXAoZWwgPT4ge1xyXG4gIC8vICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSl7XHJcbiAgLy8gICAgICAgZWwuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KVxyXG4gIC8vIH1cclxuXHJcbiAgaGVhZGVyQ2xpY2soZSl7XHJcbiAgICBsZXQgaGVhZGVyIDogSFRNTEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgIGxldCBpZCA9IGhlYWRlci5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIHRoaXMucmVtb3ZlQWN0aXZlRWxlbWVudEZyb21IZWFkZXIoKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgdGhpcy5sYXN0U2VsZWN0ZWRIZWFkZXJFbGVtZW50ID0gaGVhZGVyO1xyXG4gICAgZm9yKGxldCBlbCBvZiB0aGlzLmVsZW1lbnRMaXN0KXtcclxuICAgICAgaWYoIWVsLmNsYXNzTGlzdC5jb250YWlucyhpZCkpe1xyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIilcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKVxyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMuc2V0UGFzc2l2ZUxpc3RCeUNsYXNzTmFtZSgpXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgcmVtb3ZlQWN0aXZlRWxlbWVudEZyb21MaXN0KCkge1xyXG4gICAgaWYgKHRoaXMubGFzdFNlbGVjdGVkTGlzdEVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5sYXN0U2VsZWN0ZWRMaXN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQWN0aXZlRWxlbWVudEZyb21IZWFkZXIoKSB7XHJcbiAgICBpZih0aGlzLmxhc3RTZWxlY3RlZEhlYWRlckVsZW1lbnQpe1xyXG4gICAgICByZXR1cm4gdGhpcy5sYXN0U2VsZWN0ZWRIZWFkZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50TGlzdCgpIHtcclxuICAgIHRoaXMuZWxlbWVudExpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0LWdyb3VwLWl0ZW1cIikpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50TGlzdDtcclxuICB9XHJcblxyXG4gIHNldEhlYWRlckRpc2FibGUoKSB7XHJcbiAgICBsZXQgZGlzYWJsZUhlYWRlcnMgPSBbXTtcclxuICAgIGZvcihsZXQgZWwgb2YgdGhpcy5lbGVtZW50TGlzdCl7XHJcbiAgICAgIGxldCBkdXJ1bSA9IGVsLmNsYXNzTGlzdFxyXG4gICAgICBpZigoZHVydW0uY29udGFpbnMoXCJha3RpZlwiKSB8fCBkdXJ1bS5jb250YWlucyhcInBhc2lmXCIpIHx8IGR1cnVtLmNvbnRhaW5zKFwicGFzaWZcIikpKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhkdXJ1bSlcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJMaXN0LmZpbmQoaCA9PiBoLmdldEF0dHJpYnV0ZShcImlkXCIpID09ICBcIjFcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhcInlva2trXCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEhlYWRlckxpc3QoKXtcclxuICAgIHRoaXMuaGVhZGVyTGlzdCA9IDxhbnk+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdi1saW5rXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5oZWFkZXJMaXN0KVxyXG4gICAgZm9yKGxldCBoZWFkZXIgb2YgdGhpcy5oZWFkZXJMaXN0KXtcclxuICAgICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB0aGlzLmhlYWRlckNsaWNrKGV2KSlcclxuICAgIH1cclxuICAgIHRoaXMubGFzdFNlbGVjdGVkSGVhZGVyRWxlbWVudCA9IHRoaXMuaGVhZGVyTGlzdFswXTtcclxuICAgIC8vIHRoaXMuaGVhZGVyTGlzdC5tYXAoZWwgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhlYWRlckNsaWNrKSlcclxuICAgIHJldHVybiB0aGlzLmhlYWRlckxpc3Q7XHJcbiAgfVxyXG5cclxuICBhZGRDbGlja0hhbmRsZXJMaXN0KGZuKSB7XHJcbiAgICBjb25zdCBsaXN0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGlzdFwiKTtcclxuICAgIGxpc3RXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGU6IGFueSkgPT4ge1xyXG4gICAgICBsZXQgdGFyZ2V0OiBIVE1MRWxlbWVudCA9IGUudGFyZ2V0O1xyXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpc3QtZ3JvdXAtaXRlbVwiKSkge1xyXG4gICAgICAgIGxldCBydWhzYXRObyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBmbihydWhzYXRObylcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgYWRkQ2xpY2tIYW5kbGVySGVhZGVyKGZuKXtcclxuICAgIGNvbnN0IGhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbHRlclwiKTtcclxuXHJcbiAgICBoZWFkZXJXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUgOiBhbnkpID0+IHtcclxuICAgICAgbGV0IHRhcmdldCA6IEhUTUxFbGVtZW50ID0gZS50YXJnZXQ7XHJcbiAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXYtbGlua1wiKSkge1xyXG4gICAgICAgIGxldCBkdXJ1bSA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICBmbihkdXJ1bSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiIsImNsYXNzIE1hcCB7XHJcbiAgbWFwOiBnb29nbGUubWFwcy5NYXA7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1hcCBMb2FkZWRcIilcclxuICAgIHRoaXMuaW5pdCgpXHJcbiAgICAvLyB0aGlzLmxpc3RlbignY2xpY2snKTtcclxuICB9XHJcblxyXG4gIGluaXQoKTogZ29vZ2xlLm1hcHMuTWFwIHtcclxuICAgIGxldCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XHJcbiAgICAgIHpvb206IDEwLFxyXG4gICAgICBjZW50ZXI6IHsgbGF0OiA0MC45MDc5MSwgbG5nOiAyOS4xNzY5NSB9LFxyXG4gICAgICBnZXN0dXJlSGFuZGxpbmc6ICdncmVlZHknLFxyXG4gICAgICBrZXlib2FyZFNob3J0Y3V0cyA6IHRydWVcclxuICAgICAgLy8gem9vbUNvbnRyb2xPcHRpb25zIDoge1xyXG4gICAgICAvLyAgIHN0eWxlIDogXHJcbiAgICAgIC8vIH1cclxuICAgIH0pO1xyXG4gICAgLy8gbWFwLmRhdGEubG9hZEdlb0pzb24oXHJcbiAgICAvLyAgIFwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL21hcHNkZXZzaXRlL2pzb24vZ29vZ2xlLmpzb25cIlxyXG4gICAgLy8gKTtcclxuICAgIHRoaXMubWFwID0gbWFwO1xyXG4gICAgcmV0dXJuIHRoaXMubWFwXHJcbiAgfVxyXG5cclxuICB6b29tKHBvc2l0aW9uIDogZ29vZ2xlLm1hcHMuTGF0TG5nLCB6b29tTGV2ZWwgOiBudW1iZXIgPSAxNSl7XHJcbiAgICAvLyB0aGlzLm1hcC5zZXRab29tKDEwKTtcclxuICAgIHRoaXMubWFwLnNldFpvb20oem9vbUxldmVsKTtcclxuICAgIHRoaXMubWFwLnNldENlbnRlcihwb3NpdGlvbik7XHJcbiAgfVxyXG5cclxuICBsaXN0ZW4oZXZlbnROYW1lOiBzdHJpbmcsIGxpc3RlbmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5tYXAuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lcik7XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAvLyBtYXBDbGlja0hhbmRsZXIoZSkge1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJtYXBDbGlja0hhbmRsZXJcIilcclxuICAvLyAgIHRoaXMuTWFya2VyT2JqZWN0LmNsb3NlSW5mb1dpbmRvdygpO1xyXG4gIC8vICAgdGhpcy5NYXJrZXJPYmplY3Quc2V0QWxsTWFya2Vyc0RlZmF1bHQoKTtcclxuICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcDtcclxuIiwiaW1wb3J0IEluZm9XaW5kb3dPYmplY3QgZnJvbSBcIi4vd2luZG93XCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcclxuXHJcbmNsYXNzIE1hcmtlciB7XHJcbiAgcHVibGljIG1hcmtlcjogZ29vZ2xlLm1hcHMuTWFya2VyO1xyXG4gIHB1YmxpYyBtYXJrZXJzOiBbZ29vZ2xlLm1hcHMuTWFya2VyXSA9IDxhbnk+W107XHJcbiAgcHVibGljIG1hcDogZ29vZ2xlLm1hcHMuTWFwID0gbnVsbDtcclxuICBwdWJsaWMgbGFzdFdpbmRvdzogZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdztcclxuICBwdWJsaWMgSW5mb1dpbmRvdztcclxuICBwdWJsaWMgTGlzdE9iamVjdDtcclxuICBwcml2YXRlIERFRkFVTFRfT1BBQ0lUWSA9IDAuOTtcclxuICBwcml2YXRlIFBBU1NJVkVfT1BBQ0lUWSA9IDAuNTtcclxuXHJcbiAgbWFya2VySWNvbiA9IHtcclxuICAgIHVybDogXCJodHRwOi8vbWFwcy5nb29nbGUuY29tL21hcGZpbGVzL21zL2ljb25zL3B1cnBsZS1kb3QucG5nXCIsXHJcbiAgICAvLyBmaWxsQ29sb3I6ICcjMDAwJyxcclxuICAgIC8vIGZpbGxPcGFjaXR5OiAuOSxcclxuICAgIC8vIHNjYWxlOiAxMCxcclxuICAgIC8vIHN0cm9rZUNvbG9yOiAnIzAwMCcsXHJcbiAgICAvLyBzdHJva2VXZWlnaHQ6IDFcclxuICB9O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5JbmZvV2luZG93ID0gbmV3IEluZm9XaW5kb3dPYmplY3QoKTtcclxuICAgIHRoaXMubGFzdFdpbmRvdyA9IHRoaXMuSW5mb1dpbmRvdy5sYXN0V2luZG93O1xyXG4gICAgdGhpcy5MaXN0T2JqZWN0ID0gbmV3IExpc3QoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoeyBtYXAsIHBvc2l0aW9uLCB1bnZhbiwgcnVoc2F0Tm8gfSkge1xyXG4gICAgLy8gQ3JlYXRlIGEgbWFya2VyXHJcbiAgICBsZXQgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgIGljb24gOiB0aGlzLm1hcmtlckljb24sXHJcbiAgICAgIG1hcCxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICAgIHRpdGxlOiB1bnZhbixcclxuICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcclxuICAgICAgb3BhY2l0eTogdGhpcy5ERUZBVUxUX09QQUNJVFlcclxuICAgICAgLy8gb3B0aW1pemVkIDogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgbWFya2VyLnNldFZhbHVlcyh7XHJcbiAgICAgIHJ1aHNhdE5vOiBydWhzYXROby50cmltKClcclxuICAgIH0pO1xyXG4gICAgaWYgKCF0aGlzLm1hcCkge1xyXG4gICAgICB0aGlzLm1hcCA9IG1hcDtcclxuICAgIH1cclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuc2V0WkluZGV4KDEwMCk7XHJcbiAgICAgIHRoaXMuc2V0T3BhY2l0eSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyB0aGlzLnNldFpJbmRleCgxMDApO1xyXG4gICAgICB0aGlzLnNldE9wYWNpdHkoMC45KTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNldCBjbGljayBoYW5kbGVyIHRvIHRoZSBNYXJrZXJcclxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhhdC5tYXJrZXJDbGlja0hhbmRsZXIodGhpcylcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XHJcbiAgfVxyXG5cclxuICBtYXJrZXJDbGlja0hhbmRsZXIobWFya2VyKSB7XHJcbiAgICAvLyBSZW1vdmUgYWN0aXZlIGxpc3QgZWxlbWVudFxyXG4gICAgdGhpcy5MaXN0T2JqZWN0LnNlbGVjdEJheWlGcm9tTGlzdChtYXJrZXIucnVoc2F0Tm8pXHJcbiAgICAvLyBDbG9zZSBsYXN0IEluZm9XaW5kb3dcclxuICAgIHRoaXMuY2xvc2VJbmZvV2luZG93KCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIG5ldyBJbmZvV2luZG93IGZvciBjbGlja2VkIG1hcmtlclxyXG4gICAgdGhpcy5JbmZvV2luZG93LnNldEluZm9XaW5kb3coYCR7bWFya2VyLmdldFRpdGxlKCl9YCwgbWFya2VyLmdldFBvc2l0aW9uKCkpO1xyXG5cclxuICAgIC8vIExpc3RlbiBmb3IgSW5mb1dpbmRvdyBjaGFuZ2UgZXZlbnRcclxuICAgIHRoaXMuSW5mb1dpbmRvdy5saXN0ZW4odGhpcy5zZXRBbGxNYXJrZXJzRGVmYXVsdCk7XHJcbiAgICAvLyBPcGVuIHRoZSBJbmZvV2luZG93IGZvciBjbGlja2VkIG1hcmtlclxyXG4gICAgdGhpcy5sYXN0V2luZG93Lm9wZW4odGhpcy5tYXAsIG1hcmtlcik7XHJcbiAgICAvLyBTZXQgMCB0byBhbGwgbWFya2Vyc1xyXG4gICAgdGhpcy5zZXRBbGxNYXJrZXJzUGFzc2l2ZSgpO1xyXG4gICAgLy8gU2V0IGhpZ2ggaW5kZXggdG8gdGhlIG1hcmtlclxyXG4gICAgbWFya2VyLnNldFpJbmRleCgxMDApO1xyXG4gICAgbWFya2VyLnNldE9wYWNpdHkodGhpcy5ERUZBVUxUX09QQUNJVFkpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VJbmZvV2luZG93KCkge1xyXG4gICAgaWYgKHRoaXMubGFzdFdpbmRvdykgdGhpcy5sYXN0V2luZG93LmNsb3NlKCk7XHJcbiAgfVxyXG5cclxuICBmaW5kTWFya2VyKG1hcmtlcklkIDogc3RyaW5nKXtcclxuICAgIHJldHVybiB0aGlzLm1hcmtlcnMuZmluZCgoX21hcmtlciA6IGFueSkgPT4gX21hcmtlci5ydWhzYXRObyA9PSBtYXJrZXJJZClcclxuICB9XHJcblxyXG4gIGNsaWNrT3V0c2lkZU9mTWFya2VyKCkge1xyXG4gICAgdGhpcy5jbG9zZUluZm9XaW5kb3coKTtcclxuICAgIHRoaXMuTGlzdE9iamVjdC5yZW1vdmVBY3RpdmVFbGVtZW50RnJvbUxpc3QoKVxyXG4gICAgdGhpcy5zZXRBbGxNYXJrZXJzRGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxsTWFya2Vyc1Bhc3NpdmUoKSB7XHJcbiAgICB0aGlzLm1hcmtlcnMubWFwKF9tID0+IHtcclxuICAgICAgX20uc2V0WkluZGV4KDEwMCk7XHJcbiAgICAgIF9tLnNldE9wYWNpdHkodGhpcy5QQVNTSVZFX09QQUNJVFkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRBbGxNYXJrZXJzRGVmYXVsdCgpIHtcclxuICAgIHRoaXMubWFya2Vycy5tYXAoX20gPT4ge1xyXG4gICAgICBfbS5zZXRPcGFjaXR5KHRoaXMuREVGQVVMVF9PUEFDSVRZKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xyXG4iLCJjbGFzcyBVdGlscyB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwYXJzZUJheWlsZXIoZWxlbWVudHMpIHtcclxuICAgIGxldCBiYXlpbGVyID0gW107XHJcbiAgICAvLyBJdGVyYXRlIGluc3RhbmNlXHJcbiAgICBsZXQgZWxlbWVudEFycmF5ID0gbmV3IEl0ZXJhdGUoZWxlbWVudHMpO1xyXG4gICAgbGV0IGVsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIC8vIEl0ZXJhdGUgZm9yIGVsZW1lbnRzXHJcbiAgICB3aGlsZSAoKGVsZW1lbnQgPSBlbGVtZW50QXJyYXkubmV4dCgpKSAhPSBudWxsKSB7XHJcbiAgICAgIGxldCBiYXlpSW5mbyA9IEpTT04ucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZm9cIikpO1xyXG5cclxuICAgICAgYmF5aWxlci5wdXNoKGJheWlJbmZvKTtcclxuICAgIH1cclxuICAgIHJldHVybiBiYXlpbGVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGF0TG5nKGFkcmVzKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHZhciBnZW9jb2RlcjtcclxuICAgICAgaWYgKGdlb2NvZGVyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEdlb2NvZGUgYW4gYWRkcmVzcy5cclxuICAgICAgZ2VvY29kZXIuZ2VvY29kZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhZGRyZXNzOiBhZHJlc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09IFwiT0tcIikge1xyXG4gICAgICAgICAgICB2YXIgbGF0ID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgICAgICB2YXIgbG5nID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgICAgICB2YXIgY29vcmRzOiBudW1iZXJbXSA9IFtsYXQsIGxuZ107XHJcbiAgICAgICAgICAgIHJlc29sdmUoY29vcmRzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlamVjdChzdGF0dXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgSXRlcmF0ZSB7XHJcbiAgYXJyYXkgPSBbXTtcclxuICBpID0gMDtcclxuICBjb25zdHJ1Y3RvcihhcnJheSkge1xyXG4gICAgdGhpcy5hcnJheSA9IFtdLnNsaWNlLmNhbGwoYXJyYXkpO1xyXG4gIH1cclxuXHJcbiAgbmV4dCA9ICgpID0+IHtcclxuICAgIGxldCBlbCA9IHRoaXMuYXJyYXlbdGhpcy5pXTtcclxuICAgIHRoaXMuaSsrO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IFV0aWxzLCBJdGVyYXRlIH07XHJcbiIsImNsYXNzIEluZm9XaW5kb3dPYmplY3Qge1xyXG4gIHB1YmxpYyBsYXN0V2luZG93OiBnb29nbGUubWFwcy5JbmZvV2luZG93O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZXRJbmZvV2luZG93KCk7XHJcbiAgfVxyXG4gIC8vIENyZWF0ZSBJbmZvV2luZG93IGluc3RhbmNlIGZvciBtYXJrZXJcclxuICBwdWJsaWMgc2V0SW5mb1dpbmRvdyhtZXNzYWdlPzogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gYFxyXG4gICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MzUwcHg7bWluLWhlaWdodDoyNzBweFwiIGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgIDxoNT4ke21lc3NhZ2V9PC9oNT5cclxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5IGZsb2F0LXJpZ2h0IGNsaXBib2FyZFwiIG9ubW91c2VsZWF2ZT1cInNldFRpbWVvdXQoKCkgPT4ge3Jlc2V0Q2xpcGJvYXJkKGV2ZW50KX0gLDE1MDApXCIgb25DbGljaz1cInNlbGVjdEVsZW1lbnRDb250ZW50cyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW5mb1RhYmxlJyksIGV2ZW50KTtcIj5Lb3B5YWxhPC9hPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCIgaWQ9XCJJbmZvVGFibGVcIj5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ3LTQwXCI+QWTEsSBTb3lhZMSxPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPk1laG1ldCBHZW7DpzwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+xLBsPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPsSwU1RBTkJVTDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+xLBsw6dlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPktBRElLw5ZZPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5SdWhzYXQgTm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+MzQzNTg2N1BUPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aD5UxLBQPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPkJBS0tBTDwvdGQ+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGg+VMSwUCBEU0Q8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+MDFCQUs8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoPkFkcmVzPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRkPkF0YWxhciBNYWggS8O2cm/En2x1IENhZCBObzo0NiBEOjc8L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIGA7XHJcblxyXG4gICAgaWYgKCF0aGlzLmxhc3RXaW5kb3cpIHtcclxuICAgICAgdGhpcy5sYXN0V2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG4gICAgICAgIGNvbnRlbnRcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxhc3RXaW5kb3cuc2V0Q29udGVudChjb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHByaXZhdGUgc2V0SW5mb1dpbmRvd0h0bWwobWFya2VyOiBnb29nbGUubWFwcy5NYXJrZXIpIHt9XHJcblxyXG4gIHB1YmxpYyBsaXN0ZW4oZm46IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLmxhc3RXaW5kb3cuYWRkTGlzdGVuZXIoXCJjbG9zZWNsaWNrXCIsIGUgPT4gZm4pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mb1dpbmRvd09iamVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==