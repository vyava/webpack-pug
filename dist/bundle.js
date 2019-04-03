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
  var _map = new Map(_element);

  var elements = document.getElementsByClassName("list-group-item");
  var bayiler = [];

  var _iterate = new Iterate(elements);

  var element = null;

  while ((element = _iterate.next()) != null) {
    var bayiInfo = JSON.parse(element.getAttribute("data-info"));

    _map.getLatLng(bayiInfo.adres, function (coords) {
      _map.insertMarker(coords);
    }); // bayiInfo["coords"] = coords;


    bayiler.push(bayiInfo);
    element.onclick = _map.doSoemthing;
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
  function Map(elementId) {
    this.API_KEY = "pk.eyJ1IjoiemFmZXJnZW5jIiwiYSI6ImNqZmR1MGd3MTJyMzgycm52ZmN5MG93ZWIifQ.EArl8wm-RmbkSczT76TDEw";
    mapboxgl.accessToken = this.API_KEY;
    this.map = new mapboxgl.Map({
      container: elementId,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 15,
      center: [29.176843299999973, 40.90901789999999]
    });
  }

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
  }; //   mark(result, status) {
  //     if (status != "OK") {
  //       console.log("hata");
  //     } else {
  //       this.insertMarker(coords);
  //     }
  //   }


  Map.prototype.insertMarker = function (coords) {
    var element = this.createMarkerElement("marker");
    new mapboxgl.Marker(element).setLngLat(coords).addTo(this.map);
  };

  ;

  Map.prototype.createMarkerElement = function (className) {
    var el = document.createElement("a");
    el.addEventListener("click", function (e) {
      console.log(e.target);
    });
    el.className = className;
    return el;
  };

  ;

  Map.prototype.addLayer = function (layer) {
    this.map.addLayer(layer);
  };

  Map.prototype.doSoemthing = function (e) {
    console.log(e.target);
  };

  return Map;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxhQUFDO0FBQy9CLE1BQUksT0FBTyxHQUFVLE9BQU8sQ0FBQyxLQUFELENBQTVCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTLE9BQVQsQ0FBaUIsUUFBakIsRUFBa0M7QUFDaEMsTUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFKLENBQVEsUUFBUixDQUFYOztBQUNBLE1BQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxpQkFBaEMsQ0FBZjtBQUVBLE1BQUksT0FBTyxHQUFHLEVBQWQ7O0FBRUEsTUFBSSxRQUFRLEdBQUcsSUFBSSxPQUFKLENBQVksUUFBWixD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dUIsR0FBdkIsQ0FBVDtBQUNBLE1BQUUsQ0FBQyxnQkFBSCxDQUFvQixPQUFwQixFQUE2QixVQUFDLENBQUQsRUFBRTtBQUM3QixhQUFPLENBQUMsR0FBUixDQUFZLENBQUMsQ0FBQyxNQUFkO0FBQ0QsS0FGRDtBQUdBLE1BQUUsQ0FBQyxTQUFILEdBQWUsU0FBZjtBQUNBLFdBQU8sRUFBUDtBQUNELEdBUEQ7O0FBT0M7O0FBRUQscUNBQVMsS0FBVCxFQUFjO0FBQ1osU0FBSyxHQUFMLENBQVMsUUFBVCxDQUFrQixLQUFsQjtBQUNELEdBRkQ7O0FBSUEsd0NBQVksQ0FBWixFQUFhO0FBQ1gsV0FBTyxDQUFDLEdBQVIsQ0FBWSxDQUFDLENBQUMsTUFBZDtBQUNELEdBRkQ7O0FBR0Y7QUFBQyxDQXRFSCxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLy8gaW1wb3J0IE1hcCBmcm9tIFwiLi9tYXBcIjtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGUgPT4ge1xyXG4gIGxldCBiYXlpbGVyOiBhbnlbXSA9IGxvYWRNYXAoXCJtYXBcIik7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbG9hZE1hcChfZWxlbWVudD86IHN0cmluZykge1xyXG4gIGxldCBfbWFwID0gbmV3IE1hcChfZWxlbWVudCk7XHJcbiAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxpc3QtZ3JvdXAtaXRlbVwiKTtcclxuXHJcbiAgbGV0IGJheWlsZXIgPSBbXTtcclxuXHJcbiAgbGV0IF9pdGVyYXRlID0gbmV3IEl0ZXJhdGUoZWxlbWVudHMpO1xyXG5cclxuICBsZXQgZWxlbWVudCA9IG51bGw7XHJcbiAgd2hpbGUgKChlbGVtZW50ID0gX2l0ZXJhdGUubmV4dCgpKSAhPSBudWxsKSB7XHJcbiAgICBsZXQgYmF5aUluZm8gPSBKU09OLnBhcnNlKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmZvXCIpKTtcclxuXHJcbiAgICBfbWFwLmdldExhdExuZyhiYXlpSW5mby5hZHJlcywgY29vcmRzID0+IHtcclxuICAgICAgX21hcC5pbnNlcnRNYXJrZXIoY29vcmRzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGJheWlJbmZvW1wiY29vcmRzXCJdID0gY29vcmRzO1xyXG4gICAgYmF5aWxlci5wdXNoKGJheWlJbmZvKTtcclxuXHJcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSBfbWFwLmRvU29lbXRoaW5nO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGJheWlsZXIgfHwgW107XHJcbn1cclxuXHJcbmNsYXNzIEl0ZXJhdGUge1xyXG4gIGFycmF5ID0gW107XHJcbiAgaSA9IDA7XHJcbiAgY29uc3RydWN0b3IoYXJyYXkpIHtcclxuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcclxuICB9XHJcblxyXG4gIG5leHQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZWwgPSB0aGlzLmFycmF5W3RoaXMuaV07XHJcbiAgICB0aGlzLmkrKztcclxuICAgIHJldHVybiBlbDtcclxuICB9O1xyXG59XHJcblxyXG5cclxuZGVjbGFyZSB2YXIgbWFwYm94Z2w7XHJcbmRlY2xhcmUgdmFyIGdvb2dsZTtcclxuXHJcbmNsYXNzIE1hcCB7XHJcbiAgICBBUElfS0VZID1cclxuICAgICAgXCJway5leUoxSWpvaWVtRm1aWEpuWlc1aklpd2lZU0k2SW1OcVptUjFNR2QzTVRKeU16Z3ljbTUyWm1ONU1HOTNaV0lpZlEuRUFybDh3bS1SbWJrU2N6VDc2VERFd1wiO1xyXG4gIFxyXG4gICAgcHVibGljIG1hcCA6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRJZCA6IHN0cmluZykge1xyXG4gICAgICBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHRoaXMuQVBJX0tFWTtcclxuICAgICAgdGhpcy5tYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcclxuICAgICAgICBjb250YWluZXI6IGVsZW1lbnRJZCxcclxuICAgICAgICBzdHlsZTogXCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExXCIsXHJcbiAgICAgICAgem9vbTogMTUsXHJcbiAgICAgICAgY2VudGVyOiBbMjkuMTc2ODQzMjk5OTk5OTczLCA0MC45MDkwMTc4OTk5OTk5OV1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRMYXRMbmcoYWRyZXMsIGZuKSB7XHJcbiAgICAgIHZhciBnZW9jb2RlcjtcclxuICAgICAgaWYgKGdlb2NvZGVyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ6YXRlbiB2YXJcIik7XHJcbiAgICAgIH1cclxuICAgICAgLy8gR2VvY29kZSBhbiBhZGRyZXNzLlxyXG4gICAgICByZXR1cm4gZ2VvY29kZXIuZ2VvY29kZShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhZGRyZXNzOiBhZHJlc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKHJlc3VsdCwgc3RhdHVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3RhdHVzID09IFwiT0tcIikge1xyXG4gICAgICAgICAgICB2YXIgbGF0ID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xyXG4gICAgICAgICAgICB2YXIgbG5nID0gcmVzdWx0WzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xyXG4gICAgICAgICAgICB2YXIgY29vcmRzID0gW2xuZywgbGF0XTtcclxuICAgICAgICAgICAgZm4oY29vcmRzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZuKHN0YXR1cyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gIC8vICAgbWFyayhyZXN1bHQsIHN0YXR1cykge1xyXG4gIC8vICAgICBpZiAoc3RhdHVzICE9IFwiT0tcIikge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwiaGF0YVwiKTtcclxuICAvLyAgICAgfSBlbHNlIHtcclxuICAvLyAgICAgICB0aGlzLmluc2VydE1hcmtlcihjb29yZHMpO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgXHJcbiAgICBpbnNlcnRNYXJrZXIoY29vcmRzKSB7XHJcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5jcmVhdGVNYXJrZXJFbGVtZW50KFwibWFya2VyXCIpO1xyXG4gIFxyXG4gICAgICBuZXcgbWFwYm94Z2wuTWFya2VyKGVsZW1lbnQpLnNldExuZ0xhdChjb29yZHMpLmFkZFRvKHRoaXMubWFwKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjcmVhdGVNYXJrZXJFbGVtZW50KGNsYXNzTmFtZSkge1xyXG4gICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgIH0pXHJcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcclxuICAgICAgcmV0dXJuIGVsO1xyXG4gICAgfTtcclxuICBcclxuICAgIGFkZExheWVyKGxheWVyKSB7XHJcbiAgICAgIHRoaXMubWFwLmFkZExheWVyKGxheWVyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZG9Tb2VtdGhpbmcoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgICB9XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=