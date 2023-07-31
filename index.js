var clicked;
var flag =false;
var clickedP;

$(".rating-elements li").click(function(){
    $(".rating-elements li button").css("background-color","hsl(218, 16%, 34%)").css("color","hsl(217, 12%, 63%)");
    clicked = this.innerText;
    $(".rating-"+clicked+" button").css("background-color","hsl(25, 97%, 53%)").css("color","white");
    $(".submit-button").click(function(){
        $("#rating-component").hide().css("visibility", "hidden");
    })
    $(".feedback").html(`Thank You For Rating Us ${clicked} out of 5`);
});

