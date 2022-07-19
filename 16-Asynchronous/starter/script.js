'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
          <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
              ).toFixed(1)}M people</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>${
                data.currencies[0].name
              }</p>
            </div>
          </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// most old school AJAX call

// const getCountryData = function(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function() {

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//           <article class="country">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
//               <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//               <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//             </div>
//           </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');
// getCountryData('romania');
// getCountryData('spain');
// getCountryData('ukraine');

// const fib = function(num) {
//   let list = [0, 1];
//   for (let i = 2; i < num; i++) {
//     list.push(list[i - 1] + list[i - 2]);
//   }
//   console.log(list);
// }

// fib(5);
// fib(40);

// function fibo(nr) {
//   let fiboNrs = []
//   for(let i = 0; i< nr; i++){
//       if(i <= 1){
//           fiboNrs.push(i)
//       }else{
//           fiboNrs.push(fiboNrs[fiboNrs.length -1] +fiboNrs[fiboNrs.length -2])
//       }
//   }
//   return fiboNrs
// }

// console.log(fibo(20))

// const getCountryAndNeighbor = function(country) {
//   // ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function() {

//     const [data] = JSON.parse(this.responseText);

//     // render country 1
//     renderCountry(data);
//     console.log(data);

//     // get neighbor country
//     const [neighbor] = data.borders
//     if (!neighbor) return;

//     // ajax call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function() {
//       const data2 = JSON.parse(this.responseText);
//       renderCountry(data2, 'neighbour');
//       console.log(data2);
//     });
//   });
// };

// // getCountryAndNeighbor('romania');
// getCountryAndNeighbor('hu');

//////////////////////////////////////////////////////////////////////////////
// CALLBACK HELL
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('3 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000)

/////////////////////////////////////////////////////////////////////////////////
// MODERN AJAX CALL (FETCH API)

const request = fetch(`https://restcountries.com/v2/name/romania`);
// const request = fetch(`http://data.gov.ro/storage/f/2013-11-01T11%3A49%3A59.808Z/siruta.csv`);
console.log(request);

// const getCountryData = function (country){
//   fetch(`https://restcountries.com/v2/name/${country}`)
//   .then(function(response) {
//     console.log(response);
//     return response.json();
//   }).then(function(resp) {
//     console.log(resp);
//     renderCountry(resp[0]);
//   });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
    .then(resp => {
      renderCountry(resp[0]);
      const neighbor = resp[0].borders[0];
      console.log(neighbor);

      if (!neighbor) throw new Error(`No neighbor found!`);

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbor}`,
        `Country not found`
      );
    })

    .then(resp => renderCountry(resp, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong :( ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// simplified version of above
// const getCountryData = function (country){
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//   .then((response) => {
//     console.log(response);

//     if (!response.ok)
//       throw new Error(`Country not found (${response.status})`);

//     return response.json()
//   })
//   .then((resp) => {
//     renderCountry(resp[0])
//     // const neighbor = resp[0].borders[0];
//     const neighbor = '23w432';
//     console.log(neighbor)

//     if(!neighbor) return;

//     // Country 2
//     return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//   })
//   .then(response => {
//     if (!response.ok)
//     throw new Error(`Country not found (${response.status})`);

//     return response.json()
//   })
//   .then(resp => renderCountry(resp, 'neighbour'))
//   .catch(err => {
//     console.error(`${err}`);
//     renderError(`Something went wrong :( ${err.message}. Try again!`)
//   })
//   .finally(() => {
//     countriesContainer.style.opacity = 1;
//   });
// };

btn.addEventListener('click', function () {
  getCountryData('romania');
});

// getCountryData('australia');

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=183418128112360472484x78286`
//   )
//     .then(response => {
//       // console.log(response)
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(resp => {
//       console.log(resp.country);
//       console.log(`You are in ${resp.city}, ${resp.country}`);
//       return fetch(`https://restcountries.com/v2/name/${resp.country}`);
//     })
//     .then(res => {
//       console.log(res);
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     })
//     .catch(err => {
//       console.error(err.message);
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);


////////////////////////////////////////////////////////////////////////////////
// THE EVENT LOOP IN PROGRESS

console.log('test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1'); 

// var sum;
// var n = 91;
// sum  = n % 9 || 9;


// var y = 10
// var sum1;
// sum1 = 10 % 3
// console.log(sum1)

