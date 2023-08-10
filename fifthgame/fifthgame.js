let numbersBlack = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
let numbersRed = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
let prototypeNumbersBlack = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25'];
// let prototypeNumbersRed = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
let black = false;
let red = false;
let userNumbersBlack = [];
let userNumbersRed = [];
let countBlack = 0;


fifthgame();
//----------------------------------------------------------AI-GENERATED CODE----------------------------------------------------------//
// function checkAndPush(num, targetArray) {
//   if ((targetArray === numbersBlack && black) || (targetArray === numbersRed && red)) {
//     return false;
//   } else {
//     targetArray.push(num);
//     return true;
//   }
// }

// function generateNumbers(targetArray, count, maxNumber) {
//   while (targetArray.length < count) {
//     let num = Math.floor(Math.random() * maxNumber) + 1;
//     checkAndPush(num, targetArray);
//   }
// }

// function oneToTwentyFive() {
//   black = true;
//   generateNumbers(numbersBlack, 25, 24);
//   black = false;
// }

// function oneToTwentyFour() {
//   red = true;
//   generateNumbers(numbersRed, 24, 23);
//   red = false;
// }
//----------------------------------------------------------AI-GENERATED CODE----------------------------------------------------------//


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
//----------------------------------------------------------USELESS CODE----------------------------------------------------------//
// function oneToTwentyFive(){
//   black = true;
//   while(numbersBlack.length < 25){
//   while(!check()){
//     let num = Math.floor(Math.random() * 24) + 1;
//     check(num);
//   }
// }
//   black = false;
// }
// function oneToTwentyFour() {
//   red = true;
//   while (numbersRed.length < 24) {
//     let num;
//     do {
//       num = Math.floor(Math.random() * 24) + 1;
//     } while (!check(num));
//   }
//   red = false;
// }


// function oneToTwentyFour(){
//   red = true;
//   while(numbersRed.length < 24){
//   while(!check()){
//     let num = Math.floor(Math.random() * 23) + 1;
//     check(num);
//   }
// }
//   red = false;
// }

// function check(num){
//   if((black && numbersBlack.includes(num)) || (numbersRed.includes(num) && red)){
//     return false;
//   }else{
//     if(black){
//       numbersBlack.push(num);
//     }else{
//       numbersRed.push(num);
//     }
//     return true;
//   }
// }
//----------------------------------------------------------USELESS CODE----------------------------------------------------------//

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


