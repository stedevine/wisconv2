var app = angular.module('app', ['ui.router']);

app.config(
		function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/');
			$stateProvider

	.state('hello', {url: "/",templateUrl: 'views/hello.html',})
	.state('about', {url: "/about", templateUrl: 'views/about.html',})
	.state('shows', {url: "/shows",templateUrl: 'views/shows.html',})
	.state('music', {url: "/music",templateUrl: 'views/music.html',})
	.state('videos', { url: "/videos",templateUrl: 'views/videos.html',})
		});
