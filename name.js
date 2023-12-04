const flags = document.querySelector(".flags");
const dark = document.querySelector(".dark");
const dark1 = document.querySelector(".dark1");
const flag = document.querySelector(".flags");
const searchInput = document.querySelector(".header input");

const body = document.body;

let data = [];

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((response) => {
    data = response;

    console.log(response);

    response.map(
      (country) =>
        (flags.innerHTML += `<div
         class='flag'>
         <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="">
         <h4>${country.name}</h4>
         <h4>${country.email}</h4>
         <h4>${country.phone}</h4>
         </div>`)
    );
  });

dark.addEventListener("click", () => {
  body.style.background = "rgb(0, 0, 68)";
});

dark1.addEventListener("click", () => {
  body.style.background = "rgb(238, 238, 255)";
});

////////////////////////////////////////////////////////////

searchInput.addEventListener("keyup", function (e) {
  flags.innerHTML = "";
  const value = e.target.value;

  const filteredCountries = data.filter((country) => {
    if (country.name.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }

    if (country.name.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }

    if (country.name.toLowerCase().includes(value.toLowerCase())) {
      return true;
    }
  });
  filteredCountries.map(
    (country) =>
      (flags.innerHTML += `<div
         class='flag'>
         <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="">
         <h4>${country.name}</h4>
         <h4>${country.email}</h4>
         <h4>${country.phone}</h4>
         </div>`)
  );
});
