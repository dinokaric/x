
import {useState,useEffect} from 'react';
import {IAllPokemon } from '../../../shared/api/service/PokemonAPIService';
import PokemonAPIService from '../../../shared/api/service/PokemonAPIService';

export const BrandsView = () => {
  const [pokemon, setPokemon] = useState<IAllPokemon|null>(null);
  
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      const {data} = await PokemonAPIService.getAllPokemon();
      setPokemon(data);
    } catch (e){
      console.log(e);
    }
  }

  const pokemonLinks = () => {
    if (pokemon == null) {
      return 'Loading';
    } else {
      return pokemon.results.map( (pokemonEntry, arrayIndex) => (<a key={arrayIndex} href={pokemonEntry.url}>{pokemonEntry.name}<br/></a>) );
    }
  }


  return (
    <div onClick={() => fetchData()}>
      {pokemonLinks()}
    </div>
    
  )
}