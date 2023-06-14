'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  resName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
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
  orderPizza: function (mainIngredient,...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
    
  }
};
//----------------------------------------------------------------
// REST 
// REST in array
// SPREAD ,because on the right side of '='
const arr =  [1,2,...[3,4]];
console.log(arr);
// REST, because on the right side of '='
const [a,b,...other] = [1,2,3,4,5];
console.log(a,b,other);

const [pizza, ,risotto,...otherFood] = [...restaurant.mainMenu,...restaurant.starterMenu] 
console.log(pizza,risotto,otherFood);
// REST in OBJECT 
const {fri,...weekdays} = restaurant.openingHours
console.log(fri,weekdays);

//2) REST in Function
const add = function(...numbers){
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
restaurant.orderPizza('mushrooms');

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
