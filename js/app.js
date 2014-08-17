$(document).ready(function() {
	//add items to list
	$('form').on('click', '.add-button', function(event) {
		event.preventDefault();
		var newItem = $(this).closest('form').find('.item-field').val();
		var newItemDiv = $('<div class="item"><button class="btn untick"></button><p>'+newItem+'</p><button title="Delete" class="btn delete"></button></div>');
		$('#list').prepend(newItemDiv);
	})
	//toggle blue border on item field when hovering button
	.on('mouseenter', '.add-button', function() {
		$(this).closest('form').find('.item-field').addClass('border-toggle-blue');
	})
	.on('mouseleave', '.add-button', function() {
		$(this).closest('form').find('.item-field').removeClass('border-toggle-blue');
	});
	//toggle blue border on button when hovering item field
	$('form').on('mouseenter', '.item-field', function() {
		$(this).closest('form').find('.add-button').addClass('border-toggle-blue-cross-blue');
	})
	.on('mouseleave', '.item-field', function() {
		$(this).closest('form').find('.add-button').removeClass('border-toggle-blue-cross-blue');
	});
	//toggle blue border on button when item field focused
	$('.item-field').focusin(function () {
		$(this).closest('form').find('.add-button').addClass('border-toggle-blue-cross-blue-2');
		$(this).closest('.shopping-list-app').find('.notes-div').addClass('display-block');
	})
	.focusout(function () {
		$(this).closest('form').find('.add-button').removeClass('border-toggle-blue-cross-blue-2');
	});
	//tick item on list
	$('#list').on('click', '.untick', function(event) {
		event.preventDefault();
		console.log('clicked');
		$(this).closest('.item').addClass('done');
		$(this).removeClass('untick');
		$(this).addClass('tick');
		$(this).prop('title', 'Untick');
	});
	//untick item on list
	$('#list').on('click', '.tick', function(event) {
		event.preventDefault();
		$(this).closest('.item').removeClass('done');
		$(this).removeClass('tick');
		$(this).addClass('untick');
		$(this).prop('title', 'Tick');
	});
	//permanently delete item from list
	$('#list').on('click', '.delete', function(event) {
		event.preventDefault();
		$(this).closest('.item').remove();
	});

})