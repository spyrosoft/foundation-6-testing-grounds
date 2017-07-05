$('#select').on('input', select_changed);
function select_changed() {
	if (this.value === 'custom') {
		show_custom();
	}
}

function show_custom() {
	$('#custom').show();
	$('#select').hide();
}

$('#cancel').on('click', hide_custom);
function hide_custom() {
	$('#custom').hide();
	$('#select').show();
}