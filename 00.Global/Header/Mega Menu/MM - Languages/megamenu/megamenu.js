document.addEventListener('DOMContentLoaded', function (event) {
    // $('div#megamenus').appendTo('header');
    var myStylesLocation = '/userfiles/files/css/megamenu/megamenu.css';
    $('<link rel="stylesheet" type="text/css" href="' + myStylesLocation + '" >').appendTo('head');

    $.get('/userfiles/files/css/megamenu/megamenu.html', function (data) {
        $('header').append(data);
    });

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
});

// Google Analytics Events on megamenu links
window.addEventListener('load', function () {
    $('.megamenu--languages li a').each(function (index) {
        $(this).on("click", function () {
            console.log($(this).text());
            ga('gtag_UA_1350365_39.send', 'event', {
                'eventCategory': 'Header Megamenu link',
                'eventAction': 'Language link',
                'eventLabel': $(this).text()
            });
        });
    });
});