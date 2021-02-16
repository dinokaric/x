import { useState, useEffect } from 'react'
import StarWarsAPIService from '../../../shared/api/service/StarWarsAPIService';


interface IPokemonData {
  name: string,
  height: number,
  weight: number
}

export const ShopView = () => {
  const [pokemonData, setPokemonData] = useState<any>();
  const [pokemonId, setPokemonId] = useState<number>(1);

  useEffect(() => {
    getDataFromPokemonApi(pokemonId)
  }, [pokemonId]);

  // const getDataFromPokemonApi = (idx: number) => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/${idx}/`)
  //     .then(response => setPokemonData(response))
  //     .catch(err => { console.log(err) });
  // }

  const getDataFromPokemonApi = async (idx: number) => {
    try {
      const response = await StarWarsAPIService.getPokemonById(idx);
      setPokemonData(response);
    } catch (e) {
      console.log(e);
    }

  }

  const showPokemonById = (idx: number) => {
    setPokemonId((idx < 0) ? 0 : idx);
  }

  return (
    <div>
      <h1>HomeView</h1>
      <h1>Name: {pokemonData?.data.name}</h1>
      <h1>Height: {pokemonData?.data.height}</h1>
      <h1>Weight: {pokemonData?.data.weight}</h1>
      <button onClick={() => showPokemonById(pokemonId - 1)}>Previous</button>
      <button onClick={() => showPokemonById(pokemonId + 1)}>Next</button>

    </div>
  )
}
