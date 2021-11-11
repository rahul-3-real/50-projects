const soundBoard = () => {
  const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
  const stopSong = () => {
    sounds.forEach((sound) => {
      const song = document.querySelector(`#${sound}`);
      song.pause();
      song.currentTime = 0;
    });
  };
  sounds.forEach((sound) => {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;
    btn.addEventListener("click", () => {
      stopSong();
      document.querySelector(`#${sound}`).play();
    });
    document.querySelector("#buttons").appendChild(btn);
  });
};
soundBoard();
