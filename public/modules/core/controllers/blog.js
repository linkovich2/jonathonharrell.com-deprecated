'use strict';

angular.module('core').controller('BlogController', ['$scope', '$http', 'Authentication',
    function($scope, $http, Authentication) {
        $scope.authentication = Authentication;
        $scope.loading = true;

        $http.get('blogposts').success(function (data) {
            $scope.blogs = data.items; // individual posts from RSS feed
            $scope.url = data.url; // URL of blog
            $scope.loading = false;
        });
    }
]);