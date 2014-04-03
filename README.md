helper-loading
==============

Append an loading overlay with loading-icon

### JavaScript Snippet:

```JavaScript
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
```
