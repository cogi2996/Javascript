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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(text => text[0])
      .join('');
  });
};
createUsernames(accounts);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} €`;
};

const calcDisplaySumary = function (acc) {
  const movements = acc.movements;

  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} €`;

  const out = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${out} €`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);

      return int >= 1;
    })
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = interest;
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySumary(acc);
};
//Event handler
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting

  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    } `;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(receiverAcc,amount);

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update the UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    console.log(accounts);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// LECTURES
/////////////////////////////////////////////////
// 025 Moẻ Way ò creating and filling arrays
const x = new Array(7);
console.log(x);

console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);

console.log(x);
// Array.from()
const y = Array.from({ length: 7 }, () => 1);
const z = Array.from({length:7},(_,i)=>i+1);
// const randomArr  = Array.from({length:100},()=>Math.trunc(Math.random()*100+1));
// console.log(randomArr);

console.log(z);

labelBalance.addEventListener('click',function(){
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
  el => Number(el.textContent.replace('€',''))
  )
  console.log(movementsUI);
  
})



/////////////////////////////////////////////////
//024 Sorting Arrays
//  String
/* const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);
// Numbers
movements.sort((a, b) => a - b);
console.log(movements);
movements.sort((a, b) => b - a );
console.log(movements);

movements.sort((a, b) => {
  if(a<b)
    return 1;
  else if(a >b)
    return -1;
});
console.log(movements);
 */

/////////////////////////////////////////////////
//023 flat and flatMap()
/* const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); */

// const accountMovements = accounts.map(acc => acc.movements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc,curr)=> acc + curr,0)

/* const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, curr) => acc + curr, 0);
console.log(overalBalance);

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(overalBalance2); */

// 022 some and every
/* console.log(movements);

// EQUALITY
console.log(movements.includes(-130));
console.log(movements.some(mov => mov === -130)+'\n-----------');

// some CONDITION
console.log(account1.movements.some(mov => mov < -100000));

// Every CONDITION
console.log(account4.movements);

console.log(account4.movements.every(mov => mov > 0)); */

// The find method
/* const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find((acc, key) => {
  console.log(key);
  
  acc.owner === 'Jessica Davis';
});

console.log(account);

const map1 = Object.entries(account1).map(acc=>1);
 */
/* const account = accounts.filter(acc =>acc.owner === 'Jessica Davis')
console.log(account[0]); */

/////////////////////////////////////////////////
// #Coding challence #3
/* const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + 4 * age))
    .filter(age => age >= 18)
    .reduce((acc, curr,_,adults) => acc + curr/adults.length, 0) ;

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); */

/////////////////////////////////////////////////
//The magic of chainging method
/* console.log(movements);

const eurToUsd = 1.1;
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositUSD); */

// CODING CHALLENCE #2
/* const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + 4 * age));
  const adults = humanAges.filter(age => age >= 18);
  const average = adults.reduce((acc, curr) => acc + curr, 0) / adults.length;
  // const average = adults.reduce((acc, curr,_,arr) => acc + curr/arr.length, 0);
  return average;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); */

/////////////////////////////////////////////////

/* const currencies = new Map([
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
const max = movements.reduce((max, cur) => {
  return cur > max ? cur : max;
}, movements[0]);
console.log(max);
 */
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
