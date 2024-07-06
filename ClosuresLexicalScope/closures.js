
// function a(){
//     function b(){
//         function c(){
//               console.log(i)
//         }
//         c()
//      }
//     b()
// }

// const i=15


// a();

///////////////////////////////////////////////////////////////

// function a(){
//     let val1 = 5
//     function b(){
//         let val2 = 6
//      function c(){
//         console.log(val1+val2)
//      }
//      c()
//     }
//     b()
// }

// a()
////////////////////////////////////////////////////////////////

////////////////// closures /////////////////////////////////


function parent(){
    let val = 10;
    function child(){
        let val2 = 11
        function garndchild(){
            console.log(val+val2)
        }
        return garndchild
    }
    return child
}

let parentFxn = parent()
let childfxn = parentFxn()
let grandchildfxn = childfxn()
let fxn = parent()()()

console.log(grandchildfxn)

