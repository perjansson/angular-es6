(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _jokes = require('./jokes/jokes.controller');

var _jokes2 = require('./jokes/jokes.service');

var _joke = require('./jokes/joke.directive');

angular.module('jokesES2015App', []).controller('JokesController', _jokes.JokesController).service('JokesService', _jokes2.JokesService).directive('joke', _joke.JokeDirective);

},{"./jokes/joke.directive":2,"./jokes/jokes.controller":4,"./jokes/jokes.service":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JokeDirective = JokeDirective;
function JokeDirective() {

  return {
    scope: {
      joke: '=value'
    },
    template: '<i>"{{joke.text}}"</i>'
  };
}

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Joke = (function () {
  function Joke(text) {
    _classCallCheck(this, Joke);

    this._text = text;
  }

  _createClass(Joke, [{
    key: "text",
    get: function get() {
      return this._text;
    }
  }]);

  return Joke;
})();

exports.default = Joke;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JokesController = function JokesController(JokesService) {
  var _this = this;

  _classCallCheck(this, JokesController);

  this.JokesService = JokesService;

  JokesService.fetchJoke().then(function (joke) {
    _this.joke = joke;
  });
};

exports.JokesController = JokesController;

},{}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JokesService = undefined;

var _joke = require('./joke');

var _joke2 = _interopRequireDefault(_joke);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var jokeBackend = 'http://api.icndb.com/jokes/random';

var JokesService = (function () {
  function JokesService($http) {
    _classCallCheck(this, JokesService);

    this.$http = $http;
  }

  _createClass(JokesService, [{
    key: 'fetchJoke',
    value: function fetchJoke() {
      return this.$http.get(jokeBackend).then(function (response) {
        return new _joke2.default(response.data.value.joke);
      });
    }
  }]);

  return JokesService;
})();

exports.JokesService = JokesService;

},{"./joke":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2pva2VzL2pva2UuZGlyZWN0aXZlLmpzIiwic3JjL2pva2VzL2pva2UuanMiLCJzcmMvam9rZXMvam9rZXMuY29udHJvbGxlci5qcyIsInNyYy9qb2tlcy9qb2tlcy5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNJQSxPQUFPLENBQ0osTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUM1QixVQUFVLENBQUMsaUJBQWlCLFNBTnRCLGVBQWUsQ0FNeUIsQ0FDOUMsT0FBTyxDQUFDLGNBQWMsVUFOaEIsWUFBWSxDQU1tQixDQUNyQyxTQUFTLENBQUMsTUFBTSxRQU5WLGFBQWEsQ0FNYSxDQUFDOzs7Ozs7OztRQ1JwQixhQUFhLEdBQWIsYUFBYTtBQUF0QixTQUFTLGFBQWEsR0FBRzs7QUFFOUIsU0FBTztBQUNMLFNBQUssRUFBRTtBQUNMLFVBQUksRUFBRSxRQUFRO0tBQ2Y7QUFDRCxZQUFRLEVBQUUsd0JBQXdCO0dBQ25DLENBQUE7Q0FFRjs7Ozs7Ozs7Ozs7OztJQ1RvQixJQUFJO0FBRXhCLFdBRm9CLElBQUksQ0FFWixJQUFJLEVBQUU7MEJBRkUsSUFBSTs7QUFHckIsUUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7R0FDcEI7O2VBSm1CLElBQUk7O3dCQU1aO0FBQ1QsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7U0FSa0IsSUFBSTs7O2tCQUFKLElBQUk7Ozs7Ozs7Ozs7O0lDQW5CLGVBQWUsR0FFbkIsU0FGSSxlQUFlLENBRVAsWUFBWSxFQUFFOzs7d0JBRnRCLGVBQWU7O0FBR2pCLE1BQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOztBQUVqQyxjQUFZLENBQUMsU0FBUyxFQUFFLENBQ3JCLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNaLFVBQUssSUFBSSxHQUFHLElBQUksQ0FBQztHQUNsQixDQUFDLENBQUE7Q0FDTDs7UUFJTSxlQUFlLEdBQWYsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYeEIsSUFBTSxXQUFXLEdBQUcsbUNBQW1DLENBQUM7O0lBRWxELFlBQVk7QUFFaEIsV0FGSSxZQUFZLENBRUosS0FBSyxFQUFFOzBCQUZmLFlBQVk7O0FBR2QsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7R0FDcEI7O2VBSkcsWUFBWTs7Z0NBTUo7QUFDVixhQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUMvQixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsZUFBTyxtQkFBUyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUMzQyxDQUFDLENBQUM7S0FDTjs7O1NBWEcsWUFBWTs7O1FBZVQsWUFBWSxHQUFaLFlBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgSm9rZXNDb250cm9sbGVyIH0gZnJvbSAnLi9qb2tlcy9qb2tlcy5jb250cm9sbGVyJztcbmltcG9ydCB7IEpva2VzU2VydmljZSB9IGZyb20gJy4vam9rZXMvam9rZXMuc2VydmljZSc7XG5pbXBvcnQgeyBKb2tlRGlyZWN0aXZlIH0gZnJvbSAnLi9qb2tlcy9qb2tlLmRpcmVjdGl2ZSc7XG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgnam9rZXNFUzIwMTVBcHAnLCBbXSlcbiAgLmNvbnRyb2xsZXIoJ0pva2VzQ29udHJvbGxlcicsIEpva2VzQ29udHJvbGxlcilcbiAgLnNlcnZpY2UoJ0pva2VzU2VydmljZScsIEpva2VzU2VydmljZSlcbiAgLmRpcmVjdGl2ZSgnam9rZScsIEpva2VEaXJlY3RpdmUpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIEpva2VEaXJlY3RpdmUoKSB7XG5cbiAgcmV0dXJuIHtcbiAgICBzY29wZToge1xuICAgICAgam9rZTogJz12YWx1ZSdcbiAgICB9LFxuICAgIHRlbXBsYXRlOiAnPGk+XCJ7e2pva2UudGV4dH19XCI8L2k+J1xuICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEpva2Uge1xuXG5cdGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcblx0fVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG5cbn1cbiIsImNsYXNzIEpva2VzQ29udHJvbGxlciB7XG5cbiAgY29uc3RydWN0b3IoSm9rZXNTZXJ2aWNlKSB7XG4gICAgdGhpcy5Kb2tlc1NlcnZpY2UgPSBKb2tlc1NlcnZpY2U7XG5cbiAgICBKb2tlc1NlcnZpY2UuZmV0Y2hKb2tlKClcbiAgICAgIC50aGVuKGpva2UgPT4ge1xuICAgICAgICB0aGlzLmpva2UgPSBqb2tlO1xuICAgICAgfSlcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEpva2VzQ29udHJvbGxlciB9XG4iLCJpbXBvcnQgSm9rZSBmcm9tICcuL2pva2UnO1xuXG5jb25zdCBqb2tlQmFja2VuZCA9ICdodHRwOi8vYXBpLmljbmRiLmNvbS9qb2tlcy9yYW5kb20nO1xuXG5jbGFzcyBKb2tlc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCRodHRwKSB7XG4gICAgdGhpcy4kaHR0cCA9ICRodHRwO1xuICB9XG5cbiAgZmV0Y2hKb2tlKCkge1xuICAgIHJldHVybiB0aGlzLiRodHRwLmdldChqb2tlQmFja2VuZClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBKb2tlKHJlc3BvbnNlLmRhdGEudmFsdWUuam9rZSk7XG4gICAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCB7IEpva2VzU2VydmljZSB9XG4iXX0=
