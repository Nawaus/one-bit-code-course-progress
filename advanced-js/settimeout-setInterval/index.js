console.log("Program initialized");

function setTime(time) {
  return time;
}

const timeoutId = setTimeout(() => {
  console.log("3 seconds has been passed since the program started");
  // console.log(timeoutId);
  setTime(1000);
}, 1000 * 3);

let seconds = 0;

const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`3 seconds ${seconds}`);
  if (seconds > 10) {
    clearInterval(intervalId);
    console.log("Time is up!...");
  }
}, 1000 * 3);
