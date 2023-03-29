import { useEffect, useState } from 'react';


import { Layout } from '../../components/layouts';
import { Nofavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemons/FavoritePokemons';


const FavoritePage = () => {

    const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])

    useEffect(()=>{
        setFavoritesPokemons( localFavorites.pokemons() );
    },[])

    return (
        <Layout title='Pokemones favoritos'>
            {
                (favoritesPokemons.length === 0)
                ? ( <Nofavorites /> )
                : ( <FavoritePokemons pokemons={favoritesPokemons} /> )
            }
           
        </Layout>
    )
}

export default FavoritePage