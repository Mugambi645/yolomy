//hover on mouse click
$(document).ready(function() {
    $("#mouse").hover(function() {
        $(this).css("background-color", "green");
    }, () => {
        $(this).css("background-color", "white")
    }
        );
});
//style the view products button
$(document).ready(() => {
    $("#see-button").css({"background-color": "#661A00", 
    "color": "white", "padding": "0.5rem", "margin-left": "1rem"})
   
})
//smooth scrolling
$(document).ready(() => {
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          let $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }})});