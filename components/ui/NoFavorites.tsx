import { Container, Text } from '@nextui-org/react';
import Image from 'next/image';

const NoFavorites = () => {
  return (
    <Container display='flex' direction='column' alignItems='center' justify='center' css={{ height:'calc(100vh-100px)' }}>
    <Text h1>
      No hay favoritos
    </Text>
    <Image 
      src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'} 
      alt='pokemon' 
      width={250}
      height={250}
    />
  </Container>
  )
}

export default NoFavorites