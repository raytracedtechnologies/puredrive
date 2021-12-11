$(document).ready(function () {
    var domArray = ['<header></header>'];
    $('main').append(domArray);
    $('body').append("Platform: " + navigator.platform);
    if (navigator.platform = "MacIntel") {
        $('header').append('<h1>Download Pure Drive</h1>');
    }
    else if ((navigator.platform = "Android") || (navigator.platform = "Linux armv7l") || (navigator.platform = "Linux aarch64")) {
        $('header').append('<h1>Download Pure Drive</h1>');
    }
});