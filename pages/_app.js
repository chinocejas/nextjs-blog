// pages/_app.js
import "../styles/global.css";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/default";
import { initGA, logPageView } from "../components/utils/analytics";
import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GA_TRACKING_KEY) {
      initGA();
    }

    logPageView();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_KEY}`}
      />
      <Script id="ga-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_KEY}');
          `}
      </Script>

      <Component {...pageProps} />
      <Analytics></Analytics>
    </ChakraProvider>
  );
}

export default MyApp;
