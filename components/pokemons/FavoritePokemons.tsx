import { Grid } from '@nextui-org/react';

import { PokemonCardFavorite } from './PokemonCardFavorite';


interface Props {
    pokemons: number[];
}

export const FavoritePokemons = ( { pokemons }: Props ) => {
  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'>
        {
            pokemons.map( pokeId => <PokemonCardFavorite key={pokeId} id={pokeId}/>)
        }
    </Grid.Container>
  )
}
