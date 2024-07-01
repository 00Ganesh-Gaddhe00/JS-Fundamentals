
const fs = require("fs");

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

let  promisefile1 = fs.promises.readFile("../file1.txt", )

     function cb1(data){
        console.log(""+data)    
    return fs.promises.readFile("../file2.txt", )
     }

     function cb2(data){
        console.log(""+data)  
        return fs.promises.readFile("../file3.txt", )
     }
 
     function cb3(data){
        console.log(""+data)    
     }

     function errhandle(err){
        console.log(err)
     }

promisefile1.then(cb1).then(cb2).then(cb3).catch(errhandle)



