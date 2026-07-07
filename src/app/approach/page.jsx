import ApproachHero from '@/components/approach/ApproachHero'
import PlaybookDetail from '@/components/approach/PlaybookDetail'
import TheMindset from '@/components/approach/TheMindset'
import TheOs from '@/components/approach/TheOs'
import SectionHero from '@/components/common/SectionHero'
import Playbook from '@/components/home/Playbook'
import { createPageMetadata } from '@/lib/seo'
import React from 'react'

const page = () => {
  return (
    <>
    <SectionHero
        btnText={"Our Approach"}
        heading={"An operating system for profitable scale."}
        desc={"In India's complex market, long-term value isn't created by venture capital alone. It is created by venture building. Five convictions, five phases, five pillars."}
      />
      <TheMindset />
      <TheOs />
      <Playbook/>
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/approach");
}
