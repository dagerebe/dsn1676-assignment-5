var $theList = $('.list');
var $form = $('form');
var $input = $('#to-do');

$form.on('submit', function (eventObject) {
	eventObject.preventDefault();

	var $items = $('<ul>');
	$items.html($input.val());

	var $item = $('<li>');
	$item.html($input.val());

	$theList.html($item);
	$.append;

	$input.val('');
});
