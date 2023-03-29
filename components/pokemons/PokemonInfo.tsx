import { useEffect, useState } from 'react';

import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { Pokemon } from '../../interfaces/pokemon-item';
import { localFavorites } from '../../utils';

interface Props {
    pokemon:Pokemon
}

export const PokemonInfo = ( {pokemon}:Props ) => {

    const [isInfavorites, setIsInfavorites] = useState<boolean>();

    const handleSavePokemon = () => {
        localFavorites.toggleFavorites( pokemon.id );
        setIsInfavorites(!isInfavorites);

        if( isInfavorites ) return;

        var defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            shapes: ['star'],
            colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
          };
          
          function shoot() {
            confetti({
              ...defaults,
              particleCount: 40,
              scalar: 1.2,
              shapes: ['star']
            });
          
            confetti({
              ...defaults,
              particleCount: 10,
              scalar: 0.75,
              shapes: ['circle']
            });
          }
          
          setTimeout(shoot, 0);
          setTimeout(shoot, 100);
          setTimeout(shoot, 200);
    };

    useEffect(()=>{
        setIsInfavorites( localFavorites.existInFavorites(pokemon.id) )
    }, []);


    return (
        <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
                <Grid xs={ 12 } sm={ 4 } >
                    <Card isHoverable css={{ padding: '30px' }}>
                        <Card.Body>
                        <Card.Image 
                            src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                            alt={ pokemon.name }
                            width="100%"
                            height={ 200 }
                        />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={ 12 } sm={ 8 }>
                <Card>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text h1 transform='capitalize'>{ pokemon.name }</Text>

                        <Button
                            color="success"
                            onClick={handleSavePokemon}
                            flat
                            rounded
                            bordered
                            auto
                        >
                            { isInfavorites ? 'En favoritos' : 'Guardar en favoritos' }
                        </Button>
                    </Card.Header>

                    <Card.Body>

                        <Text size={30}>Sprites:</Text>
                        <Container direction='row' display='flex' gap={ 0 }>
                                <Image 
                                    src={ pokemon.sprites.front_default }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image 
                                    src={ pokemon.sprites.back_default }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image 
                                    src={ pokemon.sprites.front_shiny }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image 
                                    src={ pokemon.sprites.back_shiny }
                                    alt={ pokemon.name }
                                    width={ 100 }
                                    height={ 100 }
                                />
                        </Container>

                    </Card.Body>  

                </Card>
            </Grid>

        </Grid.Container>
    );
};
