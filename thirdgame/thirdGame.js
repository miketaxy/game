let start = false;
let animate;
let restartFromLost;
let item = $(".space")
let gameCounter = $(".gamesCounter")
let bestResult = 0;
let time;
let returnBackTimeOut;
let games = 0;
let resultStash = [];
let sumResult = 0;
let stopAnimate = false;



//TODO: fix bug
function restart(){
restartFromLost = setTimeout(()=>{
  games = 0;
  item.text("You lost! Try again")
  item.show();
  returnBack();
},2100)
}

function HideMenu(){
  item.hide();
  gameCounter.hide().text("games: " + games);
}
//start funct
function startF(){
  games++;
  clearTimeout(returnBackTimeOut)
  time = 0;
  HideMenu();
  time = Date.now();
  setTimeout(()=>{start = true;},100)
  animate = $(".triangle-up").animate({
    marginLeft: "90vw"
  }
  ,2000);
}


//start
$(document).keypress(function(press) {
  if(!start && press.key === " " && !stopAnimate){
  startF();
  restart();
  }
})
    
//stop
$(document).keypress(function (press) {
  if(press.key === " " && start && !stopAnimate){
    stopAnimation();
  }
});

//stopping animation
function stopAnimation(){
    time = (Date.now() - time) - 1469;
    stopAnimate = true;
    clearTimeout(restartFromLost)
    animate.stop();
    item.show().text("Your result: " + time + " ms");
    gameCounter.show();
    moduleF();
    resultStash.push(time)
    if(games === 3){
      calculating();
      $(".best-result").text(bestResult);
      $(".last-result").text(sumResult);
      games = 0;
      sumResult = 0;
      resultStash = [];
      returnBack();
    }
    else{
      returnBack();
    }
  }


function moduleF(){
  if(time < 0){
    time = time * -1;
  }
}

//returning back triangle
function returnBack(){
  stopAnimate = false;
  returnBackTimeOut = setTimeout(()=>{
    item.text("Press SPACE to continue")
    start = false;
    $(".triangle-up").css("margin-left", "0");
  }, 2000)
}

function calculating(){
  for(let i = 0; i < resultStash.length; i++){
    sumResult = sumResult + resultStash[i];
  }
  sumResult = Math.floor(sumResult / resultStash.length);
  if(bestResult === 0 || bestResult > sumResult){
    bestResult = sumResult;
  } 
}