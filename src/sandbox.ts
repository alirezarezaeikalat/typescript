import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/payment.js';

//test
interface IsPerson {
    name: string;
    speak(a: string): void;

}

const invOne = new Invoice('Mario', 'work on mario website', 250);
const form = document.querySelector('form') as HTMLFormElement;
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toForm = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event): void => {
    e.preventDefault();
    console.log(
        type.value,
        toForm.value,
        details.value,
        amount.valueAsNumber
        );
})