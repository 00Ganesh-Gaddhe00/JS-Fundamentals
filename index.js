// let a = 10
// let b = 20
// var c = 30

//////  block Scope  /////////////////
// function sum(){
//     var val = 99
//     function ine(){
//       console.log(val)
//     } 
//     ine()
// }

// sum()

// {
//     let val2 = 78
// }

// console.log(val2)
////////////////////        Hoisting             ///////////////////////////


// a= uninitialized -> reference error
//b = uninitialized ->  reference error
// c = undfined ->refpresnt a datatype that acts as placeholder
////-------------------------------------
// x = 5; // Assign 5 to x

// elem = document.getElementById("demo"); // Find an element
// elem.innerHTML = x;                     // Display x in the element

// var x; // Declare x
//-----------------------------------------------------------

// sum()

// let a = 10       
// const b = 20
// var c = 30

// function sum(){
//     console.log()
// }


// -----------------------------------------------------------
// looking at lexical environment

var a = 10
let b = 20

function A1(){
    let val1 = 20
    console.log(b)
    console.log(a)
    A2()
    function A2(){
        
        console.log(val1)
        let val2 = 30
        A3();
        function A3(){
            let val3=90
        console.log(val2)
        }
    }
}

A1()