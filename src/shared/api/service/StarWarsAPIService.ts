import http from '../PokemonAPI';

const getPokemonById = (idx: number) => {

  return http.get(`/pokemon/${idx}/`);
}

export default {
  getPokemonById
}