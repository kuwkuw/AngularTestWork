(function(){
	'use strict';

	angular.module('app')
		.directive('imgClick', imgClickDirective);

		function imgClickDirective(){
			return {
				restrict: 'A',
				link: function(scope, element, attrs){
					element.on('click', function(event) {
						event.preventDefault();

						var div = document.createElement('div');
						div.classList.add("big-img");
						div.style.backgroundColor = 'rgba(0,0,0,0.5)';
						
						var imgWrp = document.createElement('div');
						imgWrp.classList.add("img-wrp");						
						
						var img = document.createElement('img');
						img.setAttribute('src', attrs.imgClick );
						imgWrp.appendChild(img);
						
						div.appendChild(imgWrp);

						document.body.appendChild(div);

						document.body.querySelector('.big-img').addEventListener("click", function(event){
							document.body.removeChild(document.body.querySelector('.big-img'));
						}, false)
					});
				}
			}
		}
})();
