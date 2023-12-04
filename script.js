const flags = document.querySelector(".flags");
const dark = document.querySelector(".dark");
const dark1 = document.querySelector(".dark1");
const flag = document.querySelector(".flags");
const searchInput = document.querySelector(".header input");

const body = document.body;

let data = [];

fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((response) => {
    data = response;

    console.log(response);

    response.map(
      (country) =>
        (flags.innerHTML += `<div
          class='flag'>
          <img src = "${country.flags.png}" alt=""/>
          <h4>${country.name.common}</h4>
          <h4>${country.continents}</h4>
          <h4>${country.borders}</h4>
          <p>Capital:${country.capital}</p>
          </div>`)
    );
  });

dark.addEventListener("click", () => {
  body.style.background = "rgb(0, 0, 68)";
});

dark1.addEventListener("click", () => {
  body.style.background = "rgb(238, 238, 255)";
});

searchInput.addEventListener("keyup", function (e) {
  flags.innerHTML = "";
  const value = e.target.value;

  const filteredCountries = data.filter((country) => {
    if (country.name.common.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }

    if (
      country.translations.rus.official
        .toLowerCase()
        .includes(value.toLowerCase())
    ) {
      return true;
    }

    if (
      country.translations.rus.common
        .toLowerCase()
        .includes(value.toLowerCase())
    ) {
      return true;
    }
  });
  filteredCountries.map(
    (country) =>
      (flags.innerHTML += `<div
        class='flag'>
        <img src = "${country.flags.png}" alt=""/>
        <h4>${country.name.common}</h4>
        <h4>${country.continents}</h4>
        <h4>${country.borders}</h4>
        <p>Capital:${country.capital}</p>
        </div>`)
  );
});
