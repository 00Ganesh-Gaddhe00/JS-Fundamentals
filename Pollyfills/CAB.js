
// let obj = {
//     name:"garath",
//     age:29,
//     testfunction: function(){
//        return function g(){
//             console.log(this)

//         }
//         g()

//     }
// }

// let fxn = obj.testfunction()

// console.log(fxn())


//////// interview questions /////////////////////////////////////////// 
//Q1
// var status = '👽'

// setTimeout(() => {
//     const status = "👿"

//     const data = {
//         status: '🥑',
//         getstatus(){
//             return this.status
//         }
//     }
    


// console.log(data.getstatus());
// console.log(this)
// console.log(data.getstatus.call(this))

// },0)

/////////////////////////////////////////////////////////////////////////////

//Q2
//output -> #1 Lion:King
  //       #2 Tiger:queen

const animals = [
    {species:'Lion', name:'king'},
    {species:'Tiger', name:'Queen'}
]

function printAnimals(i){
    this.print = function(){
        console.log('#'+i+' '+this.species+': '+this.name);
    }
    this.print()
}

for(let i=0; i<animals.length; i++){
     printAnimals.call(animals[i],i)
}


////////////////////////////////////////////////////////////////////////////////////
//  Q3
//get min and max
// const arr = [1,2,3,4,5]

// let min = Math.min.call(null, ...arr)
// let max = Math.max.apply(null, arr)

// console.log(min)
// console.log(max)

// console.log( Function.prototype)



// var status = '👽'

// // example  1//
// setTimeout(()=>{
//     const status = "👿"

//     const data = {
//         status: '🥑',
//         getstatus(){
//             return this.status
//         }
//     }
    


// console.log(data.getstatus());
// console.log(this)
// console.log(data.getstatus.call(this))

// },0)

//example 2
// function example(){
//     const status = "👿"

//     const data = {
//         status: '🥑',
//         getstatus(){
//             return this.status
//         }
//     }
    


// console.log(data.getstatus());
// console.log(this)
// console.log(data.getstatus.call(this))

// }

// example()

/////////////////////////////////////////////////////////////////////////////////////////

// const animals = [
//     {species:'Lion', name:'king'},
//     {species:'Tiger', name:'Queen'}
// ]

// // for(let i=0; i<animals.length; i++){
// //    console.log('#'+i+' '+animals[i].species+': '+animals[i].name)
// // }

// function printAnimals(i){
//     console.log('#'+i+' '+this.species+': '+this.name)
   
//    }

// for(let i=0; i<animals.length;i++){
   
// printAnimals.call(animals[i], i)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////
/// practice example
// const teacher = {
//      name: "garath",
//      subject:"science"
// }

// function teacherintro(age, experince){

//     console.log(`Hello! My name is ${this.name}, i teach ${this.subject}, im ${age}yrs old, i have ${experince}years of experience`)
// }

// // teacherintro.call(teacher,30,4)
// //    teacherintro.apply(teacher,[30,4])
//  let bindfxn = teacherintro.bind(teacher,40,9)

//  console.log(bindfxn(40, 9))



///////////////////////////////////////////////   Pollyfills       //////////////////////////////////////////////////

// const teacher = {
//     name: "garath",
//     subject:"science"
// }

// function teacherintro(age, experince){

//    console.log(`Hello! My name is ${this.name}, i teach ${this.subject}, im ${age}yrs old, i have ${experince}years of experience`)
// }

// Function.prototype.Mycall = function(obj, ...args){

//     obj.fxn = this
    
//     obj.fxn(...args)

// }
// teacherintro.Mycall(teacher, 30, 4)


// Function.prototype.MyApply = function(obj, paramarray){
//     obj.fxn = this
//     obj.fxn(...paramarray)
// }
 
// teacherintro.MyApply(teacher,[30,4])


// Function.prototype.Mybind = function(obj, ...args){
//     obj.fxn = this

//     return function(...args2){
//          return obj.fxn(...args,...args2)
//     }
// }

// let fxn = teacherintro.Mybind(teacher)

// fxn(30,4)

// Function.prototype.Mycall = function(obj, ...args){

    // if(typeof this !== 'function'){
    //     throw new TypeError(this +'IS NOT FUNCTION')
    // }
          
    //     obj.fxn = this
        
    //     obj.fxn(...args)

    
    // }




