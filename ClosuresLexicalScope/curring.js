//add three numbers

// we need to add 2 to every argument and then sum everything


// function add(a ,b , c ){
//     return a+b+c
// }

// console.log(add(1 , 2 ,3))


//  function add(a){
//     return function(b){
//         return function(c){
//             return console.log(a+b+c)
//         }
//     }
//  }

//  let sum = add(1)(1)(1)

//  console.log(sum)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// calculate('sum')(3)(4) -> 7
// calculate('substrat')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2


// function calculate(operation){
//     return function(a){
//         return function(b){
//              if(operation==='sum') return a+b
//              else if(operation==='subtarct') return a-b
//              else if(operation==='multiply') return a*b
//              else if(operation==='divide') return a/b

   
//         }
//     }
// }


// console.log(calculate('sum')(4)(2))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Q3 Infinite Currying

// write an add function which can add values like this

// add(2)(3)(4)(5)(6)(7)(8)...........()

  function add(a){
    return function(b){
        if(b) return add(a+b)
            else return a
    }
  }
  console.log(add(1)(1)(1)(1)(1)())