$(document).ready(function () {
    var domArray = ['<header></header>'];
    $('body').append(domArray);
    $('body').append(navigator.platform);
    if (navigator.platform = "MacIntel") {
        $('header').append('<h1>Download Pure Drive for Mac</h1>');
    }
    else if (navigator.platform = "Android") {
        $('header').append('<h1>Download Pure Drive for Android</h1>');
    }
});