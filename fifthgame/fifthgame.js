let numbersBlack = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let numbersRed = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
let prototypeNumbersBlack = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
let black = false;
let red = false;
let userNumbersBlack = [];
let userNumbersRed = [];
let countBlack = 0;


fifthgame();

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function fifthgame(){
  shuffle(numbersBlack);
  shuffle(numbersRed);

  for(let i = 0; i < 49; i++){
    let button = document.createElement("button");
    button.setAttribute("id", i);
    button.setAttribute("class", "button");
    $(".grid-container").append(button);
  }
  let count = 0;
  let countRed = 0;
  let countBlack = 0;
  while(count < 49){
    if(count % 2 === 0){
      $("#"+count).text(numbersBlack[countBlack]);
      $("#"+count).css("color", "black");
      countBlack++;
      count++;
    }
    else{
      $("#"+count).text(numbersRed[countRed]);
      $("#"+count).css("color", "red");
      countRed++;
      count++;
    }
}
}

$(".button").on("click", function game(){
  userNumbersBlack.push($(this).text());
  if($(this).css("color") === 'rgb(0, 0, 0)' && userNumbersBlack[countBlack] === prototypeNumbersBlack[countBlack]){
    let sound = new Audio("sound/correct.mp3")
    sound.play();
    checkForWin();
    countBlack++;
  }
  else{
    let sound = new Audio("sound/wrong.mp3")
    sound.play();
    userNumbersBlack.pop();
    setTimeout(function(){
    alert("Wrong number! Right number is " + prototypeNumbersBlack[countBlack]);
    },10);
  }
});

function checkForWin(){
  if(userNumbersBlack.length === prototypeNumbersBlack.length){
    alert("You win!");
    location.reload();
  }
}


