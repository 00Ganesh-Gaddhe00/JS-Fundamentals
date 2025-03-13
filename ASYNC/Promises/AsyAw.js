
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

   ////// promise chaining ////////////////


//    const fs = require("fs").promises;

// fs.readFile("../file1.txt", "utf-8") // Step 1: Read file (returns a Promise)
//   .then(data => {
//     console.log("Original Content:", data);
//     return data.toUpperCase(); // Step 2: Convert to uppercase (returns a new value)
//   })
//   .then(upperCasedData => {
//     console.log("Uppercased Content:", upperCasedData);
//     return fs.writeFile("../file2.txt", upperCasedData); // Step 3: Write to another file
//   })
//   .then(() => {
//     console.log("File successfully written!");
//   })
//   .catch(error => {
//     console.error("Error:", error);
//   });


   // function getUser() {
   //    return new Promise((resolve, reject) => {
   //      setTimeout(() => {
   //        console.log("Fetched User");
   //        resolve({ id: 1, name: "Ganesh" }); // Resolving with user data
   //      }, 1000);
   //    });
   //  }
    
   //  function processUser(user) {
   //    return new Promise((resolve, reject) => {
   //      setTimeout(() => {
   //        console.log(`Processing user: ${user.name}`);
   //        user.processed = true;
   //        resolve(user); // Resolving with updated user data
   //      }, 1000);
   //    });
   //  }
    
   //  function sendWelcomeEmail(user) {
   //    return new Promise((resolve, reject) => {
   //      setTimeout(() => {
   //        if (user.processed) {
   //          console.log(`Welcome email sent to ${user.name}`);
   //          resolve("Email Sent");
   //        } else {
   //          reject("User not processed, email not sent");
   //        }
   //      }, 1000);
   //    });
   //  }
    
   //  // Chaining Promises
   //  getUser()
   //    .then(user => processUser(user)) // Process user after fetching
   //    .then(processedUser => sendWelcomeEmail(processedUser)) // Send email after processing
   //    .then(response => console.log(response)) // Log success message
   //    .catch(error => console.error("Error:", error)); // Handle errors
    