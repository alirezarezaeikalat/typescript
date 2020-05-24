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

13. You can define function signature when you declare a function
    (it is like funciton pointers in c++ and delegates in c#):

    let greet: (a: string, b: string) => void;
    let logDetails: (person: {name: string, age: number}) => void;
    logDetails = (ninja: {name: string, age: number}) => {
        console.log(`${ninja.name} is ${ninja.number}`);
    }


14. We can work with dom in typescript just like js, but there are subtle differences:

    const anchor = document.querySelector('a');
    // we get warning for this that says the anchor could be null, we can 
    // overcome this in two ways
    console.log(anchor.href);

        a. if(anchor){
            console.log(anchor.href)
        }

        b. const anchor = document.querySelector('a')!; 
        // ! means that you are sure that is not null and typescript knows 
        //the type, because we use ! and 'a' for selecting

15. in typescript anchor that we get here is of type HTMLAnchorElement and we can
    access the property of this element

    // because we take a tag typescript knows that it is HTMLAnchorElement
    const anchor = document.querySelector('a')!; 

    //but for example if we use class name to get the element, the type will be 
    // Element, not HTMLAnchorElement, but we can use type casting to give the 
    // type:

        const form = document.querySelector('.new-item-form') as HTMLFormElement;

16. adding event listener for the form element:

    form.addEventListener('submit', (e: Event): void => {
        console.log(
            type.value,
            // we can make a value to number
            type.valueAsNumber
        );
    });

17. Classes in typescript is just like js: 

        class Invoice {
            // default is public
            client: string;
            private details: string;
            readonly amount: number; // read only is readonly in the class too.

            constructor(c: string, d: string, a: number){
                this.client = c;
                this.details = d;
                this.amount = a;
            }
            format():string {
                return `${this.client} owes ${this.amount}`;
            }
        }

18. If we use access modifiers, we can short format for making constructors and 
    properties: 
            class Invoice {
                constructor() {
                    readonly client: string, 
                    private details: string,
                    public amount: number
                }
            }
[ATTENTION] you can use this short format only if you use access modifiers

19. To use modules in the typescript first we need to modify config file:
    {
        "target": "es6",       /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
        "module": "es2015",    /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    }

[ATTENTION] This is just for es6 and only modern browsers support this

20. 
    a. Then you can make another .ts file, and export it
    b. The you can import it into another file.
        (for importing we should use .js instead of .ts)
    c. we also need to make the <script type="module"></script> in the 
        html file.

[ATTENTION]
21. This type of importing and adding modules, does not compact the .js files 
    into one file, so the browser should make a request for each one of them.
    for making them compact we could use webpack.

22. interfaces in typescript can work in two separate ways, first you can use 
    them independently to make a new type as a blueprint, or use interfaces with
    classes:

        a. using interfaces independently:

            interface IsPerson {
                name: string,
                age: number,
                speak(a: string): void;
            }
            then you can use this as a type to define a varible or for example
            use the type for function parameter: 

            const me: IsPerson = {
                name: 'alireza',
                age: 27,
                speak(name: string){
                    console.log(name);
                }
            }

        b. using interfaces besides classes:

            class Inovice implements HasFormatter {
                // the class should implements the HasFormatter funcitons
            }