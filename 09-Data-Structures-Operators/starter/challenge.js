'strict mode';

// 1st coding challenge

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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Gnarby', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// return after Strings lecture to add team initials in front of scorers
const printGoals = function (...playerNo) {
  console.log(`Goals Scored: ${playerNo.length} (${playerNo})`);
};

const winner = function (game) {
  odds1 = game.odds.team1;
  odds2 = game.odds.team2;
  console.log(
    `Most likely winner based on odds: ${odds1 < odds2 ? odds1 : odds2}`
  );
};

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

// winner(game)
// printGoals(`Davies`, `Muller`, `Lewandowski`, `Kimmich`);
// printGoals(...game.scored);

// const [players1, players2] = [...game.players];
// // const players1 = game.players[0];
// // const players2 = game.players[1];
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const allPlayers = [...players1, ...players2];

// const [gk, ...fieldPlayers] = [...players1];

// const { team1, x, team2 } = { ...game.odds };
// const draw = x;

// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

//first coding challenge console.logs
// console.log(team1);
// console.log(draw);
// console.log(team2);

// console.log(allPlayers);
// console.log(players1Final);
// console.log(gk);
// console.log(fieldPlayers);
// console.log(players1);
// console.log(players2);

// const team1 = {
//   name: `Bayern Munich`,
//   gk:
// }

// const players1 = [];
// const players2 = [];

// 2nd CODING CHALLENGE

// 1.
// for ( const [i, player] of game.scored.entries() ) {
//   console.log(`Goal ${i + 1}: ${player}`)
// };

// // 2.
// let average = 0;
// const odds = Object.values(game.odds)
// for (const odd of odds) {
//   average += odd;
// }
//   average /= odds.length

// console.log(average)

// //3.
// for (const [team, odd] of Object.entries(game.odds)){
//   const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`)
// }

// // console.log(`Odd of ${game.team1}: ${odds[0]}`)
// // console.log(`Odd of draw: ${odds[1]}`)
// // console.log(`Odd of ${game.team2}: ${odds[2]}`)

// //4. bonus

// const scorers = {}

// for ( const player of game.scored ) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers)
// scorers = {...game.scored}
// console.log(arr);

// 3rd CODING CHALLENGE

// 1.
// const events = [...new Set(gameEvents.values())]
// console.log(events);

// // 2.

// // const events = new Map([...gameEvents]);
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// let average = 0;
// average = 90 / gameEvents.size;
// console.log(average)
// console.log(`An event has happened, on average, every ${average} minutes.`);
// console.log(`An event has happened, on average, every ${90 / gameEvents.size} minutes.`);
// const time = [...gameEvents.keys()].pop();
// console.log(time)
// console.log(`An event has happened, on average, every ${time / gameEvents.size} minutes.`);

// // 4.
// for (const event of gameEvents) {
//   event[0] <= 45
//   ? console.log(`[FIRST HALF]: ${event}`)
//   : console.log(`[SECOND HALF]: ${event}`)
// }

// // OR

// for (const [minute, event] of gameEvents) {
//   const half = minute <= 45 ? `FIRST` : `SECOND`;
//   console.log(`[${half} HALF] ${minute}: ${event}`);
// }

// 4th CODING CHALLENGE

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textArea').value;
//   const elem = text.toLowerCase().split('\n');
//   // console.log(elem);
//   // let upperCase = [];

//   for (const [i, e] of elem.entries()){
//     // const index = ;
//     // console.log(e)
//     const [first, second] = e.split('_');
//     const secondUp = second.replaceAll(second[0], second[0].toUpperCase());
//     // first.join(secondUp)
//     const upperCase = [first, secondUp].join('');
//     // console.log( first)
//     // console.log(upperCase)
//     console.log(`${upperCase} ${'✅'.repeat(i + 1)}`)

//     // upperCase.push(secondUp)
//     // console.log(first)
//     // console.log(second[0].toUpperCase())
//     // console.log(upperCase[0])
//     // console.log(`${first}${upperCase}`)
//   }

// console.log(elem.indexOf())

// console.log(elem)
// })

// BONUS CHALLENGE

// Data needed for a later exercise
const flights = `_Delayed_Departure;fao93766109;txl2133758440;11:25
  +_Arrival;bru0943384722;fao93766109;11:45
  +_Delayed_Arrival;hel7439299980;fao93766109;12:05
  +_Departure;fao93766109;lis2323639855;12:30`;

// Delayed Departure from FAO to TXL (11h25)
//           Arrival from BRU to FAO (11h45)
//   Delayed Arrival from HEL to FAO (12h05)
//         Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  // Teacher Method
  const [type, from, to, time] = flight.split(';');
  const output = `${type
    .replaceAll('_', ' ')
    .trim()
    .padStart(25)} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h').trim()})`;
  console.log(output);

  // OR
  // const f = flight.split(';');
  // const f1 = (f[0].replaceAll('_', ' ').trim());
  // const f2 = (f[1].slice(0, 3).toUpperCase());
  // const f3 = (f[2].slice(0, 3).toUpperCase());
  // const f4 = (f[3].replace(':', 'h'));
  // console.log(`${f1.padStart(25)} from ${f2} to ${f3} (${f4.trim()})`);
}
