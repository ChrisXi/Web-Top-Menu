$(document).ready(function() { 
	$('#topmenu_parentitem').hover(function() { 
		$(this).find('ul>li').stop().fadeToggle(10);
	}); 
}); 

