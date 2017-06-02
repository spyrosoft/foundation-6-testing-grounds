$('.slider').on('changed.zf.slider', update_indicator);

function update_indicator() {
	var indicator_affect
		= parseFloat($('.slider.affects-indicator input').val());
	$('.with-indicator span.indicator')
		.css('left', indicator_affect + '%');
	
	var with_indicator_value
		= parseFloat($('.slider.with-indicator input').val());
	var slider_fill_left_percent;
	var slider_fill_width_percent = Math.abs(with_indicator_value - indicator_affect);
	if (with_indicator_value < indicator_affect) {
		slider_fill_left_percent = with_indicator_value;
	} else {
		slider_fill_left_percent = indicator_affect;
	}
	$('.slider.with-indicator span.slider-fill')
		.css('left', slider_fill_left_percent + '%')
		.css('width', slider_fill_width_percent + '%');
}
