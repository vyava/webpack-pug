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
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: {
      lat: -33.9,
      lng: 151.2
    }
  });
  setMarkers(map);
}

window.addEventListener("load", function () {
  var bayiler = [];
  var elements = document.getElementsByClassName("list-group-item");

  var _iterate = new Iterate(elements);

  var element = null;

  while ((element = _iterate.next()) != null) {
    var bayiInfo = JSON.parse(element.getAttribute("data-info")); // MapObject.getLatLng(bayiInfo.adres, coords => {
    //   MapObject.insertMarker(coords);
    // });
    // bayiInfo["coords"] = coords;

    bayiler.push(bayiInfo);
  }

  initMap();
  console.log(bayiler);
}); // Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.

var beaches = [["Bondi Beach", -33.890542, 151.274856, 4], ["Coogee Beach", -33.923036, 151.259052, 5], ["Cronulla Beach", -34.028249, 151.157507, 3], ["Manly Beach", -33.80010128657071, 151.28747820854187, 2], ["Maroubra Beach", -33.950198, 151.259302, 1]];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  var image = {
    url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
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
    type: "poly"
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hGQSxTQUFTLE9BQVQsR0FBZ0I7QUFDZCxNQUFJLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFQLENBQVksR0FBaEIsQ0FBb0IsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEIsRUFBb0Q7QUFDNUQsUUFBSSxFQUFFLEVBRHNEO0FBRTVELFVBQU0sRUFBRTtBQUFFLFNBQUcsRUFBRSxDQUFDLElBQVI7QUFBYyxTQUFHLEVBQUU7QUFBbkI7QUFGb0QsR0FBcEQsQ0FBVjtBQUtBLFlBQVUsQ0FBQyxHQUFELENBQVY7QUFDRDs7QUFFRCxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0M7QUFDOUIsTUFBSSxPQUFPLEdBQUcsRUFBZDtBQUNBLE1BQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxzQkFBVCxDQUFnQyxpQkFBaEMsQ0FBZjs7QUFFQSxNQUFJLFFBQVEsR0FBRyxJQUFJLE9BQUosQ0FBWSxRQUFaLENBQWY7O0FBRUEsTUFBSSxPQUFPLEdBQUcsSUFBZDs7QUFDQSxTQUFPLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFULEVBQVgsS0FBK0IsSUFBdEMsRUFBNEM7QUFDMUMsUUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFPLENBQUMsWUFBUixDQUFxQixXQUFyQixDQUFYLENBQWYsQ0FEMEMsQ0FHMUM7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsV0FBTyxDQUFDLElBQVIsQ0FBYSxRQUFiO0FBQ0Q7O0FBQ0QsU0FBTztBQUNQLFNBQU8sQ0FBQyxHQUFSLENBQVksT0FBWjtBQUNELENBbkJELEUsQ0FxQkE7QUFDQTs7QUFDQSxJQUFJLE9BQU8sR0FBRyxDQUNaLENBQUMsYUFBRCxFQUFnQixDQUFDLFNBQWpCLEVBQTRCLFVBQTVCLEVBQXdDLENBQXhDLENBRFksRUFFWixDQUFDLGNBQUQsRUFBaUIsQ0FBQyxTQUFsQixFQUE2QixVQUE3QixFQUF5QyxDQUF6QyxDQUZZLEVBR1osQ0FBQyxnQkFBRCxFQUFtQixDQUFDLFNBQXBCLEVBQStCLFVBQS9CLEVBQTJDLENBQTNDLENBSFksRUFJWixDQUFDLGFBQUQsRUFBZ0IsQ0FBQyxpQkFBakIsRUFBb0Msa0JBQXBDLEVBQXdELENBQXhELENBSlksRUFLWixDQUFDLGdCQUFELEVBQW1CLENBQUMsU0FBcEIsRUFBK0IsVUFBL0IsRUFBMkMsQ0FBM0MsQ0FMWSxDQUFkOztBQVFBLFNBQVMsVUFBVCxDQUFvQixHQUFwQixFQUF1QjtBQUNyQjtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsTUFBSSxLQUFLLEdBQUc7QUFDVixPQUFHLEVBQ0QsZ0dBRlE7QUFHVjtBQUNBLFFBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFQLENBQVksSUFBaEIsQ0FBcUIsRUFBckIsRUFBeUIsRUFBekIsQ0FKSTtBQUtWO0FBQ0EsVUFBTSxFQUFFLElBQUksTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFoQixDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQU5FO0FBT1Y7QUFDQSxVQUFNLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBUCxDQUFZLEtBQWhCLENBQXNCLENBQXRCLEVBQXlCLEVBQXpCO0FBUkUsR0FBWixDQVJxQixDQWtCckI7QUFDQTtBQUNBOztBQUNBLE1BQUksS0FBSyxHQUFHO0FBQ1YsVUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsRUFBVixFQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsRUFBdEIsRUFBMEIsQ0FBMUIsQ0FERTtBQUVWLFFBQUksRUFBRTtBQUZJLEdBQVo7O0FBSUEsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBNUIsRUFBb0MsQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxRQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBRCxDQUFuQjtBQUNBLFFBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQVAsQ0FBWSxNQUFoQixDQUF1QjtBQUNsQyxjQUFRLEVBQUU7QUFBRSxXQUFHLEVBQUUsS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUFpQixXQUFHLEVBQUUsS0FBSyxDQUFDLENBQUQ7QUFBM0IsT0FEd0I7QUFFbEMsU0FBRyxFQUFFLEdBRjZCO0FBR2xDLFVBQUksRUFBRSxLQUg0QjtBQUlsQyxXQUFLLEVBQUUsS0FKMkI7QUFLbEMsV0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFELENBTHNCO0FBTWxDLFlBQU0sRUFBRSxLQUFLLENBQUMsQ0FBRDtBQU5xQixLQUF2QixDQUFiO0FBUUQ7QUFDRjs7QUFFRDtBQUFBO0FBQUE7QUFHRSxtQkFBWSxLQUFaLEVBQWlCO0FBQWpCOztBQUZBLGlCQUFRLEVBQVI7QUFDQSxhQUFJLENBQUo7O0FBS0EsZ0JBQU87QUFDTCxVQUFJLEVBQUUsR0FBRyxLQUFJLENBQUMsS0FBTCxDQUFXLEtBQUksQ0FBQyxDQUFoQixDQUFUO0FBQ0EsV0FBSSxDQUFDLENBQUw7QUFDQSxhQUFPLEVBQVA7QUFDRCxLQUpEOztBQUhFLFNBQUssS0FBTCxHQUFhLEtBQWI7QUFDRDs7QUFPSDtBQUFDLENBWkQsRyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImRlY2xhcmUgdmFyIGdvb2dsZTtcclxuXHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcclxuICAgIHpvb206IDEwLFxyXG4gICAgY2VudGVyOiB7IGxhdDogLTMzLjksIGxuZzogMTUxLjIgfVxyXG4gIH0pO1xyXG5cclxuICBzZXRNYXJrZXJzKG1hcCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgbGV0IGJheWlsZXIgPSBbXTtcclxuICBsZXQgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlzdC1ncm91cC1pdGVtXCIpO1xyXG5cclxuICBsZXQgX2l0ZXJhdGUgPSBuZXcgSXRlcmF0ZShlbGVtZW50cyk7XHJcblxyXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcclxuICB3aGlsZSAoKGVsZW1lbnQgPSBfaXRlcmF0ZS5uZXh0KCkpICE9IG51bGwpIHtcclxuICAgIGxldCBiYXlpSW5mbyA9IEpTT04ucGFyc2UoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZm9cIikpO1xyXG5cclxuICAgIC8vIE1hcE9iamVjdC5nZXRMYXRMbmcoYmF5aUluZm8uYWRyZXMsIGNvb3JkcyA9PiB7XHJcbiAgICAvLyAgIE1hcE9iamVjdC5pbnNlcnRNYXJrZXIoY29vcmRzKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIGJheWlJbmZvW1wiY29vcmRzXCJdID0gY29vcmRzO1xyXG4gICAgYmF5aWxlci5wdXNoKGJheWlJbmZvKTtcclxuICB9XHJcbiAgaW5pdE1hcCgpO1xyXG4gIGNvbnNvbGUubG9nKGJheWlsZXIpXHJcbn0pO1xyXG5cclxuLy8gRGF0YSBmb3IgdGhlIG1hcmtlcnMgY29uc2lzdGluZyBvZiBhIG5hbWUsIGEgTGF0TG5nIGFuZCBhIHpJbmRleCBmb3IgdGhlXHJcbi8vIG9yZGVyIGluIHdoaWNoIHRoZXNlIG1hcmtlcnMgc2hvdWxkIGRpc3BsYXkgb24gdG9wIG9mIGVhY2ggb3RoZXIuXHJcbnZhciBiZWFjaGVzID0gW1xyXG4gIFtcIkJvbmRpIEJlYWNoXCIsIC0zMy44OTA1NDIsIDE1MS4yNzQ4NTYsIDRdLFxyXG4gIFtcIkNvb2dlZSBCZWFjaFwiLCAtMzMuOTIzMDM2LCAxNTEuMjU5MDUyLCA1XSxcclxuICBbXCJDcm9udWxsYSBCZWFjaFwiLCAtMzQuMDI4MjQ5LCAxNTEuMTU3NTA3LCAzXSxcclxuICBbXCJNYW5seSBCZWFjaFwiLCAtMzMuODAwMTAxMjg2NTcwNzEsIDE1MS4yODc0NzgyMDg1NDE4NywgMl0sXHJcbiAgW1wiTWFyb3VicmEgQmVhY2hcIiwgLTMzLjk1MDE5OCwgMTUxLjI1OTMwMiwgMV1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIHNldE1hcmtlcnMobWFwKSB7XHJcbiAgLy8gQWRkcyBtYXJrZXJzIHRvIHRoZSBtYXAuXHJcblxyXG4gIC8vIE1hcmtlciBzaXplcyBhcmUgZXhwcmVzc2VkIGFzIGEgU2l6ZSBvZiBYLFkgd2hlcmUgdGhlIG9yaWdpbiBvZiB0aGUgaW1hZ2VcclxuICAvLyAoMCwwKSBpcyBsb2NhdGVkIGluIHRoZSB0b3AgbGVmdCBvZiB0aGUgaW1hZ2UuXHJcblxyXG4gIC8vIE9yaWdpbnMsIGFuY2hvciBwb3NpdGlvbnMgYW5kIGNvb3JkaW5hdGVzIG9mIHRoZSBtYXJrZXIgaW5jcmVhc2UgaW4gdGhlIFhcclxuICAvLyBkaXJlY3Rpb24gdG8gdGhlIHJpZ2h0IGFuZCBpbiB0aGUgWSBkaXJlY3Rpb24gZG93bi5cclxuICB2YXIgaW1hZ2UgPSB7XHJcbiAgICB1cmw6XHJcbiAgICAgIFwiaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvZXhhbXBsZXMvZnVsbC9pbWFnZXMvYmVhY2hmbGFnLnBuZ1wiLFxyXG4gICAgLy8gVGhpcyBtYXJrZXIgaXMgMjAgcGl4ZWxzIHdpZGUgYnkgMzIgcGl4ZWxzIGhpZ2guXHJcbiAgICBzaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgyMCwgMzIpLFxyXG4gICAgLy8gVGhlIG9yaWdpbiBmb3IgdGhpcyBpbWFnZSBpcyAoMCwgMCkuXHJcbiAgICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgIC8vIFRoZSBhbmNob3IgZm9yIHRoaXMgaW1hZ2UgaXMgdGhlIGJhc2Ugb2YgdGhlIGZsYWdwb2xlIGF0ICgwLCAzMikuXHJcbiAgICBhbmNob3I6IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAzMilcclxuICB9O1xyXG4gIC8vIFNoYXBlcyBkZWZpbmUgdGhlIGNsaWNrYWJsZSByZWdpb24gb2YgdGhlIGljb24uIFRoZSB0eXBlIGRlZmluZXMgYW4gSFRNTFxyXG4gIC8vIDxhcmVhPiBlbGVtZW50ICdwb2x5JyB3aGljaCB0cmFjZXMgb3V0IGEgcG9seWdvbiBhcyBhIHNlcmllcyBvZiBYLFkgcG9pbnRzLlxyXG4gIC8vIFRoZSBmaW5hbCBjb29yZGluYXRlIGNsb3NlcyB0aGUgcG9seSBieSBjb25uZWN0aW5nIHRvIHRoZSBmaXJzdCBjb29yZGluYXRlLlxyXG4gIHZhciBzaGFwZSA9IHtcclxuICAgIGNvb3JkczogWzEsIDEsIDEsIDIwLCAxOCwgMjAsIDE4LCAxXSxcclxuICAgIHR5cGU6IFwicG9seVwiXHJcbiAgfTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJlYWNoZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBiZWFjaCA9IGJlYWNoZXNbaV07XHJcbiAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgIHBvc2l0aW9uOiB7IGxhdDogYmVhY2hbMV0sIGxuZzogYmVhY2hbMl0gfSxcclxuICAgICAgbWFwOiBtYXAsXHJcbiAgICAgIGljb246IGltYWdlLFxyXG4gICAgICBzaGFwZTogc2hhcGUsXHJcbiAgICAgIHRpdGxlOiBiZWFjaFswXSxcclxuICAgICAgekluZGV4OiBiZWFjaFszXVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBJdGVyYXRlIHtcclxuICBhcnJheSA9IFtdO1xyXG4gIGkgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XHJcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XHJcbiAgfVxyXG5cclxuICBuZXh0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGVsID0gdGhpcy5hcnJheVt0aGlzLmldO1xyXG4gICAgdGhpcy5pKys7XHJcbiAgICByZXR1cm4gZWw7XHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9