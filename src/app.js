'use strict';

import "./index.scss";
import angular from "angular";
import "angular-animate";
import "angular-aria";
import "angular-material";
import uirouter from "angular-ui-router";
import routing from "./app.routing";
import home from "./components/home";
import main from "./components/main";
import login from "./components/login";

angular
  .module('myApp', [
    'ngMaterial',
    uirouter,
    home,
    main,
    login
  ])
  .config(routing);
