'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

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

/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////
//008 Create Dates
const now = new Date();
console.log(now);
console.log(new Date('Sat Jul 08 2023 22:56:50'));
console.log(new Date('Jul 09 2010 22:0:0'));
console.log(new Date('Jul 09 ,2050'));
console.log('================================');

console.log(account1.movementsDates[0]);
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037,10,19,15,23,5));
console.log(new Date(2037,10,37));
console.log(new Date(0));
console.log(new Date(3*24*60*60*1000));

// Working with dates
console.log(`-Working with array-`);

const future = new Date(2037,10,19,15,23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
console.log(new Date(future.getTime()));
console.log(Date.now());














/////////////////////////////////////////////////
//007 Working with BigInt
/* console.log(2**53-1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2**53+1);
console.log(2**53+2);
console.log(2**53+3);
console.log(12412351251235123512n);
console.log(BigInt(9007199254740991));

const huge = 23412512532465232345n;
const num = 2301;
console.log(huge*BigInt(num));


// Exceptions
console.log(20n>15);
console.log(20 === 20n);
console.log(20 == 20n);
console.log(typeof 20n);
console.log(20 == '20');

console.log(huge + ' is REALLY  big!!!');
console.log(`${huge} is REALLY  big!!!`);
console.log(`${123n} is BigInt `);

console.log(11n/3n);
console.log(11/3);
console.log(11n + 3n);
console.log(11n - 3n);
 */







/////////////////////////////////////////////////
// 006 numeric separator
/* const num = 12_34_456;
console.log(num);
const str = `12_34_456`;
console.log(+str.replace(/_/g,''));
 */

//005 The remainder operator
// console.log(5%2);
// console.log(5/2);
// const isEven = n => n%2===0;
// console.log(isEven(8));
// console.log(isEven(9));
// console.log(isEven(12));

// labelBalance.addEventListener('click',function(){
//   Array.from(document.querySelectorAll('.movements__row')).forEach((row,i)=>i%2===0?row.style.backgroundColor = 'orangered':'');
//   [...document.querySelector('.movements__row')].forEach((row,i)=>i%2===0?row.style.backgroundColor = 'orangered':'');
  
// })


/////////////////////////////////////////////////
//004 Math and Rounding
// console.log(Math.floor(-25.9));

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(...[1, 3, 4, 9]));
// console.log(Math.max(5, 6, 15, 8));
// console.log(Math.max(5, 6, '15', 8));
// console.log(Math.max(5, 6, Number.parseInt('15px'), 8));
// console.log(Math.min(5, 6, 15, 8));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// const randomInt = (max, min) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomInt(2, 5));
// console.log(Math.trunc(23.3));

// //Rounding decimals
// console.log(+(2.7).toFixed(0));
// console.log(+(2.7).toFixed(3));
// console.log(+(25.7).toFixed(1));
// console.log(Math.floor('-23.35'));

/////////////////////////////////////////////////

//003
// console.log(23 === 23.0);
// console.log(0.1+ 0.2);
// console.log(0.1+0.2=== 0.3);
// //conversion
// console.log(Number('23'));
// console.log(+'23');
// //
// console.log(Number.parseInt(' 30px'));
// console.log(Number.parseInt('e23'));
// console.log('---------------');

// // console.log(parseFloat(' 2.5ream '))
// console.log(Number.parseInt(' 2.5rem'));
// console.log(Number.parseFloat(' 2.5rem'));
// console.log(parseFloat('   2.4 px'));
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN('20x'));
// console.log(Number.isNaN(+'20px'));
// console.log(Number.isNaN(20/0));
// console.log('---------------');

// // checking if value is number
// console.log(Number.isFinite(20.1));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(20/0));
// console.log(+'20x*');
