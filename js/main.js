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
  .when("/bio", {templateUrl: "partials/bio.html", controller: "ctrl"}) 

  // error
  .when("/404", {templateUrl: "partials/404.html", controller: "ctrl"})
}]);

/* Main Controller */
app.controller('ctrl', function() {
  
});