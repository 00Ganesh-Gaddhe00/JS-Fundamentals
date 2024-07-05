
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

console.log(fxn())

//array is actually an object created from the array constructor function

//  console.log(obj["name"])

//  let arr = new Array("ka", "skd", "hd", "js")

//  console.log(arr)


