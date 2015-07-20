(function(){
	'use strict';

	angular.module('app')
	     .controller('AppController', ['res', 'httpGet', function(res, httpGet){
		var vm = this;
		
		vm.list ;
		
		httpGet(function(data){
			vm.list = data.slice(0, 10);
		});
	}]);
})();

