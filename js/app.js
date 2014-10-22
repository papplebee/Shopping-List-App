$(document).ready(function() {
	//add items to list
	$('form').on('click', '.add-button', function(event) {
		event.preventDefault();
		var newItem = $(this).closest('form').find('.item-field').val();
		var newNotes = $(this).closest('#shopping-list-app').find('#notes-field').val();
		var newItemDiv = $('<div class="item"><button class="btn untick"></button><p>'+newItem+'</p><div class="arrow-right"></div><div class="arrow-down"></div><button title="Delete" class="btn delete"></button><p class="extra-notes">'+newNotes+'</p></div>');
		$('#list').prepend(newItemDiv);
		$('#shopping-list-app').find('#notes-div').slideUp(500);
		$('.item-field').val("");
		$('#notes-field').val("");
	});

	//toggle blue border on item field when hovering button
	$('form').on('mouseenter', '.add-button', function() {
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
	//toggle blue border on button when item field focused and toggle notes field
	$('.item-field').focusin(function () {
		$(this).closest('form').find('.add-button').addClass('border-toggle-blue-cross-blue-2');
		$(this).closest('#shopping-list-app').find('#notes-div').slideDown(500);
		$(this).closest('#add-item-div').css('padding-bottom','5px');
	})
	.focusout(function() {
		$(this).closest('form').find('.add-button').removeClass('border-toggle-blue-cross-blue-2');
	});
	$('#notes-div').focusin(function() {
		$(this).show();
		$(this).closest('#shopping-list-app').find('#add-item-div').css('padding-bottom','5px');
		$(this).closest('#shopping-list-app').find('.item-field').addClass('border-toggle-blue');
		$(this).closest('#shopping-list-app').find('.add-button').addClass('border-toggle-blue-cross-blue-2');
	})
	.focusout(function() {
		$(this).slideUp(500);
		$(this).closest('#shopping-list-app').find('#add-item-div').css('padding-bottom','30px');
		$(this).closest('#shopping-list-app').find('.item-field').removeClass('border-toggle-blue');
		$(this).closest('#shopping-list-app').find('.add-button').removeClass('border-toggle-blue-cross-blue-2');
		$('#add-item-div').css('padding-bottom','30px');
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
	//Open extra notes
	$('#list').on('click', '.arrow-right', function(event) {
		$(this).hide();
		$(this).closest('.item').find('.arrow-down').show().css('display', 'inline-block');
		$(this).closest('.item').find('.extra-notes').show(100);
	});
	//Close extra notes
	$('#list').on('click', '.arrow-down', function(event) {	
		$(this).hide();
		$(this).closest('.item').find('.arrow-right').show().css('display', 'inline-block');
		$(this).closest('.item').find('.extra-notes').hide(100);
	});

})