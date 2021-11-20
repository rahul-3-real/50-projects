const cardPlaceholder = () => {
  // Variables
  const image = document.querySelector(".image");
  const title = document.querySelector(".title");
  const excerpt = document.querySelector(".excerpt");
  const author = document.querySelector(".author");
  const animCard = document.querySelector(".animated-card");

  // Functions
  const showText = () => {
    image.innerHTML = `<img src="./image.jpg" alt="Card Image" />`;
    title.innerText = `Card Title Text`;
    excerpt.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad deserunt
    totam incidunt, eligendi illum quas? Veniam eligendi velit vitae
    dicta rem iure est enim optio!`;
    author.innerText = `John Doe`;

    animCard.classList.remove("animated-card");
  };

  // Events
  setTimeout(showText, 2500);
};

cardPlaceholder();
