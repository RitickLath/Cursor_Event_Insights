const pos = document.querySelector(".pos"); // div selection
const xpos = document.querySelector(".x-pos"); // p element of x value
const ypos = document.querySelector(".y-pos"); // p element of y value
const pressed = document.querySelector(".pressed"); // p element of key name
const timerDisplay = document.querySelector(".timer");

let startTime;
let interval;
let currentPosition;

document.addEventListener("mousemove", function (event) {
  pos.style.left = `${event.clientX}px`; // updating the x position of div
  pos.style.top = `${event.clientY}px`; // updating the y position of div

  xpos.textContent = `x-position : ${event.clientX}px`; // updating the cursor's x-postion in div text
  ypos.textContent = `y-position : ${event.clientY}px`; // updating the cursor's y-position in div text
  pressed.textContent = `key pressed: `; // updating the key pressed in div with the name of key which is pressed

  if (!currentPosition) {
    currentPosition = { xp: event.clientX, yp: event.clientY }; // updating current position as an object containing xp and yp
    startTime = new Date().getTime(); // starting time
    interval = setInterval(updateTime, 100); // calling update time in every 100ms
  } else if (
    currentPosition.xp !== event.clientX || // if x position of curser is changed
    currentPosition.yp !== event.clientY // if y position of cursor is changed
  ) {
    // means cursor is moved
    currentPosition = null; // so that again if condition is executed
  }
});

function updateTime() {
  let Nowtime = new Date().getTime();
  const newTime = (Nowtime - startTime) / 1000;
  timerDisplay.textContent = `Timer: ${newTime}`;
}

document.addEventListener("keydown", function (event) {
  //keydown eventlistener on document when any key is pressed
  pressed.textContent = `key pressed: ${event.key}`; // changing the key name into p when any key is pressed
});

document.addEventListener("click", function () {
  pressed.textContent = `key pressed: mouse clicked`;
});
