// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '';

// if (x === '23') {
//   console.log(x);
// }


const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

let printForecast = function(arr) {
  for (let i = 0; i < arr.length; i++){
    console.log(` ...${arr[i]}°C in ${i + 1} days ...`);
  }
  return;
}
printForecast(temp1);
printForecast(temp2);

