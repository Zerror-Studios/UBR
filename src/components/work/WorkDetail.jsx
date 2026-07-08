"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'
import SectionHeading from '../common/SectionHeading'
import { useParams } from 'next/navigation'
import { WorkData } from '@/store/WorkData'
import { Link } from 'next-view-transitions'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import Threads from '../animation/Threads'
import SectionHero from '../common/SectionHero'
gsap.registerPlugin(ScrollTrigger, SplitText)

const WorkDetail = () => {

  const { slug } = useParams()
  const work = WorkData.find(work => work.slug === slug)

  const remainingWorks = WorkData.filter(work => work.slug !== slug)

  const marqueeRef = useRef(null);

  const xTo = useRef(null);
  const yTo = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });
  const handleMouseEnter = (e, title) => {

    if (!marqueeRef.current) return;

    mouse.current.x = e.clientX + 5;
    mouse.current.y = e.clientY - 25;

    gsap.set(marqueeRef.current, {
      x: mouse.current.x,
      y: mouse.current.y,
    });

    if (!xTo.current || !yTo.current) {
      xTo.current = gsap.quickTo(marqueeRef.current, "x", {
        duration: 0.4,
        ease: "expo.out",
      });

      yTo.current = gsap.quickTo(marqueeRef.current, "y", {
        duration: 0.4,
        ease: "expo.out",
      });
    }

    gsap.to(marqueeRef.current, {
      width: "6rem",
      paddingRight: ".5rem",
      paddingLeft: ".5rem",
      autoAlpha: 1,
      duration: 0.3,
      ease: "expo.out",
    });
  };

  const handleMouseMove = (e) => {
    if (!marqueeRef.current) return;

    mouse.current.x = e.clientX + 5;
    mouse.current.y = e.clientY - 25;

    xTo.current?.(mouse.current.x);
    yTo.current?.(mouse.current.y);
  };

  const handleMouseLeave = () => {
    if (!marqueeRef.current) return;

    gsap.to(marqueeRef.current, {
      width: 0,
      paddingRight: 0,
      paddingLeft: 0,
      autoAlpha: 0,
      duration: 0.3,
      ease: "expo.out",
    });
  };

  useGSAP(() => {
    const heading_split = SplitText.create(".heading_split", {
      type: "lines",
      linesClass: "split-line"
    });
    const paragraph_split = SplitText.create(".paragraph_split", {
      type: "lines",
      linesClass: "split-line"
    });

    [...heading_split.lines, ...paragraph_split.lines].forEach((line) => {
      const wrapper = document.createElement("div");

      wrapper.classList.add("line-wrapper");

      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.set([heading_split.lines, paragraph_split.lines], { yPercent: 100 });

    const tl = gsap.timeline({
      delay: .5
    })
    tl.to(".content_box", {
      opacity: 1,
      duration: 0.01
    })
    tl.to(".border_bar", {
      height: "100%",
      stagger: 0.2
    });
    tl.to(heading_split.lines, {
      yPercent: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
    }, "<");
    tl.to(paragraph_split.lines, {
      yPercent: 0,
      duration: 0.8,
      ease: "expo.out",
      stagger: 0.05,
    }, "<+0.2");
    tl.to([".blink_btn",], {
      opacity: 1,
      stagger: 0.15
    }, "<");

  });

  return (
    <>
      <div
        ref={marqueeRef}
        className="fixed top-0 left-0 pointer-events-none z-[999] w-0 opacity-0 text-white uppercase diagramm text-xs bg-[#4688F0] px-0 py-1 will-change-transform overflow-hidden"
      >
        <Marquee speed={40}>
          <p className="mr-1 whitespace-nowrap">
            View CaseStudy |
          </p>
        </Marquee>
      </div>
      <SectionHero
        btnText={"About Project"}
        heading={work.title}
        desc={work.description}
      />

      <div className={`w-full relative  center aspect-video ${work.classname}`}>
        <Image fill className='cover' src={work.image} alt="img" />
      </div>
      <div className="container py-12 md:py-24 md:grid grid-cols-6">
        <div className="col-span-3 grid grid-cols-2 max-sm:gap-10 md:pr-20 ">

          <div className="md:pr-10">
            <div className=" border-b border-black/50 mb-2 md:mb-5">
              <h6 className=''>category</h6>
            </div>
            <p className='md:text-lg'>{work.category}</p>
          </div>
          <div className="">
            <div className=" border-b border-black/50 mb-2 md:mb-5">
              <h6 className=''>Scope</h6>
            </div>
            <p className='md:text-lg'>{work.scope}</p>
          </div>
          <div className="col-span-2">
            <div className=" border-b border-black/50 mb-2 md:mb-5">
              <h6 className=''>Services deployed</h6>
            </div>
            <div className='flex flex-wrap gap-2'>
              {work.services.map((tag, i) => (
                <div key={i} className="rounded-sm font-medium  px-4 py-2 bg-[#4688F0] text-white w-fit]">
                  <p className=" text-xs diagramm uppercase">
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className=" max-sm:mt-10  col-span-3  md:space-y-8">
          <h3 data-para-effect className=' md:font-semibold leading-13!'>{work.detailHeading}</h3>
          <div className=" space-y-2 md:space-y-4 md:text-lg leading-tight">
            {work.descArray.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      <div className='pt-12 md:pt-24 space-y-5 md:space-y-16  border-t border-black'>
        <SectionHeading
          btnText="More work"
          heading="Other partnerships."
          desc="Capital, advisory and ambassador signings across beauty, fashion and sports." />
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5">
          {remainingWorks.map((item, i) => (
            <Link
              onMouseEnter={(e) => handleMouseEnter(e, item.title)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              key={i} href={`/work/${item.slug}`} className=" w-full space-y-2 group cursor-pointer ">
              <div className={`w-full center aspect-4/3 overflow-hidden rounded-md  ${item.classname}`}>
                <div data-img-effect className="w-full h-full relative center">
                  <Image fill className='cover max-sm:scale-50 md:group-hover:scale-110 transition-all duration-300' src={item.image} alt="img" />
                </div>
              </div>
              <div className="">
                <h6 className=''>{item.engagement}</h6>
                <h5 className='  md:font-semibold flex items-center gap-x-2 leading-none mt-1'>{item.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default WorkDetail