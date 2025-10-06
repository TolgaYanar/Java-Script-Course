//Part 1

//1. Create a function 'whereAmI' which takes as inputs a latitude value
//and a longitude value (these are GPS coordinates, examples are in test data below).

// const request = fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(`You are in ${data.city}, ${data.country}`);
    })
    .catch((err) => console.error(err));
};

//Part 2
//Now it's time to use the received data to render a country. So take the relevant attributes from the geocoding API result, and plug them into the countries API that we have been using.

const renderCountry = function (data) {
  //HTML code to be inserted
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${data.population}</p>
    </div>
</article>`;

  document.querySelector(".countries").insertAdjacentHTML("beforeend", html);
};
