import { useEffect,useState } from 'react';
import { MainLayout } from '../../components/layouts'
import NoFavorites from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';
import FavoritePokemons from '../../components/pokemon/FavoritePokemons';



const Favorites = () => {

  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {

    setFavorites(localFavorites.pokemonsFavorites())

  }, [])

  return (
    <MainLayout title='Pokémons - Favoritos'>

      {
        favorites.length === 0 ?
        <NoFavorites /> :
        <FavoritePokemons favorites={favorites}/>


      }
    </MainLayout>
  )
}


// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const { data } = await 

//   return {
//     props: {
      
//     }
//   }
// }


export default Favorites