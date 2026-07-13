"use client";
import { useGSAP } from '@gsap/react';
import { RiArrowRightLine } from '@remixicon/react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import React, { useRef } from 'react'
import Button from './Button';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import Noise from '../animation/Noise';
gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Approach",
    href: "/approach"
  },
  {
    label: "Work",
    href: "/work"
  },
  {
    label: "Team",
    href: "/team"
  },
]
const emails = [
  "binoy@ubrcapital.com",
  "ashish@disrptve.com",
  "kaushik@disrptve.com",
];

const Footer = () => {
  const pathname = usePathname();

  const footerStickyRef = useRef(null)

  const skipBlackBox = pathname === '/contact'

  const images = [
    "/images/footer/main.png",
    "/images/footer/main2.png",
  ]

  useGSAP(
    () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger?.classList?.contains("sticky_box")) {
          st.kill();
        }
      });

      if (pathname === "/contact") return;

      gsap.to(".sticky_box", {
        ease: "none",
        transformOrigin: "50% 50%",
        scrollTrigger: {
          trigger: ".sticky_box",
          endTrigger: ".box_left",
          start: "center center",
          end: "center center",
          scrub: true,
          pin: true,
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky_box",
          endTrigger: ".box_left",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.to(".footer_img_item_0", {
        opacity: 0,
        ease: "none",
      });
      tl.to(".footer_img_item_1", {
        opacity: 1,
        ease: "none",
      }, 0);

      ScrollTrigger.refresh();
    },
    {
      dependencies: [pathname],
      revertOnUpdate: true,
      scope: footerStickyRef,
    }
  );

  useGSAP(() => {

    if (window.innerWidth < 750) return

    gsap.fromTo(
      ".footer_img",
      {
        y: -200,
      },
      {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: ".sticky_box",
          endTrigger: ".main_footer",
          start: "bottom bottom",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

  }, [pathname]);

  return (
    <div className='mt-12 md:mt-24 w-full overflow-hidden'>
      {!skipBlackBox && (
        <div ref={footerStickyRef} className=" sticky_box_paren w-full  h-[150vw] md:h-[75vw] relative">
          <div className="w-full h-full center absolute inset-0 overflow-hidden -z-10">
            {images.map((img, i) => (
              <Image
                fill
                key={i}
                src={img}
                alt="img"
                className={`footer_img footer_img_item_${i} cover object-bottom absolute inset-0  ${i === 0 ? "opacity-100" : "opacity-0"
                  }`}
                style={{ zIndex: i }}
              />
            ))}
          </div>
          <div className=" absolute top-0 w-[calc(50%-30vw)] md:w-[calc(50%-12.5vw)] h-[120vw] md:h-[50vw] left-0 ">
            <div className="w-full h-1/2 bg-[#FFFFFF]"></div>
            <div className=" box_left w-full h-1/2 "></div>
          </div>
          <div className="absolute top-0 w-[calc(50%-30vw)] md:w-[calc(50%-12.5vw)] h-[60vw] md:h-[25vw] right-0 bg-[#FFFFFF]"></div>
          <div className="group hover:bg-[#4688F0] hover:text-white sticky_box aspect-square relative left-1/2 -translate-x-1/2 h-[60vw] md:h-[25vw] w-[60vw] md:w-[25vw] bg-[#FFFFFF] transition-colors duration-300">
            <div className="size-2 aspect-square z-10 bg-black absolute -top-1 -left-1 "></div>
            <div className="size-2 aspect-square z-10 bg-black absolute -top-1 -right-1 "></div>
            <div className="size-2 aspect-square z-10 bg-black absolute -bottom-1 -right-1 "></div>
            <div className="size-2 aspect-square z-10 bg-black absolute -bottom-1 -left-1 "></div>
            <div className="w-full h-full border-2 flex flex-col justify-between border-black/50 p-4 md:p-6">
              <div className=" space-y-2 md:space-y-5">
                <h4 data-para-effect className='leading-none!'>Let’s build India’s next iconic brand. Together.</h4>
                <p data-para-effect className='leading-tight md:hidden lg:block opacity-80'>We are looking for our next cohort of partners. Founders, talent, investors and retailers, all welcome.</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <Link href={"/contact"} className={` hover:underline group-hover:bg-white group-hover:text-[#4688F0] bg-[#4688F0] block w-fit  text-[#FFFFFF] uppercase aeonik text-xs px-4 border rounded-sm hover:text-[#000000] border-transparent hover:border-[#000000] py-2.5 leading-none relative overflow-hidden  transition-all duration-300 `}>
                  get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className=" main_footer -translate-y-px bg-[#4688F0]  overflow-hidden w-full  text-[#FFFFFF]  pt-14">
        <div className="w-full h-full absolute inset-0">
                    <Noise
                      patternSize={250}
                      patternScaleX={2}
                      patternScaleY={2}
                      patternRefreshInterval={2}
                      patternAlpha={15}
                    />
                  </div>
        <div className="container h-[35vh]! grid grid-cols-2  md:grid-cols-5">
          <div className="space-y-5 h-full col-span-2 md:col-span-3">
            <img className='w-[25%]' src="/logo.png" alt="img" />
          </div>
          <div className=" h-full space-y-5 col-span-1">
            <p className=' uppercase text-sm aeonik'>Sitemap</p>
            <div className="   space-y-2">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;

                return (
                  <div key={i} className={` text-[#FFFFFF] w-fit  text-sm   opacity-60 hover:opacity-100 transition-all duration-150 ${isActive && "opacity-100"}  group cursor-pointer`}>
                    <Link href={link.href} className="relative  leading-none">
                      {link.label}

                      <span
                        className={`
                            absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-[#FFFFFF]
                            transition-transform duration-300 ease-out
                            ${isActive ? "scale-x-100 origin-left" : "scale-x-0 origin-left group-hover:scale-x-100"}
                          `}
                      ></span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" h-full space-y-5 col-span-1">
            <p className=' uppercase text-sm aeonik'>Contact</p>
            <div className="space-y-2">
              {emails.map((email) => (
                <Link
                  key={email}
                  href={`mailto:${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-fit block cursor-pointer hover:opacity-100 transition-all duration-150 opacity-60 text-sm group"
                >
                  <span
                    className="absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-[#FFFFFF]  transition-transform duration-300 ease-out   scale-x-0 origin-left group-hover:scale-x-100    "
                  />
                  {email}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="container">
          <div className=" w-full flex items-center justify-between  border-t border-white/50 mt-3 py-3">
            <p className='opacity-60   text-xs aeonik'>© 2026 UBR × DISRPTVE</p>

            <Link href={"/terms-and-conditions"} className=' relative w-fit block cursor-pointer hover:opacity-100 transition-all duration-150 opacity-60 text-sm group'>Terms and Conditions   <span
              className="absolute left-0 bottom-0 h-[1.5px] rounded-full w-full bg-[#FFFFFF]  transition-transform duration-300 ease-out   scale-x-0 origin-left group-hover:scale-x-100    "
            /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
