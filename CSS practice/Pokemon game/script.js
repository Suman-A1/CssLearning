let searchBtn = document.getElementById("search-button");

searchBtn.addEventListener("click", searching);

function searching() {
  let inputField = document.getElementById("search-input").value;

  let apiUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inputField}`;
  console.log(apiUrl);

  fetch(apiUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Pokémon not found");
      }
      return res.json();
      // console.log(res.json());
    })
    .then((pokemon) => {
      console.log("pokemon", pokemon);
      document.getElementById("pokemon-name").innerText = pokemon.name;
      document.getElementById("pokemon-id").innerText = pokemon.id;
      document.getElementById("weight").innerText = pokemon.weight;
      document.getElementById("height").innerText = pokemon.height;
      document.getElementById("types").innerText = pokemon.types.map(
        (types) => types.type.name
      );
      pokemon.stats.map((stat) => {
        document.getElementById(stat.stat.name).innerText = stat.base_stat;
      });

      document.getElementById("sprite").src = pokemon.sprites.front_default;
    })
    .catch((error) => {
      alert(error.message);
    });
}
