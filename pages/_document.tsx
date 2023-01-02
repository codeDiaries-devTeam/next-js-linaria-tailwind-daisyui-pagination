import { Html, Head, Main, NextScript } from 'next/document'

import { styled } from '@linaria/react'
import { css } from '@linaria/core'
export default function Document() {
  return (
    <Html data-theme="light" >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}