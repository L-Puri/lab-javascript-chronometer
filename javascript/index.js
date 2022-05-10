const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  minDecElement.innerHTML = 'minDec';
  return ("0" + minDec).slice(-2)
}

function printMinutes() {
  // ... your code goes here
  // minDecElement.innerHTML = this.computeTwoDigitNumber(this.minDec());

}

function printSeconds() {
  // ... your code goes here
  secDecElement = this.computeTwoDigitNumber(this.getSeconds());
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
  btnLeftElement.innerHTML = 'STOP';
  btnRightElement.className = 'btn STOP';
}

function setSplitBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'SPLIT';
  btnRightElement.className = 'btn split';
}

function setStartBtn() {
  btnLeftElement.innerHTML = 'START';
  btnLeftElement.className = 'btn start';
}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.innerHTML = 'RESET';
  btnRightElement.className = 'btn reset';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if(btnLeftElement.innerHTML === 'START') {
    setStopBtn();
    setSplitBtn();
  }else {
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
