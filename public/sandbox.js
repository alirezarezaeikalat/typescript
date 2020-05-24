import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('Mario', 'work on mario website', 250);
const form = document.querySelector('form');
// inputs
const type = document.querySelector('#type');
const toForm = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toForm.value, details.value, amount.valueAsNumber);
});
