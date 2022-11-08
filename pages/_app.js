import Script from 'next/script'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {ParallaxProvider} from 'react-scroll-parallax'


function MyApp({ Component, pageProps }) {
  return(
    <>
    
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6HCF5ENS4Y', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
    <>
    ) 
}

export default MyApp
