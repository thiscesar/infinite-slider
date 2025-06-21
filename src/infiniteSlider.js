(function ($) {
  $.fn.infiniteSlider = function (options) {
    const settings = $.extend(
      {
        speed: 20, // loop duration
      },
      options
    );

    return this.each(function () {
      const $container = $(this);
      const $images = $container.children().clone();

      if ($container.data("infinite-slider-initialized")) {
        return;
      }

      $container.data("infinite-slider-initialized", true);

      const $wrapper = $('<div class="slider-wrapper"></div>');
      const $track = $('<div class="slider-track"></div>').css({
        animation: `scroll ${settings.speed}s linear infinite`,
      });

      $images.addClass("slider-logo");
      $track.append($images.clone(), $images.clone());

      $wrapper.append($track);
      $container.empty().append($wrapper);
    });
  };
})(jQuery);
