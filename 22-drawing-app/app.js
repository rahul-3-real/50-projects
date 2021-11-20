const drawApp = () => {
  // Variables
  const canvas = document.querySelector("#canvas");
  const incBtn = document.querySelector(".increase");
  const decBtn = document.querySelector(".decrease");
  const sizeBtn = document.querySelector(".size");
  const clearBtn = document.querySelector(".clear");
  const input = document.querySelector(".color");

  const context = canvas.getContext("2d");

  let size = 10;
  let isPressed = false;
  input.value = "#000000";
  let color = input.value;
  let x;
  let y;

  // Function
  const drawCircle = (x, y) => {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
  };

  const drawLine = (x1, y1, x2, y2) => {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = color;
    context.lineWidth = size * 2;
    context.stroke();
  };

  const updateSizeOnScreen = () => {
    sizeBtn.innerText = size;
  };

  // Events
  canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
  });
  document.addEventListener("mouseup", (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
  });
  canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
      const x2 = e.offsetX;
      const y2 = e.offsetY;
      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);
      x = x2;
      y = y2;
    }
  });

  incBtn.addEventListener("click", () => {
    size += 5;
    if (size > 50) {
      size = 50;
    }
    updateSizeOnScreen();
  });
  decBtn.addEventListener("click", () => {
    size -= 5;
    if (size < 5) {
      size = 5;
    }
    updateSizeOnScreen();
  });

  input.addEventListener("change", (e) => (color = e.target.value));
  clearBtn.addEventListener("click", () =>
    context.clearRect(0, 0, canvas.width, canvas.height)
  );
};

drawApp();
