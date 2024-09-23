
// let obj = {
//     name:"garath",
//     age:29,
//     testfunction: function(){
//               function g(){
//             console.log(this)

//         }
//         g()

//     }
// }

// const fxn =  obj.testfunction()
// obj.testfunction()


// console.log(fxn())



//array is actually an object created from the array constructor function

//  console.log(obj["name"])

//  let arr = new Array("ka", "skd", "hd", "js")

//  console.log(arr)

// function solution(obj, Propprefix ){
//     let output = {}

//     for(let key in obj){
//         let val = obj[key];
//         let newkey = Propprefix===undefined? key: Propprefix+'.'+key;
//         if(val!==null && typeof val === 'object'){
//             let recursiveoutput = solution(val, newkey);
//             output={...output, ...recursiveoutput}
//         }
//         else output[newkey] = val;
//     }

//     return output

// }


nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    },
    g: 5
};

function solution (obj, prev_key){
   let output = {}
   for(let key in obj){
    let val = obj[key]
     let newKey = prev_key === undefined?key: prev_key+'.'+key
     if(val!=null && typeof val === 'object'){
        let recursive = solution(val, newKey )
        output = {...output, ...recursive}
     }
      else output[newKey] = val
    }

    return output

}

console.log(solution(nestedObject))
