
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

 obj.testfunction()


