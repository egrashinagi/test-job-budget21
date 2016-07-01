'use strict';

import angular from "angular";
import routing from "./login.routes";
import LoginFormDirective from "./loginForm.directive";

export default angular
  .module('app.login', [])
  .directive('loginform', () => new LoginFormDirective)
  .controller('loginCtrl', ($scope, $rootScope, $state, $mdDialog) => {
    $scope.submit = () => {
      let target = document.querySelector('.login-form-email');
      if (target.validity.valid) {
        $rootScope.email = target.value;
        console.log('submit', $rootScope.email);
        $mdDialog.hide();
        $state.go('main');
      }
    };
  })
  .config(routing)
  .name
;
