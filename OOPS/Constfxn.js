
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

class student extends person {
    constructor(name, age, height, grade, section){
        super(name, age, height)
        this.grade = grade
        this.section = section
    }

    Intro(){
        console.log(`My name is ${this.name} im form ${this.grade},${this.section}`)
    }
}


// let teacher1 = new teacher("reshma", 30, 5.7, "science", "3rd grade" )
// console.log(teacher1)
// teacher1.walk()
// teacher1.about()

// let student1 = new student("ajay", 30, 5.10, "5th", "C")
// console.log(student1)
// student1.Intro()
// student1.walk()

let Obj4 = {
    name : "name",
    age:"age",
    hsj:"kasj"
}
////prototype inheritence

function car( carname, company, BHP){
        this.carname = carname
        this.company = company
        this.BHP = BHP
        this.category = name==="Grand i10"? "hatchback": "SUV"
        
    
    }
    car.prototype.Carpower = function(){
        console.log(`${this.carname} has ${this.BHP}ps power`)
    }

    let car1 = new car("Grand i10", "Hyndai", "red", 80);
    let car2 = new car("venue", "Hyndai", "red", 100);
    car1.Carpower()
    
    console.log(car1)
    console.log(car2)
    
    function owner(carname, company, BHP, name, age){
        car.call(carname, company, BHP, this)
        this.ownerName = name
        this.age = age
    }

    owner.prototype.Introduce = function(){
        console.log(`${this.ownerName} has ${this.BHP}ps power`)
    }



let owner1 = new owner("john", 30,)

console.log(owner1)

owner1.Introduce()
// owner1.Carpower()
    