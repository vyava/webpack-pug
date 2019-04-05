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
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: {
      lat: -33.9,
      lng: 151.2
    }
  });
  setMarkers(map);
} // Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.


var beaches = [['Bondi Beach', -33.890542, 151.274856, 4], ['Coogee Beach', -33.923036, 151.259052, 5], ['Cronulla Beach', -34.028249, 151.157507, 3], ['Manly Beach', -33.80010128657071, 151.28747820854187, 2], ['Maroubra Beach', -33.950198, 151.259302, 1]];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
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
    type: 'poly'
  };

  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];
    var marker = new google.maps.Marker({
      position: {
        lat: beach[1],
        lng: beach[2]
      },
      map: map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3]
    });
  }
}

initMap();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hGQSxTQUFTLE9BQVQsR0FBZ0I7QUFDWixNQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFQLENBQVksR0FBaEIsQ0FBb0IsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEIsRUFBb0Q7QUFDNUQsUUFBSSxFQUFFLEVBRHNEO0FBRTVELFVBQU0sRUFBRTtBQUFDLFNBQUcsRUFBRSxDQUFDLElBQVA7QUFBYSxTQUFHLEVBQUU7QUFBbEI7QUFGb0QsR0FBcEQsQ0FBVjtBQUtBLFlBQVUsQ0FBQyxHQUFELENBQVY7QUFDRCxDLENBRUQ7QUFDQTs7O0FBQ0EsSUFBSSxPQUFPLEdBQUcsQ0FDWixDQUFDLGFBQUQsRUFBZ0IsQ0FBQyxTQUFqQixFQUE0QixVQUE1QixFQUF3QyxDQUF4QyxDQURZLEVBRVosQ0FBQyxjQUFELEVBQWlCLENBQUMsU0FBbEIsRUFBNkIsVUFBN0IsRUFBeUMsQ0FBekMsQ0FGWSxFQUdaLENBQUMsZ0JBQUQsRUFBbUIsQ0FBQyxTQUFwQixFQUErQixVQUEvQixFQUEyQyxDQUEzQyxDQUhZLEVBSVosQ0FBQyxhQUFELEVBQWdCLENBQUMsaUJBQWpCLEVBQW9DLGtCQUFwQyxFQUF3RCxDQUF4RCxDQUpZLEVBS1osQ0FBQyxnQkFBRCxFQUFtQixDQUFDLFNBQXBCLEVBQStCLFVBQS9CLEVBQTJDLENBQTNDLENBTFksQ0FBZDs7QUFRQSxTQUFTLFVBQVQsQ0FBb0IsR0FBcEIsRUFBdUI7QUFDckI7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBLE1BQUksS0FBSyxHQUFHO0FBQ1YsT0FBRyxFQUFFLGdHQURLO0FBRVY7QUFDQSxRQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLElBQWhCLENBQXFCLEVBQXJCLEVBQXlCLEVBQXpCLENBSEk7QUFJVjtBQUNBLFVBQU0sRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFQLENBQVksS0FBaEIsQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsQ0FMRTtBQU1WO0FBQ0EsVUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFoQixDQUFzQixDQUF0QixFQUF5QixFQUF6QjtBQVBFLEdBQVosQ0FScUIsQ0FpQnJCO0FBQ0E7QUFDQTs7QUFDQSxNQUFJLEtBQUssR0FBRztBQUNWLFVBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLEVBQVYsRUFBYyxFQUFkLEVBQWtCLEVBQWxCLEVBQXNCLEVBQXRCLEVBQTBCLENBQTFCLENBREU7QUFFVixRQUFJLEVBQUU7QUFGSSxHQUFaOztBQUlBLE9BQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQTVCLEVBQW9DLENBQUMsRUFBckMsRUFBeUM7QUFDdkMsUUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLENBQUQsQ0FBbkI7QUFDQSxRQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFQLENBQVksTUFBaEIsQ0FBdUI7QUFDbEMsY0FBUSxFQUFFO0FBQUMsV0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFELENBQVg7QUFBZ0IsV0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFEO0FBQTFCLE9BRHdCO0FBRWxDLFNBQUcsRUFBRSxHQUY2QjtBQUdsQyxVQUFJLEVBQUUsS0FINEI7QUFJbEMsV0FBSyxFQUFFLEtBSjJCO0FBS2xDLFdBQUssRUFBRSxLQUFLLENBQUMsQ0FBRCxDQUxzQjtBQU1sQyxZQUFNLEVBQUUsS0FBSyxDQUFDLENBQUQ7QUFOcUIsS0FBdkIsQ0FBYjtBQVFEO0FBQ0Y7O0FBRUQsT0FBTyxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZGVjbGFyZSB2YXIgZ29vZ2xlO1xyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgICB6b29tOiAxMCxcclxuICAgICAgY2VudGVyOiB7bGF0OiAtMzMuOSwgbG5nOiAxNTEuMn1cclxuICAgIH0pO1xyXG4gIFxyXG4gICAgc2V0TWFya2VycyhtYXApO1xyXG4gIH1cclxuICBcclxuICAvLyBEYXRhIGZvciB0aGUgbWFya2VycyBjb25zaXN0aW5nIG9mIGEgbmFtZSwgYSBMYXRMbmcgYW5kIGEgekluZGV4IGZvciB0aGVcclxuICAvLyBvcmRlciBpbiB3aGljaCB0aGVzZSBtYXJrZXJzIHNob3VsZCBkaXNwbGF5IG9uIHRvcCBvZiBlYWNoIG90aGVyLlxyXG4gIHZhciBiZWFjaGVzID0gW1xyXG4gICAgWydCb25kaSBCZWFjaCcsIC0zMy44OTA1NDIsIDE1MS4yNzQ4NTYsIDRdLFxyXG4gICAgWydDb29nZWUgQmVhY2gnLCAtMzMuOTIzMDM2LCAxNTEuMjU5MDUyLCA1XSxcclxuICAgIFsnQ3JvbnVsbGEgQmVhY2gnLCAtMzQuMDI4MjQ5LCAxNTEuMTU3NTA3LCAzXSxcclxuICAgIFsnTWFubHkgQmVhY2gnLCAtMzMuODAwMTAxMjg2NTcwNzEsIDE1MS4yODc0NzgyMDg1NDE4NywgMl0sXHJcbiAgICBbJ01hcm91YnJhIEJlYWNoJywgLTMzLjk1MDE5OCwgMTUxLjI1OTMwMiwgMV1cclxuICBdO1xyXG4gIFxyXG4gIGZ1bmN0aW9uIHNldE1hcmtlcnMobWFwKSB7XHJcbiAgICAvLyBBZGRzIG1hcmtlcnMgdG8gdGhlIG1hcC5cclxuICBcclxuICAgIC8vIE1hcmtlciBzaXplcyBhcmUgZXhwcmVzc2VkIGFzIGEgU2l6ZSBvZiBYLFkgd2hlcmUgdGhlIG9yaWdpbiBvZiB0aGUgaW1hZ2VcclxuICAgIC8vICgwLDApIGlzIGxvY2F0ZWQgaW4gdGhlIHRvcCBsZWZ0IG9mIHRoZSBpbWFnZS5cclxuICBcclxuICAgIC8vIE9yaWdpbnMsIGFuY2hvciBwb3NpdGlvbnMgYW5kIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgaW5jcmVhc2UgaW4gdGhlIFhcclxuICAgIC8vIGRpcmVjdGlvbiB0byB0aGUgcmlnaHQgYW5kIGluIHRoZSBZIGRpcmVjdGlvbiBkb3duLlxyXG4gICAgdmFyIGltYWdlID0ge1xyXG4gICAgICB1cmw6ICdodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9leGFtcGxlcy9mdWxsL2ltYWdlcy9iZWFjaGZsYWcucG5nJyxcclxuICAgICAgLy8gVGhpcyBtYXJrZXIgaXMgMjAgcGl4ZWxzIHdpZGUgYnkgMzIgcGl4ZWxzIGhpZ2guXHJcbiAgICAgIHNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDIwLCAzMiksXHJcbiAgICAgIC8vIFRoZSBvcmlnaW4gZm9yIHRoaXMgaW1hZ2UgaXMgKDAsIDApLlxyXG4gICAgICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgICAgLy8gVGhlIGFuY2hvciBmb3IgdGhpcyBpbWFnZSBpcyB0aGUgYmFzZSBvZiB0aGUgZmxhZ3BvbGUgYXQgKDAsIDMyKS5cclxuICAgICAgYW5jaG9yOiBuZXcgZ29vZ2xlLm1hcHMuUG9pbnQoMCwgMzIpXHJcbiAgICB9O1xyXG4gICAgLy8gU2hhcGVzIGRlZmluZSB0aGUgY2xpY2thYmxlIHJlZ2lvbiBvZiB0aGUgaWNvbi4gVGhlIHR5cGUgZGVmaW5lcyBhbiBIVE1MXHJcbiAgICAvLyA8YXJlYT4gZWxlbWVudCAncG9seScgd2hpY2ggdHJhY2VzIG91dCBhIHBvbHlnb24gYXMgYSBzZXJpZXMgb2YgWCxZIHBvaW50cy5cclxuICAgIC8vIFRoZSBmaW5hbCBjb29yZGluYXRlIGNsb3NlcyB0aGUgcG9seSBieSBjb25uZWN0aW5nIHRvIHRoZSBmaXJzdCBjb29yZGluYXRlLlxyXG4gICAgdmFyIHNoYXBlID0ge1xyXG4gICAgICBjb29yZHM6IFsxLCAxLCAxLCAyMCwgMTgsIDIwLCAxOCwgMV0sXHJcbiAgICAgIHR5cGU6ICdwb2x5J1xyXG4gICAgfTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmVhY2hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgYmVhY2ggPSBiZWFjaGVzW2ldO1xyXG4gICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgcG9zaXRpb246IHtsYXQ6IGJlYWNoWzFdLCBsbmc6IGJlYWNoWzJdfSxcclxuICAgICAgICBtYXA6IG1hcCxcclxuICAgICAgICBpY29uOiBpbWFnZSxcclxuICAgICAgICBzaGFwZTogc2hhcGUsXHJcbiAgICAgICAgdGl0bGU6IGJlYWNoWzBdLFxyXG4gICAgICAgIHpJbmRleDogYmVhY2hbM11cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbml0TWFwKCkiXSwic291cmNlUm9vdCI6IiJ9