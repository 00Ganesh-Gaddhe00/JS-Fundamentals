
// ///for each

// const arr = [1,2,3,4,5]

// // arr.forEach(function(ele){
// //     console.log(ele)
// // })

 
// Array.prototype.MyforEach = function(cb){
     
//      for(let i=0; i<this.length;i++){
//         cb(this[i])
//      }

// }

// arr.MyforEach((err)=>{console.log(err+1)})


//////MAP//////////////////////////////////////////////////////////////

// const arr = [1,2,3,4,5]

// Array.prototype.myMap = function(cd){
//     const result = []
    
//     for(let i=0 ; i<this.length;i++){
//         let mapped = cd(this[i])
//         result.push(mapped)
//     }

//     return result
// }


//  let i = arr.myMap((ele)=> ele+2)

//  console.log(i)

///////////////////////////////////////////////////////////////////////////////

// const arr = [1,2,3,4,5]

// Array.prototype.Myfilter = function(cb){
//     let res = []

//     for(let i=0; i<this.length; i++){
//         if(cb(this[i])){
//             res.push(this[i])
//         }
//     }

//     return res
// }

// let filetered = arr.Myfilter((ele) => ele%2==1)

// console.log(filetered)

///////REDUCE///////////////////////////////////////////////////////////////////

const arr = [1,2,3,4,5]

// let sum = arr.reduce(function(acc, ele){
//     return acc+ele
// })

// console.log(sum)

// Array.prototype.MyReduce = function(cb, initialval){

//     let start =0
//      if(!initialval){
//         initialval = this[0]
//         start=1
//      }
//      acc=initialval

//     for(let i=start; i<this.length; i++){
//         acc = cb(acc, this[i]);
//     }

//     return acc
// }


// let sum = arr.MyReduce(function(acc, ele){
//       return acc+ele
// })

// console.log(sum)


// Array.prototype.ReducePolly = function(CB, initialval){

//     let firstindex = 0
//     if(!initialval){
//         initialval = this[0];
//         firstindex = 1
//     }
//     let accumulator = initialval

//     for(let i = firstindex ; i<this.length ; i++){
//         accumulator = CB(accumulator, this[i])
//     }

//     return accumulator
// }

// let i = arr.ReducePolly(function(acc,ele){
//     return acc*ele
// })

// console.log(i)