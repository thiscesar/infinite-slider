(function ($) {
  $.fn.infiniteSlider = function (options) {
    const settings = $.extend({
      speed: 10
    }, options);

    return this.each(function () {
      const $container = $(this);

      const speed = $container.data('speed') || settings.speed;

      $container.addClass('slider-component');

      const $wrapper = $('<div class="slider-wrapper"></div>');
      const $track = $('<div class="slider-track"></div>');

      const $items = $container.children().clone();
      $track.append($items).append($items.clone());

      $wrapper.append($track);
      $container.empty().append($wrapper);

      $wrapper.css('--scroll-speed', `${speed}s`);
    });
  };
})(jQuery);
