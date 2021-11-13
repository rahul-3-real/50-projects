const drinkWater = () => {
  const cups = document.querySelectorAll(".cup-sm");
  const liter = document.querySelector(".liter");
  const percentage = document.querySelector(".percentage");
  const remaining = document.querySelector(".remaining");

  const updateBigCup = () => {
    const fullCups = document.querySelectorAll(".cup-sm.fill").length;
    const totalCups = cups.length;

    if (fullCups === 0) {
      percentage.style.visibility = "hidden";
      percentage.style.height = 0;
    } else {
      percentage.style.visibility = "visible";
      percentage.style.height = `${(fullCups / totalCups) * 330}px`;
      percentage.innerText = `${(fullCups / totalCups) * 100}%`;
    }

    if (fullCups === totalCups) {
      remaining.style.visibility = "hidden";
      remaining.style.height = 0;
    } else {
      remaining.style.visibility = "visible";
      liter.innerText = `${2 - (250 * fullCups) / 1000}L`;
    }
  };

  const highlightCups = (id) => {
    if (id === 7 && cups[id].classList.contains("fill")) id--;
    else if (
      cups[id].classList.contains("fill") &&
      !cups[id].nextElementSibling.classList.contains("fill")
    ) {
      id--;
    }

    cups.forEach((cup, id2) => {
      if (id2 <= id) {
        cup.classList.add("fill");
      } else {
        cup.classList.remove("fill");
      }
    });

    updateBigCup();
  };

  cups.forEach((cup, id) => {
    cup.addEventListener("click", () => highlightCups(id));
  });

  updateBigCup();
};

drinkWater();
