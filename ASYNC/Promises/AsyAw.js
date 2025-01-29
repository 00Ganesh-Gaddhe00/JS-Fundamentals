
let p = new Promise(function(resolve, reject){
    setTimeout(function(){
       resolve("Promise p is resolved")
    },1000)
})


function getdata(){
   p.then((res)=>console.log(res))
   console.log('promise is completed')
}

getdata()


//---------------------------------------------------------------------------

// let p = new Promise(function(resolve, reject){
//    setTimeout(function(){
//       resolve("Promise p is resolved");
//    }, 1000);
// });

// function getdata(){
//   p
//      .then((res) => {
//          console.log(res);  // This will log the resolved value of the first promise.
//      })        ---------------------------- when the return value for
//      .then(() => {
//          console.log('promise is completed');  // This will now log after the first promise is resolved.
//      })
//      .catch((err) => {
//          console.log("Error:", err);  // Catch any error in the chain.
//      });
// }

// getdata();
async function getdata() {
   let val = await p   // js engine just stops and and wraps the remaing code for
   console.log(val)
   console.log('p is completed')
}


const p1 = new Promise(function(resolve, reject){
   //     setTimeout(function(){
   //         resolve('Promise1 is resolved')
   //     },4000)
   // })
   
   // const p2 = new Promise(function(resolve, reject){
   //     setTimeout(function(){
   //         resolve('Promise2 is resolved')
   //     },4000)
   // })
   
   // const p3 = new Promise(function(resolve, reject){
   //     setTimeout(function(){
   //         resolve('Promise3 is resolved')
   //     },2000)
   // })
   
   
   
   // async function threepromise(){
   //     const pp1 = await p1
   //     console.log(pp1)
   //     const pp2 = await p2
   //     console.log(pp2)
   //     const pp3 = await p3
   //     console.log(pp3)
   // }
       
   
   // threepromise()