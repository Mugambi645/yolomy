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
