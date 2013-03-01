require.config({
    paths: {
        'bigtext': '../lib/bigtext',
        'bootstrap-scrollspy': '../components/sass-bootstrap/js/bootstrap-scrollspy',
        'jquery': '../components/jquery/jquery',
        'jquery.center': '../lib/jquery.center',
        'jquery.localScroll': '../components/jquery.localScroll/jquery.localScroll',
        'jquery.scrollTo': '../components/jquery.scrollTo/jquery.scrollTo'
    },
    shim: {
        'bigtext': ['jquery'],
        'bootstrap-scrollspy': ['jquery'],
        'jquery.center': ['jquery'],
        'jquery.localScroll': ['jquery'],
        'jquery.scrollTo': ['jquery']
    }
});

require([
    'app'
], function (
    app
) {
    'use strict';

    return app;
});
