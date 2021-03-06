var app = angular.module('ipec', ['ngMaterial', 'ngSanitize', 'ngMessages', 'ngPassword', 'angularMoment', 'swxSessionStorage', 'ngFileUpload', 'ngImgCrop', 'ngRoute']);
/*app.filter('initcap', function () {
    return function (name) {
        var arr = name.split(' ');
        var dup = [];
        for (var i = 0; i < arr.length; i++) {
            var tempstr = arr[i];
            var str = tempstr[0].toUpperCase() + tempstr.substring(1, tempstr.length).toLowerCase();
            dup.push(str);
        }
        return dup.join(' ');
    };
});*/
app.filter('getDur', function () {
    return function (num) {
        var date = new Date(num * 1);
        return moment(date).fromNow();
    }
});
app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('red', {
        'default': '300'
    }).accentPalette('grey',{'default':'900'});
});