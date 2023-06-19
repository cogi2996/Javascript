'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  resName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // openingHours: openingHours,
  openingHours,
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered tp ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicous pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
  test() {
    console.log('hello');
  },
};
//----------------------------------------------------------------
// #020.CODING CHALLENCE #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
  ]);

console.log(gameEvents.values());
//#3.1
const events = [...new Set(gameEvents.values())]
//#3.2
gameEvents.delete(64) 
//#3.3
console.log(`An event happend on average, every ${90/gameEvents.size} minutes `);
//#3.4
for(const [time, value] of gameEvents)
{
  const half = time<=45 ? `[FIRST HALF]` : `[SECOND HALF]`
  console.log(`${half} ${time}: ${value}  `);
    
}

//----------------------------------------------------------------
//016.Sets
/* const ordersSet = new Set(
  ['Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]
); */
/* console.log(ordersSet);

console.log(new Set('haha'));
console.log(new Set());
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

console.log(ordersSet.add('Garlic Bread'));

console.log(ordersSet.add('Garlic Bread'));

console.log(ordersSet);
console.log(ordersSet.delete('Risotto'));
// ordersSet.clear()
// console.log(ordersSet);

for(const order of ordersSet) console.log(order);

const staff = ['Waiter','Chef','Waiter','Manager','Chef','Waiter']

const staffUnique = [...new Set(staff)]
console.log(staffUnique);
console.log(new Set(staff).size);
console.log(new Set('Dang Cong Tuan').size);
 */
//----------------------------------------------------------------
// Map
// const rest  = new Map();
// rest.set('name','Classico Italiano')
// rest.set(1,'Firenze, Italy')
// console.log(rest.set(2,'Lisbon, Portugal'));

// rest.set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open',11)
// .set('close',23)
// .set(true,'We are open :D')
// .set(false,'We are closed :(')

// console.log(rest.get('name'));
// const time = 15
// console.log(rest.get(rest.get('open')<time && time < rest.get('close')));

// console.log(rest.delete(2));
// console.log(rest.has(1));
// console.log(rest.size);


// console.log(rest.set([1,2],'Test'));
// console.log(rest.get([1,2]));

// const arr = [1,2]
// console.log(rest.set(arr,'Test Pass'));
// console.log(rest.get(arr));
// 018. Maps_iteration



/* const question = new Map([
  ['question','What is the best programing language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true,'Correct 🎉'],
  [false,'Try again! '],
])

console.log(question);
const hoursMap  = new Map(openingHours.entries)
console.log(new Map(hoursMap));

// quiz app
console.log(question.get('question'));

for(const [key,value] of question){
  if(typeof key === 'number') console.log(`Answer ${key}: ${value} ` );
  
}
// const answer = Number(prompt('Your answer'))
const answer  =  3
console.log(question.get(answer === question.get('correct')));

// convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]); */













//----------------------------------------------------------------
// coding challence #2
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//#2.1
/* for (const [index, name] of Object.entries(game.scored)) {
  console.log(`Goal ${Number(index) + 1}:${name}  `);
}

//#2.2
let average = 0;
let gameOddsValues = Object.values(game.odds);
for (const item of gameOddsValues) {
  average+= item;
}
console.log('Average odds:',average/gameOddsValues.length);
//#2.3
const [team1Val,xVal,team2Val] = Object.values(game.odds)
console.log(`Odd of victory ${game['team1']} :${team1Val} `);
console.log(`Odd of draw:${xVal} `);
console.log(`Odd of victory ${game['team2']} :${team2Val} `);
//#2.4
const scorers = {}
for(const player of game.scored) {
  scorers[player] =  scorers[player]+1||1
  
}
console.log(scorers); */

//----------------------------------------------------------------

//014.looping object
/* const properties = Object.keys(openingHours);
let openStr = `We are open on ${properties.length} on:`;

for (const day of Object.keys(openingHours)) {
  openStr += ` ${day},`;
}
console.log(openStr);

// Properties VALUES  
const values = Object.values(openingHours);
console.log(values);

// entries Ojbect
const entries  = Object.entries(openingHours);
console.log(entries);
for(const [key,{close,open}] of entries)
{
  console.log(`On ${key} we open at ${open} and close at ${close} `); */
// }
//----------------------------------------------------------------
//013. optional chaining
// restaurant.test()
/* if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// with optional chaining
console.log(restaurant.openingHours.mon?.open);

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'close';
  console.log(`On ${day}, we open at ${open}  `);
}

// function
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');
// array

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty'); */

//----------------------------------------------------------------
// 011.for of
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// for(const [i,el] of menu.entries()) {
//   // const [index,itemMenu] = item
//   // console.log(`${index+1}: ${itemMenu}`);
//   console.log(`${i+1}: ${el}`);

// }
// console.log(...menu.entries());

//----------------------------------------------------------------
// coding challenge #1
/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
let [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const { team2, team1, x } = game.odds;
const {odds:{team1,x:draw,team2}} = game
console.log(team2, team1, draw);
const printGoals = function(...players) {
  console.log(`${players.length} goals were scored` );
  
}

printGoals(...game.score)

team1 < team2 && console.log('team 1 is more likely to win') 
team2 < team1 && console.log('team 2 is more likely to win')  */
//----------------------------------------------------------------
//Logical Assigment Operators
/* const rest1 = {
  name:'Capri',
  numGuests:0
}

const rest2 = {
  name:'La Piazza',
  owner:'Giovani Rossi'
}

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests);
console.log(rest2.numGuests);

rest1.owner = rest1.owner && '<ANONYMOUS>'
rest2.owner = rest2.owner && '<ANONYMOUS>'

console.log(rest1);
console.log(rest2);

rest1.owner &&=  '<ANONYMOUS>'
rest2.owner &&=  '<ANONYMOUS>' */

//----------------------------------------------------------------

// NUllish coalesting operator

/* restaurant.numGuests = 0
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect); */

//----------------------------------------------------------------

// short-circuting
/* console.log(0||null||1); 
const number1  = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(number1);
restaurant.numGuests = 23;
const number2 = restaurant.numGuests || 0 // loi dung toan tu ||
console.log(number2);


if(restaurant.orderPizza)
  restaurant.orderPizza('mushrooms','spinach')
restaurant.orderPizza&&restaurant.orderPizza('mushrooms','spinach') */
//----------------------------------------------------------------

// REST
// REST in array
// SPREAD ,because on the right side of '='
/* const arr =  [1,2,...[3,4]];
console.log(arr);
// REST, because on the right side of '='
const [a,b,...other] = [1,2,3,4,5];
console.log(a,b,other);

const [pizza, ,risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu] 
console.log(pizza,risotto,otherFood);
// REST in OBJECT 
const {fri,...weekdays} = restaurant.openingHours
console.log(fri,weekdays);
 */
//2) REST in Function
/* const add = function(...numbers){
  let sum = 0
  for(let i = 0;i<numbers.length;i++)
  {
    sum += numbers[i];
  }
  console.log(sum);
   sum;
}

add(1,2)
add(1,2,3,4)
const x = [1,1,1]
add(...x)

restaurant.orderPizza('mushrooms','onion','olives','spinach');
restaurant.orderPizza('mushrooms'); */

//----------------------------------------------------------------
// SPREAD
/* const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// COPY Array
const menuCopy = [...restaurant.mainMenu];
// join 2 array
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuCopy, menu); */

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1? "),
//   prompt('ingredient 2'),
//   prompt('ingredient 3'),
// ];

// restaurant.orderPasta(...ingredients);

/* const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Cong Tuan' };
console.log(newRestaurant);

const restaurantCopy = {...restaurant}
restaurantCopy.resName = 'William'
console.log(restaurantCopy.resName,restaurant.resName);
restaurantCopy.mainMenu.push('haohaochuacay')
console.log(restaurantCopy.mainMenu,restaurant.mainMenu); */

//----------------------------------------------------------------

/* restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
}); */

/* restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
}); */
/* const [x,y,z] = restaurant.categories;
console.log(x,y,z);

let [main, , secondary] = restaurant.categories
console.log(main,secondary); */

// 1.swap
// 1.1.traditional swap
/* const temp = main;
main = secondary
secondary = tempF
console.log(main,secondary); */

// 1.2.destructuring swap
/* [secondary,main] = [main,secondary]
console.log(main,secondary); */

// receiver two return value from a function
/* const [starter, mainOrder] = restaurant.order(2,0)
console.log(starter,mainOrder); */

// destructuring array lồng
/* const nested = [2,4,[5,6]]
const [i, ,[j,k]] = nested
console.log(i,j,k ); */

// get a undefined value in array and use defaul in destructuring
/* const [a=-1,b= -1,c= -1] = [1,2]
console.log(a,b,c); */

//destructuring object
// Trường hợp chưa khai báo biến các biến
/* const { resName, openingHours, categories } = restaurant;
console.log(resName, openingHours, categories);

const {
  resName: restaurantsName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantsName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); */

// mutating variables
// trường hợp đã khai báo biến, và muốn lấy giá trị trogn obj để gán vào các biến đã khai báo từ trước
/* let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); */

// Nested object
/* const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const {fri:{open:openRes,close:closeRes}} = restaurant.openingHours;
console.log(openRes,closeRes,'haha'); */
