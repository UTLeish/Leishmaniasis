var app = angular.module('leishmanaisisApp', ['ngRoute']);

/* Configure Routes */
app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  // Home page
  .when("/", {templateUrl: "partials/home.html", controller: "ctrl"})
  
  // Tabs
  .when("/about", {templateUrl: "partials/about.html", controller: "ctrl"})
  .when("/eco-epidemiology", {templateUrl: "partials/eco-epidemiology.html", controller: "ctrl"})
  .when("/forms", {templateUrl: "partials/forms.html", controller: "ctrl"})
  .when("/leishmaniasis", {templateUrl: "partials/leishmaniasis.html", controller: "ctrl"})
  .when("/sandfly-distributions", {templateUrl: "partials/sandfly-distributions.html", controller: "ctrl"})
  .when("/texas-plague-survey", {templateUrl: "partials/texas-plague-survey.html", controller: "ctrl"}) 
  .when("/contact", {templateUrl: "partials/contact.html", controller: "ctrl"}) 
  // error
  .when("/404", {templateUrl: "partials/404.html", controller: "ctrl"})
}]);

/* Main Controller */
app.controller('ctrl', function() {
  
});

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