var $theList = $('.list');
var $form = $('form');
var $input = $('#to-do');

$form.on('submit', function (eventObject) {
	// stop the form from doing what it usually does
	eventObject.preventDefault();

	var $item = $('<h1>');
	$item.html($input.val());

	$theList.html($item);

	$input.val('');
});
