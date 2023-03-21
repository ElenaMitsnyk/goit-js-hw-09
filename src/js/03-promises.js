import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  firstDelayEl: document.querySelector('input[name=delay]'),
  delayStepEl: document.querySelector('input[name=step]'),
  amountEl: document.querySelector('input[name=amount]'),
};

refs.formEl.addEventListener('submit', submitForm);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

function submitForm(event) {
  event.preventDefault();

  let start = Number(refs.firstDelayEl.value);
  let step = Number(refs.delayStepEl.value);
  let amount = Number(refs.amountEl.value);

  for (let i = 1; i <= amount; i += 1) {
    start += step;

    createPromise(i, start)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

