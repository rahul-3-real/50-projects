const pokedex = () => {
  // Variables
  const container = document.querySelector(".container");
  const poke_count = 150;
  const colors = {
    fire: "#ff9441",
    grass: "#c9f4cb",
    electric: "#ffe082",
    water: "#b3e5fc",
    ground: "#d6c0a2",
    rock: "#ceac81",
    fairy: "#fce4ec",
    poison: "#b39ddb",
    bug: "#e6ee9c",
    dragon: "#f6bd5a",
    psychic: "#9fa8da",
    flying: "#fff59d",
    fighting: "#ffe6b4",
    normal: "#fcecdc",
  };
  const main_types = Object.keys(colors);

  // Functions
  const createPokemonCard = (pokemon) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, "0");

    const poke_types = pokemon.types.map((type) => type.type.name);
    const type = main_types.find((type) => poke_types.indexOf(type) > -1);
    const color = colors[type];

    card.style.backgroundColor = color;
    const pokemonInnerHTML = `
        <div class="image">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}" />
        </div>
        <div class="info">
            <p class="rank">#${id}</p>
            <h5 class="name">${name}</h5>
            <h6 class="type">Type : <b>${type}</b></h6>
        </div>
    `;

    card.innerHTML = pokemonInnerHTML;
    container.appendChild(card);
  };

  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
  };

  const fetchPokemons = async () => {
    for (let i = 1; i <= poke_count; i++) {
      await getPokemon(i);
    }
  };

  fetchPokemons();
};

pokedex();
