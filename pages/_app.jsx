import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '../common/store/index'
import { useStore } from 'react-redux'
import { createBreakpoints } from '@chakra-ui/theme-tools'
import { ChakraProvider, extendTheme, Flex } from '@chakra-ui/react'
import 'moment/locale/id'
import '../styles/globals.css'
import { Router } from 'next/router'
import { useState } from 'react'
import { CircleSpinner } from 'react-spinners-kit'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'

const WrappedApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false)
  const store = useStore()

  const breakpoints = createBreakpoints({
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1272px',
    '3xl': '1880px',
    '4xl': '1900px',
  })

  const theme = extendTheme({
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
    },
    breakpoints,
  })

  Router.events.on('routeChangeStart', () => {
    setLoading(true)
  })

  Router.events.on('routeChangeComplete', () => {
    setLoading(false)
  })

  return (
    <PersistGate persistor={store.__persistor}>
      <ChakraProvider theme={theme}>
        {loading ? (
          <Flex h="100vh" alignItems="center" justifyContent="center">
            <CircleSpinner size={70} color="#1EA59A" loading={true} />
          </Flex>
        ) : (
          <Component {...pageProps} />
        )}
      </ChakraProvider>
    </PersistGate>
  )
}

export default wrapper.withRedux(WrappedApp)
