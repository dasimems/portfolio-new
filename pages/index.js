import About from '@/components/pages/landing/About'
import Banner from '@/components/pages/landing/Banner'
import Conviction from '@/components/pages/general/Conviction'
import Projects from '@/components/pages/landing/Projects'
import Service from '@/components/pages/landing/Service'
import WhyMe from '@/components/pages/landing/WhyMe'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    
      <Banner />

      <Service />

      <About />

      <WhyMe />

      <Projects />

      <Conviction />

    </>
  )
}
