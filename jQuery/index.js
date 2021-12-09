$(document).ready(function () {
    var domArray = ['<header></header>'];
    $('body').append(domArray);
    $('body').append("Platform: " + navigator.platform);
    if (navigator.platform = "MacIntel") {
        $('header').append('<h1>Download Pure Drive for Mac</h1>');
    }
    else if ((navigator.platform = "Android") || (navigator.platform = "Linux armv7l")) {
        $('header').append('<h1>Download Pure Drive for Android</h1>');
    }
});