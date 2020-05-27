import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
// adding li to ul
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const form = document.querySelector('form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
