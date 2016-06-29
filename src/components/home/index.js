'use strict';

import angular from "angular";
import uirouter from "angular-ui-router";
import routing from "./home.routes";
import HomeController from "./home.controller";
import loginForm from "./../loginForm";


export default angular
  .module('app.home', [
    uirouter,
    loginForm
  ])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
