
// console.log('start')
// function print(name, CB){
//     setTimeout(()=>{
//         CB('my name is'+name)
//     })
// }

//  print('garath', function(message){
//     console.log(message)
//  })

// console.log('end')
// console.log('end')

// console.log('start')


// function print(name){
//     setTimeout(()=>{
//      console.log(name)
//     })
// }

// print('garath')

// console.log('end')

// function one(cb1){
//     setTimeout(()=>{
//         cb1('fxn one')
//         two(function (message){
//             console.log(message)
//         })
        
//     },3000)
// }


// function two(cb2){
//     setTimeout(()=>{
//         cb2('fxn two')
//         three(function (message){
//             console.log(message)
//         })
//     },1000)
// }

// function three(cb3){
//     setTimeout(()=>{
//         cb3('fxn three')
        
//     },2000)
// }

// one(function(message){
//         console.log(message)

    // two(function (message){
    //     console.log(message)
    //     three(function (message){
    //         console.log(message)
    //     })
    // })
// })

// two(function (message){
//     console.log(message)
// })

// three(function (message){
//     console.log(message)
// })
////////////


// function print(name){
//         setTimeout(()=>{
//             return ('my name is '+garath)
//         })
//     }


Promise.allpolly = function(promises){
    return new Promise(function(resolve, reject){
        const res = []
        let arrayLength = promises.length
        promises.forEach((promise, idx)=>{
            Promise.resolve(promise).then((res)=>{
                res[idx] = res
                arrayLength--;

                if(arrayLength===0){
                    resolve(res)
                }


            }).catch((err)=>reject('err'))
        })
    })
}        



