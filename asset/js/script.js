// window.alert("Hello world.");
// console.log("Hello World console");


// Variable declaration and How to name your variable
var laptop_name = "HP"; //underscore way to name variables
var laptopName = "DELL";  // camel case way to name variables
var LaptopName = "APPLE";  // Pascal case 
let myPhone;
const cars = 3.142;


// console.log(laptop_name.toUpperCase());
// console.log(laptopName);
// console.log(LaptopName);


// fUNCTIONS
// function myAddition(arg1, arg2){
//     total = 
// }


let arg1;
let arg2;


const myAddition = () => {
     arg1 = document.getElementById("arg1").value;
     arg2 = document.getElementById("arg2").value;
    let result = parseInt(arg1) + parseInt(arg2);
    document.getElementById("output").value = result;
    return result;
}

const myMultiply = (arg1, arg2) => {
    let result = arg1 * arg2 + arg1 * cars;
    document.getElementById("output").value = result;
    return result;
}

const myDivision = (arg1, arg2) => {
    let result = arg1/arg2;
    document.getElementById("output").value = result;
    return result;
}

const mySubtraction = (arg1, arg2) => {
    arg1 = document.getElementById("arg1").value;
    arg2 = document.getElementById("arg2").value;
    document.querySelector(".simple-calculator").style.background="green";

    let result = parseInt(arg1) - parseInt(arg2);
    document.getElementById("output").value = result;
    return result;
}

let element = document.getElementById("my-subtraction")
element.addEventListener("mouseover", mySubtraction);
element.addEventListener("mouseout", function(){
    document.querySelector(".simple-calculator").style.background="white";
});



// let arg1 = 100000;
// let arg2 = 50;

// console.log(myAddition(arg1, arg2));
// console.log(myMultiply(20.648585554, 5));
// console.log(myDivision(20.648585554, 5));
// console.log(mySubtraction(20.648585554, 5));