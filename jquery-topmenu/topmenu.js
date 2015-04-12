

$(document).ready(function() { 
	$('#topmenu_parentitem').hover(function() { 
		$(this).find('ul>li').stop().fadeToggle(10);
	}); 
});

$(document).ready(function() { 
	
	altura = $('#topmenu_menu').offset().top;
	$(window).on('scroll', function() { 
		if ($(window).scrollTop() > altura+5) {
			$('#topmenu_menu').css('position', 'fixed');
			$('#topmenu_menu').addClass('topmenu_menufloat');
			$('#topmenu_name').show();
		} else {
			$('#topmenu_menu').css('position', 'relative');
			$('#topmenu_menu').removeClass('topmenu_menufloat');
			$('#topmenu_name').hide();
		}
	}); 
}); 

$(document).ready(function() { 
	$(window).resize(function(){
   		altura = $('#topmenu_menu').offset().top;
	}); 
}); 