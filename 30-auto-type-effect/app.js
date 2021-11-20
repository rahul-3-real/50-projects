const autoTypeEffect = () => {
  const text = document.querySelector(".text");
  const input = document.querySelector(".group input");
  const textMsg = "We Love Anime";
  let id = 1;
  let speed = 300 / input.value;

  const writeText = () => {
    text.innerText = textMsg.slice(0, id);
    id++;
    if (id > textMsg.length) {
      id = 1;
    }
    setTimeout(writeText, speed);
  };

  writeText();

  input.addEventListener("input", (e) => (speed = 300 / e.target.value));
};

autoTypeEffect();
