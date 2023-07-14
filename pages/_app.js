import SEO from '@/components/general/SEO'
import Footer from '@/components/general/footer/Footer'
import Nav from '@/components/general/nav/Nav'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>

    {!Component.hideDefaultSEO && <SEO title={Component.title} description={Component.description} image={Component.image} imageDescription={Component.imageDescription} />}

    <Nav />

    <main className='min-h-screen'>

      <Component {...pageProps} />

    </main>


    <Footer />
  
  </>
  


}
