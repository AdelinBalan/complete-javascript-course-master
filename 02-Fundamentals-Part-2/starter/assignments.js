'use strict';

// function describeCountry( country, population, capitalCity ) {

//   const sentence = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
//   return sentence;

// }

// const firstCountry = describeCountry( 'Romania', 19, 'Bucharest' );
// const secondCountry = describeCountry( 'Greece', 10, 'Athens' );
// const thirdCountry = describeCountry( 'Poland', 30, 'Warsaw' );

// console.log(firstCountry, secondCountry, thirdCountry);


function percentageOfWorld1(population) {
  return population / 7900 * 100;
}

const romaniaPop = percentageOfWorld1(23);
const usaPop = percentageOfWorld1(280);
const chinaPop = percentageOfWorld1(1441);

console.log(romaniaPop);
console.log(usaPop);
console.log(chinaPop);

const percentageOfWorld2 = function(population) {
  return population / 7900 * 100;
}

const romaniaPop2 = percentageOfWorld2(23);
const usaPop2 = percentageOfWorld2(280);
const chinaPop2 = percentageOfWorld2(1700);

console.log(romaniaPop2);
console.log(usaPop2);
console.log(chinaPop2);

const percentageOfWorld3 = (population) => population / 7900 * 100;


console.log(percentageOfWorld3(23))
console.log(percentageOfWorld3(1700))


const descripePopulation = function(country, population) {
  let percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${Math.trunc(percentage)}% of the world. `;
}

console.log(descripePopulation('China', 1800));
console.log(descripePopulation('USA', 380));
console.log(descripePopulation('Russia', 300));

const populations = [1800, 380, 300, 40];
if(populations.length === 4){
  console.log(true);
} else {
  console.log(false);
}

const percentages = [];
const percentages2 = [];
const percentages3 = [];

// assignment for looping arrays but used same solution earlier on percentages[]
for(let i = 0; i < populations.length; i++) {
  percentages2.push(Math.trunc(percentageOfWorld1(populations[i])));
}
console.log(percentages2)

let i = 0;
while (i < populations.length) {
  percentages3.push(Math.trunc(percentageOfWorld1(populations[i])));
  i++;
}
console.log(percentages3);

for(let i = 0; i < populations.length; i++) {
  percentages.push(Math.trunc(percentageOfWorld1(populations[i])));
}
console.log(percentages);

const neighboringCountries = ['India', 'Japan', 'Mongolia', 'Kazakhstan', 'Russia'];
console.log(neighboringCountries);

neighboringCountries.push('Utopia');
console.log(neighboringCountries);

neighboringCountries.pop();
console.log(neighboringCountries);

if (!neighboringCountries.includes('Germany')) {
  console.log('Probably not a central European country');
}

const index = neighboringCountries.indexOf('Russia');
if(neighboringCountries.indexOf('Russia') !== -1){
  neighboringCountries[index] = 'Commie Scum';
}
console.log(neighboringCountries);

const myCountry = {
  country: 'Romania',
  capital: 'Bucharest',
  language: 'Romanian',
  population: 19,
  neighbors: ['Serbia', 'Bulgaria', 'Hungary', 'Ukraine', 'Moldavia'],
  describe: function() {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`;
  },
  isIsland: function() {
    return this.neighbors.length === 0 ? true : false;
  }
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

myCountry.population = myCountry.population + 2;
console.log(myCountry.population);
myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 4;
console.log(myCountry['population']);
console.log(myCountry.describe());
console.log(myCountry.isIsland());
console.log(myCountry.neighbors.length);

for(let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

const listOfNeighbors = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia']
]

for(let i = 0; i < listOfNeighbors.length; i++) {
  for(let j = 0; j < listOfNeighbors[i].length; j++){
    console.log(`Neighbor: ${listOfNeighbors[i][j]}`)
  }
}


