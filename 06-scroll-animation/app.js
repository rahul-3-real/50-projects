const scrollAnimation = () => {
  const cards = document.querySelectorAll(".card");

  const animBoxes = () => {
    const bottomTrigger = (window.innerHeight / 5) * 4;
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < bottomTrigger) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  };
  animBoxes();

  window.addEventListener("scroll", animBoxes);
};
scrollAnimation();
