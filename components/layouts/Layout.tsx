import Head from "next/head"
import { ReactNode } from "react";
import { Navbar } from "../ui";

interface Props {
    children: ReactNode;
    pokemon?: string;
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout = ( { children, title, pokemon = 'XXXX' }:Props ) => {
  


    return (
        <>
            <Head>
                <title>{ title || 'Pokemon App' }</title>
                <meta name="author" content='Nini AV' />
                <meta name="description" content={`Informacion del pokemon ${pokemon}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Informacion sobre el ${pokemon}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${pokemon}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <main>

                <Navbar />

                {children}
            </main>
        </> 
    );
};
