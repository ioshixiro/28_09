//masala 1
class Labrador {
    constructor(name, age, gender, master) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.species = "Labrador";
        this.legs = 4;
        this.size = "Large";
        this.master = master;
        this.loyal = true;
    }
}

//masala 2
function operate(pitchSet, operation) {
    let n = parseInt(operation.slice(1));

    if (operation.includes('I')) {
        let result = pitchSet.map(pitch => (12 - pitch + n) % 12);
        return result.sort((a, b) => a - b);
    } else {
        let result = pitchSet.map(pitch => (pitch + n) % 12);
        return result.sort((a, b) => a - b);
    }
}

//masala 3
function factory(x) {
    return function(array) {
        return array.map(item => item * x);
    };
}

var fives = factory(5);
let myArray = [1, 2, 3];
console.log(fives(myArray));

//masala 4
String.prototype.myNewMethod = function(){
    let result = "";
    for(let i = 0; i < this.length; i++){
        result += this[i].toUpperCase();
    }
    return result;
}

console.log("abc".myNewMethod());

//masala 5
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    get info(){
        return `${this.name}s age is ${this.age}`
    }
}

var john = new Person('john', 34);
console.log(john.info);

//masala 6
class Person {
    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;  
        this.age = age;
        this.gender = gender;
    }

    sayFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let john = new Person("John", "Doe", 30, "Male");

console.log(john.firstName);
console.log(john.lastName);
console.log(john.age);
console.log(john.gender);
console.log(john.sayFullName());

//masala 7
function pitchClass(note) {
    const naturalNotes = {
        'C': 0,
        'D': 2,
        'E': 4,
        'F': 5,
        'G': 7,
        'A': 9,
        'B': 11
    };

    if (note.includes('#')) {
        return (naturalNotes[note[0]] + 1) % 12;
    } else if (note.includes('b')) {
        return (naturalNotes[note[0]] - 1 + 12) % 12;
    } else {
        return naturalNotes[note];
    }
}

console.log(pitchClass('D'));
console.log(pitchClass('D#'));
console.log(pitchClass('Ab'));

//masala 8
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    toString() {
        return `${this.name} is a ${this.type}`;
    }
}

var dog = new Animal('Max', 'dog');

console.log(dog.toString());
console.log(dog.type);
console.log(dog.name);
dog.name = 'Lassie';
console.log(dog.name);
