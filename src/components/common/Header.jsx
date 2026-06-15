"use client";
import { Link } from 'next-view-transitions'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import { usePathname } from 'next/navigation'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { Squash as Hamburger } from 'hamburger-react'
import CustomEase from 'gsap/dist/CustomEase';
import ViewTransitionLink from '@/hooks/ViewTransitionLink';
gsap.registerPlugin(CustomEase, ScrollTrigger);

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
const Header = () => {
  CustomEase.create("in-out-quint", "0.83,0,0.17,1");
  const [isOpen, setOpen] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    gsap.set(".header", { opacity: 0 })
    if (pathname === "/") {
      gsap.to(".header", {
        opacity: 1,
        delay: 3
      })
    } else {
      gsap.to(".header", {
        opacity: 1,
        delay: 1
      })
    }
  }, [pathname])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".header",
        start: "+=300",
        toggleActions: "play none none reverse",
      },
    });
    tl.to('.header_bg', {
      transform: "translateY(0%)",
      duration: .6,
      ease: "expo.out",
    });
    tl.to('.navLink', {
      color: "white",
      duration: .6,
    }, 0);
    tl.to('.navLinkBar', {
      backgroundColor: "#ffffff",
      duration: .6,
    }, 0);
  })



  useEffect(() => {

    if (isOpen) {
      if (window.lenis) window.lenis.stop();
      const tl = gsap.timeline()
      tl.to('.mobile_menu', {
        right: 0,
        duration: .6,
        ease: "in-out-quint",
      });
      tl.to(".animate-link", {
        transform: "translateY(0)",
        stagger: 0.1,
        duration: 0.6,
        ease: "expo.out",
      })
    } else {
      if (window.lenis) window.lenis.start();
      const tl = gsap.timeline()
      tl.to(".animate-link", {
        transform: "translateY(-100%)",
        stagger: 0.1,
        duration: 0.6,
        ease: "expo.out",
      })
      tl.to('.mobile_menu', {
        right: "-100%",
        duration: .6,
        ease: "in-out-quint",
      });
      tl.set(".animate-link", {
        transform: "translateY(100%)",
      })
    }
  }, [isOpen])


  return (
    <div className='header opacity-0 w-full  z-100 fixed '>

      <div className=" mobile_menu md:hidden center text-center w-full h-screen bg-[#4688F0]  text-white z-[10] fixed -right-full top-0">
        <div className=" gap-y-7 flex flex-col justify-center items-center">
          {navLinks.map((link, i) => {
            return (
              <div key={i} onClick={() => setOpen(false)} className={` font-thin!  w-fit block overflow-hidden  text-4xl text-center uppercase   group cursor-pointer text-white`}>
                <ViewTransitionLink delay={1700} href={link.href} className="relative  leading-none">
                  <p className='animate-link translate-y-full'>
                    {link.label}
                  </p>
                </ViewTransitionLink>
              </div>
            );
          })}
        </div>
      </div>

      <div className={` header_bg absolute bg-[#4688F0] pointer-events-none z-[-1] w-full h-full left-0 -translate-y-full`}></div>
      <div className=" container py-0 md:py-3  flex items-center justify-between relative z-100   ">
        <div className="flex items-center w-[75%] gap-x-20">
          <Link href="/" className='block  w-fit relative'>
            <img className='w-24 logo_black' src="/logo.png" alt="logo" />
          </Link>
          <div className="max-sm:hidden flex items-center gap-x-5">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;

              return (
                <div key={i} className={`navLink  w-fit  text-sm uppercase diagramm  group cursor-pointer `}>
                  <Link href={link.href} className="relative  leading-none">
                    {link.label}

                    <span
                      className={`
                        navLinkBar
                        bg-[#000000]
              absolute left-0 bottom-0 h-[1.5px] rounded-full w-full
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
        <div className="md:w-[25%] flex items-center justify-end">
          <Link href={"/contact"} onClick={() => setOpen(false)}>
            <button className={` btn_paren diagramm whitespace-nowrap text-xs md:text-sm uppercase group block w-fit  bg-white  px-2 md:px-4 border hover:text-[#ffffff]! lg:border-transparent hover:border-[#ffffff] hover:bg-transparent py-2 max-sm:pb-1.5 md:py-2.5 relative overflow-hidden rounded-md  transition-border duration-300 `}>
              <span className='  absolute w-full h-full z-[-1] bg-[#ffffff]  inset-0 group-hover:-top-full transition-all duration-300'></span>
              Get in Touch
            </button>
          </Link>
          <div className={` md:hidden navLink  w-fit  text-sm uppercase diagramm  group cursor-pointer `}>
            <Hamburger toggled={isOpen} toggle={() => setOpen(!isOpen)} size={25} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header