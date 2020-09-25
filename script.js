const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let clicks = 0;
let turn = 1;
let lastClick = 0

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  if (event.target.className === 'red' && turn === 1){
    event.target.className = "redC";
    clicks ++;
    turn = 2;
    lastClick = 'red';
    document.querySelector('#clicks').innerText = clicks;
    }
  if (event.target.className === 'red' && (turn === 2 && lastClick !== 'red')){
    event.target.className = 'redC';
    setTimeout(function(){
      let oopsR = document.getElementsByClassName('redC');
      for (let i = 0; i < oopsR.length; i++){
        oopsR[i].className = 'red';
      }
      let oopsB = document.getElementsByClassName('blueC');
      for (let i = 0; i < oopsB.length; i++){
        oopsB[i].className = 'blue';
      }
      let oopsG = document.getElementsByClassName('greenC');
      for (let i = 0; i < oopsG.length; i++){
        oopsG[i].className = 'green';
      }
      let oopsO = document.getElementsByClassName('orangeC');
      for (let i = 0; i < oopsO.length; i++){
        oopsO[i].className = 'orange';
      }
      let oopsP = document.getElementsByClassName('purpleC');
      for (let i = 0; i < oopsP.length; i++){
        oopsP[i].className = 'purple';
      }
      clicks ++
      turn = 1
      document.querySelector('#clicks').innerText = clicks;}, 1000);
  }
  if (event.target.className === 'red' && (turn === 2 && lastClick === 'red')){
    event.target.className = "redD";
    let yay = document.getElementsByClassName('redC');
    for (let i = 0; i < yay.length; i++){
      yay[i].className = 'redD';
    }
    clicks ++;
    turn = 1;
    document.querySelector('#clicks').innerText = clicks;
  }
  if (event.target.className === 'blue' && turn === 1){
    event.target.className = "blueC";
    clicks ++;
    turn = 2;
    lastClick = 'blue';
    document.querySelector('#clicks').innerText = clicks;
    }
  if (event.target.className === 'blue' && (turn === 2 && lastClick !== 'blue')){
    event.target.className = "blueC";
    setTimeout(function(){
      let oopsR = document.getElementsByClassName('redC');
      for (let i = 0; i < oopsR.length; i++){
        oopsR[i].className = 'red';
      }
      let oopsB = document.getElementsByClassName('blueC');
      for (let i = 0; i < oopsB.length; i++){
        oopsB[i].className = 'blue';
      }
      let oopsG = document.getElementsByClassName('greenC');
      for (let i = 0; i < oopsG.length; i++){
        oopsG[i].className = 'green';
      }
      let oopsO = document.getElementsByClassName('orangeC');
      for (let i = 0; i < oopsO.length; i++){
        oopsO[i].className = 'orange';
      }
      let oopsP = document.getElementsByClassName('purpleC');
      for (let i = 0; i < oopsP.length; i++){
        oopsP[i].className = 'purple';
      }
      clicks ++
      turn = 1
      document.querySelector('#clicks').innerText = clicks;}, 1000);
  }
  if (event.target.className === 'blue' && (turn === 2 && lastClick === 'blue')){
    event.target.className = "blueD";
    let yay = document.getElementsByClassName('blueC');
    for (let i = 0; i < yay.length; i++){
      yay[i].className = 'blueD';
    }
    clicks ++;
    turn = 1;
    document.querySelector('#clicks').innerText = clicks;
  }
  if (event.target.className === 'green' && turn === 1){
    event.target.className = "greenC";
    clicks ++;
    turn = 2;
    lastClick = 'green';
    document.querySelector('#clicks').innerText = clicks;
    }
  if (event.target.className === 'green' && (turn === 2 && lastClick !== 'green')){
    event.target.className = "greenC";
    setTimeout(function(){
      let oopsR = document.getElementsByClassName('redC');
      for (let i = 0; i < oopsR.length; i++){
        oopsR[i].className = 'red';
      }
      let oopsB = document.getElementsByClassName('blueC');
      for (let i = 0; i < oopsB.length; i++){
        oopsB[i].className = 'blue';
      }
      let oopsG = document.getElementsByClassName('greenC');
      for (let i = 0; i < oopsG.length; i++){
        oopsG[i].className = 'green';
      }
      let oopsO = document.getElementsByClassName('orangeC');
      for (let i = 0; i < oopsO.length; i++){
        oopsO[i].className = 'orange';
      }
      let oopsP = document.getElementsByClassName('purpleC');
      for (let i = 0; i < oopsP.length; i++){
        oopsP[i].className = 'purple';
      }
      clicks ++
      turn = 1
      document.querySelector('#clicks').innerText = clicks;}, 1000);
  }
  if (event.target.className === 'green' && (turn === 2 && lastClick === 'green')){
    event.target.className = "greenD";
    let yay = document.getElementsByClassName('greenC');
    for (let i = 0; i < yay.length; i++){
      yay[i].className = 'greenD';
    }
    clicks ++;
    turn = 1;
    document.querySelector('#clicks').innerText = clicks;
  }
  if (event.target.className === 'orange' && turn === 1){
    event.target.className = "orangeC";
    clicks ++;
    turn = 2;
    lastClick = 'orange';
    document.querySelector('#clicks').innerText = clicks;
    }
  if (event.target.className === 'orange' && (turn === 2 && lastClick !== 'orange')){
    event.target.className = "orangeC";
    setTimeout(function(){
      let oopsR = document.getElementsByClassName('redC');
      for (let i = 0; i < oopsR.length; i++){
        oopsR[i].className = 'red';
      }
      let oopsB = document.getElementsByClassName('blueC');
      for (let i = 0; i < oopsB.length; i++){
        oopsB[i].className = 'blue';
      }
      let oopsG = document.getElementsByClassName('greenC');
      for (let i = 0; i < oopsG.length; i++){
        oopsG[i].className = 'green';
      }
      let oopsO = document.getElementsByClassName('orangeC');
      for (let i = 0; i < oopsO.length; i++){
        oopsO[i].className = 'orange';
      }
      let oopsP = document.getElementsByClassName('purpleC');
      for (let i = 0; i < oopsP.length; i++){
        oopsP[i].className = 'purple';
      }
      clicks ++
      turn = 1
      document.querySelector('#clicks').innerText = clicks;}, 1000);
  }
  if (event.target.className === 'orange' && (turn === 2 && lastClick === 'orange')){
    event.target.className = "orangeD";
    let yay = document.getElementsByClassName('orangeC');
    for (let i = 0; i < yay.length; i++){
      yay[i].className = 'orangeD';
    }
    clicks ++;
    turn = 1;
    document.querySelector('#clicks').innerText = clicks;
  }
  if (event.target.className === 'purple' && turn === 1){
    event.target.className = "purpleC";
    clicks ++;
    turn = 2;
    lastClick = 'purple';
    document.querySelector('#clicks').innerText = clicks;
    }
  if (event.target.className === 'purple' && (turn === 2 && lastClick !== 'purple')){
    event.target.className = "purpleC";
    setTimeout(function(){
      let oopsR = document.getElementsByClassName('redC');
      for (let i = 0; i < oopsR.length; i++){
        oopsR[i].className = 'red';
      }
      let oopsB = document.getElementsByClassName('blueC');
      for (let i = 0; i < oopsB.length; i++){
        oopsB[i].className = 'blue';
      }
      let oopsG = document.getElementsByClassName('greenC');
      for (let i = 0; i < oopsG.length; i++){
        oopsG[i].className = 'green';
      }
      let oopsO = document.getElementsByClassName('orangeC');
      for (let i = 0; i < oopsO.length; i++){
        oopsO[i].className = 'orange';
      }
      let oopsP = document.getElementsByClassName('purpleC');
      for (let i = 0; i < oopsP.length; i++){
        oopsP[i].className = 'purple';
      }
      clicks ++
      turn = 1
      document.querySelector('#clicks').innerText = clicks;}, 1000);
  }
  if (event.target.className === 'purple' && (turn === 2 && lastClick === 'purple')){
    event.target.className = "purpleD";
    let yay = document.getElementsByClassName('purpleC');
    for (let i = 0; i < yay.length; i++){
      yay[i].className = 'purpleD';
    }
    clicks ++;
    turn = 1;
    document.querySelector('#clicks').innerText = clicks;
  }
}

// when the DOM loads
document.querySelector('#start').addEventListener('click', function(){
  document.querySelector('#game').innerHTML = "";
  let clicks = 0;
  document.querySelector('#clicks').innerText = clicks;
  document.querySelector('#start').innerText = "Start Again";
  createDivsForColors(shuffledColors);
})
  
