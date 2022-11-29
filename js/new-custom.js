(function( $ ) {
	'use strict';
	
    $('a.custom-topmenu').click(function(e){
        e.preventDefault();
        $('a.custom-topmenu').toggleClass('topmenu_open');
        $('.click-menudata').toggleClass('menudata_open');
    })


})( jQuery );