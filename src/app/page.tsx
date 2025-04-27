'use client'

import Hero from './layouts/hero/page';
import SEOSection from './layouts/seo/page';
import Contact from './layouts/contact/page';
import Projects from './layouts/projects/page';
import BotDevelopmentSection from './layouts/bot/page';
import ScriptingAutomationSection from './layouts/scripting-automation/page';
import ServicesSection from './layouts/services/page';


export default function Home() {
  return (
      <>
        <Hero />
        <ServicesSection />
        {/* <SEOSection />
        <BotDevelopmentSection />
        <ScriptingAutomationSection /> */}
        {/* <Projects /> */}
        <Contact />
      </>
  )
}
