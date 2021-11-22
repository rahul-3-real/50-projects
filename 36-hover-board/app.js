const hoverBoard = () => {
  // Variables
  const card = document.querySelector(".card");
  const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
  const CUBES = 500;

  // Functions
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const removeColor = (element) => {
    element.style.background = "var(--secondary)";
    element.style.boxShadow = "var(--shadow)";
  };

  const setColor = (element) => {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  };

  // Events
  for (let i = 0; i < CUBES; i++) {
    const cube = document.createElement("div");
    cube.classList.add("cube");
    cube.addEventListener("mouseover", () => setColor(cube));
    cube.addEventListener("mouseout", () => removeColor(cube));
    card.appendChild(cube);
  }
};

hoverBoard();
