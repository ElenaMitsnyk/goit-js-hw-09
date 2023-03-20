import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  containerEl: document.querySelector('body'),
  textInputEl: document.querySelector('#datetime-picker'),
  buttonStartEl: document.querySelector('[data-start]'),
  valueDaysEl: document.querySelector('[data-days]'),
  valueHoursEl: document.querySelector('[data-hours]'),
  valueMinutesEl: document.querySelector('[data-minutes]'),
  valueSecondsEl: document.querySelector('[data-seconds]'),
};

refs.buttonStartEl.disabled = true;

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // перевірка на вибір майбутньої дати
    if (selectedDates[0] < new Date()) {
      Notiflix.Report.failure('Please choose a date in the future');
      refs.buttonStartEl.disabled = true;
    } else {
      // якщо обрана майбутня дата, то кнопка СТАРТ вмикається
      refs.buttonStartEl.disabled = false;
      Notiflix.Report.success('Congratulation!', 'Click on start!', 'Okay');
      refs.buttonStartEl.addEventListener('click', () => {
        enterTimeData(selectedDates[0]);
      });
    }
  },
};
// виклик функції для кросбраузерного вибору кінцевої дати та часу
flatpickr(refs.textInputEl, options);

//!Приймає число та приводить до строки, додаючи в початок 0, якщо число менше 2-х знаків
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function enterTimeData(selectedDate) {
  timerId = setInterval(() => {
    const deltaTime = selectedDate - new Date();

    refs.buttonStartEl.disabled = true;
    if (deltaTime > 0) {
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      refs.valueDaysEl.textContent = days;
      refs.valueHoursEl.textContent = hours;
      refs.valueMinutesEl.textContent = minutes;
      refs.valueSecondsEl.textContent = seconds;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
}

