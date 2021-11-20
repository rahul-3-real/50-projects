const heartCard = () => {
  const card = document.querySelector(".card");
  const times = document.querySelector(".times");
  let click = 0;
  let timesClicked = 0;

  const createHeart = (e) => {
    const heart = document.createElement("i");
    heart.classList.add("fas");
    heart.classList.add("fa-heart");
    card.appendChild(heart);
    times.innerText = ++timesClicked;
    setTimeout(() => heart.remove(), 1000);
  };

  card.addEventListener("click", (e) => {
    if (click === 0) {
      click = new Date().getTime();
    } else {
      if (new Date().getTime() - click < 800) {
        createHeart(e);
        click = 0;
      } else {
        click = new Date().getTime();
      }
    }
  });
};

heartCard();
