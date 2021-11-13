const rotateNav = () => {
  const container = document.querySelector(".container");
  const open = document.querySelector(".open");
  const close = document.querySelector(".close");

  open.addEventListener("click", () => {
    console.log("Open CLicked");
    container.classList.add("show-nav");
  });
  close.addEventListener("click", () => container.classList.remove("show-nav"));
};

rotateNav();
