import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
  
  
}

export default MyApp
