var newButtonCombo = [];

var colourFlow = ["green", "red", "yellow", "blue" ];

var newPattern = [];

var level = 0;

var started = false;

$(document).keydown(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    newFlowPattern();
    started = true;
  }
});


$(".btn").click(function(){

  var buttonInnerHTML = $(this).attr("id");
  newButtonCombo.push(buttonInnerHTML);

  makeSound(buttonInnerHTML);
  buttonPress(buttonInnerHTML);


checkAnswer(newButtonCombo.length-1);

});


function checkAnswer(currentLevel) {
  if (newPattern[currentLevel] === newButtonCombo[currentLevel]) {

        if (newButtonCombo.length === newPattern.length){

          setTimeout(newFlowPattern, 1000);

}
  }else{
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");}, 200);
    level = 0;
    newPattern = [];
    newButtonCombo = [];
    $("#level-title").text("Game Over! Press A Key to Start");
    $("h3.counter").text(00);
    started = false;
  }
  }

  function newFlowPattern(){
    newButtonCombo = [];
    level++;
    $("#level-title").text("Level " + level);
    $("h3.counter").text(level);

    var randomNumber = (Math.floor(Math.random()*4));
    var btnSelect = colourFlow[randomNumber];
    newPattern.push(btnSelect);

    $("#"+btnSelect).fadeOut(100).fadeIn(100);
    makeSound(btnSelect);
  }


  function makeSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }


function buttonPress(key){
  $("."+key).addClass("pressed");
    setTimeout(function(){
      $("."+key).removeClass("pressed");}, 200);

}
