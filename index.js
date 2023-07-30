var clicked;
var flag =false;
var clickedP;

$(".rating-elements li").click(function(){
    console.log(this.innerHTML);
});

$(".button").click(function(){
    console.log($("textarea#feedback").val());
})