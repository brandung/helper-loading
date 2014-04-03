/**
 * helper-loading.js - v1.0.0
 * https://github.com/brandung/helper-loading.git
 *
 * Copyright brandung GmbH & Co.KG
 * http://www.brandung.de/ *
 * MIT License (MIT)
 *
 * @param callback
 */

Brandung.Helpers.loading = function (callback) {
	var $loading = $('.helper-loading');
	if ($loading.length) {
		$loading.delay(800).fadeOut(function () {
			var $_self = $(this);
			$_self.remove();
			if (callback && typeof(callback) === "function") {
				callback();
			}
		});
	} else {
		$('<div class="helper-loading"></div>').appendTo('body');
	}
};