import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react';

import '@/styles/globals.css' // Puede que al momento del build aqui de error solo cambia la ruta
import { darkTheme } from '../themes';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
