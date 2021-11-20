const verticalSlider = () => {
  // Variables
  const carousel = document.querySelector(".carousel");
  const slideRight = document.querySelector(".right-slides");
  const slideLeft = document.querySelector(".left-slides");
  const upBtn = document.querySelector(".up-btn");
  const downBtn = document.querySelector(".down-btn");
  const slideLength = slideRight.querySelectorAll(".image").length;

  let activeSlideIndex = 0;

  // Functions
  const changeSlide = (direction) => {
    const sliderHeight = carousel.clientHeight;
    if (direction === "up") {
      activeSlideIndex++;
      if (activeSlideIndex > slideLength - 1) {
        activeSlideIndex = 0;
      }
    } else if (direction === "down") {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slideLength - 1;
      }
    }

    slideRight.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;
    slideLeft.style.transform = `translateY(${
      activeSlideIndex * sliderHeight
    }px)`;
  };

  // Events
  slideLeft.style.top = `-${(slideLength - 1) * 100}vh`;
  upBtn.addEventListener("click", () => changeSlide("up"));
  downBtn.addEventListener("click", () => changeSlide("down"));
};

verticalSlider();
