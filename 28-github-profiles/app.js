// API
const BASE_URL = `https://api.github.com/users/`;

// Variables
const container = document.querySelector(".container");
const form = document.querySelector("form");
const search = form.querySelector("input");

// Functions
const createUserCard = (user) => {
  const cardEl = `
    <div class="card">
        <div class="image">
            <img src="${user.avatar_url}" alt="${user.name}" />
        </div>
        <div class="text">
            <h4>${user.name}</h4>
            <p>${user.bio ? null : "---"}</p>
            <ul>
                <li>
                    <b>${user.following}</b>
                    <span>Followings</span>
                </li>
                <li>
                    <b>${user.followers}</b>
                    <span>Followers</span>
                </li>
                <li>
                    <b>${user.public_repos}</b>
                    <span>Repositories</span>
                </li>
            </ul>
            <div class="tags"></div>
        </div>
    </div>
    `;
  container.innerHTML = cardEl;
};

const createErrCard = (msg) => {
  const cardEl = `
    <div class="card">
        <h4 class="message">${msg}</h4>
    </card>
    `;
  container.innerHTML = cardEl;
};

const addReposToCard = (repos) => {
  const reposEl = document.querySelector(".tags");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("tag");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    reposEl.appendChild(repoEl);
  });
};

const getRepos = async (username) => {
  try {
    const { data } = await axios(BASE_URL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (err) {
    createErrCard("Problem fetching Repositories");
  }
};
const getUsers = async (username) => {
  try {
    const { data } = await axios(BASE_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == 404) {
      createErrCard("No profile with this username");
    }
  }
};

// Events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUsers(user);
    search.value = "";
  }
});
