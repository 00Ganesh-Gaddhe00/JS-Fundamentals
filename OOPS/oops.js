
let obj = {
    name:"garath",
    age:29,
    testfunction: function(){
       return function g(){
            console.log(this)

        }
        g()

    }
}

let fxn = obj.testfunction()

// console.log(fxn())

//array is actually an object created from the array constructor function

//  console.log(obj["name"])

//  let arr = new Array("ka", "skd", "hd", "js")

//  console.log(arr)

function solution(obj, Propprefix ){
    let output = {}

    for(let key in obj){
        let val = obj[key];
        let newkey = Propprefix===undefined? key: Propprefix+'.'+key;
        if(val!==null && typeof val === 'object'){
            let recursiveoutput = solution(val, newkey);
            output={...output, ...recursiveoutput}
        }
        else output[newkey] = val;
    }

    return output

}


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

console.log(solution(nestedObject))
