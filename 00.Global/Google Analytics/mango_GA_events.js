window.addEventListener('load', function () {
    // Header Top Links
    $('.header_top a').each(function (index) {
        $(this).on("click", function () {
            console.log($(this).text());
            ga('gtag_UA_1350365_39.send', 'event', {
                'eventCategory': 'Header Top',
                'eventAction': 'Support Links',
                'eventLabel': $(this).text()
            });
        });
    });
    // Megamenu - Languages
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
    // Megamenu - Organizations
    $('.megamenu--organizations a').each(function (index) {
        $(this).on("click", function () {
            console.log($(this).attr('data-eventlabel'));
            ga('gtag_UA_1350365_39.send', 'event', {
                'eventCategory': 'Header Megamenu link',
                'eventAction': 'Organizations Menu',
                'eventLabel': $(this).attr('data-eventlabel')
            });
        });
    });
    // Megamenu - Resources
    $('.megamenu--resources a').each(function (index) {
        $(this).on("click", function () {
            console.log($(this).attr('data-eventlabel'));
            ga('gtag_UA_1350365_39.send', 'event', {
                'eventCategory': 'Header Megamenu link',
                'eventAction': 'Resources Menu',
                'eventLabel': $(this).attr('data-eventlabel')
            });
        });
    });
});