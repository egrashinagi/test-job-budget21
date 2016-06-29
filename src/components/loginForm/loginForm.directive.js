'use strict';

export default () => {
  return {
    template: require('html!./loginForm.html'),
    restrict: 'E',
    scope: {}
  }
}


/*
 export default class LoginForm {
  constructor() {
    this.template = require('html!./loginForm.html');
    this.restrict = 'E';
    this.scope = {}
   }
 }
 */
