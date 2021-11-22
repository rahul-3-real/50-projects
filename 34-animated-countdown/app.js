const animatedCounters = () => {
  // Variables
  const counts = document.querySelectorAll(".counts span");
  const loader = document.querySelector(".loader");
  const content = document.querySelector(".content");
  const button = document.querySelector(".button");

  // Functions
  const resetDOM = () => {
    loader.classList.remove("hide");
    content.classList.remove("show");
    counts.forEach((count) => {
      count.classList.value = "";
    });
    counts[0].classList.add("in");
  };

  const runAnimation = () => {
    counts.forEach((count, id) => {
      const nextToLast = counts.length - 1;
      count.addEventListener("animationend", (e) => {
        if (e.animationName === "goIn" && id !== nextToLast) {
          count.classList.remove("in");
          count.classList.add("out");
        } else if (e.animationName === "goOut" && count.nextElementSibling) {
          count.nextElementSibling.classList.add("in");
        } else {
          loader.classList.add("hide");
          content.classList.add("show");
        }
      });
    });
  };

  runAnimation();

  // Events
  button.addEventListener("click", () => {
    resetDOM();
    runAnimation();
  });
};

animatedCounters();
