// https://www.themoviedb.org/documentation/api/discover

const moviesApp = () => {
  // API Variables
  const API_KEY = `500e6ca90a0842ed641ffc3ad8599934`;
  const BASE_URL = `https://api.themoviedb.org/3/`;
  const IMAGE_PATH = `https://image.tmdb.org/t/p/w1280`;

  const API_URL = `${BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
  const SEARCH_URL = `${BASE_URL}search/movie?api_key=${API_KEY}&query="`;

  // DOM Variables
  const form = document.querySelector(".search");
  const input = form.querySelector("input");
  const movieContainer = document.querySelector(".movies");
  const logo = document.querySelector(".logo");

  // Go to Home
  logo.addEventListener("click", () => window.location.reload());

  // Get Movies
  const getMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    showMovies(data.results);
  };
  getMovies(API_URL);

  // Get Class By Rated
  const getClassByRate = (vote) => {
    if (vote >= 8) {
      return "success";
    } else if (vote >= 5) {
      return "primary";
    } else {
      return "secondary";
    }
  };

  // Show Movies
  const showMovies = (movies) => {
    movieContainer.innerHTML = ``;

    movies.forEach((movie) => {
      const { title, poster_path, vote_average, overview } = movie;
      const movieCard = document.createElement("div");
      movieCard.classList.add("card");
      movieCard.innerHTML = `
        <div class="image">
          <img src="${IMAGE_PATH + poster_path}" alt="${title}" />
        </div>
        <div class="text">
          <div class="heading">
            <h5>${title}</h5>
            <h6 class="${getClassByRate(vote_average)}">${vote_average}</h6>
          </div>
        </div>
        <div class="description">
          <p>${overview}</p>
        </div>
      `;
      movieContainer.appendChild(movieCard);
    });
  };

  // Form
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = input.value;

    if (inputValue && inputValue !== "") {
      getMovies(SEARCH_URL + inputValue);
      form.value = "";
    } else {
      window.location.reload();
    }
  });
};

moviesApp();
