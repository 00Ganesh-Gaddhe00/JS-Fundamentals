
const fs = require("fs");

console.log("before")

// fs.readFile("file1.txt", function(err, data){
//     if(err){
//         console.log(err)
//     }
//     else console.log("file data => "+data)
//     fs.readFile("file2.txt", function(err, data){
//         if(err){
//             console.log(err)
//         }
//         else console.log("file data => "+data)
//         fs.readFile("file3.txt", function(err, data){
//             if(err){
//                 console.log(err)
//             }
//             else console.log("file data => "+data)
//         })
//     })
// })

// fs.readFile("file2.txt", function(err, data){
//     if(err){
//         console.log(err)
//     }
//     else console.log("file data => "+data)
// })

// fs.readFile("file3.txt", function(err, data){
//     if(err){
//         console.log(err)
//     }
//     else console.log("file data => "+data)
// })

// console.log("after")


//////////////////////////////

// function cb (err, data){
//     if(err){
//         console.log(err)
//     }
//     else console.log("file data => "+data)


// }

// fs.readFile("file1.txt", cb)
// fs.readFile("file2.txt", cb)
// fs.readFile("file3.txt", cb)
// // fs.readFile("file4.txt", cb)




// console.log("after")

///////////////////////////////////////////////////////////////////////////////////////////////////////



// function cb1 (err, data1){
//         if(err){
//             console.log(err)
//         }
//         else console.log("file1 data => "+data1)
//      fs.readFile("file2.txt", cb2)
    
//     }

//     function cb2 (err, data2){
//         if(err){
//             console.log(err)
//         }
//         else console.log("file2 data => "+data2)
//         fs.readFile("file3.txt", cb3)
//     }

//     function cb3 (err, data3){
//         if(err){
//             console.log(err)
//         }
//         else {
//             console.log("file3 data => "+data3)
//         }
    
//     }

// fs.readFile("file1.txt", cb1)

// let radius= [2,5,6,7,2]

// function diameter(cb){
//     // let arr=[]
//     // for(let i=0; i<radius.length;i++){
//     //     let dia = cb(radius[i])
//     //     arr[i] = dia
//     // }
//     // return arr
//     cb()

// }

// function Diam(){
//     console.log(radius)
// }

// let resarr = diameter(Diam)




