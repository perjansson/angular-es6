(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _jokes = require('./jokes/jokes.controller');

var _jokes2 = require('./jokes/jokes.service');

var _joke = require('./jokes/joke.model');

angular.module('jokesES2015App', []).controller('JokesController', _jokes.JokesController).service('JokesService', _jokes2.JokesService).service('Joke', _joke.Joke);

},{"./jokes/joke.model":2,"./jokes/jokes.controller":3,"./jokes/jokes.service":4}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Joke = (function () {
  function Joke() {
    _classCallCheck(this, Joke);
  }

  _createClass(Joke, [{
    key: "text",
    set: function set(text) {
      this._text = text;
    },
    get: function get() {
      return this._text;
    }
  }]);

  return Joke;
})();

exports.Joke = Joke;

},{}],3:[function(require,module,exports){
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
    _this.joke = joke.text;
  });
};

exports.JokesController = JokesController;

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JokesService = (function () {
  function JokesService($http, Joke) {
    _classCallCheck(this, JokesService);

    this.$http = $http;
    this.Joke = Joke;
  }

  _createClass(JokesService, [{
    key: 'fetchJoke',
    value: function fetchJoke() {
      var _this = this;

      return this.$http.get('http://api.icndb.com/jokes/random').then(function (response) {
        _this.Joke.text = response.data.value.joke;
        return _this.Joke;
      });
    }
  }]);

  return JokesService;
})();

exports.JokesService = JokesService;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2pva2VzL2pva2UubW9kZWwuanMiLCJzcmMvam9rZXMvam9rZXMuY29udHJvbGxlci5qcyIsInNyYy9qb2tlcy9qb2tlcy5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNJQSxPQUFPLENBQ0osTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUM1QixVQUFVLENBQUMsaUJBQWlCLFNBTnRCLGVBQWUsQ0FNeUIsQ0FDOUMsT0FBTyxDQUFDLGNBQWMsVUFOaEIsWUFBWSxDQU1tQixDQUNyQyxPQUFPLENBQUMsTUFBTSxRQU5SLElBQUksQ0FNVyxDQUFDOzs7Ozs7Ozs7Ozs7O0lDUm5CLElBQUk7V0FBSixJQUFJOzBCQUFKLElBQUk7OztlQUFKLElBQUk7O3NCQUVDLElBQUksRUFBRTtBQUNiLFVBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0tBQ25CO3dCQUVVO0FBQ1QsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7U0FSRyxJQUFJOzs7UUFZRCxJQUFJLEdBQUosSUFBSTs7Ozs7Ozs7Ozs7SUNaUCxlQUFlLEdBRW5CLFNBRkksZUFBZSxDQUVQLFlBQVksRUFBRTs7O3dCQUZ0QixlQUFlOztBQUdqQixNQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQzs7QUFFakMsY0FBWSxDQUFDLFNBQVMsRUFBRSxDQUNyQixJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDWixVQUFLLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0dBQ3ZCLENBQUMsQ0FBQTtDQUNMOztRQUlNLGVBQWUsR0FBZixlQUFlOzs7Ozs7Ozs7Ozs7O0lDYmxCLFlBQVk7QUFFaEIsV0FGSSxZQUFZLENBRUosS0FBSyxFQUFFLElBQUksRUFBRTswQkFGckIsWUFBWTs7QUFHZCxRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixRQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztHQUNsQjs7ZUFMRyxZQUFZOztnQ0FPSjs7O0FBQ1YsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUN2RCxJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsY0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUMxQyxlQUFPLE1BQUssSUFBSSxDQUFDO09BQ2xCLENBQUMsQ0FBQztLQUNOOzs7U0FiRyxZQUFZOzs7UUFpQlQsWUFBWSxHQUFaLFlBQVkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHsgSm9rZXNDb250cm9sbGVyIH0gZnJvbSAnLi9qb2tlcy9qb2tlcy5jb250cm9sbGVyJztcbmltcG9ydCB7IEpva2VzU2VydmljZSB9IGZyb20gJy4vam9rZXMvam9rZXMuc2VydmljZSc7XG5pbXBvcnQgeyBKb2tlIH0gZnJvbSAnLi9qb2tlcy9qb2tlLm1vZGVsJztcblxuYW5ndWxhclxuICAubW9kdWxlKCdqb2tlc0VTMjAxNUFwcCcsIFtdKVxuICAuY29udHJvbGxlcignSm9rZXNDb250cm9sbGVyJywgSm9rZXNDb250cm9sbGVyKVxuICAuc2VydmljZSgnSm9rZXNTZXJ2aWNlJywgSm9rZXNTZXJ2aWNlKVxuICAuc2VydmljZSgnSm9rZScsIEpva2UpO1xuIiwiY2xhc3MgSm9rZSB7XG5cbiAgc2V0IHRleHQodGV4dCkge1xuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxufVxuXG5leHBvcnQgeyBKb2tlIH1cbiIsImNsYXNzIEpva2VzQ29udHJvbGxlciB7XG5cbiAgY29uc3RydWN0b3IoSm9rZXNTZXJ2aWNlKSB7XG4gICAgdGhpcy5Kb2tlc1NlcnZpY2UgPSBKb2tlc1NlcnZpY2U7XG5cbiAgICBKb2tlc1NlcnZpY2UuZmV0Y2hKb2tlKClcbiAgICAgIC50aGVuKGpva2UgPT4ge1xuICAgICAgICB0aGlzLmpva2UgPSBqb2tlLnRleHQ7XG4gICAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IHsgSm9rZXNDb250cm9sbGVyIH1cbiIsImNsYXNzIEpva2VzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoJGh0dHAsIEpva2UpIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5Kb2tlID0gSm9rZTtcbiAgfVxuXG4gIGZldGNoSm9rZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5nZXQoJ2h0dHA6Ly9hcGkuaWNuZGIuY29tL2pva2VzL3JhbmRvbScpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuSm9rZS50ZXh0ID0gcmVzcG9uc2UuZGF0YS52YWx1ZS5qb2tlO1xuICAgICAgICByZXR1cm4gdGhpcy5Kb2tlO1xuICAgICAgfSk7XG4gIH1cblxufVxuXG5leHBvcnQgeyBKb2tlc1NlcnZpY2UgfVxuIl19
