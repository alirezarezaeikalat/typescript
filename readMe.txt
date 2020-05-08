1. We need compiler for compiling the typescript to js:
        npm install -g typescript

2. typescript is very similar to js in syntax, for example you can use
    console, query slectors and ..., but you have to compile it to the js:

        tsc sandbox.ts sandbox.js -w (-w is for watching)

3. When you declare a varibale in typescript you can't change its type
    after that, typescript is static type. (number, boolean, string)

4. We can also give the type of the function arguments: 

    const circ = (diameter: number) => {
        return diameter * Math.PI;
    }