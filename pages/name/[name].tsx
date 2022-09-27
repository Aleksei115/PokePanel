import {  useState } from 'react'
import {  GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';
import confetti from 'canvas-confetti'
import { MainLayout } from '../../components/layouts'
import pokeApi from '../../api/pokeApi';
import { Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';
import { PokemonListResponse } from '../../interfaces/pokemon-list';


interface Props {
  pokemon: Pokemon
}
const PagePokemonName:  NextPage<Props> = ({ pokemon }) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(localFavorites.existInFavorites(pokemon.id));


    const onToggleFavorites = () => {
        localFavorites.toggleFavorite(pokemon.id); 
        setIsFavorite(!isFavorite)
        
        //si es false
        if(isFavorite) return

        confetti({
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: { y: 0, x:1 },
        zIndex:999
        });

    }

    return (
        <MainLayout title={pokemon.name}>
            <Grid.Container css={{marginTop:'5px'}} gap={2}>
                <Grid xs={12} sm={4}>
                <Card isHoverable css={{p:'30px'}}>
                    <Card.Body>
                    <Card.Image 
                        src={pokemon.sprites.other?.dream_world.front_default || "/no-image.jpg"}
                        alt={pokemon.name}
                        width="100%"
                        height={200}
                    />
                    </Card.Body>
                </Card>  
                </Grid>
                <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{display:'flex', justifyContent:'space-between'}}>
                    <Text h1>{ pokemon.name }</Text>
                    <Button color='gradient' ghost={ !isFavorite  } onPress={onToggleFavorites}>
                        {isFavorite ? 'En Favoritos' : 'Guardar en favoritos' }
                    </Button>
                    </Card.Header>
                    <Card.Body>
                        <Text size={30}>Sprites:</Text>
                        <Container display='flex' direction='row' justify='space-between'>
                        <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100}/>
                        <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100}/>
                        <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100}/>
                        <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100}/>
                        </Container>
                    </Card.Body>
                </Card>
                </Grid>
            </Grid.Container>
        </MainLayout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`)

    const namesOfPokemons: string[] = data.results.map((pokemon) => (`${pokemon.name}`))
  
    return {
      paths: namesOfPokemons.map(name => ({ params: { name } })),
      fallback: false
    }
}

//Si falla falla en build time
  

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
    const { name } = params as { name: string }

    return {
        props: {
            pokemon: await getPokemonInfo(name)
        }
    }
}
  

export default PagePokemonName