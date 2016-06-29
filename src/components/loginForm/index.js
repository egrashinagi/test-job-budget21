'use strict';
import angular from "angular";
import LoginFormDirective from "./loginForm.directive";

export default angular.module('app.loginForm', [])
  .directive('loginform', LoginFormDirective)
  .name
;
