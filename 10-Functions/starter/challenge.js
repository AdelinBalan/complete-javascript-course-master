'use strict';

// 1st Coding Challenge
// Simple Poll App

// 1.+++++++++++

// const poll = {
//   // answers: '12, 3, 5, 6',
//   // answers: [1, 5, 3, 9, 6, 1],

//   answers: [
//     { name: 'JavaScript', votes: 0 },
//     { name: 'Python', votes: 0 },
//     { name: 'Rust', votes: 0 },
//     { name: 'C++', votes: 0 },
//   ],

//   registerNewAnswer() {
//     const answer = prompt(
//         `What is your favorite programming language? \n 0: JavaScript \n 1: Python \n 2: Rust \n 3: C++ \n (Write option number)`
//       );

//       typeof answer === 'number' && answer < this.answers.lenght && this.answers.votes++;

//     // switch (answer) {
//     //   case 0:
//     //     this.answers[0].votes++;
//     //     break;
//     //   case 1:
//     //     this.answers[1].votes++;
//     //     break;
//     //   case 2:
//     //     this.answers[2].votes++;
//     //     break;
//     //   case 3:
//     //     this.answers[3].votes++;
//     //     break;
//     //   default:
//     //     alert(`Please try again and choose between options 0 - 3`);
//     //     break;
//     // }
//     // console.log( this.answers)
//     this.displayResults(this.answers);
//     // console.log(this.answers)
//     // console.log(this.answers)

//     // if (answer === 0) this.answers[0].votes++
//     //     else if (answer === 1) this.answers[1].votes++
//     //       else if (answer === 2) this.answers[2].votes++
//     //         else if (answer === 3) this.answers[3].votes++
//     // console.log(this.answers)
//   },

  // 3.
//   displayResults(type) {
    
//     type = Array.isArray(this.answers);
    
//     if (type !== false){
//       console.log(`Poll results: \n JavaScript: ${this.answers[0]} \n Python: ${this.answers[1]} \n Rust: ${this.answers[2]} \n C++: ${this.answers[3]}`);
//     } else 
    
//       console.log(`Poll results are: ${this.answers}`)
    
//   },

//   // displayResults() {
//   //   console.log(
//   //     `Poll results: \n Javascript: ${this.answers[0].votes} \n Python: ${this.answers[1].votes} \n Rust: ${this.answers[2].votes} \n C++: ${this.answers[3].votes}`
//   //   );
//   // },
// };
// // console.log(typeof poll.answers);
// // poll.displayResults(poll.answers)
// // 2.
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));





// 2nd CHALLENGE

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  
  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'blue';
  })
  })();