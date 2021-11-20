const toggleSelections = () => {
  const toggles = document.querySelectorAll(".toggle");
  const good = document.querySelector("#good");
  const cheap = document.querySelector("#cheap");
  const fast = document.querySelector("#fast");

  const selection = (clickedItem) => {
    if (good.checked && cheap.checked && fast.checked) {
      if (good === clickedItem) {
        fast.checked = false;
      }
      if (cheap === clickedItem) {
        good.checked = false;
      }
      if (fast === clickedItem) {
        cheap.checked = false;
      }
    }
  };

  toggles.forEach((toggle) =>
    toggle.addEventListener("change", (e) => selection(e.target))
  );
};

toggleSelections();
