const ratingCard = () => {
  // Variable
  const items = document.querySelectorAll(".ratings .item");
  const ratings = document.querySelector(".ratings");
  const btn = document.querySelector(".btn");
  const card = document.querySelector(".card");
  let selectedRating = "Satisfied";

  // Function
  const removeActive = () => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }
  };

  // Event
  ratings.addEventListener("click", (e) => {
    if (e.target.parentNode.classList.contains("item")) {
      removeActive();
      e.target.parentNode.classList.add("active");
      selectedRating = e.target.nextElementSibling.innerHTML;
    }
    if (e.target.classList.contains("rating")) {
      removeActive();
      e.target.classList.add("active");
      selectedRating = e.target.nextElementSibling.innerHTML;
    }
  });

  btn.addEventListener("click", (e) => {
    card.innerHTML = `
        <i class="fas fa-heart"></i>
        <b>Thank You!</b>
        <b>Feedback: ${selectedRating}</b>
        <p>We'll use your feedback to improve our customer support</p>
    `;
  });
};

ratingCard();
