import SectionHero from '@/components/common/SectionHero'
import { WorksList } from '@/components/work/WorksList'
import { createPageMetadata } from '@/lib/seo'
import React from 'react'

const page = () => {
  return (
    <>
        <SectionHero
        heading={"Brands we have backed."}
        desc={"Capital and celebrity, structured as a single move. Strategic advisory anchored to talent. Full-stack engagements that compound."}
      />
        <WorksList/>
    </>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/work");
}
