const search = () => {
  const form = document.querySelector(".form");
  const button = document.querySelector(".button");

  button.addEventListener("click", () => {
    form.classList.toggle("active");
  });
};
search();
