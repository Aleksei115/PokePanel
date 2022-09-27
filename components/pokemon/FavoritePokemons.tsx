import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { CardFavoritePokemon } from './CardFavoritePokemon';

interface Props {
  favorites: number[]
}


const FavoritePokemons: FC<Props> =  ({ favorites }) => {
    
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        favorites.map( id => {
          return(
            <CardFavoritePokemon key={id} pokemonID={id}/>
          )
        })
      }
    </Grid.Container>
  )
}

export default FavoritePokemons