"use client"
import React, { useEffect, useRef, useState } from 'react'
import DotButton from '../common/DotButton'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import Image from 'next/image';
import GradientBlinds from '../animation/GradientBlinds';
gsap.registerPlugin(ScrollTrigger, SplitText)

const modelCards = [
    {
        brand: "UBR Brings",
        logo: "/images/logo-ubrxdisrptve.png",
        title: "The Capital And The Muscle.",
        desc: "A capital and operating advisory founded by Binoy Khimji. Institutional capital access, multiple consumer ventures built and scaled, and deep distribution intelligence across India. Anchored in the Cornerstone Group ecosystem.",
        img: "/images/home/ubr_bg.png",
        tags: [
            {
                label: "CAPITAL",
                icon: "/icons/capital.png",
            },
            {
                label: "OPERATIONS",
                icon: "/icons/operation.png",
            },
            {
                label: "DISTRIBUTION",
                icon: "/icons/distribution.png",
            }
        ],
    },

    {
        brand: "DISRPTVE Brings ",
        logo: "/images/logo-disrptve-dark.png",
        title: "The Brand And The Audience.",
        desc: "A marketing and communications agency built by Ashish Chowdhry and Kaushik Sundararajan. Over a decade of brand strategy across Indian consumer categories, with deep access to celebrity and creator talent. Built by serial entrepreneurs who have raised capital and scaled multiple businesses themselves.",
        img: "/images/home/disrptve_bg.png",
        tags: [
            {
                label: "TALENT",
                icon: "/icons/talent.png",
            },
            {
                label: "BRAND",
                icon: "/icons/brand.png",
            },
            {
                label: "AUDIENCE",
                icon: "/icons/audience.png",
            },
        ],
    },
]

const MobileHero = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

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
            delay: 0
        })
        tl.to([".itx_1", ".itx_2"], {
      transform: "translateY(0)",
      ease: "in-out-quint",
    })
    tl.to(".itx_1", {
      transform: "translateY(100%)",
      ease: "in-out-quint",
    }, ">+=0.25")
    tl.to(".itx_2", {
      transform: "translateY(-100%)",
      ease: "in-out-quint",
    }, "<")
    tl.to(".load_clip_paren_1", {
      y: -6,
      x: 5,
      duration: 0.5,
      ease: "in-out-quint",
    }, "<")
    tl.to(".load_clip_paren_2", {
      y: 6,
      x: -5,
      duration: 0.5,
      ease: "in-out-quint",
    }, "<")
        tl.to(".load_clip_vid", {
            height: "100%",
            width: "100vw",
            duration: 1,
            ease: "in-out-quint",
        });

        tl.to(".load_clip_paren", {
            height: "100%",
            duration: 1,
            ease: "in-out-quint",
        }, "<");
        tl.to(["content_box", ".hero_content", ".hero_bg", ".video_section"], {
            opacity: 1,
            stagger: 0.5
        })
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

    }, [isMobile]);

    return (
        <>
            {isMobile && (
                <>
                    <div className=" md:hidden  w-full fixed top-0 left-0 z-[100]  h-screen center  overflow-hidden pointer-events-none">
                        <div className="absolute translate-x-26">
                            <div className=' text-3xl  leading-none block overflow-hidden font-semibold diagramm'> <p className='translate-y-full itx_1'>ubr</p></div>
                            <div className=' text-3xl  leading-none block overflow-hidden uppercase font-semibold diagramm'> <p className='-translate-y-full itx_2'>Disrptve</p> </div>
                        </div>
                        <div className="  h-[0%]  load_clip_paren_1 load_clip_paren ">
                            <div style={{ clipPath: "polygon(0 0, 0% 100%, 90% 0)" }} className="size-12 clip_rd -translate-y-6 translate-x-1/2 shrink-0 bg-[#d80000]"></div>
                        </div>
                        <div className="w-[0%] shrink-0 load_clip_vid  h-[0%] "></div>
                        <div className=" h-[0%]  load_clip_paren_2 load_clip_paren  flex w-12 justify-end items-end">
                            <div style={{ clipPath: "polygon(100% 0, 10% 100%, 100% 100%)" }} className="size-12 clip_rd translate-y-6 -translate-x-1/2 shrink-0 bg-[#d70000]"></div>
                        </div>
                    </div>
                    <div className='story_wrapper relative '>


                        <div className="  hero_section w-full pt-14 pb-10 h-[100svh] flex flex-col justify-between  overflow-hidden  content_box ">

                            <div className="video_section mx-auto container opacity-0 center  rounded-xl overflow-hidden">
                                <video src="/videos/portrait_video.mp4" loop autoPlay muted playsInline className='cover rounded-xl'></video>
                            </div>
                            <div className=' hero_content mt-10 opacity-0 padding flex items-end '>

                                <div className="pointer-events-none w-full  relative z-10 md:grid items-end grid-cols-6">
                                    <div className="col-span-4">
                                        <p className="md:text-xl paragraph_split mb-2   ">The integrated model  for    non-linear growth.</p>
                                        <h1 className=' mt-2 md:hidden   leading-12 md:leading-24 tracking-tighter heading_split '>Built for Entrepreneurs chasing meaningful outcomes.</h1>
                                    </div>
                                    {/* <div className=" mt-2  text-left md:text-right flex md:justify-end pointer-events-none relative z-10 w-full col-span-2">
                                        <p className='leading-tight  md:text-xl   paragraph_split '>By <b> Binoy Khimji,</b> <b> Ashish Chowdhry </b> <br /> and  <b>Kaushik Sundararajan.</b></p>
                                    </div> */}
                                </div>
                            </div>
                        </div>


                        <div className=" w-full h-full py-18 center  bg-[#4688F0] ">
                            <p
                                className=" diagramm text-2xl lg:text-[4rem] font-semibold uppercase padding w-full md:w-[82%] text-center leading-tight text-white whitespace-normal"
                            >
                                <span className=''>UBR DISRPTVE</span> is a venture builder for consumer brands that want to <span className='highlight_white'> scale profitably.</span>
                                We back founders launching new ventures and operators reigniting
                                established ones.
                            </p>
                        </div>

                        <div className="  top-full   w-full h-full inset-0 bg-[#4688F0]  pb-12 ">
                            <div className="w-full container flex h-full items-center overflow-hidden">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                                    {modelCards.map((card, index) => (
                                        <div
                                            key={index}
                                            className={` card_${index} group relative  bg-white flex flex-col justify-between text-black  rounded-lg p-7 md:p-10 overflow-hidden `}
                                        >
                                            <div className="relative">
                                                <div className="relative h-8 mb-5  ">
                                                    <img
                                                        src={card.logo}
                                                        alt="logo"
                                                        className="h-full"
                                                    />
                                                </div>
                                                <h4 className="leading-none   md:md:font-semibold">
                                                    {card.brand}
                                                </h4>
                                                <h4 className="leading-none   md:md:font-semibold">
                                                    {card.title}
                                                </h4>
                                                <p className="relative mt-5 md:mt-10 opacity-80  leading-tight md:text-lg">
                                                    {card.desc}
                                                </p>
                                            </div>


                                            <div className=" relative mt-5 md:mt-10 grid grid-cols-3  gap-3">
                                                {card.tags.map((tag, i) => {
                                                    return (
                                                        <div
                                                            key={i}
                                                            className={`rounded-md font-medium text-sm p-3 border border-black/20  bg-[#FFFFFF80] text-black`}
                                                        >
                                                            <div className="flex flex-col justify-center items-center md:gap-5">
                                                                <Image height={40} width={40} src={tag.icon} className=' max-sm:scale-75' alt='icon' />

                                                                <p className=" max-sm:text-xs aeonik md:md:font-semibold   uppercase">
                                                                    {tag.label}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default MobileHero