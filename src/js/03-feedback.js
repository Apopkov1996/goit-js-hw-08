import throttle from "lodash.throttle";

const refs = {
  inputNameEl: document.querySelector('input[name="email"]'),
  inputMessageEl: document.querySelector('textarea[name="message"]'),
  formEl: document.querySelector('.feedback-form'),
};

refs.inputNameEl.addEventListener('input', throttle(onDataInput, 500))
refs.inputMessageEl.addEventListener('input', throttle(onDataInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit)

const key = "feedback-form-state";
let data = {};

function onDataInput(e) {
  const name = e.target.name;
  const value = e.target.value;
  data[name] = value;
  localStorage.setItem(key, JSON.stringify(data));
}

function onFormSubmit (e) {
  e.preventDefault();
  console.log(data);
  e.target.reset();
  localStorage.removeItem(key);
  data = {};
};


function restorPage() {
  data = JSON.parse(localStorage.getItem(key)) || {};
  console.log(data);
  
  refs.inputNameEl.value = data.email || '';
  refs.inputMessageEl.value = data.message || '';
}
restorPage();





