"use client"
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import { useGSAP } from '@gsap/react'
import ColorBends from '../animation/ColorBends'
import GradientBlinds from '../animation/GradientBlinds';
import Threads from '../animation/Threads'

gsap.registerPlugin(ScrollTrigger, SplitText)

const SectionHero = ({ btnText, heading, desc }) => {
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
            delay: 1
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

    useGSAP(() => {
        gsap.to(".hero_bg", {
            opacity: 1,
            delay: 0.5
        })
    })
    return (
        <div className=' content_box container h-[60vh]!  overflow-hidden items-end flex bg-[#4688F0] text-white pb-16'>
            <div className="absolute w-full h-full inset-0 z-10 max-lg:hidden">
                <Threads
                    amplitude={3}
                    distance={0.45}
                    enableMouseInteraction
                />
            </div>
            <div className="space-y-5 w-full pointer-events-none  relative z-10 ">
                <h1 className=' heading_split md:w-[80%] leading-none  '>{heading}</h1>
                <p className=' paragraph_split md:w-[45%] leading-tight text-xl'>{desc}</p>
            </div>
        </div>
    )
}

export default SectionHero