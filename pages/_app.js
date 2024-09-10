// pages/_app.js
import '../styles/global.css'
import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import theme from  '../theme/default'
import { initGA, logPageView } from '../components/utils/analytics';
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {

  useEffect(() => {    
    if (process.env.NEXT_PUBLIC_GA_TRACKING_KEY) {
      initGA();
    }

    logPageView();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics></Analytics>
    </ChakraProvider>
  )
}

export default MyApp