'use client'

import Hero from './layouts/hero/page';
import Contact from './layouts/contact/page';
import ServicesSection from './layouts/services/page';


export default function Home() {
  return (
      <>
        <Hero />
        <ServicesSection />
        <Contact />
      </>
  )
}
