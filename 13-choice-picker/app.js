const choicePicker = () => {
  const tags = document.querySelector(".tags");
  const field = document.querySelector("textarea");
  field.focus();

  // Create Tags
  const createTags = (input) => {
    const tagList = input
      .split(",")
      .filter((tag) => tag.trim() !== "")
      .map((tag) => tag.trim());

    tags.innerHTML = "";

    tagList.forEach((tag) => {
      const item = document.createElement("span");
      item.classList.add("item");
      item.innerText = tag;
      tags.appendChild(item);
    });
  };

  // Pick Random
  const pickRandomTag = () => {
    const allTags = document.querySelectorAll(".tags .item");
    return allTags[Math.floor(Math.random() * allTags.length)];
  };

  // Highlight Unhighlight Tags
  const highlightTag = (tag) => {
    tag.classList.add("highlight");
  };
  const unhighlightTag = (tag) => {
    tag.classList.remove("highlight");
  };

  // Select Random Tag
  const randomTag = () => {
    const times = 30;

    const interval = setInterval(() => {
      const randomTag = pickRandomTag();
      if (randomTag !== undefined) {
        highlightTag(randomTag);
        setTimeout(() => {
          unhighlightTag(randomTag);
        }, 100);
      }
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setTimeout(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
      }, 100);
    }, times * 100);
  };

  // Add Tag
  field.addEventListener("keyup", (e) => {
    createTags(e.target.value);
    if (e.key === "Enter") {
      setTimeout(() => {
        e.target.value = "";
      }, 10);
      randomTag();
    }
  });
};
choicePicker();
