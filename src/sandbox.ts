type stringWithNum = string | number;
let character = 'mario';
let age = 20;
let isBlackBelt = false;


const cric = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(cric(40));

const add = (a: stringWithNum, b: number, c: number | string = 10) => {
    console.log(a);
    console.log(c);
}