'use strict';

import angular from "angular";
import routing from "./main.routes";


export default angular
  .module('app.main', [])
  .config(routing)
  .name;
