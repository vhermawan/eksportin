import React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Theme from '../lib/Theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
       <Head>
          <link rel="manifest" href="/manifest.json" />
          {/* <link rel="apple-touch-icon" href="/icon.png"></link> */}
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={Theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
