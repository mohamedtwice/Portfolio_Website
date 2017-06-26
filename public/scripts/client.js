var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: "views/partials/home.html",
    controller: "SectionController"
  }).when('/about', {
    templateUrl: "views/partials/about.html",
    controller: "SectionController"
  }).when('/github', {
    templateUrl: "views/partials/github.html",
    controller: "SectionController"
  });
});

myApp.controller('SectionController', SectionController);

function SectionController(GithubAPI, $location) {
  var vm = this;

  // vm.onLoad = function() {
  //   vm.getProfile();
  //   vm.getRepos();
  // };

  //get request to github profile API
  vm.getProfile = function() {
    GithubAPI.githubProfile().then(function(response) {
      console.log(response);
      vm.profile = response;
    }); //end call to service
  }; //end getProfile

  //get repos
  vm.getRepos = function() {
    GithubAPI.githubRepos().then(function(response) {
      console.log('back from controller with', response);
      vm.repos = response;
    }); // end then
  }; //end githubRepo

}
