'use strict';

import angular from "angular";
import routing from "./login.routes";

export default angular
  .module('app.login', [])
  .config(routing)
  .name
;
