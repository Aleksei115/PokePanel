import { Card, Grid } from '@nextui-org/react';
import { FC } from 'react';
import { useRouter } from 'next/router';

interface Props {
    pokemonID: number
}


export const CardFavoritePokemon: FC<Props> = ( { pokemonID } ) => {

    const router = useRouter()

    const onGoFavorite = () => {
        router.push(`/pokemon/${pokemonID}`)
    }


  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={pokemonID} onClick={onGoFavorite}>
        <Card isHoverable isPressable css={{p:'30px'}} >                  
            <Card.Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
                alt={'pokemons'}
                width={'100%'}
                height={140}
            />                
        </Card>  
    </Grid>
  )
}
