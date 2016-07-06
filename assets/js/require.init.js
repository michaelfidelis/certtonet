requirejs.config({
    paths: {
        'materialize': 'materialize',
        'jquery': 'jquery'
    },
    shim: {
        'materialize': {
            deps: ['jquery']
        }
    }
});


// Require both jquery and materialize (materialize will load other stuff that is needed)
require(['jquery', 'materialize'], function ($) {

    $(function () {
        // Dom is ready
        // this is very important for some components like material_select

        // initialize some components (this is what i need, it can be anything)
        $('select').material_select();
        $(".button-collapse").sideNav();
        $('ul.tabs').tabs();

        // display the waves effect
        // waves is already loaded by materialize
        // just initialize it to make it work (if you don't it won't work)

    });

    // the dropdown is the first thing we need (and it doesn't load right away)
    // so we initialize it as soon as possible
    // if this causes an issue
    // move it to the "documnent ready" function
    $(".dropdown-button").dropdown();
});
