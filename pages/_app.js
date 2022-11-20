// pages/_app.js
import '../styles/global.css'
import { ChakraProvider } from '@chakra-ui/react'
import theme from  '../theme/default'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp