'use strict';
// routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      template: require('html!./main.html'),
      resolve: {
        simpleObj: function () {
          return {value: 'simple!'};
        }
      }
    })
}
