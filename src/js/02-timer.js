import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();
    if (selectedDate < now) {
      Notiflix.Notify.failure(`Please choose a date in the future`);
    } else {
      const btnStart = document.querySelector('button[data-start]');
      btnStart.disabled = false;
    }
  },
};

const picker = flatpickr('#datetime-picker', options);

const btnStart = document.querySelector('button[data-start]');
const timer = document.querySelector('.timer');
const daysValue = timer.querySelector('span[data-days]');
const hoursValue = timer.querySelector('span[data-hours]');
const minutesValue = timer.querySelector('span[data-minutes]');
const secondsValue = timer.querySelector('span[data-seconds]');

let intervalId = null;
btnStart.addEventListener('click', () => {
  const now = new Date();
  const selectedDate = picker.selectedDates[0];
  const ms = selectedDate - now;
  if (ms <= 0) {
    return;
  }
  intervalId = setInterval(updateTimer, 1000);
});

function updateTimer() {
  const currentTime = new Date();
  const selectedDate = picker.selectedDates[0];
  const ms = selectedDate - currentTime;
  if (ms <= 0) {
    clearInterval(intervalId);
    return;
  }
  const { days, hours, minutes, seconds } = convertMs(ms);
  daysValue.textContent = addLeading(days);
  hoursValue.textContent = addLeading(hours);
  minutesValue.textContent = addLeading(minutes);
  secondsValue.textContent = addLeading(seconds);
}

function addLeading(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
