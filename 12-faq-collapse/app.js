const accordion = () => {
  const items = document.querySelectorAll(".accordion .item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
};
accordion();
