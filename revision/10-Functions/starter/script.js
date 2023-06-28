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

/* const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'Ew',
  bookings: [],
};

const book = lufthansa.book;
// DOES NOT WORK
//book(23,'Sarah Williams')

// CALL METHOD
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Mary Cooper');
console.log(eurowings);
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, 583, 'Marry Cooper');
console.log(swiss);

// APPLY METHOD
const flightData = [525, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// 009 the Bind method
const bookEW = book.bind(eurowings);
const bookEH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Marth Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane()
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate){
  // return (rate,value) => value*(rate+1)
  return function(value){
    return value*(rate+1)
  }
} 
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
 */

// #010 CODING CHALLENCE #1

/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}(Write option number)`
      )
    );
    typeof answer === 'number' &&
      answer <= this.answers.length &&
      answer >= 0 &&
      this.answers[answer]++;
    this.displayResults('array')
    this.displayResults('string')
  },

  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answers);
    else if (type === 'string')
      console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));


  poll.displayResults.call({answers:[5, 2, 3]},'array')
  poll.displayResults.call({answers:[1, 5, 3, 9, 6, 1]},'string') */

//011 immediately  invoked function expression
/* const runOnce = function(){
  console.log('This will never run again');
}
runOnce();

(function(){
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))() */

// 012 closues

/* const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger `);
  };
};

const booker = secureBooking();
console.dir(booker);
// booker() */

// 013 More closures Examples

// Example 1
/* let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f)
h();
f();
console.dir(f) */

/* const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passenger `);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds `);
};

const perGroup = 1000;
boardPassengers(180,3)
 */

// 014 Coding challence #2

/* (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
 */

/* function testAgurment() {
  for(let item of arguments) {
    console.log(item);
    
  }
}

testAgurment('haha','hihi') */

const obj = {
  a : 'haha',
  b:[1,2,3],
  c(haha){
    console.log('hihi');
    
  }
}

console.table(obj);
document.querySelector('body').style.backgroundColor = 'red'