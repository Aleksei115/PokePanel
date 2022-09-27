import pokeApi from '../api/pokeApi';
import { Pokemon } from '../interfaces/pokemon';

export const getPokemonInfo = async ( request: string ) => {

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${request}`)
  
  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  } as Pokemon
  
}