'use strict';

import angular from "angular";
import routing from "./main.routes";
import MainController from "./main.controller";


export default angular
  .module('app.main', [])
  .config(routing)
  .controller('mainCtrl', MainController)
  .name;
