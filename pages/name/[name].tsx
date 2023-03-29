import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Layout } from '../../components/layouts'
import pokeApi from '../../api/pokeApi';
import { Pokemon } from '../../interfaces/pokemon-item';
import { PokemonInfo } from '../../components/pokemons';
import { PokemonListResponse } from '../../interfaces/pokemon-list';


interface Props {
    pokemon:Pokemon
}

const PokemonByNamePage:NextPage<Props> = ( {pokemon} ) => {

    
    return (
        <>
            <Layout pokemon={pokemon.name} title={`${pokemon.id}-${pokemon.name}`}>
                <PokemonInfo pokemon={pokemon}/>
            </Layout>
        </>
        
    );
};


//* ESTO SE EJECUTA SOLO EN EL SERVIDOR *//

export const getStaticPaths:GetStaticPaths = async() => {

    const {data} = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);  
    const pokemonsByName = data.results.map( poke => poke.name );    

    return{
        paths: pokemonsByName.map( name => ({
            params: { name : name }
        })),
        fallback: false,
    };
};

export const getStaticProps:GetStaticProps = async( {params} ) => {
  
    const {name} = params as { name:string };
    
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

    const pokeData = {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
    }

    return {
        props: { 
            pokemon: pokeData
        },
    };
};

export default PokemonByNamePage;