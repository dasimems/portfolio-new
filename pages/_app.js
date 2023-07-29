import SEO from '@/components/general/SEO'
import Footer from '@/components/general/footer/Footer'
import Nav from '@/components/general/nav/Nav'
import '@/styles/globals.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
   useEffect(() => {
    Aos.init({
      easing: "linear",
      once: false,
    });
  }, []);
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setLoading(true)
    }
    const handleRouteComplete = (err, url) => {
      setLoading(false)
    }
 
    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteComplete)
    router.events.on('routeChangeError', handleRouteComplete)
 
    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    router.events.off('routeChangeComplete', handleRouteComplete)
      router.events.off('routeChangeError', handleRouteComplete)
    }
  }, [router])
  return <>

    {!Component.hideDefaultSEO && <SEO title={Component.title} description={Component.description} image={Component.image} imageDescription={Component.imageDescription} />}

    <Nav />

    {loading && <div className='page-loading fixed top-0 left-0'></div>}

    <main className='min-h-screen'>

      <Component {...pageProps} />

    </main>


    <Footer />
  
  </>
  


}
