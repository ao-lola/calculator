// // window.alert("Hello world.");
// // console.log("Hello World console");


// // Variable declaration and How to name your variable
// var laptop_name = "HP"; //underscore way to name variables
// var laptopName = "DELL";  // camel case way to name variables
// var LaptopName = "APPLE";  // Pascal case 
// let myPhone;
// const cars = 3.142;


// // console.log(laptop_name.toUpperCase());
// // console.log(laptopName);
// // console.log(LaptopName);


// // fUNCTIONS
// // function myAddition(arg1, arg2){
// //     total = 
// // }


// let arg1;
// let arg2;





// const myAddition = () => {
//      let arg1 = document.getElementById("arg1").value;
//     let  arg2 = document.getElementById("arg2").value;
//     // let result = parseInt(arg1) + parseInt(arg2);
//     // document.getElementById("output").value = result;
//     // return result;
// }
// //addition of two numbers
//  document.getElementById("my-addition").addEventListener("click", function(){
//      let arg1= parseInt(document.getElementById("arg1").value);
//      let arg2= parseInt(document.getElementById("arg2").value);

//     //validation
//     if(!isNaN(arg1) && !isNaN(arg2)){
//         let result= (arg1) + (arg2);
//         document.getElementById("output").value= result;
//         document.getElementById("alert-msg").innerHTML= '<div class= "alert alert-success">Calculated successfully</div>'
//         //return result;
//     }else{
//         document.getElementById("output").value="";
//         document.getElementById("alert-msg").innerHTML= '<div class= "alert alert-success">something went wrong</div>'
        
//     }

    
//  })









//  //subtraction of two numbers

//  const mySubtraction = () => {
//    let arg1 = document.getElementById("arg1").value;
//    let arg2 = document.getElementById("arg2").value;
//     //document.querySelector(".simple-calculator").style.background="green";

// //     let result = parseInt(arg1) - parseInt(arg2);
// //     document.getElementById("output").value = result;
// //     return result;
//  }

//  document.getElementById("my-subtraction").addEventListener("click", function(){
//      let arg1= document.getElementById("arg1").value;
//      let arg2= document.getElementById("arg2").value;

//      if(!isNaN(arg1) && !isNaN(arg2)){
//         let result= parseInt(arg1) -  parseInt(arg2);
//         document.getElementById("output").value= result;
//         document.getElementById("alert-msg").innerHTML= '<div class= "alert alert-success">Result calculated successfully</div>';
//      }else{
//          document.getElementById("output").value="";
//         document.getElementById("alert-msg").innerHTML= '<div class= "alert alert-success">something went wrong</div>'
         
//      }

//  })
// //multiply two numbers
// const myMultiply = () => {
//     let arg1 = document.getElementById("arg1").value;
//     let arg2 = document.getElementById("arg2").value;
// }

// document.getElementById("my-multiplication").addEventListener("click", function(){
//         let arg1= document.getElementById("arg1").value;
//         let arg2= document.getElementById("arg2").value;
//         if(!isNaN(arg1) && !isNaN(arg2)){
//             let result= parseInt(arg1) * parseInt(arg2);
//             document.getElementById("output").value= result;
//             document.getElementById("alert-msg").innerHTML= '<div class= "alert alert-success">Result calculated successfully</div>';
//          }else{
//              document.getElementById("output").value="";
//             document.getElementById("alert-msg").innerHTML= '<div class= "alert alert-success">something went Wrong</div>'
             
//          }
       
// })
// //division of two numbers
// const myDivision = () => {
//     let arg1 = document.getElementById("arg1").value;
//     let arg2 = document.getElementById("arg2").value;
// }

// document.getElementById("my-division").addEventListener("click", function(){
//     let arg1= document.getElementById("arg1").value;
//     let arg2= document.getElementById("arg2").value;

//     if(!isNaN(arg1) && !isNaN(arg2)){
//         let result= parseInt(arg1) /  parseInt(arg2);
//         document.getElementById("output").value= result;
//         document.getElementById("alert-msg").innerHTML= '<div class= "alert alert-success">Result calculated successfully</div>';
//      }else{
//          document.getElementById("output").value="";
//         document.getElementById("alert-msg").innerHTML= '<div class= "alert alert-success">something went wrong</div>'
         
//      }

    
// })


// let element = document.getElementById("my-subtraction")
// element.addEventListener("mouseover", mySubtraction);
// element.addEventListener("mouseout", function(){
//     document.querySelector(".simple-calculator").style.background="white";
// });



// // let arg1 = 100000;
// // let arg2 = 50;

// // console.log(myAddition(arg1, arg2));
// // console.log(myMultiply(20.648585554, 5));
// // console.log(myDivision(20.648585554, 5));
// // console.log(mySubtraction(20.648585554, 5));


document.getElementById("password-icon").addEventListener("click", function(){
    let passwordType = document.getElementById("password").type;

    if(passwordType == "password"){
        document.getElementById("password").type = "text";
        document.getElementById("password-icon").innerHTML = '<i class= "fas fa-eye-slash"></i>';
        document.getElementById("password-icon").style.background="green"
    }else{
        document.getElementById("password").type = "password";
        document.getElementById("password-icon").innerHTML = '<i class= "fas fa-eye"></i>'
        document.getElementById("password-icon").style.background= "red"
    }
});