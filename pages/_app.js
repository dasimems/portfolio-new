import Footer from '@/components/general/footer/Footer'
import Nav from '@/components/general/nav/Nav'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>

    <Nav />

    <main className='min-h-screen'>

      <Component {...pageProps} />

    </main>


    <Footer />
  
  </>
  


}
