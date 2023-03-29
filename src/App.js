import Card from "./components/card";
import React, { useState } from "react";






function App() {
  const [data, setData] = useState(null);
  const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const [allPokemons, setAllPokemons] = useState([])

  function getPokemons() {
    fetch(loadPoke).then(res => res.json()).then(data => {
      setData(data);
      setLoadPoke(data?.next)
      data?.results.forEach(pokemon => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`).then(res => res.json()).then((newPokemon) => setAllPokemons(prevItems => {
          return [...prevItems, newPokemon]
        }))

      });

    })
  }
  React.useEffect(() => {
    getPokemons();
  }, [])




  return (
    <div>
      <h2 class="text-center text-white bg-black">Pokemons </h2>
      <div class="container-fluid row">
        {allPokemons?.map((pokemon, index) =>
          <Card class="col-3"
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
            stat1={pokemon.stats[0].stat.name}
            stat2={pokemon.stats[1].stat.name}
            stat3={pokemon.stats[2].stat.name}
            stat4={pokemon.stats[3].stat.name}
            stat5={pokemon.stats[4].stat.name}
            stat6={pokemon.stats[5].stat.name}
            bs1={pokemon.stats[0].base_stat}
            bs2={pokemon.stats[1].base_stat}
            bs3={pokemon.stats[2].base_stat}
            bs4={pokemon.stats[3].base_stat}
            bs5={pokemon.stats[4].base_stat}
            bs6={pokemon.stats[5].base_stat}
          />
        )
        }
        <button className="btn btn-dark" onClick={() => getPokemons()}>More Pokemons</button>
      </div>

    </div>
  );
}

export default App;
