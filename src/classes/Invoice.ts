import { HasFormatter } from '../interfaces/HasFormatter.js';
//classes
export class Invoice implements HasFormatter {
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format():string {
        return `${this.client} owes ${this.amount}`;
    }
}
