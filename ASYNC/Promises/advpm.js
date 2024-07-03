
// const p1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // resolve('Promise1 is resolved')
//         reject('promise1 is rejected')
//     },2000)
// })

// const p2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('Promise2 is resolved')
//         // reject('promise2 is rejected')
//     },1000)
// })

// const p3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // resolve('Promise3 is resolved')
//         reject('promise3 is rejected')
//     },2000)
// })

/////return data of all promised if all resolved in an array else erroe
// Promise.all([p1, p2, p3]).then(function(data){
//     console.log(data)
// }).catch(function(err){
   //console.log(err)
// })

//return array of all promise objects and their states regardless
// Promise.allSettled([p1, p2, p3]).then(function(data){
//     console.log(data)
// }).catch(function(err){
// })

//return data of the first settled wheteher resolved or rejected 
// Promise.race([p1, p2, p3]).then(function(data){
//         console.log(data)
//     }).catch(function(err){
//        console.log(err)
//     })

// returns first resolved data  
// Promise.any([p1, p2, p3]).then(function(data){
//     console.log(data)
// }).catch(function(err){
//    console.log(err)
// })
////////////////////////////////////////////////////////////////////////////////////////////////////////////

const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Promise1 is resolved')
    },4000)
})

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Promise2 is resolved')
    },4000)
})

const p3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Promise3 is resolved')
    },2000)
})



async function threepromise(){
    const pp1 = await p1
    console.log(pp1)
    const pp2 = await p2
    console.log(pp2)
    const pp3 = await p3
    console.log(pp3)
}
    

threepromise()

////////////////////////////////////////////////////////////////////////////////////////////

// const cart = ["shirt", "pant", "shoe", "watch"]

// // console.log("before")
// function createOrder(cart){
    
//    const pr = new Promise(function(resolve, reject){
       
//       setTimeout(function(){
//          resolve({ order_id: 123, order_items:cart, total_price:300})
//          // reject('the items in the cart are unavailable')
//    },4000)
//    })

//    return pr
// }

// function makepayment(total_amount){
//        return new Promise(function(resolve, reject){
//               setTimeout(function(){
//                   resolve('the payment of '+total_amount+' is successful')
//                   // reject ('the payment failed ')
//               },4000)
//        })
// }


// async function order_Process(cart){
//     const response = await createOrder(cart)
//        const total_amt = response.total_price
//         console.log(total_amt)
//        const payment = await makepayment(total_amt)
//        console.log(payment)

// }

// order_Process(cart)