'use strict';

import angular from "angular";
import routing from "./login.routes";
import LoginFormDirective from './loginForm.directive'

export default angular
  .module('app.login', [])
  .directive('loginform', () => new LoginFormDirective)
  .config(routing)
  .name
;
