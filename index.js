const baseURL = "https://www.thecolorapi.com/scheme";

const seedColor = document.getElementById("seed-color");
const colorScheme = document.getElementById("color-scheme");
const generatorBtn = document.querySelector(".generator-btn");
const colorContent = document.getElementById("color-content");

let colorsArray = [];

generatorBtn.addEventListener("click", () => {
  fetchColors();
});

function fetchColors() {
  fetch(`${baseURL}?hex=${seedColor.value.slice(1)}&mode=${colorScheme.value}`)
    .then((res) => res.json())
    .then((data) => {
      colorsArray = data.colors;
      renderColors();
    });
}

function renderColors() {
  colorContent.innerHTML = "";

  for (const color of colorsArray) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    colorContent.appendChild(colorContainer);

    const colorPreview = document.createElement("div");
    colorPreview.classList.add("color-preview");
    colorPreview.style.backgroundColor = `${color.hex.value}`;
    colorContainer.appendChild(colorPreview);

    const colorLabel = document.createElement("div");
    colorLabel.classList.add("color-label");
    colorLabel.textContent = `${color.hex.value}`;
    colorContainer.appendChild(colorLabel);
  }
}

fetchColors();
