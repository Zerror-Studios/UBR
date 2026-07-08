"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import { Link } from "next-view-transitions";
import { WorkData } from "@/store/WorkData";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

export const WorksList = () => {
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

    const container = useRef(null);

    useGSAP(() => {

        if (window.innerWidth < 1020) return

        gsap.utils.toArray(".proj_img").forEach((img) => {
            gsap.fromTo(
                img,
                { y: -150 },
                {
                    y: 150,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    },
                }
            );
        });
    },
        { scope: container }
    );
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

            <div ref={container} className="">
                {WorkData.map((item, i) => (
                    <Link
                        onMouseEnter={(e) => handleMouseEnter(e, item.title)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        href={`/work/${item.slug}`} key={i} className={`proj_paren w-full  aspect-square md:aspect-video center text-white relative overflow-hidden ${item.classname}`}>


                        <Image fill src={item.image} className={` cover proj_img `} alt="" />
                        <h3
                            className="md:font-semibold mix-blend-difference  absolute bottom-5 leading-none md:bottom-20 z-10 uppercase text-center"
                        >
                            {item.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </>
    );
};