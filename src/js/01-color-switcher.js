const refs = {
    section: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
  };
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  let timerId = null;
  
  refs.startBtn.addEventListener('click', startBodyColor);
  
  function startBodyColor() {
    timerId = setInterval(() => {
      refs.section.style.backgroundColor = getRandomHexColor();
    }, 1000);
  
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled', false);
  }
  
  refs.stopBtn.addEventListener('click', stopBodyColor);
  
  function stopBodyColor() {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled', false);
    refs.stopBtn.setAttribute('disabled', true);
  }
  
  refs.section.style.textAlign = 'center';
  refs.startBtn.style.padding = '15px';
  refs.stopBtn.style.padding = '15px';
  
