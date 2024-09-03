//! I did use better Comments by Aaron Bond to make some comments easier to read.

//TODO Exercise 1
// function outerFunction() {
//     let outerVar = "I'm outside!";

//     function innerFunction() {
//         let innerVar = "I'm inside!";
//         console.log(outerVar); //? Can we access outerVar?
//         console.log(innerVar); //? Can we access innerVar?
//     }

//     innerFunction();

// }

// outerFunction();

console.group("Exercise 1");
console.log("Output: the outerVar and innerVar will give their normal outputs, both being a fucntion scope. but if i console.log the innerVar outside of the innerFunction, it will give me an error. same with the outerVar being outside of the outerFunction.")
console.groupEnd();


//TODO Exercise 2
function mainFunction() {
    function hoistedFunction() {
        let hoistedvariable = "this is a varible";
        console.group("Exercise 2");
        console.log(hoistedvariable);
        console.groupEnd();
    }

    hoistedFunction();
}
mainFunction();

//TODO Exercise 3

let beef = "beef";
function functionA() {
    function functionB() {
        if (beef === "beef") {
            console.group("Exercise 3");
            console.log("this should appear if exercise 3 is  working");
            console.groupEnd();
        }
    }
    return functionB();
}

const cheese = functionA();

//TODO Exercise 4
let globalVariable = "Global variable";
console.group("Exercise 4.1");
console.log(globalVariable);
console.groupEnd();

function modifyGlobal() {
    globalVariable = "Global variable modified";
    console.group("Exercise 4.2");
    console.log(globalVariable);
    console.groupEnd();
}

function localScopeTest() {
    let globalVariable = "Local variable";
    console.group("Exercise 4.3");
    console.log(globalVariable);
    console.groupEnd();
}

modifyGlobal();
localScopeTest();

//TODO Exercise 5

function functionFactory(param) {
    let cheese = param + 5;
    return cheese;
}

console.group("Exercise 5");
console.log(functionFactory(2));
console.groupEnd();

//TODO Exercise 6
// function hoistingTest() {
//     console.log(Vendor)

//     let Vendor = "Vendor";
// }

// hoistingTest();

console.group("Exercise 6");
console.log("this causes an error via 'Ventor is not defined'. AKA dont console.log a variable that is below the console.log.")

//TODO Exercise 7
function setupCounter() {
    let Noombeh = 9;

    return function () {
        Noombeh++;
        console.group("Exercise 7");
        console.log(Noombeh);
        console.groupEnd();
    }

}
setupCounter()();

//TODO Exercise 8
function chesbreuger() {
    let countVar = 0;

    return function () {
        if (countVar < 10) {
            countVar = countVar + 1;
            console.group("Exercise 8");
            console.log(countVar);
            console.groupEnd();
        } else if (countVar == 10) {
            countVar = 0;
            console.group("Exercise 8");
            console.log(countVar);
            console.groupEnd();
        }
    }

};
let bestBurger = chesbreuger();
bestBurger();

//TODO Exercise 9
Globe = "Earth";
function GlobalStuff() {
    function localstuff() {
        let Planet = "Mars";
    }
};
