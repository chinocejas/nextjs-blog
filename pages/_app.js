// pages/_app.js
import '../styles/global.css'
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from  '../theme/default'
import { initGA, logPageView } from '../components/utils/analytics';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp