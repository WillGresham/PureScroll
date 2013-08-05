PureScroll is a pure Javascript directive for AngularJS which will allow content to be loaded as the scroll position of the page approaches the end of the document.

Usage
-----

 * Download ngPureScroll.
 * Include the script tag on your page after the AngularJS tags
 * Ensure that your application module specifies `pure-scroll` as a dependency: e.g. angular.module('myApplication', ['pure-scroll']);
 * Use the directive by specifying an `pure-scroll` attribute on an element:
    <div pure-scroll="myPagingFunction()" infinite-scroll-distance="1"></div>

Note that neither the module nor the directive use the `ng` prefix, that prefix is reserved for the core Angular module. They can, however, be prepended with `data-` if you wish

License
-------
ngPureScroll is licensed under the MIT license. See the LICENSE file for more details.

Thanks
------
Inspiration for this directive came from the infiniteScroll directive written by [BinaryMuse](https://github.com/BinaryMuse/), but I needed something without jQuery.

Say Hi
------
[@WillGresham](https://www.twitter.com/WillGresham)
