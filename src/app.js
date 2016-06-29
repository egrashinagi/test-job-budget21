'use strict';

import angular from "angular";
import uirouter from "angular-ui-router";
import routing from "./app.routing";
import home from "./components/home";

angular
  .module('myApp', [
    uirouter,
    home
  ])
  .config(routing);
