const randomImage = () => {
  const container = document.querySelector(".container");
  const BASE_URL = "https://source.unsplash.com/random/";
  const rows = 5;

  const getRandomNr = () => {
    return Math.floor(Math.random() * 10) + 300;
  };

  const getRandomSize = () => {
    return `${getRandomNr()}x${getRandomNr()}`;
  };

  for (let i = 0; i < rows * 3; i++) {
    const image = document.createElement("div");
    image.classList.add("image");
    image.innerHTML = `
        <img src="${BASE_URL}${getRandomSize()}" alt="Image" />
    `;
    container.appendChild(image);
  }
};

randomImage();
