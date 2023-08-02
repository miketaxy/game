
let circle = document.createElement("img");
let square = document.createElement("img");
let triangle = document.createElement("img");

square.src="../images/square.jpg"
circle.src="../images/circle.jpg"
triangle.src="../images/triangle.jpg"

let allFigures = [square,triangle,circle];
let timersStash;
let figure;
let fail = 0;
let games = 0;
let item;
let timer;
let start = false;
let create = false;
let sumResult;
let bestResult = 0;
let stop = false;
let a;
let bsquare = false;
let timeNext;
//start
$(document).keypress(function (press) {
  if(press.key === " " && !start){
  stop = false;
  sumResult = 0;
  bsquare = false;
  timersStash = [];
  setTimeout(()=>{start = true;
    createFigure();
    },10);
  $(".game-text").hide()
  
}
});

function next(){
  timeNext = setTimeout(()=>{
    if(!bsquare && create && start){
      timer = 0;
      item.remove();
      createFigure();
    }
    else{
      stopF();
    }
  },500);

}
//Creating figures
function createFigure(){
  if(start){
  let randomItem = Math.floor(Math.random() * 3);
  let time = (Math.random() * 2 + 1)*1500;
  item = allFigures[randomItem];
   a = setTimeout(()=>{
    if(!stop){
   figure = $(".game").append(item);
   timer = Date.now();
   create = true;
    if(randomItem === 0){
      bsquare = true;
    }
    next();
  }}, time);
}

}
//Deleting figures
  $(document).keypress((press)=>{
    if(press.key == " " && create && bsquare){
      clearTimeout(timeNext);
      item.remove();
      calculating();
      setTimeout(()=>{bsquare = false;},10);
      timer = Date.now() - timer;
      console.log(timer);
      timersStash.push(timer);
      setTimeout(()=>{create = false;}, 10)
   
    }
  })


//how much games left
  function calculating(){
    if(bsquare){
      games++;
    }
    if(games===3){
      start = false;
      games = 0;
      bsquare = false;
      median();
      $(".bestResult").text(bestResult);
      $(".lastResult").text(sumResult);
      $(".game-text").show();
    }
    else{
      createFigure();
    }
  }
  function stopF(){
    item.remove();
    start = false;
    stop = true;
    bsquare = false;
    clearTimeout(a);
    console.log("stop!")
    games = 0;
    $(".game-text").text("You Lost").show();
    setTimeout(()=>{$(".game-text").text("Press Space to start the game");}, 1000)
  }
//stopping game
$(document).keypress((press)=>{
  if(press.key === " " && start && (!create || !bsquare)){
    stopF();
  }
})
//calculting average number
  function median(){
  for(let i = 0; i < timersStash.length; i++){
    sumResult = sumResult + timersStash[i];
  }
  sumResult = Math.floor(sumResult / timersStash.length);
  if(bestResult === 0 || bestResult > sumResult){
    bestResult = sumResult;
  }
}