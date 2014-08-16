$(document).ready(function() {

	$('form').on('click', '.add-button', function(event) {
		event.preventDefault();
		var newItem = $(this).closest('form').find('.item-field').val();
		var newItemDiv = $('<div class="item"><button class="btn untick"></button><p>'+newItem+'</p><button class="btn delete"></button></div>');
		$('#list').prepend(newItemDiv);
	});

	$('#list').on('click', '.untick', function(event) {
		event.preventDefault();
		console.log('clicked');
		$(this).closest('.item').addClass('done');
		$(this).removeClass('untick');
		$(this).addClass('tick');
	});

	$('#list').on('click', '.tick', function(event) {
		event.preventDefault();
		$(this).closest('.item').removeClass('done');
		$(this).removeClass('tick');
		$(this).addClass('untick');
	});

	$('#list').on('click', '.delete', function(event) {
		event.preventDefault();
		$(this).closest('.item').remove();
	});

})