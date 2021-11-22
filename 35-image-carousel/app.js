const carousel = () => {
  const imageContainer = document.querySelector(".images");
  const images = document.querySelectorAll("img");
  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");
  let id = 0;

  const changeImage = () => {
    if (id > images.length - 1) {
      id = 0;
    } else if (id < 0) {
      id = images.length - 1;
    }
    imageContainer.style.transform = `translateX(${-id * 400}px)`;
  };

  const run = () => {
    id++;
    changeImage();
  };

  let interval = setInterval(run, 2000);

  const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(run, 2000);
  };

  nextBtn.addEventListener("click", () => {
    id++;
    changeImage();
    resetInterval();
  });

  prevBtn.addEventListener("click", () => {
    id--;
    changeImage();
    resetInterval();
  });
};

carousel();
