let user = {
    name: "John",
    age: 30,
  
    sayHi() {
     function sayt() {
      console.log(this)
      }
      sayt()
    }
  
  };
  
  user.sayHi();
//   let fxn = user.sayHi
//   fxn()
//  console.log( this)


