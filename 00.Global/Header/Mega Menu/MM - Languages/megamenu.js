document.addEventListener('DOMContentLoaded', function (event) {
    // $('div#megamenus').appendTo('header');

    $.get('/userfiles/files/css/megamenu/megamenu.html', function (data) {
        $('header').append(data);
    });

    $('li#nav-languages').hover(function () {
        $('.megamenu--languages').addClass('active');
    }, function () {
        $('.megamenu--languages').removeClass('active');
    });
    $('.megamenu--languages li a').each(function (index) {
        $(this).on("click", function () {
            ga('gtag_UA_1350365_39.send', 'event', {
                'eventCategory': 'megaheader Language',
                'eventAction': 'Language',
                'eventLabel': $(this).text()
            });
        });
    });
    var myStylesLocation = '/userfiles/files/css/megamenu/megamenu.css';
    $('<link rel="stylesheet" type="text/css" href="' + myStylesLocation + '" >').appendTo('head');
});

