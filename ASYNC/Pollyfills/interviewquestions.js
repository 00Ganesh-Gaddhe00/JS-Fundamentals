////Q1
// let string = "RICK SHANE DARELL MIKE"
//output - RSDM

// let output = string.split(" ").map((ele)=> ele[0]).reduce((acc,ele)=>acc+ele,"")
// let output2 = string.split(" ").map((ele)=> ele[0]).join('')


// console.log(output)
// console.log(output2)


///////////////////////////////////////////////////////////////

//q2  

// let arr = [{name:'Rick', lastname:"grimes", age:35},
//            {name:'shane', lastname:"watson", age:35},
//            {name:'darell', lastname:"kimley", age:45},
//            {name:'mike', lastname:"tyson", age:45},
//            {name:'jack', lastname:"paul", age:34},
//            {name:'john', lastname:"cena", age:35},
// ]

// //output - { age - frequency}


// let result = arr.reduce(function(acc, ele){
//        if(acc[ele.age]){
//         acc[ele.age]++
//        }
//        else acc[ele.age]=1

//        return acc
// },{})

// console.log(result)


// let obj = {name:'Rick', lastname:"grimes", age:35}


/////////////////////////////  Method chaining ////////////////////////////////////////////

//print the names of actors who has age of less then 36

// let arr = [{name:'Rick', lastname:"grimes", age:35},
//                {name:'shane', lastname:"watson", age:35},
//                {name:'darell', lastname:"kimley", age:45},
//                {name:'mike', lastname:"tyson", age:45},
//                {name:'jack', lastname:"paul", age:34},
//                {name:'john', lastname:"cena", age:35},
//     ]


//     let res = arr.filter((ele)=> ele.age>35).map((ele)=> ele.name)

//     console.log(res)

////////////////////////////////////////////////////////////////////////////////////////////

let arr = [{name:'Rick', lastname:"grimes", age:35},
                   {name:'shane', lastname:"watson", age:35},
                   {name:'darell', lastname:"kimley", age:45},
                   {name:'mike', lastname:"tyson", age:45},
                   {name:'jack', lastname:"paul", age:34},
                   {name:'john', lastname:"cena", age:35},
        ]


//😀


