const keyCode = () => {
  const insert = document.querySelector(".insert");

  window.addEventListener("keydown", (e) => {
    insert.innerHTML = `

    <div class="key">
        <h5>${e.key === " " ? "Space" : e.key}</h5>
        <p>e.key</p>
    </div>
    
    <div class="key">
        <h5>${e.keyCode}</h5>
        <p>e.keyCode</p>
    </div>

    <div class="key">
        <h5>${e.code}</h5>
        <p>e.code</p>
    </div>

    `;
  });
};
keyCode();
