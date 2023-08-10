let numbers = [];


function rotateImages() {
  if (numbers.length === 8) {
    numbers = [];
    return rotateImages();
  }

  let a;
  do {
    a = Math.floor(Math.random() * 8);
  } while (numbers.includes(a) || countOccurrences(numbers, a) > 25);

  numbers.push(a);
  return a;
}


function countOccurrences(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}


function createRings(){
  for(let i = 0; i < 200; i++){
    let landolt = document.createElement("img")
    let div = document.createElement("div")
    let random = rotateImages();
    landolt.src = "images/" + random * 45 + ".svg";
    div.setAttribute("class", "ring")
    if(random === 0 || random === 7){
      // $(landolt).addClass("bigger")
      $(div).addClass("win")
    }
    else{
      $(div).addClass("lose")
    }
    $(".container").append(div)
    div.append(landolt);
  }
}
createRings();

setTimeout(function(){
$(".ring").on("click", function(){
  let crossOut = document.createElement("img")
  let parent = $(this)
  if(parent.find(".crossOut").length === 0){
    crossOut.src = "images/png/crossOut.png"
    crossOut.setAttribute("class", "crossOut")
    parent.append(crossOut);
  }
  else{
    $(this).find('.crossOut').remove();
  }
}
)},10);



$(document).keypress(function (press) {
  if(press.key === " "){
   finish();
  }
});

function finish(){
  let errors = $(".lose").find(".crossOut").length;
  let clicked = $(".win").find(".crossOut").length;
  let left = 50 - clicked;
  console.log("left: " + left)
  console.log("clicked: " + clicked)
  console.log("errors: " + errors)
  alert("left: " + left + "\nclicked: " + clicked + "\nerrors: " + errors)
  location.reload();
}

