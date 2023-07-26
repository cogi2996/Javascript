'use strict';
const Person = function(firstName,birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.calcAge = function(){
        return (2037 - this.birthYear);
    }
}

const jonas = new Person('jonas',1990);
console.log(jonas);
console.log(jonas instanceof Person);
console.log(jonas.calcAge());
