/*jslint browser: true, debug: true*/
/*global define, module, exports*/
(function (root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.scroll2Top = factory();
    }
}(this, function () {
    "use strict";

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;

      if (t < 1) {
        return c / 2 * t * t + b
      }

      t--;

      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    function scroll2Top(to, callback, duration) {
        function move(amount) {
            document.documentElement.scrollTop = amount;
            document.body.parentNode.scrollTop = amount;
            document.body.scrollTop = amount;
        }

        function position() {
            return window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        }

        var start       = position(),
            change      = to - start,
            currentTime = 0,
            increment   = 20,
            duration;

        duration = (typeof(duration) === 'undefined') ? 500 : duration;

        var animateScroll = function () {
            var val;

            currentTime += increment;

            val = easeInOutQuad(currentTime, start, change, duration);

            move(val);

            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            } else {
                if (callback && typeof(callback) === 'function') {
                    callback();
                }
            }
        };

        animateScroll();
    };

    return scroll2Top;
}));