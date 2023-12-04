const changeImageBtn = document.querySelector(".header button");
const dark = document.querySelector(".dark");
const dark1 = document.querySelector(".dark1");
const dogImage = document.querySelector(".dog-img");
const selectBreeds = document.getElementById("breeds");
const DOG_IMAGE_RANDOM_AIP = "https://dog.ceo/api/breeds/image/random";
const LIST_ALL_BREEDS_API = "https://dog.ceo/api/breeds/list/all";

const body = document.body;

let breed = "Random";

fetch(LIST_ALL_BREEDS_API)
  .then((data) => data.json())
  .then((data) => {
    const listBreeds = Object.keys(data.message);

    listBreeds.map((breed) => {
      const newOption = document.createElement("option");

      newOption.value = breed;
      newOption.textContent = breed;

      selectBreeds.append(newOption);
    });
  });

selectBreeds.addEventListener("change", (e) => {
  breed = e.target.value;
});

changeImageBtn.addEventListener("click", () => {
  if (breed == "Random") {
    getDogImageRandom();
  } else {
    getBreedDogImage();
  }
});

function getDogImageRandom() {
  fetch(DOG_IMAGE_RANDOM_AIP)
    .then((data) => data.json())
    .then((data) => {
      dogImage.src = data.message;
    });
}

function getBreedDogImage() {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((data) => data.json())
    .then((data) => {
      dogImage.src = data.message;
    });
}

dark.addEventListener("click", () => {
  body.style.background = "rgb(0, 0, 68)";
});

dark1.addEventListener("click", () => {
  body.style.background = "rgb(238, 238, 255)";
});
