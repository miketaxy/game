let numbersBlack = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let numbersRed = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
let prototypeNumbersBlack = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
let prototypeNumbersRed = ['24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'];
let red = false;
let userNumbersBlack = [];
let userNumbersRed = [];
let allUserNumbers = [];
let countBlack = 0;
let countRed = 0;

sixthgame();

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}


function sixthgame(){
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
  if(!red){
    userNumbersBlack.push($(this).text());
    allUserNumbers.push($(this).text());
  }
  else{
    userNumbersRed.push($(this).text());
    allUserNumbers.push($(this).text());
  }
  if($(this).css("color") === 'rgb(0, 0, 0)' && userNumbersBlack[countBlack] === prototypeNumbersBlack[countBlack] && !red){
    let sound = new Audio("sound/correct.mp3")
    sound.play();
    checkForWin();
    countBlack++;
    red = true;
  }
  else if($(this).css("color") === 'rgb(255, 0, 0)' && userNumbersRed[countRed] === prototypeNumbersRed[countRed] && red){
    let sound = new Audio("sound/correct.mp3")
    sound.play();
    checkForWin();
    countRed++;
    red = false;
  }
  else{
    let sound = new Audio("sound/wrong.mp3")
    sound.play();
   
    setTimeout(function(){
      if(!red){
        alert("Wrong number! Right number is " + prototypeNumbersBlack[countBlack] + " black");
        userNumbersBlack.pop();
        allUserNumbers.pop();
      }
      else{
        alert("Wrong number! Right number is " + prototypeNumbersRed[countRed] + " red");
        userNumbersRed.pop();
        allUserNumbers.pop();
      }
    },10);
  }
});

function checkForWin(){
  if(allUserNumbers.length === 49){
    alert("You win!");
    location.reload();
  }
}


