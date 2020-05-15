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

5. Arrays in typescript:

    if you declare your arrays with just one type, you can't change it, but if you
    declare the mixed array, you can change the element of the array.

    [ATTENTION] if you declare an array, you can't change it to other type, for example
    change the array to string

6. objects in typescript:
    a. each property in the object act as a variable, for example if person.age is a 
    Number, you can't change it to string.

    [ATTENTION] you can't change the type of the object, and you can't add or remove
     a property to the object.

7. We can make explicit type in typescript without give a value to it:

    let character: string;
    let age: number;
    let isLoggedIn: boolean;
    // arrays
    let ninjas: string[] = [];
    // mixed array (union array)
    let mixed: (string|number)[] = [];
    [ATTENTION]
    we can use union type in normal variables:
    let uid: string|number;
    // objects
    let ninjaOne: object;
    let ninjaTwo: {
        name: string,
        age: number,
        beltColor: string
    }

8. There is another type and it is any, you can change it after, and it can take any
    type:

    let age: any = 25;
    let mixed: any[] = [];
    let ninja : {name: any, age: any}

9. Every time we compile a file, the compiled file will be maked in the same folder of
    .ts file, and it is not going to work if you have folder structure, so we can 
    make ts config file to manage the output folder of the compiled file:

        a. tsc --init 

        b. Then you have to change the rootDir and outDir

        c. To compile only from src folder add this to the end of file: 

            },
            "include": ["src"]
        } 

        d. Then you can use tsc --w 
            to watch for all ts files

10. Functions are type in type script:

        let greet = () => {
            console.log('Hello world');
        }

        let greet : Function;

[ATTENTION] You can't change a variable that is function to another thing

11. You can make a optional parameter in the function:

    const add = (a: number, b: number, c: number | string = 10): void{
        console.log(a + b);
        console.log(c)
    }

    or 
    const add = (a: number, b: number, c?: number | string): number{
        console.log(a + b);
        console.log(c)
        return a + b;
    }

12. you can make type alias in type script to avoid code duplication:

    type stringOrNum = string | number;

    const gooz = (a : stringOrNum): void => {
        console.log(a);
    }