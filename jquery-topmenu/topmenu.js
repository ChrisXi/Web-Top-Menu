$(document).ready(function() { 
	$('#topmenu_parentitem').hover(function() { 
		$(this).find('ul>li').stop().fadeToggle(10);
	}); 
});

$(document).ready(function() { 
	var altura = $('#topmenu_menu').offset().top;
	$(window).on('scroll', function() { 
		if ($(window).scrollTop() > altura+5) {
			$('#topmenu_menu').addClass('topmenu_menufloat');
		} else {
			$('#topmenu_menu').removeClass('topmenu_menufloat');
		}
	}); 
}); 