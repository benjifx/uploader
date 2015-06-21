'use strict';

angular.module('app', []);

angular.module('app')
.controller('UploaderController', [
	'$scope',
	'Dropzone',
function(
	$scope,
	Dropzone
) {
	$scope.name = 'asdf';
}])
.directive('edDropzone', ['Dropzone', function(Dropzone) {
	return {
		restrict: 'E',
		templateUrl: 'ed-dropzone.html',
		link: function($scope, element) {
			var clickableElement = element.find('[ed-dropzone-browse]');
			var previewElement = element.find('.preview-container');
			var edDropzone = new Dropzone(element[0], {
				url: "/file/post",
				clickable: clickableElement[0],
				previewsContainer: previewElement[0]
			});
			console.log(edDropzone);
		}
	};
}])
.factory('Dropzone', ['$window', function($window) {
	return $window.Dropzone;
}])
;