'use strict';

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  if (birthYear >= 1981 && birthYear <= 1996) {
    let firstName = 2;
    console.log(firstName);
  }
  console.log(firstName);

  return age;
}

let firstName = 'Tuan';
calcAge(1991);

console.log(s);
var s;
 */

/* const calcAge = function(birthYear) {
  console.log(this);
  
}
 */

/* const jonas = {
  year: 1991, */
  // solution 1
  /*   
    calcAge: function (){
    console.log(this);
    
    const self = this;
    const isMillenial = function()
    {
      console.log(self);
      
    }
    isMillenial()
  } */
  // solution 2: dùng arrow function
/*   calcAge: function () {

    const isMillenial =  () => {
      console.log(this);
    };
    isMillenial();
  },
};
jonas.calcAge();
 */

/* const me = {
  name : 'Tuan',
  age : 19
}

const friend  =  me ;
friend.age =  20
console.log(friend); */

/* const jessica = {
  firstName :'Jessica',
  lastName: 'William',
  age:27,
}
const marriedJe = jessica

marriedJe.lastName ='Davis'
console.log(marriedJe,jessica);

marriedJe = {}  */// tạo ra một địa chỉ mới bên call stack - với value là địa chỉ của {} bên heap, nó trỏ về khác giá trị địa chỉ ban đầu => vi phạm const


const jessica2 ={
  firstName: 'Jessica',
  lastName: 'Williams',
  age:27,
  family:['John','Helen']
}

const jessicaCopy = Object.assign({},jessica2)

jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('kaka','Dola')
console.log(jessica2);
console.log(jessicaCopy);
