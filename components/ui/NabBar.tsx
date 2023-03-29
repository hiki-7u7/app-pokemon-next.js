import { Link, Spacer, Text, useTheme, Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

import Image from 'next/image';
import NextLink from 'next/link';


export const Navbar = () => {

    const { theme } = useTheme();
    const route = useRouter();

    const onClickFavorites = () => {
        route.push(`/favorites`)
    };

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 50px',
            backgroundColor: theme?.colors.gray50.value
        }}>
            <Image 
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />

            <NextLink href='/' legacyBehavior passHref>
                <Link>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okémon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }}/>
            
            <Button  onClick={onClickFavorites} flat color="primary" bordered>
                <Text color='white'>Favoritos</Text>
            </Button>

            <Spacer />
        </div>
    );
};