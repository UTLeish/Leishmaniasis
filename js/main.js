var app = angular.module('leishmanaisisApp', ['ngRoute', 'portfolioServices']);

var projectId = "about";

/* Configure Routes */
app.config(['$routeProvider', function($routeProvider){

  $routeProvider.
      when('/projects', {
        templateUrl: 'partials/home.html',
        controller: 'ctrl'
      }).
      when('/projects/:projectId', {
        templateUrl: function(urlPath){ return '/partials/' + projectId + '.html'},
        controller: 'ctrl'
      }).
      otherwise({
        redirectTo: '/projects/details.html',
        controller: 'ctrl'
      });
}]);

/* Main Controller */
app.controller('ctrl', ['$scope', '$routeParams', 'Project',
  function($scope, $routeParams, Project) {
    $scope.project = Project.get({projectId: $routeParams.projectId}, function(project) {
        $scope.mainImageUrl = project.images[0];
        $scope.orderProp = 'rank';
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
}]);

/* Main Controller */
app.controller('tabs', ['$scope', 'Project', function($scope, Project) {
    $scope.projects = Project.query();
    $scope.orderProp = 'age';
  
}]);

/* Service */
'use strict';

/* Services */
var portfolioServices = angular.module('portfolioServices', ['ngResource']);

portfolioServices.factory('Project', ['$resource',
  function($resource){
    return $resource('partials/:projectId.json', {}, {
      query: {method:'GET', params:{projectId:'tabs'}, isArray:true}
    });
}]);


/* Resize image to browser height */

var W = $(window).width(),
    H = $(window).height();

if (W < 768)
    H = H/2;

$('.cover').height(H);
$('.logo').css('padding-top', H/2 - 80);

function imgsize() {
    var W = $(window).width(),
        H = $(window).height();
    if (W < 768)
      H = H/2;
    $('.cover').height(H);
    $('.logo').css('padding-top', H/2 - 80);
}
$(window).bind('resize', function() { imgsize(); });