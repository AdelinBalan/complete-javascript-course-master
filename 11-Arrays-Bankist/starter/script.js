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

// Display MOVEMENTS
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;  

  movs.forEach(function (mov, i) {
    const movType = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${movType}">${
      i + 1
    } ${movType}</div>
                    <div class="movements__value">${mov}€</div>
                  </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Compute USERNAMES
const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner // creating a new property of the account objects
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

// Compute SUMMARY
const calcDipslaySummary = function (acc) {
  const income = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const expenses = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  // console.log(income)
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${income}€`;
  labelSumOut.textContent = `${Math.abs(expenses)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

// Compute BALANCE
const calcDisplayBalance = function (acc) {
  // directly create a new property on the account object (balance)
  acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// const user = 'Steven Thomas Williams'; // stw (initials in lowerCase)
// console.log(accounts)
createUserNames(accounts);

// UpdateUI function

const updateUI = function(acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display Balance
  calcDisplayBalance(acc);

  // Display summary
  calcDipslaySummary(acc);
}


// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  // currentAccount IS NOT a copy, instead it has the same memory address in the HEAP
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount)

  // will only read the pin value ONLY IF the value exists due to OPTIONAL CHAINING
  if (currentAccount?.pin === Number(inputLoginPin.value)){
    // Dipslay Ui and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  } 
});

btnTransfer.addEventListener('click', function(e) {
  // avoid page reload since it is a FORM
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  
})

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    
    //update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
})


btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount?.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    
    // delete account
    accounts.splice(index, 1);

    // clear inputs
    inputCloseUsername.value = inputClosePin.value = '';

    // hide UI
    containerApp.style.opacity = 0;
  }
})

let sorted = false;

btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // creating a SHALLOW COPY
// console.log([...arr]); // ALSO creates a shallow copy

// SPLICE

// console.log(arr.splice(2));
// arr.splice(-1); // very commonly used. It deletes the last element of the Array.
// console.log(arr)
// arr.splice(1, 2); // 2nd PARAM = no. of items to delete
// console.log(arr);

// REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['f', 'i', 'h', 'g', 'j'];
// console.log(arr2);
// console.log(arr2.reverse());
// console.log(arr2);

// CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// JOIN
// console.log(letters.join('-'));

////////////////////////////////////////////////////////////

// The new .at() method

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // traditional ways of getting last elemenet
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// // using at()
// console.log(arr.at(-1));

// console.log('Adelin'.at(0));
// console.log('Adelin'.at(-1));

////////////////////////////////////////////////////////////

// For each

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}. You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}. You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log(`--------FOREACH-------`);
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}. You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}. You withdrew ${Math.abs(movement)}`);
//   }
// });

// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

////////////////////////////////////////////////////////////
// forEach() with MAPS AND SETS

// MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function(value, key, map){
//   console.log(`${key}: ${value}`);
// });

// // SET
// const currenciesUnique = new Set(['USD', 'GPB', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// currenciesUnique.forEach(function(val, _, set){ // the _ is used as a disposable variable in JavaScript
//   console.log(`${val}: ${val}`);
// });

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// The MAP Function

// const eurToUsd = 1.1; // conversion rate
// const movementsUSD = movements.map(function(mov) {
//   return mov * eurToUsd; // value we want the new array elements to have in their original position
//   // return 23;
// })

// // arrow function
// const movementsUSDarrow = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);
// console.log(movementsUSDarrow);

// // doing the same thing without the Map method
// const movementsUSDfor = [];
// for(const mov of movements) {
//   movementsUSDfor.push(mov * eurToUsd);
// }
// console.log(movementsUSDfor)

// const movementsDescriptions = movements.map((mov, i) =>
//   `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(mov)}`
// );
// console.log(movementsDescriptions);

// The FILTER function

// more practical way, functional programming
// const deposits = movements.filter(function(mov, i, arr) {
//   return mov > 0;
// })

// console.log(movements);
// console.log(deposits);

// // Same thing using for-of loop
// const depositsFor = [];
// for (const mov of movements) {
//   if(mov > 0) {
//     depositsFor.push(mov)
//   }
// }
// console.log(depositsFor);

// const withdrawals = movements.filter(function(mov) {
//   return mov < 0;
// })
// //OR
// const withdrawalsArrow = movements.filter(mov => mov < 0);

// console.log(withdrawals)
// console.log(withdrawalsArrow)

// The REDUCE function

// console.log(movements)
// accumulator is like a snowball that keeps accumulating the values
// const balance = movements.reduce(function(acc, curr, i, arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + curr
// }, 0);
// // console.log(balance)

// const balance3 = movements.reduce((acc, curr) => acc + curr, 0);
// // console.log(balance3);

// // same thing using for-of loop

// let balance2 = 0; //basically accumulator value
// for(const mov of movements) balance2 += mov;

// // console.log(balance2);

// // Maximum value

// const max = movements.reduce((acc, mov) => {
//   if(acc > mov)
//     return acc;
//   else
//     return mov;
// }, movements[0])

// console.log(max);

////////////////////////////////////////////////////////////////////////////

// MAGIC OF CHAINING METHODS

// PIPELINE
// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//     .filter(mov => mov > 0) // returns new array
//     // .map((mov) => mov * eurToUsd) // returns new array
//     .map((mov, i, arr) => {
//       // console.log(arr);
//       return mov * eurToUsd // returns new array
//     })
//     .reduce((acc, mov) => acc + mov, 0); // returns a VALUE

// console.log(totalDepositsUSD);

////////////////////////////////////////////////////////////////////////////////

// The FIND method

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account)

// const [key, value] = Object.entries(accounts)
// console.log(`${key}: ${value}`);
// for (const account of accounts) {
//   // const acc = account.owner === 'Jessica Davis'
//   // const acc = account
// }


////////////////////////////////////////////////////////////////////////////////

// The SOME and EVERY methods

// console.log(movements);

// // checks for equality
// console.log(movements.includes(-130));


// // checks for condition : some()
// console.log(movements.some(mov => mov === -130)); // same as INCLUDES()

// const anyDeposits = movements.some(mov => mov > 500);
// console.log(anyDeposits)

// // checks for condition: every()
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // separate callback
// const deposit = mov => mov < 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));


////////////////////////////////////////////////////////////////////////////////

// Methods flat() and flatMap() 

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // extract arrays from object elements inside main array
// const accountMovements = accounts.map(acc => acc.movements)
// console.log(accountMovements)
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance)

// // flatMap()
// const overalBalance = accounts
//           .flatMap(acc => acc.movements)
          
//           .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);


////////////////////////////////////////////////////////////////////////////////

// SORTING ARRAYS


// // Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners);
// console.log(owners.sort());
// console.log(owners);

// // Numbers
// console.log(movements);

// return < 0, A, B (keep order)
// // return > 0, B, A (switch order)

// // ASCENDING
// movements.sort((a, b) => {
  //   if (a > b) return 1; // doesn't matter as long as it's > 0
  //   else if (b > a) return -1;
  // })

// // SAME THING AS ABOVE
// movements.sort((a, b) => a - b);

// console.log(movements);

// // DESCENDING
// // movements.sort((a, b) => {
// //   if (a > b) return -1; // doesn't matter as long as it's > 0
// //   else if (b > a) return 1;
// // })

// // SAME THING AS ABOVE
// movements.sort((a, b) => b - a);
// console.log(movements);


////////////////////////////////////////////////////////////////////////////////

// More ways of creating and filling Arrays

// const arr = [1, 2, 3, 4, 5, 6, 7];


// // empty Arrays + fill method
// const x = new Array(7);
// // console.log(x);
// // console.log(x.map(() => 5));
// // console.log(x)

// x.fill(1, 3, 5)
// x.fill(1);
// console.log(x)

// arr.fill(23, 2, 6);
// console.log(arr)

// // Array.from

// const y = Array.from({length: 7}, () => 55);
// console.log(y);

// const z = Array.from({length: 7}, (_, i) => i + 1);
// console.log(z);

// const randomDiceRolls = Array.from({length: 100}, () =>  Math.trunc(Math.random() * 6) + 1);
// console.log(randomDiceRolls);


// labelBalance.addEventListener('click', function(e) {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('€', '')));

//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUI2)
// })


////////////////////////////////////////////////////////////////////////////////

// More Array Methods Practice

// 1.
// const bankDepositSum = accounts.map(acc => acc.movements).flat(); // SAME THING AS FLATMAP()
const bankDepositSum = accounts
              .flatMap(acc => acc.movements)
              .filter(mov => mov > 0)
              .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum);

// 2.
// first way
const numDeposits1000A = accounts
              .flatMap(acc => acc.movements)
              .filter(mov => mov >= 1000)
              .length

console.log(numDeposits1000A)

// second way
const numDeposits1000B = accounts
              .flatMap(acc => acc.movements)
              .filter(mov => mov >= 1000)
              .reduce((sum, cur, i, arr) => arr.length)


console.log(numDeposits1000B)

// third way
const numDeposits1000C = accounts
              .flatMap(acc => acc.movements)
              .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000C)

// Prefixed ++
// let a = 10;
// console.log(++a)


// 3. 
// using Reduce() to create an object
const {deposits, withdrawals} = accounts
          .flatMap(acc => acc.movements)
          .reduce((sums, cur) => {
            // first way with code duplication
            // cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;

            // second way without code duplication
            // using bracket notation to specify where to add the accumulator to
            sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;

            return sums;

          }, {deposits: 0, withdrawals: 0})

console.log(deposits, withdrawals)


// 4.
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function(title) {

  const capitalize = str => str[0].toUpperCase() + str.slice(1); 

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
                    .toLowerCase()
                    .split(' ')
                    .map(word => exceptions.includes(word) ? word : capitalize(word)
                    ).join(' ');
  return capitalize(titleCase);

}

console.log(convertTitleCase(`this is a nice title`));
console.log(convertTitleCase(`this is a LONG title but not too long`));
console.log(convertTitleCase(`and here is another title with an EXAMPLE and nothing else`));