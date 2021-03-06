/*
 * Nootstrap - Not Bootstrap
 * Front-End Framework web
 * Morgan Caron
 */

function updateParallax() {
	$('.parallax').each(function() {
		var scrolled = ($(document).scrollTop() - $(this).offset().top);
		$(this).find('.parallax-background').css('transform', 'translateY(' + scrolled/2 + 'px)');
	});
}

function updateChangeOnTop() {
	if ($(document).scrollTop() < $(window).height())
		$('.changeOnTop').addClass('onTop');
	else
		$('.changeOnTop').removeClass('onTop');
}

function toggleDebug() {
	$('html').toggleClass('nootstrap-debug');
}

function newNotification(content) {
	if ($('body > .nootstrap-notifications').length == 0)
		$('body').append('<div class="nootstrap-notifications"></div>');
	$('body > .nootstrap-notifications').append('<div class="nootstrap-notification"></div>');
	$('body > .nootstrap-notifications > .nootstrap-notification:last-child').html(content).css({
		opacity: 0,
		marginTop: '+=100%'
	}).animate({
		opacity: 1,
		marginTop: 0
	}, 300, function() {
		$(this).delay(5000).animate({
			opacity: 0,
			marginTop: '-=100%'
		}, 300, function() {
			$(this).remove();
			if ($('body > .nootstrap-notifications > .nootstrap-notification').length == 0)
				$('body > .nootstrap-notifications').remove();
		});
	});
}

$(document).ready(function() {
	updateParallax();
	updateChangeOnTop();

	$('.addActive').click(function() {
		$('#' + $(this).attr('activable')).addClass('active');
	});
	$('.removeActive').click(function() {
		$('#' + $(this).attr('activable')).removeClass('active');
	});
	$('.toggleActive').click(function() {
		$('#' + $(this).attr('activable')).toggleClass('active');
	});
});

$(window).scroll(function() {
	updateParallax();
	updateChangeOnTop();
});
