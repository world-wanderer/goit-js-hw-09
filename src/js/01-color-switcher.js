function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let intervalId = null;

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

btnStart.addEventListener('click', onChangeColor);
btnStop.addEventListener('click', onStopedColor);
btnStop.disabled = true;

function onChangeColor() {
  if (!intervalId) {
    btnStart.disabled = true;
    btnStop.disabled = false;

    intervalId = setInterval(() => {
      let color = getRandomHexColor();
      document.body.style.backgroundColor = color;
    }, 1000);
  }
}

function onStopedColor() {
  intervalId = clearInterval(intervalId);
  btnStart.disabled = false;
  btnStop.disabled = true;
}
