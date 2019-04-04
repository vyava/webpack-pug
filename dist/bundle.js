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

// import Map from "./map";
window.addEventListener("load", function (e) {
  var bayiler = loadMap("map");
});

function loadMap(_element) {
  var MapObject = new Map();

  var _Map = MapObject.createMap(_element);

  var elements = document.getElementsByClassName("list-group-item");
  var bayiler = []; // console.log(_Map.map);

  _Map.on("load", function () {});

  var _iterate = new Iterate(elements);

  var element = null;

  while ((element = _iterate.next()) != null) {
    var bayiInfo = JSON.parse(element.getAttribute("data-info"));
    MapObject.getLatLng(bayiInfo.adres, function (coords) {
      MapObject.insertMarker(coords);
    }); // bayiInfo["coords"] = coords;

    bayiler.push(bayiInfo);
    element.onclick = _Map.doSoemthing;
  }

  return bayiler || [];
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

    this.array = array;
  }

  return Iterate;
}();

var Map =
/** @class */
function () {
  function Map() {
    this.API_KEY = "pk.eyJ1IjoiemFmZXJnZW5jIiwiYSI6ImNqZmR1MGd3MTJyMzgycm52ZmN5MG93ZWIifQ.EArl8wm-RmbkSczT76TDEw"; // this.map.addLayer({
    //   id: "places",
    //   type: "symbol"
    // });
    // this.map.on("click", e => {
    //   var coordinates = e.features[0].geometry.coordinates.slice();
    //   var description = e.features[0].properties.description;
    //   // Popup init
    //   let popup = new mapboxgl.Popup({ offset: 25 }).setText("Popup");
    // });
  }

  Map.prototype.createMap = function (elementId) {
    mapboxgl.accessToken = this.API_KEY;
    this.map = new mapboxgl.Map({
      container: elementId,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 15,
      center: [29.176843299999973, 40.90901789999999]
    });
    return this.map;
  };

  Map.prototype.getLatLng = function (adres, fn) {
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
        var coords = [lng, lat];
        fn(coords);
      } else {
        fn(status);
      }
    });
  };

  Map.prototype.insertMarker = function (coords) {
    var element = this.createMarkerElement();
    var options = {
      // draggable : true,
      anchor: "top"
    };
    new mapboxgl.Marker(element, options).setLngLat(coords) // .setPopup(popup)
    .addTo(this.map);
  };

  Map.prototype.addLayer = function () {
    this.map.addLayer({});
  };

  Map.prototype.createMarkerElement = function () {
    var el = document.createElement("a");
    el.className = "marker";
    return el;
  };

  return Map;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUtBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxhQUFDO0FBQy9CLE1BQUksT0FBTyxHQUFVLE9BQU8sQ0FBQyxLQUFELENBQTVCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTLE9BQVQsQ0FBaUIsUUFBakIsRUFBa0M7QUFDaEMsTUFBSSxTQUFTLEdBQUcsSUFBSSxHQUFKLEVBQWhCOztBQUVBLE1BQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFWLENBQW9CLFFBQXBCLENBQVg7O0FBRUEsTUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLHNCQUFULENBQWdDLGlCQUFoQyxDQUFmO0FBRUEsTUFBSSxPQUFPLEdBQUcsRUFB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LFlBQU0sRUFBRTtBQUZJLEtBQWQ7QUFLQSxRQUFJLFFBQVEsQ0FBQyxNQUFiLENBQW9CLE9BQXBCLEVBQTZCLE9BQTdCLEVBQ0csU0FESCxDQUNhLE1BRGIsRUFFRTtBQUZGLEtBR0csS0FISCxDQUdTLEtBQUssR0FIZDtBQUlELEdBWkQ7O0FBY0E7QUFDRSxTQUFLLEdBQUwsQ0FBUyxRQUFULENBQWtCLEVBQWxCO0FBR0QsR0FKRDs7QUFNQTtBQUNFLFFBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEdBQXZCLENBQVQ7QUFDQSxNQUFFLENBQUMsU0FBSCxHQUFlLFFBQWY7QUFDQSxXQUFPLEVBQVA7QUFDRCxHQUpEOztBQUtGO0FBQUMsQ0FqRkQsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIGltcG9ydCBNYXAgZnJvbSBcIi4vbWFwXCI7XHJcblxyXG5kZWNsYXJlIHZhciBtYXBib3hnbDtcclxuZGVjbGFyZSB2YXIgZ29vZ2xlO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGUgPT4ge1xyXG4gIGxldCBiYXlpbGVyOiBhbnlbXSA9IGxvYWRNYXAoXCJtYXBcIik7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbG9hZE1hcChfZWxlbWVudD86IHN0cmluZykge1xyXG4gIGxldCBNYXBPYmplY3QgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGxldCBfTWFwID0gTWFwT2JqZWN0LmNyZWF0ZU1hcChfZWxlbWVudCk7XHJcblxyXG4gIGxldCBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaXN0LWdyb3VwLWl0ZW1cIik7XHJcblxyXG4gIGxldCBiYXlpbGVyID0gW107XHJcbiAgLy8gY29uc29sZS5sb2coX01hcC5tYXApO1xyXG5cclxuICBfTWFwLm9uKFwibG9hZFwiLCAoKSA9PiB7fSk7XHJcblxyXG4gIGxldCBfaXRlcmF0ZSA9IG5ldyBJdGVyYXRlKGVsZW1lbnRzKTtcclxuXHJcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xyXG4gIHdoaWxlICgoZWxlbWVudCA9IF9pdGVyYXRlLm5leHQoKSkgIT0gbnVsbCkge1xyXG4gICAgbGV0IGJheWlJbmZvID0gSlNPTi5wYXJzZShlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5mb1wiKSk7XHJcblxyXG4gICAgTWFwT2JqZWN0LmdldExhdExuZyhiYXlpSW5mby5hZHJlcywgY29vcmRzID0+IHtcclxuICAgICAgTWFwT2JqZWN0Lmluc2VydE1hcmtlcihjb29yZHMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gYmF5aUluZm9bXCJjb29yZHNcIl0gPSBjb29yZHM7XHJcbiAgICBiYXlpbGVyLnB1c2goYmF5aUluZm8pO1xyXG5cclxuICAgIGVsZW1lbnQub25jbGljayA9IF9NYXAuZG9Tb2VtdGhpbmc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYmF5aWxlciB8fCBbXTtcclxufVxyXG5cclxuY2xhc3MgSXRlcmF0ZSB7XHJcbiAgYXJyYXkgPSBbXTtcclxuICBpID0gMDtcclxuICBjb25zdHJ1Y3RvcihhcnJheSkge1xyXG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xyXG4gIH1cclxuXHJcbiAgbmV4dCA9ICgpID0+IHtcclxuICAgIGxldCBlbCA9IHRoaXMuYXJyYXlbdGhpcy5pXTtcclxuICAgIHRoaXMuaSsrO1xyXG4gICAgcmV0dXJuIGVsO1xyXG4gIH07XHJcbn1cclxuXHJcbmNsYXNzIE1hcCB7XHJcbiAgQVBJX0tFWSA9XHJcbiAgICBcInBrLmV5SjFJam9pZW1GbVpYSm5aVzVqSWl3aVlTSTZJbU5xWm1SMU1HZDNNVEp5TXpneWNtNTJabU41TUc5M1pXSWlmUS5FQXJsOHdtLVJtYmtTY3pUNzZUREV3XCI7XHJcblxyXG4gIHByaXZhdGUgbWFwOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvLyB0aGlzLm1hcC5hZGRMYXllcih7XHJcbiAgICAvLyAgIGlkOiBcInBsYWNlc1wiLFxyXG4gICAgLy8gICB0eXBlOiBcInN5bWJvbFwiXHJcbiAgICAvLyB9KTtcclxuICAgIC8vIHRoaXMubWFwLm9uKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAvLyAgIHZhciBjb29yZGluYXRlcyA9IGUuZmVhdHVyZXNbMF0uZ2VvbWV0cnkuY29vcmRpbmF0ZXMuc2xpY2UoKTtcclxuICAgIC8vICAgdmFyIGRlc2NyaXB0aW9uID0gZS5mZWF0dXJlc1swXS5wcm9wZXJ0aWVzLmRlc2NyaXB0aW9uO1xyXG4gICAgLy8gICAvLyBQb3B1cCBpbml0XHJcbiAgICAvLyAgIGxldCBwb3B1cCA9IG5ldyBtYXBib3hnbC5Qb3B1cCh7IG9mZnNldDogMjUgfSkuc2V0VGV4dChcIlBvcHVwXCIpO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNYXAoZWxlbWVudElkOiBzdHJpbmcpIHtcclxuICAgIG1hcGJveGdsLmFjY2Vzc1Rva2VuID0gdGhpcy5BUElfS0VZO1xyXG4gICAgdGhpcy5tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICAgICAgY29udGFpbmVyOiBlbGVtZW50SWQsXHJcbiAgICAgIHN0eWxlOiBcIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTFcIixcclxuICAgICAgem9vbTogMTUsXHJcbiAgICAgIGNlbnRlcjogWzI5LjE3Njg0MzI5OTk5OTk3MywgNDAuOTA5MDE3ODk5OTk5OTldXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5tYXA7XHJcbiAgfVxyXG5cclxuICBnZXRMYXRMbmcoYWRyZXMsIGZuKSB7XHJcbiAgICB2YXIgZ2VvY29kZXI7XHJcbiAgICBpZiAoZ2VvY29kZXIgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInphdGVuIHZhclwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW9jb2RlIGFuIGFkZHJlc3MuXHJcbiAgICByZXR1cm4gZ2VvY29kZXIuZ2VvY29kZShcclxuICAgICAge1xyXG4gICAgICAgIGFkZHJlc3M6IGFkcmVzXHJcbiAgICAgIH0sXHJcbiAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT0gXCJPS1wiKSB7XHJcbiAgICAgICAgICB2YXIgbGF0ID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgICAgdmFyIGxuZyA9IHJlc3VsdFswXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKTtcclxuICAgICAgICAgIHZhciBjb29yZHMgPSBbbG5nLCBsYXRdO1xyXG4gICAgICAgICAgZm4oY29vcmRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm4oc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpbnNlcnRNYXJrZXIoY29vcmRzKSB7XHJcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuY3JlYXRlTWFya2VyRWxlbWVudCgpO1xyXG5cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAvLyBkcmFnZ2FibGUgOiB0cnVlLFxyXG4gICAgICBhbmNob3I6IFwidG9wXCJcclxuICAgIH07XHJcblxyXG4gICAgbmV3IG1hcGJveGdsLk1hcmtlcihlbGVtZW50LCBvcHRpb25zKVxyXG4gICAgICAuc2V0TG5nTGF0KGNvb3JkcylcclxuICAgICAgLy8gLnNldFBvcHVwKHBvcHVwKVxyXG4gICAgICAuYWRkVG8odGhpcy5tYXApO1xyXG4gIH1cclxuXHJcbiAgYWRkTGF5ZXIoKXtcclxuICAgIHRoaXMubWFwLmFkZExheWVyKHtcclxuICAgICAgXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWFya2VyRWxlbWVudCgpIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgZWwuY2xhc3NOYW1lID0gXCJtYXJrZXJcIjtcclxuICAgIHJldHVybiBlbDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==