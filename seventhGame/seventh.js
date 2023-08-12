let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let hoursWord = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten","eleven", "twelve"];
let minutes = [0, 15, 30, 45];
let newHour = [];
let hour = hours[Math.floor(Math.random() * hours.length)];
let minute = minutes[Math.floor(Math.random() * minutes.length)];
let winTime;

function createButtomHours() {
  for (let i = 1; i <= 12; i++) {
    let button = document.createElement("button");
    button.setAttribute("class", "btn hours-btn")
    button.innerHTML = i;
    $(".hours").append(button);
  }
}

function createButtomMinutes() {
  for (let i = 0; i <= 45; i += 15) {
    let button = document.createElement("button");
    button.innerHTML = i;
    button.setAttribute("class", "btn minutes-btn")
    $(".minutes").append(button);
  }
}

createButtomHours();
createButtomMinutes();

$(".hours-btn").click(function () {
  $(".hours-result").text($(this).text());
});
$(".minutes-btn").click(function () {
  if($(this).text() == 0){
    $(".minutes-result").text($(this).text() + '0');
  }else{
    $(".minutes-result").text($(this).text());
  }
});



function rotateClock(){
  let rotate = Math.floor(Math.random() * 12);
  $(".numbers").css("transform", "rotate(" + rotate * 30 + "deg)");
}


randomStart();

function randomStart(){
  let start = Math.floor(Math.random() * 12);
  for(let i = 0; i < hours.length; i++){
    let hour = i + start;
    if(hour > 11){
      for(let j = 0; j < hours.length - i; j++){
        hour = j;
        newHour.push(hours[hour]);
      }
      break;
    }
    newHour.push(hours[hour]);
  }
  time = selectHour();
  placeHour();
  let distance = Math.abs(0 - newHour.indexOf(1));
  Arrow(distance);
  hideNumbers();
}

function selectHour(){
  let hour = newHour[Math.floor(Math.random() * newHour.length)];
  let minute = minutes[Math.floor(Math.random() * minutes.length)];
  if(minute == 0){
    minute = '00';
  }
  winTime = [hour, minute];
}

function placeHour(){
  for(let i = 0; i < newHour.length; i++){
    $("." + hoursWord[i] + "-hour").text(newHour[i]);
  }
}


function Arrow(distance){
  $(".block-hour").css("transform", "rotate(" + (winTime[0]+distance) * 30 + "deg)");
  $(".block-minute").css("transform", "rotate(" + (winTime[1]+distance) * 30 + "deg)");
}

function hideNumbers(){
  let nonHideNumber = Math.floor(Math.random() * 12);
  let count = 0;
  while(count < 12){
    if(count == nonHideNumber){
      count++;
      continue;
    }
    $("." + hoursWord[count] + "-hour").text('');
    count++;
  }
}



$(document).keypress(function (press) { 
  if(press.key === " "){
    if($(".hours-result").text() == winTime[0] && $(".minutes-result").text() == winTime[1]){
      alert("You win");
      location.reload();
  }
}
});

