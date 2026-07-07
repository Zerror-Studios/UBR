"use client";
import React, { useRef } from 'react'
import SectionHeading from '../common/SectionHeading'
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const processData = [
  {
    id: 1,
    tag: "PICK",
    img: "/images/approach/audit.jpeg",
    title: "Audit & Align",
    description:
      "Listen to category, competition and culture. Establish a clear baseline.",
    output: "360° Brand Diagnosis",
  },
  {
    id: 2,
    tag: "REFRAME",
    img: "/images/approach/reframe.jpeg",
    title: "Reframe & Reimagine",
    description:
      "Identify growth bottlenecks. Redefine purpose and positioning for market impact.",
    output: "Sharper Architecture",
  },
  {
    id: 3,
    tag: "DESIGN",
    img: "/images/approach/design.jpeg",
    title: "Design the Engine",
    description:
      "Build the experience layer, identity, packaging, retail-ready, high-converting digital.",
    output: "Brand System That Performs",
  },
  {
    id: 4,
    tag: "SCALE",
    img: "/images/approach/scale.jpeg",
    title: "Scale with Intelligence",
    description:
      "Activate growth, performance media, authentic content, community building.",
    output: "Better CAC, Higher Retention",
  },
  {
    id: 5,
    tag: "CAPITALISE",
    img: "/images/approach/capitalise.jpeg",
    title: "Institutionalise & Capitalise",
    description:
      "Embed governance. Activate our network. Shape the investor narrative. Open doors.",
    output: "Funding-Ready Brand",
  },
];

const TheOs = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    const container = containerRef.current;

    if (!slider || !container) return;

    const updateAnimation = () => {
      const totalWidth = slider.scrollWidth;
      const viewportWidth = window.innerWidth;


      const extraOffset = window.innerWidth >= 768 ? 96 : 15;

      const maxTranslate =
        totalWidth - viewportWidth + extraOffset;

      gsap.to(slider, {
        x: -maxTranslate,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    };

    updateAnimation();

    window.addEventListener("resize", updateAnimation);

    return () => {
      window.removeEventListener("resize", updateAnimation);
    };
  });

  return (
    <div ref={containerRef} className=" w-full  h-[300vh]">
      <div className="sticky top-0 w-full  h-screen flex flex-col justify-center max-sm:space-y-12 md:justify-between py-12 md:py-24 overflow-hidden">
        <div className="">
          <SectionHeading
            btnText="The OS"
            heading="A phase-gated journey from vision to velocity."
            desc={<div className='space-y-2'>
              <p>Five phases. Clear outputs.</p>
               <p className='highlight'>We don’t just advise, we co-create. </p> 
               </div>} />
        </div>

        <div className="">
          <div
            ref={sliderRef}
            className="slider flex gap-x-5  px-4 md:px-24"
          >
            {processData.map((item, i) => (
              <div
                key={i}
                className=" w-[95vw] md:w-[40vw] lg:w-[30vw] relative  shrink-0 "
              >

                <div className="w-full  relative aspect-4/3 rounded-xl overflow-hidden">
                  <Image
                    fill
                    src={item.img}
                    className="cover"
                    alt="img"
                  />
                </div>
                <div className='space-y-5 w-full'>
                  <h4 className='leading-none font-semibold mt-5 mb-2'>{item.title}</h4>
                  <p className=" opacity-60 text-lg leading-tight w-[80%]">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheOs;