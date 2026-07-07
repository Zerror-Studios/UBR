import SectionHero from '@/components/common/SectionHero'
import CapitalAdvisory from '@/components/team/CapitalAdvisory'
import CoFounders from '@/components/team/CoFounder'
import HowWeWork from '@/components/team/HowWeWork'
import TeamHero from '@/components/team/TeamHero'
import WhoWePartner from '@/components/team/WhoWePartner'
import { createPageMetadata } from '@/lib/seo'
import React from 'react'

const page = () => {
  return (
    <>
      <SectionHero
        btnText={"Our Team"}
        heading={"An operating system for profitable scale."}
        desc={"In India's complex market, long-term value isn't created by venture capital alone. It is created by venture building. Five convictions, five phases, five pillars."}
      />
       <CoFounders />
        <CapitalAdvisory />
        <WhoWePartner/>
        {/* <HowWeWork/> */}
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/team");
}
