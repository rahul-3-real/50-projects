const progressSteps = () => {
  const progress = document.querySelector(".line");
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  const points = document.querySelectorAll(".point");
  let currentActive = 1;

  const update = () => {
    points.forEach((point, id) => {
      if (id < currentActive) {
        point.classList.add("active");
      } else {
        point.classList.remove("active");
      }
    });

    const activePoints = document.querySelectorAll(".active");
    progress.style.width =
      ((activePoints.length - 1) / (points.length - 1)) * 100 + "%";

    if (currentActive === 1) {
      prev.disabled = true;
    } else if (currentActive === points.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  };

  next.addEventListener("click", () => {
    currentActive++;
    if (currentActive > points.length) {
      currentActive = points.length;
    }
    update();
  });
  prev.addEventListener("click", () => {
    currentActive--;
    if (currentActive < points.length) {
      currentActive - 1;
    }
    update();
  });
};

progressSteps();
