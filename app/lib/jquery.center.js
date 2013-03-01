/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.1.1
*
* Requires: jQuery 1.2.6+
*/
;( function($, window) {
  var get_win_size = function() {
    if (window.innerWidth != undefined) {
      return [window.innerWidth, window.innerHeight];
    }
    else {
      var B = document.body;
      var D = document.documentElement;

      return [
        Math.max(D.clientWidth, B.clientWidth),
        Math.max(D.clientHeight, B.clientHeight)
      ];
    }
  };

  $.fn.center = function(opt) {
    var $w = $(window); // cache gobal
    var scrollTop = $w.scrollTop();

    return this.each(function() {
      var $this = $(this); // cache $( this )

      // merge user options with default configs
      var configs = $.extend({
        against: 'window',
        affect: 'both', // or 'horizontal' or 'vertical'
        topOffset: 0,
        leftOffset: 0,
        topNegative: false, // big image may cause negative y
        resize: true,
        finish: $.noop
      }, opt);

      var centerize = function() {
        var against = configs.against;
        var against_w_n_h;
        var $against;

        if (against === 'window') {
          against_w_n_h = get_win_size();
        }
        else if (against === 'parent') {
          $against = $this.parent();
          against_w_n_h = [$against.width(), $against.height()];
          scrollTop = 0;
        }
        else {
          $against = $this.parents(against);
          against_w_n_h = [$against.width(), $against.height()];
          scrollTop = 0;
        }

        if ((configs.affect === 'both') || (configs.affect === 'horizontal')) {
          var x = (against_w_n_h[0] - $this.outerWidth()) * 0.5;
          x = x + configs.leftOffset;

          $this.css('left', x);
        }

        if ((configs.affect === 'both') || (configs.affect === 'vertical')) {
          var y = (against_w_n_h[1] - $this.outerHeight()) * 0.5 + scrollTop;
          y = y + configs.topOffset;

          if ((y < 0) && (!configs.topNegative)) y = 0;

          $this.css('top', y);
        }

        configs.finish();
      };

      // apply centerization
      centerize();
      if (configs.resize === true) $w.resize(centerize);
    });
  };
})(jQuery, window);
