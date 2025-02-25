'use client'

import Hero from './layouts/hero/page';
import About from './layouts/about/page';
import Contact from './layouts/contact/page';
import Projects from './layouts/projects/page';


export default function Home() {
  return (
      <>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </>
  )
}
