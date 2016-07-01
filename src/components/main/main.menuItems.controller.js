'use strict';
export default class MainController {
  constructor($scope) {
    $scope.menuItems = [
      {title: 'home', state: 'home'},
      {title: 'about', state: 'main'},
      {title: 'sample post', state: 'main'},
      {title: 'contacts', state: 'main'}
    ];
  }
}
