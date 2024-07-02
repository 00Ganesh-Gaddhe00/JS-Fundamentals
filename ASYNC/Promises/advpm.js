
const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        // resolve('Promise1 is resolved')
        reject('promise1 is rejected')
    },2000)
})

const p2 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Promise2 is resolved')
        // reject('promise2 is rejected')
    },1000)
})

const p3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        // resolve('Promise3 is resolved')
        reject('promise3 is rejected')
    },2000)
})

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
