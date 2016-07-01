'use strict';

import angular from "angular";
import routing from "./main.routes";
import MainController from "./main.menuItems.controller";


export default angular
  .module('app.main', [])
  .config(routing)
  .controller('menuItemsCtrl', MainController)
  .controller('header', ($scope, $rootScope) => {
    $scope.header = $rootScope.email;
  })
  .name;
