"use client";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react'
import DotButton from '../common/DotButton';
import { useGSAP } from '@gsap/react';
import Noise from '../animation/Noise';
gsap.registerPlugin(ScrollTrigger);

const OurThesis = () => {
    const containerRef = useRef();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
        })
        tl.to(".circ_1", {
            opacity: 1,
            scale: 1
        })
        tl.to(".circ_2", {
            opacity: 1,
            scale: 1
        })
        tl.to(".circ_3", {
            opacity: 1,
            scale: 1
        })
        tl.to(".circ_4", {
            opacity: 1,
            scale: 1
        })
        tl.to([".circ_1", ".circ_3"], {
            transform: "translateX(0)",
            opacity: 0
        })
        tl.to([".circ_2", ".circ_4"], {
            transform: "translateY(0)",
            opacity: 0
        }, "<")
        tl.to(".circ_5", {
            opacity: 0
        }, "<")
        tl.to(".spn_1", {
            transform: "translateY(-100%)"
        }, "<")
        tl.to(".circ_6", {
            opacity: 1
        }, "<")
        tl.to(".spn_2", {
            transform: "translateY(0%)"
        }, "<")

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className=' border-t border-black/50   w-full h-[300vh] relative'>
            <div className="container h-screen sticky! overflow-hidden top-0 md:flex ">
                <div className=" w-full md:w-1/2 max-sm:pt-20 h-fit md:h-screen flex flex-col gap-y-5 md:gap-y-20 justify-center">
                    <div className="space-y-5">
                        <DotButton text="The Outcome" className={"text-black!"} />
                        <h3 data-para-effect className='   leading-tight'>Built to scale brands <br /> the right way.</h3>
                    </div>
                    <div className='md:text-xl  space-y-2 leading-tight md:w-[80%] '>
                        <p>
                            Old playbook:{" "}
                            buy customers, build the brand later. We invert it. The talent we bring
                            into a brand as a co-owner already
                            owns the audience the brand wants to sell to.
                        </p>

                        <p>
                            Trust shows up before the spend. CAC bends.
                            Repeat purchase rises. The brand stops renting attention and starts owning it.
                        </p>

                        <p>
                            <span className='highlight_white'>
                            But trust alone is not a business. To turn it into{" "}
                            profitable scale, five capabilities
                            have to work as one.
                            </span>
                        </p>
                    </div>
                </div>
                <div className=" w-full text-[2.5vw] md:text-[1vw] md:w-1/2 h-[50vh] md:h-screen center relative">
                    <div className=" circ_1 scale-0 opacity-0 size-[30vw] md:size-[15vw] -translate-x-[25vw] md:-translate-x-[12vw] absolute border-2 border-black rounded-full center">
                        <div className='   aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Talent
                            </p>
                        </div>
                    </div>
                    <div className=" circ_2 scale-0 opacity-0 size-[30vw] md:size-[15vw] -translate-y-[25vw] md:-translate-y-[12vw] absolute border-2 border-black rounded-full center">
                        <div className='   aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Capital
                            </p>
                        </div>
                    </div>
                    <div className="circ_3  scale-0 opacity-0 size-[30vw] md:size-[15vw] translate-x-[25vw] md:translate-x-[12vw] absolute border-2 border-black rounded-full center">
                        <div className='   aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Design
                            </p>
                        </div>
                    </div>
                    <div className=" circ_4 scale-0 opacity-0 size-[30vw] md:size-[15vw] translate-y-[25vw] md:translate-y-[12vw] absolute border-2 border-black rounded-full center">
                        <div className='   aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Strategy
                            </p>
                        </div>
                    </div>
                    <div className=" circ_5  size-[30vw] md:size-[15vw] absolute border-2 border-black rounded-full center">
                        <div className='   aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_1'>
                                Distribution
                            </p>
                        </div>
                    </div>
                    <div className=" circ_6 opacity-0 size-[30vw] md:size-[15vw]  absolute border-2 border-black rounded-full center">
                        <div className='   aeonik  uppercase block w-fit overflow-hidden'>
                            <p className='spn_2 translate-y-full'>
                                Sustainable
                                Scale
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurThesis