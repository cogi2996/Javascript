'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type} ">${
      i + 1
    }  ${type} </div>
    <div class="movements__value">${mov} €</div>
  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const createUsernames = function(accs){
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(' ').map(text => text[0]).join('')
  })
}
createUsernames(accounts)

const calcDisplayBalance = function(movements){
  const balance = movements.reduce((acc, mov) => acc + mov, 0)
  labelBalance.textContent = `${balance} EUR`
}
calcDisplayBalance(account1.movements)

// LECTURES
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/////////////////////////////////////////////////
//014 The reduce Method
console.log(movements);

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maxium value
const max = movements.reduce((max,cur) => {
  return cur > max ? cur : max
}, movements[0])
console.log(max);


// 013 The Filter Method

/* const deposit = movements.filter(mov => mov > 0)
console.log(movements);
console.log(deposit);

const depositFor = [];
for(const mov of movements) {mov>0?depositFor.push(mov):''}
console.log(depositFor);

const withdrawals = movements.filter(mov => mov<0)
console.log(withdrawals ); */

/////////////////////////////////////////////////



/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
// 011 The map method
/* const eurToUsd = 1.1;
const movementsUSD = movements.map(
  mov=> mov*eurToUsd
)
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements){
  movementsUSDfor.push(mov*eurToUsd)
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov,i,_) =>{
        return `Movement ${++i}: you ${mov >0 ?`deposited ${mov}`:`withdrew ${-mov}`} `;
    }
)
console.log(movementsDescriptions);
 */
/////////////////////////////////////////////////
// 009 CODING CHALLENCE #1
/* const juliaData = [3, 5, 2, 12, 7],
 KateData = [4, 1, 15, 8, 3];

const juliaDataCop = juliaData.slice(1,-2);
const dataDog = juliaDataCop.concat(KateData)
const checkDogs = function(ages){
  ages.forEach(function(age,i){
    const type = age >=3 ? `an adult, and is ${age}  years old`:' still a puppy🐶';
    console.log(`Dog number ${i+1} is ${type}  `);
  })
}
checkDogs(dataDog);
 */

/////////////////////////////////////////////////
// 006 forEach with Maps and Sets
/* currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}  `);
});

const currenciesUnique = new Set(currencies.keys());
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value} : ${value}`);
});
 */
/////////////////////////////////////////////////

// 005 FOREACH
// movements.forEach(function(mov,i,arr) {
//   if(mov>0)
//     console.log(`Movement ${++i}: you deposited ${mov} `);
//   else
//     console.log(`Movement ${++i}: You withdrew ${Math.abs(mov)} `);
// })
/////////////////////////////////////////////////
/* let arr = ['a','b','c','d','e'];

console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1,-2));
console.log(arr.slice());
console.log([...arr]);


//  SPLICE
// console.log(arr.splice(2));
arr.splice(-1)
console.log(arr);
arr.splice(1,2)
console.log(arr);

// REVERSE
arr = ['a','b','c','d','e'];
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2)
console.log(letters);

// JOIN
console.log(letters.join(' - ')); */

// Use At for ARRAY
/* const arr = [23,11,64]
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length-1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
// use at for STRING
console.log('jonas'.at(0));
console.log('jonas'.at(-2)); */