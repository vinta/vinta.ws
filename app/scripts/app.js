/*global define */
define([
    'jquery',

    // jquery plugins
    'bigtext',
    'bootstrap-scrollspy',
    'jquery.localScroll',
    'jquery.scrollTo'
], function (
    $
) {
    'use strict';

    $('#second_bigtext').bigtext({
        childSelector: '> h1'
    });

    $('#third_bigtext').bigtext({
        childSelector: '> h1'
    });

    $('#fourth_bigtext').bigtext({
        childSelector: '> h1'
    });

    $('#fifth_bigtext').bigtext({
        childSelector: '> h1'
    });

    $('#bigtext_skill_list').bigtext({
        childSelector: '> li'
    });

    $('#navi').localScroll(800);

    $('#navbar').scrollspy();

    return false;
});
