'use strict';
import angular from "angular";
import LoginFormDirective from "./loginForm.directive";

export default angular.module('app.loginForm', [])
  // имя диирективы не в CamelCase поскольку плагин HtmlWebpackPlugin конвертит все теги в нижний регистр
  // todo: разобраться и исправить название директивы в CamelCase
  .directive('loginform', () => new LoginFormDirective)
  .name
;
