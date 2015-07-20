(function(){
	'use strict';
	angular.module('app')
    .factory('httpGet', ['$http', httpGetFactiory]);

    function httpGetFactiory($http){
		return function(fn){
			$http.get('http://jsonplaceholder.typicode.com/photos/').then(function(data){
				fn(data.data);
			});
		};
		
	}
})();
