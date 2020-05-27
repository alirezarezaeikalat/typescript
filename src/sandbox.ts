import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

// adding li to ul
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);


const form = document.querySelector('form') as HTMLFormElement;
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event): void => {
    e.preventDefault();
    
    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
    console.log(doc);
})