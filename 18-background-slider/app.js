const backgroundCarousel = () => {
  const content = document.querySelector(".content");
  const items = document.querySelectorAll(".item");
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");

  let activeSlide = 0;

  // Set Background
  const setBackground = () => {
    activeSlideImage = items[activeSlide].getAttribute("data-src");
    content.style.background = `url('${activeSlideImage}')`;
  };
  setBackground();

  // Set Active Slide
  const setActiveSlide = () => {
    items.forEach((item) => item.classList.remove("active"));
    items[activeSlide].classList.add("active");
  };

  // Navigation
  prevBtn.addEventListener("click", () => {
    activeSlide--;
    if (activeSlide < 0) {
      activeSlide = items.length - 1;
    }
    setBackground();
    setActiveSlide();
  });

  nextBtn.addEventListener("click", () => {
    activeSlide++;
    if (activeSlide > items.length - 1) {
      activeSlide = 0;
    }
    setBackground();
    setActiveSlide();
  });
};

backgroundCarousel();
