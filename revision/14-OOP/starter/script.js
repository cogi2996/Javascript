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

class PersonCl {
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
  set fullName(name){
    if(name.includes(' ')) this._fullName = name;
    else alert('Name is not a full name');
  }

  get fullName (){
    return this._fullName;
  }

  static hey (){
    console.log('Hey 👋');
    console.log(this);
    
  }
}

/* PersonCl.hey = function(){
  console.log('Hey 👋');
  console.log(this);
  
} */
PersonCl.hey();
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
/* PersonCl.prototype.greet = function(){
  console.log(`Hey ${this.firstName}`);
}
 */
jessica.greet();

const account = {
  owner: 'Jonas',
  movement: [200, 530, 120, 300],
  get latest() {
    return this.movement.at(-1);
  },
  set latest(mov) {
    this.movement.push(mov);
  },
};

console.log(account.latest);
account.movement = 50;
