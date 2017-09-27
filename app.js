
var answers = [
[true, false, false, false],
[true, false, false, false],
[false, false, true, false],
];

var count = 45;
var counter=setInterval(counter, 1000); //1000 will  run it every 1 second
var rightAnswer = 0;
var wrongAnswer = 0;

function counter() {
  count=count-1;
  if (count <= 0)
  {
     alert("Game Over!");
  }

  //reset game
  $("#counter").html(count);
  reset();
}

//reset function
function reset() {
  if (count <= 0) {
    count = 45
  }
  $("#counter").html(count);

}

function checkAnswer(row, column) {
  console.log(
  answers[row-1][column-1]);
}


