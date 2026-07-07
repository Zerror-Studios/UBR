"use client"
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'
import TheMindset from './TheMindset'
import Threads from '../animation/Threads'
gsap.registerPlugin(ScrollTrigger, SplitText)

const ApproachHero = () => {
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
    <div className=" content_box w-full bg-[#4688F0] overflow-hidden relative text-white">
      <div className="absolute w-full h-full inset-0 z-10">
        <Threads
          amplitude={1.9}
          distance={1.0}
          enableMouseInteraction
        />
      </div>
      <div className=" pointer-events-none content_box w-full relative overflow-hidden ">
        <div className='container h-[60vh]! overflow-hidden items-end flex pb-16'>
          <div className="space-y-5 w-full  relative z-10 ">
            <h1 className=' heading_split md:w-[80%] leading-none  '>An operating system for profitable scale.</h1>
            <p className=' paragraph_split md:w-[45%] leading-tight'>In India's complex market, long-term value isn't created by venture capital alone. It is created by venture building. Five convictions, five phases, five pillars.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApproachHero