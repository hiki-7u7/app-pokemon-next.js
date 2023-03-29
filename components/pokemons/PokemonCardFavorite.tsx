import React from 'react'

import { useRouter } from 'next/router';
import { Grid, Card } from '@nextui-org/react';

interface Props {
    id: number
}

export const PokemonCardFavorite = ( { id }: Props ) => {
  
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id } >
        <Card 
          isHoverable 
          isPressable 
          css={{ padding: 10 }}
          onClick={onClick}
        >
            <Card.Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
                width={'100%'}
                height={ 140 }
            />
        </Card>
    </Grid>      
  )
}
