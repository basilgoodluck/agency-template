'use client'

import Hero from './layouts/hero/page';
import Contact from './layouts/contact/page';
import ServicesSection from './layouts/services/page';
import AngleCurveDemo from './layouts/brand-timeline/angle';


export default function Home() {
  return (
      <>
        <Hero />
        <AngleCurveDemo />
        <ServicesSection />
        <Contact />
      </>
  )
}
