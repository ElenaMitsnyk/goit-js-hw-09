const refs = {
    sectionEl: document.querySelector('body'),
    startBtnEl: document.querySelector('[data-start]'),
    stopBtnEl: document.querySelector('[data-stop]'),
  };
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  let timerId = null;
  
  refs.startBtnEl.addEventListener('click', startBodyColor);
  
  function startBodyColor() {
    timerId = setInterval(() => {
      let colorBody = getRandomHexColor();
      refs.sectionEl.style.backgroundColor = colorBody;
    }, 1000);
  
    refs.startBtnEl.setAttribute('disabled', true);
    refs.stopBtnEl.removeAttribute('disabled', false);
  }
  
  refs.stopBtnEl.addEventListener('click', stopBodyColor);
  
  function stopBodyColor() {
    clearInterval(timerId);
    refs.startBtnEl.removeAttribute('disabled', false);
    refs.stopBtnEl.setAttribute('disabled', true);
  }
  
  refs.sectionEl.style.textAlign = 'center';
  refs.startBtnEl.style.padding = '15px';
  refs.stopBtnEl.style.padding = '15px';
  







  // const startBtn = document.querySelector(".data-start");
// const stopBtn = document.querySelector(".data-stop");


// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });


// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });