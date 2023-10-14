$(document).ready(function () {
	$(window).scroll(function () {
		var max_scroll = $(document).height() - $(window).height();
		var max_w = $("#horizontal-1").width() - $(window).width();
		var current_pos = $(window).scrollTop();
		console.log(current_pos);

		var new_left = (-1 * max_w * current_pos) / max_scroll;
		$("#horizontal-1").css({
			left: new_left
		});
	});
});

$(document).ready(function () {
	$(window).scroll(function () {
		var max_scroll = $(document).height() - $(window).height();
		var max_w = $("#horizontal-2").width() - $(window).width();
		var current_pos = $(window).scrollTop();
		console.log(current_pos);

		var new_left = (-1 * max_w * current_pos) / max_scroll;
		$("#horizontal-2").css({
			left: new_left
		});
	});
});