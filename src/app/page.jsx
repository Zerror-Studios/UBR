import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import MacroPicture from "@/components/home/MacroPicture";
import MobileHero from "@/components/home/MobileHero";
import OurThesis from "@/components/home/OurThesis";
import SelectedWork from "@/components/home/SelectedWork";
import WhatWeDo from "@/components/home/WhatWeDo";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
      <Hero />
      <MobileHero />
      <MacroPicture />
      <div className="bg-[#4688F0] ">
        <WhatWeDo />
      </div>
      <SelectedWork />
      <OurThesis />
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
