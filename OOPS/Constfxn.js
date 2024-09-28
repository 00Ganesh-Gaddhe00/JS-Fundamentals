
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

// let Obj4 = {
//     name : "name",
//     age:"age",
//     hsj:"kasj"
// }
////prototype inheritence

function car( carname, company, BHP){
        this.carname = carname
        this.company = company
        this.BHP = BHP
        this.category = carname==="Grand i10"? "hatchback": "SUV"
        this.describe = function(){
               console.log(`the car name${this.carname} is ${this.company}`)
        }
        
    
    }
    car.prototype.Carpower = function(){
        console.log(`${this.carname} has ${this.BHP}ps power`)
    }

    let car1 = new car("Grand i10", "Hyndai", "red", 80);
    let car2 = new car("venue", "Hyndai", "red", 100);
    car1.describe()
    
    // console.log(car1)
    // console.log(car2)
    
    function owner(carname, company, BHP, name, age){
        car.call(this, carname, company, BHP)
        this.ownerName = name
        this.age = age
    }

    owner.prototype.Introduce = function(){
        console.log(`${this.ownerName} has ${this.BHP}ps power`)
    }



let owner1 = new owner("john", 30,)
let owner2 = new owner("roxx", "mahindra", 110, "ganesh", 25 )
// console.log(owner2)

// console.log(owner1)

// owner2.Introduce()
// owner1.Carpower()

//------------------------- inerting the entire object from ---------------

function Parent() {
    this.name = "Parent";
}

Parent.prototype.greet = function() {
    console.log(`Hello, I am ${this.name}`);
};

function Child() {
    Parent.call(this);  // Inherit properties from Parent
    this.name = "Child";
}

Child.prototype = Object.create(Parent.prototype);  // Inherit methods from Parent
Child.prototype.constructor = Child;

let childInstance = new Child();
childInstance.greet();  // Output: "Hello, I am Child"


// Summary of Inheritance Lines
// Parent.call(this);

// Purpose: This line is used within the Child constructor to call the Parent constructor function.
// Effect: It initializes properties directly on the instance of Child. This means that any properties defined in Parent will be available on the Child instance itself.
// Attachment: The properties are not attached to Child.prototype; they are part of the individual instance of Child. Each instance of Child will have its own copy of these properties.

// Child.prototype = Object.create(Parent.prototype);

// Purpose: This line is used to set up the prototype chain for inheritance.
// Effect: It allows all instances of Child to inherit methods and properties defined on Parent.prototype. This means that Child instances can access methods from Parent via the prototype chain.
// Attachment: This establishes a link between Child.prototype and Parent.prototype, so any methods added to Parent.prototype will be available to all instances of Child.

    