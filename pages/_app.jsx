import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from '../common/store/index'
import { useStore } from 'react-redux'
import { ChakraProvider, extendTheme, Flex, createStandaloneToast } from '@chakra-ui/react'
import 'moment/locale/id'
import '../styles/globals.css'
import { Router } from 'next/router'
import { useState } from 'react'
import { CircleSpinner } from 'react-spinners-kit'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'
import fonts from '@/lib/Font'
// import theme from '@/lib/Theme'
import { Global } from "@emotion/react"

const WrappedApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false)
  const { ToastContainer } = createStandaloneToast()
  const store = useStore()

  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '1xl': '1366px',
    '2xl': '1272px',
    '3xl': '1880px',
    '4xl': '1900px',
  }

  const theme = extendTheme({
    breakpoints,
    fonts: {
      heading: "Poppins",
      body: "Poppins",
    },
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
        <Global styles={fonts} />
        {loading ? (
          <Flex h="100vh" alignItems="center" justifyContent="center">
            <CircleSpinner size={70} color="#10214B" loading={true} />
          </Flex>
        ) : (
          <>
            <Component {...pageProps} />
            <ToastContainer/>
          </>
        )}
      </ChakraProvider>
    </PersistGate>
  )
}

export default wrapper.withRedux(WrappedApp)
