'use strict';
// routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      template: require('html!./main.html'),
      resolve: {
        simpleObj() {
          return {value: 'simple!'};
        }
      },
      controller($scope){
        $scope.menuItems = [
          {title: 'home', state: 'home'},
          {title: 'about', state: 'main'},
          {title: 'sample post', state: 'main'},
          {title: 'contacts', state: 'main'}
        ];
      }
    });
}
