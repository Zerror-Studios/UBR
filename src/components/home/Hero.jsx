"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import SplitText from 'gsap/dist/SplitText'
import Image from 'next/image';
import Aurora from '../animation/Aurora';
gsap.registerPlugin(ScrollTrigger, SplitText)

const modelCards = [
  {
    brand: "UBR Brings",
    logo: "/images/logo-ubrxdisrptve.png",
    title: "The capital and the muscle.",
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
    title: "The brand and the audience.",
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

const Hero = () => {

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
    tl.to([".desk_itx_1", ".desk_itx_2"], {
      transform: "translateY(0)",
      ease: "in-out-quint",
    })
    tl.to(".desk_itx_1", {
      transform: "translateY(100%)",
      ease: "in-out-quint",
    }, ">+=0.25")
    tl.to(".desk_itx_2", {
      transform: "translateY(-100%)",
      ease: "in-out-quint",
    }, "<")
    tl.to(".shape_1", {
      clipPath: "polygon(5% 0%, 100% 0%, 100% 0%, 5% 90%)",
    })
    tl.to(".shape_2", {
      clipPath: "polygon(95% 10%, 95% 10%, 95% 100%, 0% 100%)",
    }, "<")
    tl.to([".shape_1", ".shape_2"], {
      scale: 1,
      ease: "in-out-quint",
    })
    tl.to(".desk_clip_vid", {
      opacity: 1,
    })
    tl.to([".content_box", ".hero_content", ".hero_bg", ".video_section"], {
      opacity: 1,
      stagger: 0.5
    }, "<");
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

  useGSAP(() => {

    let anim_chars;
    if (window.innerWidth > 750) {
      anim_chars = SplitText.create(".anim_par", {
        type: "words,chars",
        charsClass: "char",
        reduceWhiteSpace: false, // preserve spaces
      })
    }

    if (window.innerWidth > 750) {
      gsap.set(anim_chars.chars, {
        opacity: 0.1,
      })
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".story_wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      }
    })
    if (window.innerWidth > 750) {
      tl.to([".shape_1"], {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)",
        ease: "none",
        duration: 0.05
      });
      tl.to([".shape_2"], {
        clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "none",
        duration: 0.05
      }, "<");
      tl.to(".hero_content", {
        opacity: 0,
      })
      tl.to([".shape_1", ".shape_2"], {
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",
        ease: "none",
      }, "<");
    }
    tl.to(".over_txt", {
      top: "0%",
      ease: "linear",
    })
    if (window.innerWidth > 750) {
      tl.to(anim_chars.chars, { opacity: 1, stagger: 0.005, duration: 0.001 }, "<+0.2")
    }

    tl.to(".anim_par", {
      opacity: 0,
      ease: "expo.out",
    })
    tl.to(".card_paren", {
      top: "0%",
      ease: "linear",
    }, "<")
    if (window.innerWidth > 750) {
      tl.from(".card_1", {
        opacity: 0,
        transform: "translateY(105%)",
        ease: "linear",
      })
    }
  }, [isMobile]);

  return (
    <>
      {!isMobile && (
        <>


          <div className='story_wrapper relative h-[300vh] md:h-[500vh]'>


            <div className=" sticky top-0   hero_section w-full h-screen perspective-[30rem] center  overflow-hidden  content_box ">

              <div className=" desk_loader_paren hidden   md:flex justify-center items-center w-full absolute top-0 left-0 z-[1]  h-screen   overflow-hidden pointer-events-none">
                <div className="absolute translate-x-44">
                  <div className=' text-5xl  leading-none block overflow-hidden font-semibold diagramm'> <p className='translate-y-full desk_itx_1'>ubr</p></div>
                  <div className=' text-5xl  leading-none block overflow-hidden uppercase font-semibold diagramm'> <p className='-translate-y-full desk_itx_2'>Disrptve</p> </div>
                </div>
                <div
                  className=" shape_1 absolute scale-35 bg-[#d80000]"
                  style={{
                    width: "270px",
                    aspectRatio: "6 / 5",
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)",
                  }}
                >
                  <video
                    className=" desk_clip_vid opacity-0  w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/hero_video.mp4" type="video/mp4" />
                  </video>
                </div>
                <div
                  className="shape_2 absolute scale-35 bg-[#d80000]"
                  style={{
                    width: "270px",
                    aspectRatio: "6 / 5",
                    clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  }}
                >
                  <video
                    className=" desk_clip_vid opacity-0  w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="/videos/hero_video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="  absolute inset-0 z-[-1] hero_bg bg-white   opacity-0">
                <Aurora />
              </div>

              {/* <div className="video_section max-sm:-translate-y-[80%] w-[80vw] opacity-0 lg:rotate-x-20 md:w-[30vw] aspect-video transform-3d  absolute  z-[-1] rounded-xl overflow-hidden">
                <video src="/videos/hero_video.mp4" loop autoPlay muted playsInline className='cover'></video>
              </div> */}

              <div className=' hero_content  opacity-0 z-100 container h-[100svh] flex items-end pb-10  md:pb-16'>

                <div className="pointer-events-none w-full  relative md:grid items-end grid-cols-6">
                  <div className="col-span-4">
                    <p className="md:text-xl paragraph_split mb-2   ">The integrated model  for    non-linear growth.</p>
                    <h1 className=' max-sm:mb-5 max-sm:mt-2 max-sm:hidden  leading-none tracking-tighter heading_split '>Built for Entrepreneurs <br /> chasing meaningful outcomes.</h1>
                  </div>
                  <div className=" pb-4 text-left md:text-right flex md:justify-end pointer-events-none relative z-10 w-full col-span-2">
                    <p className='leading-tight  md:text-xl   paragraph_split  mt-5'>By <b> Binoy Khimji,</b> <b> Ashish Chowdhry </b> <br /> and  <b>Kaushik Sundararajan.</b></p>
                  </div>
                </div>
              </div>

              <div className="top-full absolute z-[100] w-full h-full center over_txt bg-[#4688F0] ">
                <p
                  className="anim_par uppercase diagramm text-4xl lg:text-[3.5rem] font-semibold padding w-full md:w-[82%] text-center leading-tight text-white whitespace-normal"
                >
                  UBR DISRPTVE is a venture builder for consumer brands that want to scale
                  profitably. We back founders launching new ventures and operators reigniting
                  established ones.
                </p>
              </div>

              <div className=" card_paren top-full absolute z-[200] w-full h-full inset-0 ">
                <div className="w-full container flex h-full items-center overflow-hidden">

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                    {modelCards.map((card, index) => (
                      <div
                        key={index}
                        className={` card_${index} group relative  bg-white flex flex-col justify-between text-black  rounded-lg p-7 md:p-10 overflow-hidden `}
                      >
                        <div className="relative">
                          <div className="relative h-10 mb-5  ">
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


                        <div className=" max-sm:hidden relative mt-5 md:mt-10 grid grid-cols-3  gap-3">
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
          </div>
        </>
      )}
    </>
  )
}

export default Hero