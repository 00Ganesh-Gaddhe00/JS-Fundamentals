
let obj = {
    name:"garath",
    age:29,
    testfunction: function(){
        function g(){
            console.log(this)

        }
        g()

    }
}

//array is actually an object created from the array constructor function

 console.log(obj["name"])

 let arr = new Array("ka", "skd", "hd", "js")

 console.log(arr)


