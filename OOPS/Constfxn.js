
/// constructions functions
// function car( name, company, colour, BHP){
//     this.name = name
//     this.company = company
//     this.colour = colour
//     this.BHP = BHP
//     this.category = name==="Grand i10"? "hatchback": "SUV"
//     this.sayname = function(){
//         console.log(this.name)
//     }

// }

// let car1 = new car("Grand i10", "Hyndai", "red", 80);
// let car2 = new car("venue", "Hyndai", "red", 100);

// console.log(car1)
// console.log(car2)


//////Class

class person {
     constructor(name, age, height){
        //properties or instance variables
        this.name = name
        this.age = age
        this.height = height
     }

     //methods or instance methods
     walk(){
        console.log(`${this.name} is walking`)
     }

     whatAge(){
        console.log(`My age is ${this.age}`)
     }
     
     //static method
     static greetings(){
        console.log("Greetings from the function static")
     }

}

let person1 = new person("garath", 20, 5.10)

person1.age = 30
person1.name = "Nit garath"
// person1.walk()
// person1.whatAge()
// person.greetings()
// 

///////inheretence//////

class teacher extends person {

    constructor(name, age, height, subject, grade){
        super(name, age, height)
        this.subject = subject
        this.grade = grade
    }

    about(){
        console.log(`my name is ${this.name}, i teach ${this.subject}`)
    }
}


let teacher1 = new teacher("reshma", 30, 5.7, "science", "3rd grade" )
console.log(teacher1)
teacher1.walk()
teacher1.about()