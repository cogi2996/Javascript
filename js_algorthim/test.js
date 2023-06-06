'use strict';
const printForecast = function (tempers) {
  let str = '';
  for (let i = 0; i < tempers.length; i++) {
    str = str + `...${tempers[i]}*C in ${i + 1} days`;
  }
  return str = str + '...';
  
};

console.log(printForecast([12, 5, -5, 0, 4]));
