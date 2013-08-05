/* 
	ng-pure-scroll
	v1.0.0
	2013-08-05
	Release 
*/
var pureScroll = angular.module('pure-scroll', []).
	directive('pureScroll', ['$rootScope', '$window', '$timeout', function($rootScope, $window, $timeout) {
		return {
			// Linker
			link: function(scope, elem, attrs) {
				// Setup
				var processScroll;
				var scrollBoundary = 0;
				var allowScroll = false;

				// If the scroll distance is set on the element, use that rather than the default
				if(attrs.pureScrollBoundary) {
					scope.$watch(attrs.pureScrollBoundary, function(value) {
						return scrollBoundary = parseInt(value, 10);
					});
				}

				// If the disable scroll attribute is set, check it
				if(attrs.pureScrollDisabled) {
					scope.$watch(attrs.pureScrollDisabled, function(value) {
						allowScroll = !value;
						if (allowScroll) {
							return processScroll();
						}
					});
				}

				/**
				 * processScroll()
				 * 
				 * Function to handle scrolling, call the scroll function if required
				 * 
				 */
				processScroll = function() {
					// Use the element
					var element = elem[0];
					
					// Determine the end of the element/window
					var elementBottom = element.offsetTop + element.clientHeight;
					var windowBottom = $window.document.documentElement.clientHeight + ($window.scrollY || $window.document.documentElement.scrollTop || $window.document.body.scrollTop);

					// How far from the bottom of the window are we?
					var distanceToBottom = elementBottom - windowBottom;
					// If distance <= the distance defined, then we should load content
					var determineScroll = distanceToBottom <= $window.innerHeight * scrollBoundary;
					if(determineScroll && allowScroll) {
						if($rootScope.$$phase) {
							return scope.$eval(attrs.pureScroll);
						} else {
							return scope.$apply(attrs.pureScroll);
						}
					}
				};

				// Attach processScroll to the scroll event
				$window.onscroll = processScroll;
				// Tidy up after ourselves
				scope.$on('$destroy', function() {
					return $window.onscroll = null;
				});
			}
		};
	}
]);