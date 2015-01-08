//'use strict';
//
///* Services */
//var portfolioServices = angular.module('portfolioServices', ['ngResource']);
//
//portfolioServices.factory('Project', ['$resource',
//  function($resource){
//    return $resource('partials/:projectId.json', {}, {
//      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
//    });
//}]);