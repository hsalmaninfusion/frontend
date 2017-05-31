import angular from 'angular';
import {ngAnimate} from 'angular-animate';
import {ngSanitize} from 'angular-sanitize';

import 'angular-ui-bootstrap';
import 'angular-translate'

import 'angular-ui-router';
import routesConfig from './routes';
import translateConfig from './translate'

import {hello} from './app/hello';
import {test01} from './test01/app';
import {test02} from './test02/app';
import { equalizeHeight, equalizeContainerHeight} from './test01/directives'
import { actionService } from './test01/action-service'


import './index.scss';

export const app = 'app';

angular
  .module(app, ['ngAnimate', 'ngSanitize','ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
  .config(routesConfig)
  .config(translateConfig)
  .component('app', hello)
  .component('test01', test01)
  .component('test02', test02)
  .directive('equalizeHeight', equalizeHeight.directive)
  .directive('equalizeContainerHeight', equalizeContainerHeight.directive)
  .service('actionService', actionService.service)
  
