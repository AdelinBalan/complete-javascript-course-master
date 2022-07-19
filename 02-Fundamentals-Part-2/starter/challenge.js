
// const dolphData1 = [44, 24, 71];
// const koalData1 = [65, 54, 49];
// const dolphData1 = [85, 54, 41];
// const koalData1 = [23, 34, 27];

// function sum(x, y, z) {
//   return x + y + z;
// }

// console.log(calcAverage(dolphData1))
// console.log(calcAverage(koalData1))

// function calcAverage(data = []) {
//   const avg = sum(...data) / data.length;
//   return avg;
// }

// const checkWinner = (average1, average2) => {
//   // const winner = undefined;
//   const firstAvg = calcAverage(average1);
//   const secondAvg = calcAverage(average2);

//   if (firstAvg >= secondAvg * 2) {
//     console.log(`Dolphins win (${firstAvg} vs. ${secondAvg})`);
//     return winner = firstAvg;
//   } else if (secondAvg >= firstAvg * 2) {
//     console.log(`Koalas win (${firstAvg} vs. ${secondAvg})`);
//     return winner = secondAvg;
//   } else {
//     return `No one wins.`
//   }
// }

// const check = checkWinner(dolphData1, koalData1);
// console.log(check);

// c***********************************************************88 RECURSIVE FORMULA FOR .flat()

// let elements = [];
// function recursion(arr){
//   for(let i = 0; i < arr.length; i++){
//     if(Array.isArray(arr[i])) {
//       recursion(arr[i])
//     } else {
//       elements.push(arr[i]);
//     }
//   }
//   return elements;
// }

// const x = recursion([1, 2, [],[[3, 5, 7, 8],[],10, 34, 62, 62, [[10, 6, 3, 3]]]])
// console.log(x)

// c*************************************************************************
// 2nd CODING CHALLENGE

// const bill = 275;
// const tipPercent = bill >= 50 && bill <= 300 ?  15 : 20;
// let tip = bill * tipPercent / 100;
// console.log(`For your bill of ${bill} dollars, it would be decent of you to add ${tipPercent}% as tip. You should pay a total of ${bill + tip}`);
// // console.log(bill); 
// // console.log(tip); 

// const calcTip = function(bill) {
//   const tipPercent = bill >= 50 && bill <= 300 ?  15 : 20;
//   let tip = bill * tipPercent / 100;
//   return tip;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// // const x = calcTip(100);
// console.log(bills);
// console.log(tips);
// console.log(total);


// 3rd CODING CHALLENGE

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function() {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   }
// }

// const john = {
//   fullname: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function() {
//     this.BMI = this.mass / this.height ** 2;
//     return this.BMI;
//   }
// }

// if(mark.calcBMI() > john.calcBMI() ) {
//   console.log(`${mark.fullName}'s BMI(${mark.BMI}) is higher than ${john.fullname}'s (${john.BMI})!`)
// } else {
//   console.log(`${john.fullName}'s BMI(${john.BMI}) is higher than ${mark.fullname}'s (${mark.BMI})!`)
// }  


// 4th CODING CHALLENGE

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// const calcTip = function(bill) {
//   const tipPercent = bill >= 50 && bill <= 300 ?  0.15 : 0.20;
//   let tip = bill * tipPercent;
//   return tip;
// }

// for (let i = 0; i < bills.length ; i++){
//   // console.log(i);
//   tips.push(calcTip(bills[i]));
//   totals.push((bills[i] || 0) + (tips[i] || 0));
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

// const calcAverage = function(arr) {
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
//   // console.log(sum);
// }

// console.log(calcAverage(totals));