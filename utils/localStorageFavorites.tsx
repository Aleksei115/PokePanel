
const toggleFavorite = ( id: number) => {

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]') 


    //Si el pokemon ya esta guardado en los favoritos no lo incluimos en el arreglo de nuevo
    if( favorites.includes(id) ){
        favorites = favorites.filter( pokeID => pokeID !== id)
    }
    else{
        favorites.push(id)
    }

    localStorage.setItem('favorites', JSON.stringify( favorites ));

}


const existInFavorites = ( id: number): boolean => {

    if( typeof window == 'undefined') return true

    else{

        let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]') 
        return favorites.includes(id)
    }


}

const pokemonsFavorites = (): number[] => {

    return JSON.parse( localStorage.getItem('favorites') || '[]');

}


const functions = {
    toggleFavorite,
    existInFavorites,
    pokemonsFavorites
}

export default functions