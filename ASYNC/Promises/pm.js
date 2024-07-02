
// const fs = require("fs");

////Basic Promises

// const prom = new Promise(function(resolve, reject){
//     setTimeout(function(){
//          reject("Resolved data")
//     },1000)
// })

// prom.then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console.log(err)
// })

//////////////////////////////////////////////////////////////////////////////

// let  promisefile1 = fs.promises.readFile("../file1.txt", )

// promisefile1.then(function(data){
//       console.log(""+data)    
// }).catch(function(err){
//     console.log(err)
// })

// let  promisefile2 = fs.promises.readFile("../file2.txt", )

// promisefile2.then(function(data){
//       console.log(""+data)    
// }).catch(function(err){
//     console.log(err)
// })

// let  promisefile3 = fs.promises.readFile("../file3.txt", )

// promisefile3.then(function(data){
//       console.log(""+data)    
// }).catch(function(err){
//     console.log(err)
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////

// let  promisefile1 = fs.promises.readFile("../file1.txt", )

// promisefile1.then(function(data){
//       console.log(""+data)    
//     return fs.promises.readFile("../file2.txt", )

// }).then(function(data){
//     console.log(""+data)  
//     return fs.promises.readFile("../file3.txt", ) 
// }).then(function(data){
//     console.log(""+data)    
// }).catch(function(err){
//   console.log(err)
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////

// let  promisefile1 = fs.promises.readFile("../file1.txt", )

//      function cb1(data){
//         console.log(""+data)    
//     return fs.promises.readFile("../file2.txt", )
//      }

//      function cb2(data){
//         console.log(""+data)  
//         return fs.promises.readFile("../file3.txt", )
//      }
 
//      function cb3(data){
//         console.log(""+data)    
//      }

//      function errhandle(err){
//         console.log(err)
//      }

// promisefile1.then(cb1).then(cb2).then(cb3).catch(errhandle)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const cart = ["shirt", "pant", "shoe", "watch"]

console.log("before")
function createOrder(cart){
    
   const pr = new Promise(function(resolve, reject){
       
      setTimeout(function(){
         resolve({ order_id: 123, order_items:[...cart], total_price:cart.length*300})
         // reject('the items in the cart are unavailable')
   },1000)
   })

   return pr
}

console.log(createOrder(cart))
console.log("after")


function makepayment(total_amount){
       return new Promise(function(resolve, reject){
              setTimeout(function(){
                  resolve('the payment of '+total_amount+' is successful')
                  // reject ('the payment failed ')
              })
       },2000)
}

function Ordermail(){
   return new Promise(function(resolve, reject){
      setTimeout(function(){
          resolve('the order details is mailed')
         //  reject ('mail was not successful ')
      },1000)
})
}

createOrder(cart).then(
function(data){
   console.log(data)
return makepayment(data.total_price)
}
).then(function(data){
    console.log(data)
   return Ordermail()
}
).then(function(data){
console.log(data)
}).catch(function(err){
   console.error(err)
})