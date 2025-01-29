
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


// function A1(){
//   let val1 = 8
//   return function A2(){
//     let val2 = 9
//     return function A2(){
//       console.log(val1+val2)
//     }
//   }
// }

// A1()()()


// function parent(){
//     let val = 10;
//     function child(){
//         let val2 = 11
//         function garndchild(){
//             console.log(val+val2)
//         }
//         return garndchild
//     }
//     return child
// }

// let parentFxn = parent()
// let childfxn = parentFxn()
// let grandchildfxn = childfxn()
// let fxn = parent()()

// 
// function createCounter() {
//     let count = 0;  // Private variable
  
//     return function() {
//       count++;  // Modify private variable
//       return count;
//     };
//   }
  
//   const counter = createCounter();
  
//   console.log(counter());  // Output: 1
//   console.log(counter());  // Output: 2
//   console.log(counter());  // Output: 3

  ////////////////////////////////// Closures applications Cache function(memoization) ////////////////////////////


   function Memoization(fxn){
    let Cache = {}
      return (arg)=>{
          if (Cache[arg]!==undefined){
              return Cache[arg]
          }
          else {
            const result = fxn(arg)         
            Cache[arg] = result
            return result
           }
      }
   }
     
   function Add(n){
    let ans=1
    for(let i=0; i<10; i++){
        ans= ans*n
    }
    return ans
   }

   let sum = Memoization(Add)
   console.log(sum(5))

