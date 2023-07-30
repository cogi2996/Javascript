'use strict';
// // const Person = function (firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;
// //   /*  this.calcAge = function(){
// //         return (2037 - this.birthYear);
// //     }
// //  */
// //     this.None = 'test';
// // };
// // console.log(Person.prototype);

// // Person.test = 'test2';
// // const jonas = new Person('jonas', 1990);
// // // console.log(jonas instanceof Person);

// // /*
// //     1. New {} is created
// //     2. function is called, this = {}
// //     3. function automatically return {}
// // */
// // console.log(jonas);
// // console.log(jonas.__proto__);

// // console.log(Person.prototype);

// // console.log(Person.__proto__);

// // Person.prototype.calcAge = function () {
// //   console.log(2037 - this.birthYear);
// // };

// // // jonas.calcAge();
// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ ===  Person.prototype);
// // console.log(jonas);
// // Person.prototype.species = 'Homo Sapiens';
// // console.log(jonas.species);
// // console.log(jonas.hasOwnProperty('species'));
// // console.log(jonas.hasOwnProperty('firstName'));
// // // Object.prototype (Top of prototype chain)
// // console.log(jonas.__proto__.__proto__);
// // console.log(jonas.__proto__.__proto__.__proto__);
// // console.dir(jonas.__proto__.constructor);
// // const arr = [1,3,2,4,3,2];
// // console.log(arr.__proto__);
// // console.log(arr.__proto__=== Array.prototype);

// // Array.prototype.unique = function(){
// //     return [...new Set(this)];
// // }

// // console.log(arr.unique());

// // console.dir(document.querySelector('h1'));
// // console.dir(x=>x+1);

// const Car  = function(make,speed){
//   this.make = make;
//   this.speed = speed;
//   this.test= function(){
//     console.log('haha');

//   }
// }

// Car.prototype.accelerate = function(){
//   this.speed+=10;
//   console.log(`'${this.make}' going at ${this.speed} km/h  `);
// }
// Car.prototype.brake = function(){
//   this.speed-=5;
//   console.log(`'${this.make}' going at ${this.speed} km/h  `);
// }

// const car1 = new Car('BMW',120);
// const car2 = new Car('Mercedes',95);
// console.log(car1.hasOwnProperty('test'));

// console.log(Car.prototype);
// /* car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.brake();
// car1.brake(); */

// Class expression
// const PersonCL = class{

// }

// class PersonCl {
//   constructor(fullName, birhtYear) {
//     this.fullName = fullName;
//     this.birthYear = birhtYear;
//   }
//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // set a property that already exist
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert('Name is not a full name');
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('Hey 👋');
//     console.log(this);
//   }
// }

/* PersonCl.hey = function(){
  console.log('Hey 👋');
  console.log(this);
  
} */
// PersonCl.hey();
// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.__proto__ === PersonCl.prototype);
/* PersonCl.prototype.greet = function(){
  console.log(`Hey ${this.firstName}`);
}
 */
// jessica.greet();

// const account = {
//   owner: 'Jonas',
//   movement: [200, 530, 120, 300],
//   get latest() {
//     return this.movement.at(-1);
//   },
//   set latest(mov) {
//     this.movement.push(mov);
//   },
// };

// console.log(account.latest);
// account.movement = 50;

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName,birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();
// steven.__proto__.calcAge.call(steven);
// console.log(steven.__proto__ === PersonProto);
// const sarah = Object.create(PersonProto);
// sarah.init('sarah',1979);
// sarah.calcAge();
// console.log(sarah);

/* class CarCl {
  constructor(make,speed){
    this.make = make;
    this.speed = speed;
  }
  get speedUS (){
    return this.speed/1.6;
  }
  set speedUS(speed){
    this.speed = speed*  1.6;
  }
  accelents(){
    this.speed+=10;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }
  brake(){
    this.speed-=5;
    console.log(`'${this.make}' going at ${this.speed} km/h`);
  }
}

const car1 = new CarCl('Ford',120);
console.log(car1.speedUS);
car1.speedUS = 120/1.6;

console.log(car1);

 */

/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this,firstName, birthYear);
  this.course = course;
};


Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;


Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
console.log(mike.__proto__); // step link 
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

console.dir(Student.prototype.constructor); */

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function(){
//   this.speed+=10;
//   console.log(`'${this.make}' going at ${this.speed} km/h  `);
// }
// Car.prototype.brake = function(){
//   this.speed-=5;
//   console.log(`'${this.make}' going at ${this.speed} km/h  `);
// }

// const EV = function(make,speed,charge) {
//   Car.call(this,make,speed);
//   this.charge =charge;
// };
// // Link the prototypes
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo;
// }

// EV.prototype.accelerate = function(){
//   // Polymorphism but wanting to inherit from father class ( Car )
//   Car.prototype.accelerate.call(this);
//   //
//   /* this.speed+=20; */
//   this.charge--;
//   console.log(`'${this.make}' going at ${this.speed}km/h, with a charge of ${this.charge}%`);
// }

// const tesla = new EV( 'Tesla',120,23);
// tesla.chargeBattery(90);
// tesla.brake();
// tesla.accelerate();
// Inheritance class ESC6
/* class PersonCl {
  constructor(fullName, birhtYear) {
    this.fullName = fullName;
    this.birthYear = birhtYear;
  }
  // Method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  // set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert('Name is not a full name');
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey 👋');
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birhtYear, course) {
    // Always need to happen first
    super(fullName, birhtYear);
    this.course = course;
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } year old, but as a student I feel more  like ${2037 - this.birthYear+10}`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
 */

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };
// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// /* StudentProto.init = function(firstName,birthYear,course){

// } */
// const jay = Object.create(StudentProto);
// jay.init('Jay-z', 1990, 'DSA');
// console.log(jay);
// jay.introduce();
// jay.calcAge();
/* const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);

StudentProto.init= function(firstName,birthYear,course){
    PersonProto.init.call(this,firstName,birthYear);
    this.course = course;
}

StudentProto.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay-z',1990,'DSA');
console.log(jay); */
//1) public fields
//2) Private fields
//3) Public methods
//4) Private methods
// class Account {
//   // 1)Public fields (instance)
//   locate = navigator.language;
//   // 2)Private fields (instance)
//   #movement = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     //Protect Property
//     this.#pin = pin;
//     // console.log(`Thank for opening an account, ${owner}`);
//   }
//   // 3) Public methods
//   //Public interface
//   getMovement() {
//     return this.#movement;
//   }
//   deposit(val) {
//     this.#movement.push(val);
//     return this;
//   }
//   widthraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }

//   // 4) Private methods
//   _approveLoan(val) {
//     return true;
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// acc1.deposit(250);
// acc1.widthraw(140);
// console.log(acc1);
// acc1.requestLoan(1000);
// // acc1.getMovement().push(2000);
// console.log(acc1.getMovement());
// // console.log(acc1.#pin);
// // console.log(acc1.#movements);
// console.log(acc1._approveLoan(1000));

// // chaining
// acc1.deposit(300).deposit(500).widthraw(35).requestLoan(25000).widthraw(4000);

// console.log(acc1.getMovement());

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed =speed * 1.6;
  }
}

class EVCl extends CarCl {
  // Private fields
  #charge;
  constructor(make, speed, charge) {
    super(make,speed);
    this.#charge = charge;
  }
  // function Prototype 
  // Public method
  accelerate() {
    this.#charge--;
    console.log(
      `'${this.make}' going at ${this.speed}km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
  }
  brake(){
    CarCl.prototype.brake.call(this);
    return this;
  }
}
const car1 = new EVCl('Tesla',120,23);
// console.log(car1);
car1.speedUS = 300;
// console.log(car1);
// car1.accelerate();
// car1.brake();
car1.accelerate().brake().brake().accelerate();



// EV.prototype.chargeBattery = function(chargeTo){
//   this.charge = chargeTo;
// }

// EV.prototype.accelerate = function(){
//   // Polymorphism but wanting to inherit from father class ( Car )
//   Car.prototype.accelerate.call(this);
//   //
//   /* this.speed+=20; */
//   this.charge--;
//   console.log(`'${this.make}' going at ${this.speed}km/h, with a charge of ${this.charge}%`);
// }
