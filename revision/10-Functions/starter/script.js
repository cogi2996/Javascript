'use strict';

// const bookings = [];

/* const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
/*   // ESC 5
  //   numPassengers = numPassengers ?? 1 , price =  price ?? 1  
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
} */
/* createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', undefined, 300);
createBooking('LH123', undefined, undefined); */

/* const flight = 'LH234'
const jonas =  {
    name: 'Jonas Schmedtmann',
    passport: 2345
}

const checkIn = function(flightNum,passengers) {
    flightNum = 'LH999'
    passengers.name = 'Mr.' + passengers.name
    if(passengers.passport === 2345)    alert('Checked in')
    else    alert('Wrong passport')
}

checkIn(flight,jonas) */
/* console.log(flight);
console.log(jonas);

// Is the same as doing ...
const flightNum = flight;
const passenger = jonas; */

/* const newPassport  = function(person){
    person.passport = Math.trunc(Math.random()*1000000)
}

newPassport(jonas)
checkIn(flight,jonas) */
// 006 Function accepting callback functions

/* const oneWord = function(str){
    return str.replace(/ /g,'').toLowerCase()
}

const upperFirstWord = function(str){
    const [first,...other] = str.split(' ')
    return [first.toUpperCase(), ...other].join(' ') 
}

const transformer = function(str,fn){
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)} `);
    console.log(`Transformed by: ${fn.name} `);
}

transformer('Javascript is the best!', upperFirstWord)
transformer('Javascript is the best!', oneWord)

const high5 = function(){
    console.log('👋');
}

document.body.addEventListener('click',high5);
['jonas','Martha','Adam'].forEach(high5); */

// 007 function returning function

/* const greet = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}  `);
    }
} */

/* const greeterHey = greet('Hey')
greeterHey('Jonas')
greeterHey('Steven')
greet('Hey')('Jonas')
 */
/* const greet = greeting => name => console.log(`${greeting} ${name}  `);
greet('hey')('Tuan') */

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`,name});
  },
};

lufthansa.book(239,'Jonas Schedtmann')
lufthansa.book(635,'John Smith')
console.log(lufthansa);

const eurowings = {
    airline:'Eurowings',
    iataCode:'Ew',
    bookings:[],
}

const book = lufthansa.book;
// DOES NOT WORK
//book(23,'Sarah Williams')

// CALL METHOD
book.call(eurowings,23,'Sarah Williams');
book.call(lufthansa,239,'Mary Cooper')
console.log(eurowings);
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'SW',
    bookings:[],
}

book.call(swiss,583,'Marry Cooper')
console.log(swiss);

// APPLY METHOD
const flightData = [525,'George Cooper']
book.apply(swiss,flightData)
console.log(swiss);


