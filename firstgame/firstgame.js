
let circle = document.createElement("img");
let square = document.createElement("img");
let triangle = document.createElement("img");

square.src="images/square.jpg"
circle.src="images/circle.jpg"
triangle.src="images/triangle.jpg"

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
//start
$(document).keypress(function (press) {
  if(press.key === " " && !start){
  stop = false;
  sumResult = 0;
  timersStash = [];
  setTimeout(()=>{start = true;
    createFigure();},10);
  $(".game-text").hide()
  
}
});
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
  }}, time);
}
}
//Deleting figures
  $(document).keypress((press)=>{
    if(press.key == " " && create){
      item.remove();
      timer = Date.now() - timer;
      timersStash.push(timer);
      setTimeout(()=>{create = false;}, 10)
      calculating();
    }
  })


//how much games left
  function calculating(){
    games++;
    if(games===10){
      start = false;
      games = 0;
      median();
      $(".bestResult").text(bestResult);
      $(".lastResult").text(sumResult);
      $(".game-text").show();
    }
    else{
      createFigure();
    }
  }
//stopping game
$(document).keypress((press)=>{
  if(press.key === " " && start && !create){
    start = false;
    stop = true;
    clearTimeout(a);
    console.log("stop!")
    games = 0;
    $(".game-text").text("You Lost").show();
    setTimeout(()=>{$(".game-text").text("Press Space to start the game");}, 1000)
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