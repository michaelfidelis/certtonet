(function (jQ) {
    jQ(function () {

        if (isTouchDevice() && isMobileSize()) {
            console.log("[isTouchDevice()] True");
            jQ('#nav-mobile').css({
                overflow: 'auto'
            });
            jQ('.button-collapse').sideNav({
                'closeOnClick': true,
                'edge': 'left'
            });
        } else {
            console.log("[isTouchDevice()] False");
            jQ('.button-collapse').sideNav({
                'edge': 'left'
            });
        }

        // Plugin initialization
        jQ('.tooltipped').tooltip({
            delay: 50
        });
        jQ('.modal-trigger').leanModal();
        jQ('.scrollspy').scrollSpy();
        jQ('.datepicker').pickadate({
            selectYears: 20
        });
        jQ('select').not('.disabled').material_select();
    }); // end of document ready
})(jQuery); // end of jQuery name space


// Detect touch screen and enable scrollbar if necessary
function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

function isMobileSize() {
    var window_width = window.innerWidth;
    return window.matchMedia("(min-width: 992px)").matches || window_width <= 992;
}

function initModal() {
    jQ('.modal-trigger').leanModal();

}

function openModal(modalId) {
    jQ(modalId).openModal();
}

function geraData(ano, mes, dia, hora, minuto) {
    return new Date(ano, mes, dia, hora, minuto, 00, 00);
}
