(function() {
  'use strict';

  angular
    .module('angularES6App')
    .controller('MainController', [MainController]);

  function MainController() {
    var vm = this;

    vm.greeting = 'Hello, world!';
  };

})();
