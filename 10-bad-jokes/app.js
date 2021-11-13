const badJokes = () => {
  const joke = document.querySelector(".joke");
  const btn = document.querySelector(".joke-btn");

  // Async, Await
  const generateJoke = async () => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();
    joke.innerHTML = data.joke;
  };

  generateJoke();
  btn.addEventListener("click", generateJoke);
};
badJokes();
