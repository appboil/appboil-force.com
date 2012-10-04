/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 */

define(['jquery'], function ($) {

    // Listening for mobileinit event
    $(document).one('mobileinit', function () {

        // Setting to show message text in jQM loaders
        $.mobile.loadingMessageTextVisible = true;

        // 100ms for hoverDelay behaves better IMHO
        $.mobile.buttonMarkup.hoverDelay = 100;

        // Setting default transition
        $.mobile.defaultPageTransition = 'slide';

    });
});