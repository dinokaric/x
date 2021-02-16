import { AxiosResponse } from 'axios';
import http from '../PokemonAPI';

const getPokemonById = (idx: number) => {
  return http.get(`/pokemon/${idx}/`);
}

const getAllPokemon = () : Promise<AxiosResponse<IAllPokemon>> => {
  return http.get<IAllPokemon>(`/pokemon?limit=3000`);
}

export interface IAllPokemon {
  count:number,
  results: { 
    name: string,
    url: string
   }[]
}

const PokemonAPIService = {
  getPokemonById,
  getAllPokemon
}

export default PokemonAPIService;