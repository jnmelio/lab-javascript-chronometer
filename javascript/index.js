const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  this.printMinutes()
  this.printSeconds()

}

function printMinutes() {
  // ... your code goes here
  minDec.innerText = Math.floor(chronometer.currentTime / 600)
  minUni.innerText = Math.floor((chronometer.currentTime / 60) % 10)
}

function printSeconds() {
  // ... your code goes here
  secDec.innerText = Math.floor((chronometer.currentTime / 10) % 6 )
  secUni.innerText = (chronometer.currentTime % 10) 
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
  
}

function setResetBtn() {
  // ... your code goes here
  // chronometer.resetClick()

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeft.innerText == "START"){
    btnLeft.innerText = "STOP"
    btnLeft.classList = "btn stop"
    chronometer.startClick(printTime)
    btnRight.innerText = "SPLIT"
    btnRight.classList = "btn split"
  } else {
    btnLeft.innerText = "START"
    btnLeft.classList = "btn start"
    chronometer.stopClick()
    btnRight.innerText = "RESET"
    btnRight.classList = "btn reset"
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
      if(btnRight.innerText == "SPLIT") {
      let li = document.createElement("li")
      splits.appendChild(li)  
      li.innerHTML = chronometer.splitClick()
    } else if (btnRight.innerText == "RESET"){
      chronometer.resetClick()
      splits.innerHTML = ''
    }
})
