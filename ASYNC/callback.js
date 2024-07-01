
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
// fs.readFile("file4.txt", cb)




// console.log("after")

///////////////////////////////////////////////////////////////////////////////////////////////////////

function cb1 (err, data){
        if(err){
            console.log(err)
        }
        else console.log("file1 data => "+data)
     fs.readFile("file2.txt", cb2)
    
    }

    function cb2 (err, data){
        if(err){
            console.log(err)
        }
        else console.log("file2 data => "+data)
        fs.readFile("file3.txt", cb3)
    }

    function cb3 (err, data){
        if(err){
            console.log(err)
        }
        else console.log("file3 data => "+data)
    
    }

fs.readFile("file1.txt", cb1)




