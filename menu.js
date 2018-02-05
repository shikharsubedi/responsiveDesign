$(document).ready(function(){
    $('.burger-nav').click(function(ev) {
        ev.preventDefault();
        $('nav.nav').toggleClass('open');
    })
});