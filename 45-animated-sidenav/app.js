const toggleNav = () => {
  const toggle = document.querySelector(".toggle");
  const close = document.querySelector(".close");
  const nav = document.querySelector(".navbar");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
};

toggleNav();
