import { HasFormatter } from '../interfaces/HasFormatter.js';
//classes
export class Payment implements HasFormatter {
    readonly recipient: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number){
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    format():string {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}
