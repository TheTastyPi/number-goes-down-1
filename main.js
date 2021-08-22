var youWin = false;
var numbers = [10,10,10,10,10,10,10,10];
var downPower = 1;
var autoDown = 0;
function numberGoesDown() {
  numbers[0] -= downPower;
  updateNumbers();
}
function numberGoesDowner() {
  downPower++;
  if (downPower > 10) downPower = 10;
  updateNumbers();
}
function numberGoesDownAuto() {
  autoDown++;
  if (autoDown > 10) autoDown = 10;
  updateNumbers();
}
function updateNumbers() {
  for (let i in numbers) {
    if (numbers[i] < 0) {
      if (i == 7) {
        youWin = true;
      } else {
        numbers[i] = 10-numbers[i]%10;
        numbers[i+1] += Math.floor(numbers[i]/10);
      }
    }
    document.getElementById("number"+i).innerText = numbers[i].toFixed();
  }
  document.getElementById("downPower").innerText = downPower.toFixed(2);
  document.getElementById("autoDown").innerText = autoDown.toFixed(2);
}
var lastFrame = 0;
function nextFrame(timeStamp) {
  let dt = timeStamp - lastFrame;
  lastFrame = timeStamp;
  numbers[0] -= autoDown*dt/1000;
  if (downPower > 1) {
    downPower -= dt/1000;
  } else downPower = 1;
  if (autoDown > 0) {
    autoDown -= dt/100;
  } else autoDown = 0;
  updateNumbers();
  if (youWin) document.write("You're winner!")
  window.requestAnimationFrame(nextFrame);
}
window.requestAnimationFrame(nextFrame);
