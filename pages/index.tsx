import type { NextPage,GetStaticProps } from 'next'
import { Button, Card, Grid, Row, Text } from '@nextui-org/react'
import { MainLayout } from '../components/layouts'
import { pokeApi } from '../api';
import { PokemonListResponse } from '../interfaces';
import { SmallPokemon } from '../interfaces/pokemon-list';
import { PokemonCard } from '../components/pokemon';
import Image from 'next/image';

interface HomeProps {
  pokemons: SmallPokemon[],
}


const HomePage: NextPage<HomeProps> = ({ pokemons }) => {

  return (
    <MainLayout title='Poke Panel'>
      <h1>Pokemons</h1>
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map(pokemon => {
            return(
              <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            )
          })
        }
      </Grid.Container>
    </MainLayout>
  )
}


//Solo se ejecuta en lado del server y solo se ejecuta en build time, solo se usa dentro de pages
//Leer file system, base de datos, etc
//Nada de aqui llega al cliente

//Usar getStaticProps cuando se conoce todo lo que va a ejecutar, nunca algo que necesitemos del cliente
//Son cosas que ya estan definicas y no cambiarán
export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemons:SmallPokemon[] = data.results.map( (result,i) => {
    return {
      ...result,
      id: i+1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
