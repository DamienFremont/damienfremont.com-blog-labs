/*jshint -W099 */
define(['angular'], function (angular){

angular.module('templates-main', ['/templateCachePrefix/modules/page1/page1.html', '/templateCachePrefix/modules/page2/page2.html']);

angular.module('/templateCachePrefix/modules/page1/page1.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('/templateCachePrefix/modules/page1/page1.html',
	"<div class=\"page1\" ng-controller=\"Page1Ctrl\">\n" +
	"	<h2>Page 1</h2>\n" +
	"	<button ng-click=\"goToPage2()\">Go to Page 2 >></button>\n" +
	"</div>");
}]);

angular.module('/templateCachePrefix/modules/page2/page2.html', []).run(['$templateCache', function($templateCache) {
	$templateCache.put('/templateCachePrefix/modules/page2/page2.html',
	"<div class=\"page2\" ng-controller=\"Page2Ctrl\">\n" +
	"	<h2>Page 2</h2>\n" +
	"	<button ng-click=\"goToPage1()\">Go to Page 1 >></button>\n" +
	"</div>");
}]);


return null;
});
