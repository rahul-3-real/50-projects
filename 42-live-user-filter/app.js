const filterUser = () => {
  // Variables
  const list = document.querySelector(".list");
  const input = document.querySelector(".input");
  const listItems = [];

  // Functions
  const createList = async () => {
    const res = await fetch("https://randomuser.me/api?results=50");
    const { results } = await res.json();
    list.innerHTML = "";

    results.forEach((user) => {
      const li = document.createElement("li");
      listItems.push(li);

      li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `;

      list.appendChild(li);
    });
  };

  const filterData = (searchTerm) => {
    listItems.forEach((item) => {
      if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    });
  };

  // Events
  createList();
  input.addEventListener("input", (e) => filterData(e.target.value));
};

filterUser();
