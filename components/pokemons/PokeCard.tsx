import React from 'react'

import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { SmallPokemon } from '../../interfaces/pokemon-list';

interface Props {
    pokemon: SmallPokemon;
}

export const PokeCard = ( {pokemon}:Props ) => {

    const { id, img, name } = pokemon;
    const route = useRouter();

    const onClickPokemonCard = () => {
        route.push(`/name/${pokemon.name}`)
    };

    return (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <Card 
                isHoverable 
                isPressable
                onClick={onClickPokemonCard}
            >
                <Card.Body css={{ p: 1 }}>
                    <Card.Image 
                        src={img}
                        width='100%'
                        height={140}
                    />
                </Card.Body>
                    <Card.Footer>
                        <Row justify='space-between'>
                            <Text transform='capitalize'>{ name }</Text>
                            <Text>{ id }</Text>
                        </Row>
                    </Card.Footer>
            </Card>
        </Grid>
    )
}
