(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _jokes = require('./jokes/jokes.controller');

var _jokes2 = require('./jokes/jokes.service');

angular.module('jokesES2015App', []).controller('JokesController', _jokes.JokesController).service('JokesService', _jokes2.JokesService);

},{"./jokes/jokes.controller":3,"./jokes/jokes.service":4}],2:[function(require,module,exports){
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
    _this.joke = joke;
  });
};

exports.JokesController = JokesController;

},{}],4:[function(require,module,exports){
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

var JokesService = (function () {
  function JokesService($http) {
    _classCallCheck(this, JokesService);

    this.$http = $http;
  }

  _createClass(JokesService, [{
    key: 'fetchJoke',
    value: function fetchJoke() {
      return this.$http.get('http://api.icndb.com/jokes/random').then(function (response) {
        return new _joke2.default(response.data.value.joke);
      });
    }
  }]);

  return JokesService;
})();

exports.JokesService = JokesService;

},{"./joke":2}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2pva2VzL2pva2UuanMiLCJzcmMvam9rZXMvam9rZXMuY29udHJvbGxlci5qcyIsInNyYy9qb2tlcy9qb2tlcy5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDR0EsT0FBTyxDQUNKLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsQ0FDNUIsVUFBVSxDQUFDLGlCQUFpQixTQUx0QixlQUFlLENBS3lCLENBQzlDLE9BQU8sQ0FBQyxjQUFjLFVBTGhCLFlBQVksQ0FLbUIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ05wQixJQUFJO0FBRXhCLFdBRm9CLElBQUksQ0FFWixJQUFJLEVBQUU7MEJBRkUsSUFBSTs7QUFHckIsUUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7R0FDcEI7O2VBSm1CLElBQUk7O3dCQU1aO0FBQ1QsYUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7U0FSa0IsSUFBSTs7O2tCQUFKLElBQUk7Ozs7Ozs7Ozs7O0lDQW5CLGVBQWUsR0FFbkIsU0FGSSxlQUFlLENBRVAsWUFBWSxFQUFFOzs7d0JBRnRCLGVBQWU7O0FBR2pCLE1BQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDOztBQUVqQyxjQUFZLENBQUMsU0FBUyxFQUFFLENBQ3JCLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUNaLFVBQUssSUFBSSxHQUFHLElBQUksQ0FBQztHQUNsQixDQUFDLENBQUE7Q0FDTDs7UUFJTSxlQUFlLEdBQWYsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNYbEIsWUFBWTtBQUVoQixXQUZJLFlBQVksQ0FFSixLQUFLLEVBQUU7MEJBRmYsWUFBWTs7QUFHZCxRQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztHQUNwQjs7ZUFKRyxZQUFZOztnQ0FNSjtBQUNWLGFBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FDdkQsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hCLGVBQU8sbUJBQVMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDM0MsQ0FBQyxDQUFDO0tBQ047OztTQVhHLFlBQVk7OztRQWVULFlBQVksR0FBWixZQUFZIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7IEpva2VzQ29udHJvbGxlciB9IGZyb20gJy4vam9rZXMvam9rZXMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBKb2tlc1NlcnZpY2UgfSBmcm9tICcuL2pva2VzL2pva2VzLnNlcnZpY2UnO1xuXG5hbmd1bGFyXG4gIC5tb2R1bGUoJ2pva2VzRVMyMDE1QXBwJywgW10pXG4gIC5jb250cm9sbGVyKCdKb2tlc0NvbnRyb2xsZXInLCBKb2tlc0NvbnRyb2xsZXIpXG4gIC5zZXJ2aWNlKCdKb2tlc1NlcnZpY2UnLCBKb2tlc1NlcnZpY2UpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSm9rZSB7XG5cblx0Y29uc3RydWN0b3IodGV4dCkge1xuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuXHR9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxufVxuIiwiY2xhc3MgSm9rZXNDb250cm9sbGVyIHtcblxuICBjb25zdHJ1Y3RvcihKb2tlc1NlcnZpY2UpIHtcbiAgICB0aGlzLkpva2VzU2VydmljZSA9IEpva2VzU2VydmljZTtcblxuICAgIEpva2VzU2VydmljZS5mZXRjaEpva2UoKVxuICAgICAgLnRoZW4oam9rZSA9PiB7XG4gICAgICAgIHRoaXMuam9rZSA9IGpva2U7XG4gICAgICB9KVxuICB9XG5cbn1cblxuZXhwb3J0IHsgSm9rZXNDb250cm9sbGVyIH1cbiIsImltcG9ydCBKb2tlIGZyb20gJy4vam9rZSc7XG5cbmNsYXNzIEpva2VzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoJGh0dHApIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gIH1cblxuICBmZXRjaEpva2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAuZ2V0KCdodHRwOi8vYXBpLmljbmRiLmNvbS9qb2tlcy9yYW5kb20nKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IEpva2UocmVzcG9uc2UuZGF0YS52YWx1ZS5qb2tlKTtcbiAgICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IHsgSm9rZXNTZXJ2aWNlIH1cbiJdfQ==
