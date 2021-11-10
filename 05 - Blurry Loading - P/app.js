const loader = () => {
  const loading = document.querySelector(".loader");
  const text = loading.querySelector("span");
  const container = document.querySelector(".container");

  let load = 0;
  let int = setInterval(blurring, 30);

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_max;
  };

  function blurring() {
    load++;
    if (load > 99) {
      clearInterval(int);
    }

    text.innerHTML = `${load}%`;
    text.style.opacity = scale(load, 0, 100, 1, 0);
    container.style.filter = `blur(${scale(load, 0, 5, 0)}px)`;
  }
};
loader();
