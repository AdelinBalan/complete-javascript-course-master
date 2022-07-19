'use strict';

// 1st CODING CHALLENGE

// 4.
const dogsJulia = [3, 5, 2, 12, 7];
// const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [4, 1, 15, 8, 3];
// const dogsKate  = [10, 5, 6, 1, 4];

const checkDogs = function (data1, data2) {
  // 1.
  const cleanData1 = data1.slice(1, -2);
  console.log(cleanData1);
  console.log(dogsJulia);

  // 2.
  // const allData = [...cleanData1, ...data2];
  // OR
  const allData = cleanData1.concat(data2);
  // console.log(allData);

  // 3.
  allData.forEach(function (age, index) {
    // const type = age >= 3 ? `n adult` : `a puppy`;
    // console.log(index, age)
    if (age >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult and is ${age} years old.`
      );
    } else {
      console.log(
        `Dog number ${index + 1} is still a puppy and is ${age} years old.`
      );
    }
  });
};

// checkDogs(dogsJulia, dogsKate);

// 2nd CODING CHALLENGE

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

// 1.
// const calcAverageHumanAge = function(ages) {
//   // ages = [...data1, ...data2];
//   const dogAge = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//   // OR
//   // const dogAge = [];
//   // ages.forEach(function(age, index) {
//   //   // console.log(age)
//   //   if (age <= 2) dogAge.push(age * 2)
//   //   else dogAge.push(16 + age * 4)
//   // })

//   // 2.
//   const adultDogs = dogAge.filter((age) => age >= 18);

//   // 3.
//   const averageAge = adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;

//   return averageAge;
// };

// 3rd CODING CHALLENGE

// const calcAverageHumanAge2 = ages =>
//         ages
//         .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//         .filter(age => age >= 18)
//         .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calcAverageHumanAge2(data1));
// console.log(calcAverageHumanAge2(data2));
// console.log(calcAverageHumanAge(data2));
// console.log(calcAverageHumanAge([...data1, ...data2]));

// 4th CODING CHALLENGE

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];


// 1.
dogs.forEach(dog => {
  // console.log(dog)
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  console.log(dog);
  // console.log(dog1)
});

// 2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(sarahDog);

if (sarahDog.curFood > sarahDog.recommendedFood) {
  console.log(`Sarah's dog is eating too much`);
} else if (sarahDog.curFood < sarahDog.recommendedFood) {
  console.log(`Sarah's dog is eating too little`);
} else console.log(`Sarah's dog has a balanced and healthy diet`);


// 3. 
const ownersEatTooMuch = [];
const ownersEatTooLittle = [];

const dietCheck = function (dog) {
  if (dog.curFood > dog.recommendedFood) {
    ownersEatTooMuch.push(dog.owners);
  } else if (dog.curFood < dog.recommendedFood) {
    ownersEatTooLittle.push(dog.owners);
  }
};

dogs.forEach(dog => {
  dietCheck(dog);
});

console.log(ownersEatTooLittle.flat());
console.log(ownersEatTooMuch.flat());


// 4.
const displayOwnersEatTooLittle = ownersEatTooLittle.flat().join(` and `);
const displayOwnersEatTooMuch = ownersEatTooMuch.flat().join(` and `);
console.log(`${displayOwnersEatTooLittle}'s dogs eat too little!`)
console.log(`${displayOwnersEatTooMuch}'s dogs eat too much!`)

// 5. 
console.log(dogs.some(dog => 
  dog.curFood === dog.recommendedFood 
))

// 6. & 7.
const dogsThatEatOk = []; 
const okAmount = function (dogs) {
  dogs.forEach(dog =>
    {if ((dog.curFood > (dog.recommendedFood * 0.9)) && (dog.curFood < (dog.recommendedFood * 1.1))){
      dogsThatEatOk.push(dog);
      dogsThatEatOk.length !== 0 ? console.log(true) : console.log(false)
      }
    })
  }
okAmount(dogs);

// 8. 

// movements.sort((a, b) => {
  //   if (a > b) return 1; // doesn't matter as long as it's > 0
  //   else if (b > a) return -1;
  // })
// dogs.forEach(dog =>
//   {
//     dog.recommendedFood.sort((a, b) => 
//       {
//         a - b
//       }
//     )

  // })
  // console.log(dogs)
//   const recommendedFood = [] 
//   dogs.forEach(dog => {
//     recommendedFood.push(dog.recommendedFood);
//     recommendedFood.sort((a, b) => a - b);
//     // console.log(recommendedFood)
//   })
//  console.log(recommendedFood)
/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
const dogsCopy = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood)
console.log(dogsCopy)



  // const recommendedFood = dogs.map(dog => )
  // const dogz = dogs.forEach(dog => {
  //   console.log(recommendedFood)
  //   // dog.recommendedFood = recommendedFood.sort((a, b) => a - b);
  // })
// recommendedFood.sort((a, b) => a - b)
// const dogz = dogs;
// dogz.map (dog =>  )
// console.log(dogz)


// console.log(dogsThatEatOk)


// for(var x = 0; x < dogs.length; x++ ){
//   console.log(dogs[x])
// }
// const dogz = dogs.map(dog => {})

// FIRST TRY

// const findDog = function(owner) {
//   const foundDog = dogs.find(dog => dog.owners.includes(owner));
//   return foundDog;
// };
// console.log(findDog('Sarah').curFood)

// const findOwner = function(dogs, owner) {
//   const foundDog = findDog('Sarah').owners.find(pers => pers === owner ? pers : '');
//   return foundDog;
//   // const foundDog = findDog(dogs, owner).owners.forEach(function(own) {
//   //                     if (own === owner) console.log(owner)
//   //                   });
//   // return foundDog
// };
// console.log(findOwner(dogs, 'John'))

// const recommendedFood = function(dog) {
//   const dogWeight = Math.trunc(dog?.weight ** 0.75 * 28);
//   return dogWeight;
// };
// console.log(recommendedFood(findDog(dogs, 'Sarah')))

// const foodLimit = function(dog) {
//   // const dog = findDog(dogs, owner);
//   const correctAmount = ((dog.curFood > (recommendedFood(dog) * 0.9)) && (dog.curFood < (recommendedFood(dog) * 1.1)));
//   // console.log(dog.curFood)
//   return correctAmount;
// };
// // console.log(foodLimit(findDog('Sarah')))

// // 1.
// const calcDogRecommendedFood = function(dogs, owner) {
//   // console.log(Object.entries(findDog(dogs, owner)))
//   // const entries = Object.entries(dogs);
//   const recFood = recommendedFood(findDog(dogs, owner));
//   dogs.forEach(dog => dog.recommendedFood = recFood)
//   // console.log(recFood)

//   return dogs;
// }
// console.log(calcDogRecommendedFood(dogs, 'Sarah'))

// // 2.
// // console.log(foodLimit(sarahDog))
// // console.log(recommendedFood(sarahDog))
// // console.log(findDog(dogs, 'Sarah').curFood)
// // console.log(foodLimit(dogs, 'Sarah'))
// // console.log(sarahDog.curFood > recommendedFood(sarahDog))
// const eatingHealthy = function(dogs, owner) {
//   const ownerDog = findOwner(dogs, owner);

//   if (foodLimit(findDog('Sarah')) === false && (findOwner(findDog('Sarah')).curFood > recommendedFood(findOwner(findDog('Sarah'))))) console.log(`${owner}'s dog is eating too much! We recommend a diet and exercise.`)
//     else if (foodLimit(findDog('Sarah')) === false && (findOwner(findDog('Sarah')).curFood < recommendedFood(findOwner(findDog('Sarah'))))) console.log(`${owner}'s dog is eating too little! We recommend some protein-rich food.`)
//     else console.log(`Sarah's dog has a healthy diet!`);
// }

// eatingHealthy(dogs, 'Sarah')
