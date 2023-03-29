import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Layout } from '../../components/layouts'
import pokeApi from '../../api/pokeApi';
import { Pokemon } from '../../interfaces/pokemon-item';
import { PokemonInfo } from '../../components/pokemons';


interface Props {
    pokemon:Pokemon
}

const PokemonPage:NextPage<Props> = ( {pokemon} ) => {

    
    return (
        <>
            <Layout pokemon={pokemon.name} title={`${pokemon.id}-${pokemon.name}`}>
                <PokemonInfo pokemon={pokemon}/>
            </Layout>
        </>
        
    );
};


//* ESTO SE EJECUTA SOLO EN EL SERVIDOR *//

export const getStaticPaths:GetStaticPaths = () => {

    const pokemons151 = [...Array(151)].map( (value,index) => `${index + 1}` );    

    return {
      paths: pokemons151.map( id => ({
        params: { id }
      })),
      fallback: false,
    };
};

export const getStaticProps:GetStaticProps = async( {params} ) => {
  
    const {id} = params as { id:string };
    
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

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

export default PokemonPage;