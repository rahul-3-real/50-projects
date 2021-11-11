const navToggle = () => {
  const button = document.querySelector(".toggle");
  const nav = document.querySelector(".nav");

  button.addEventListener("click", () => {
    nav.classList.toggle("hide");
    button.classList.toggle("hide");
  });
};
navToggle();
