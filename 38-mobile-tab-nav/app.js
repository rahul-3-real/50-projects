const tabs = () => {
  // Variables
  const images = document.querySelectorAll(".images img");
  const tabs = document.querySelectorAll(".nav li");

  // Functions
  const hideImages = () => {
    images.forEach((img) => img.classList.remove("active"));
  };

  const hideNavs = () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
  };

  // Events
  tabs.forEach((tab, id) => {
    tab.addEventListener("click", () => {
      hideImages();
      hideNavs();
      tab.classList.add("active");
      images[id].classList.add("active");
    });
  });
};

tabs();
