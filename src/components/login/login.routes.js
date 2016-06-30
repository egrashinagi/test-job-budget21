'use strict';

export default function routes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      template: require('html!./login.html')
    });
}
