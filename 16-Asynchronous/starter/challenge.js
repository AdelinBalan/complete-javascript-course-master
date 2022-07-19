'use strict'

// 1st CODING CHALLENGE

const whereAmI = function (lat, lng, err = 'Something went wrong:') {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=183418128112360472484x78286`)
  .then(response => response.json())
  .then(resp => {
    console.log(resp);
    if (!resp.city || !resp.country) throw new Error(`Something not found :(`);
    console.log(`You are in ${resp.city}, ${resp.country}`);
  })
  .then(resp => renderCountry(resp, 'neighbour'))
  .catch(err => {
    console.error(err);
  });
};

whereAmI(52.508, 13.381)