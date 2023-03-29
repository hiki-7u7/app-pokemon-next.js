import { GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layouts';
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import { PokeCard } from '../components/pokemons';



interface Props {
    pokemons: SmallPokemon[]
};


const HomePage:NextPage<Props> = ( { pokemons }) => {
    return (
        <>
        <Layout title='Listado de Pokemons'>
            <Grid.Container gap={2} justify={'flex-start'}>
                 {
                    pokemons.map( ( pokemon ) => (
                        <PokeCard key={pokemon.id} pokemon={pokemon}/>
                    ))
                }
            </Grid.Container>
        </Layout>
        </>
    );
};


//* ESTO SE EJECUTA EN EL SERVIDOR *//

export const getStaticProps:GetStaticProps = async( ctx ) => {
  
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

    const pokemons: SmallPokemon[] = data.results.map( (poke,i) => ({
        ...poke,
        id: i + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
    }));

    return {
        props: {
            pokemons,
        },
    };
};

export default HomePage;