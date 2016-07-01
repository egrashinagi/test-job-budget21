'use strict';

export default function routes($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      template: require('html!./login.html'),
      onEnter: function ($mdDialog) {
        $mdDialog.show({
          template: require('html!./dialog.html'),
          parent: angular.element(document.querySelector('.login-container'))
        })
      }
    });
}
