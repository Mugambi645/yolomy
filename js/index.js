//hover on mouse click
$(document).ready(function() {
    $("#mouse").hover(function() {
        $(this).css("background-color", "green");
    }, () => {
        $(this).css("background-color", "white")
    }
        );
});

