(function(){
	'use strict';
	angular.module('app')
    .factory('res', ['$resource', function($resource){
		return function name(fn){
			var Res = $resource('http://jsonplaceholder.typicode.com/photos/:id', {item: "@id"});
			Res.query(fn);			
		};
	}]);

})();

