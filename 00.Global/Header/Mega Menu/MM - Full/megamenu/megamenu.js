document.addEventListener('DOMContentLoaded', function (event) {
    // var myStylesLocation = '/userfiles/files/css/megamenu-hoverfix/megamenu.css';
    // $('<link rel="stylesheet" type="text/css" href="' + myStylesLocation + '" >').appendTo('head');

    // $.get('/userfiles/files/css/megamenu-hoverfix/megamenu.html', function (data) {
    //     $('header').append(data);
    // });

    $( '#megamenus' ).appendTo( 'header' );

    $('li#nav-languages').hover(function () {
        $('.megamenu--languages').addClass('active');
    }, function () {
        $('.megamenu--languages').removeClass('active');
    });

    $('li#nav-organizations').hover(function () {
        $('.megamenu--organizations').addClass('active');
    }, function () {
        $('.megamenu--organizations').removeClass('active');
    });

    $('li#nav-resources').hover(function () {
        $('.megamenu--resources').addClass('active');
    }, function () {
        $('.megamenu--resources').removeClass('active');
    });

});