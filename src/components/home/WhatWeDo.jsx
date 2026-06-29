"use client";

import React from "react";
import SectionHeading from "../common/SectionHeading";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import DotField from "../animation/DotField";
gsap.registerPlugin(ScrollTrigger);

const engagementData = [
    {
        number: "01",
        icon: "/icons/fundraise.png",
        title: "Fundraise",
        sub: "Success fee engagement",
        desc: "We shape the investment story, build the data room, run the process, and close the round. Diligence costs are covered by the client if financial cleanup is required.",
        tags: [
            "Investment Story",
            "Data Room",
            "Investor Outreach",
            "Round Closure",
        ],
    },
    {
        number: "02",
        icon: "/icons/advisory.png",
        title: "Strategic Advisory + Talent",
        sub: "Equity vested on KPIs",
        desc: "Long-term advisory seat with celebrity co-ownership structured into the same deal. Brand architecture, talent activation, and the systems that turn the signing into a moat.",
        tags: [
            "Brand Strategy",
            "Talent Activation",
            "Celebrity Equity",
            "Growth Systems",
        ],
    },
    {
        number: "03",
        icon: "/icons/venture.png",
        title: "Venture Build",
        sub: "Equity co-owner model",
        desc: "Our deepest engagement. We embed across all five pillars from day one. Sweat-equity hybrid available for early-stage brands with reduced cash retainers.",
        tags: [
            "Embedded Team",
            "Go-To-Market",
            "Sweat Equity",
            "Full Stack Execution",
        ],
    },
];

const WhatWeDo = () => {

    useGSAP(() => {

        if (window.innerWidth < 750) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".what_we_do_paren",
                start: "top top",
                end: "bottom bottom",
                scrub: true
            }
        })
        tl.from([".do_card_0"], {
            transform: "translateY(180%)",
            ease: "linear"
        })
        tl.from([".do_card_1"], {
            transform: "translateY(180%)",
            ease: "linear"
        })
        tl.from([".do_card_2"], {
            transform: "translateY(180%)",
            ease: "linear"
        })
    })

    return (
        <section className="what_we_do_paren md:h-[300vh] max-sm:py-12 text-white  relative">
            <div className="md:sticky top-0 space-y-5 md:space-y-16 md:h-screen w-full flex flex-col justify-center overflow-hidden">
                <div className="">
                    <SectionHeading
                        btnText={"what we do"}
                        heading={<> Three ways to engage.</>}
                        desc={"Five capabilities, deployed at different depths. Pick what fits where you are. Add more when you're ready."}
                    />
                </div>
                <div className="">
                    <div className="container">

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                            {engagementData.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={index}
                                        className={`do_card_${index} group md:translate-y-10 max-sm:h-[30vh] md:aspect-4/3  relative  grid grid-cols-3 rounded-lg  overflow-hidden bg-white text-black  border border-black/50  p-5`}
                                    >
                                        <div className="w-full h-full absolute">

                                            <DotField
                                                dotRadius={2.5}
                                                dotSpacing={15}
                                                bulgeStrength={67}
                                                glowRadius={160}
                                                sparkle={false}
                                                waveAmplitude={0}
                                                cursorRadius={500}
                                                cursorForce={0.1}
                                                bulgeOnly
                                                gradientFrom="#4688F0"
                                                gradientTo="#B497CF"
                                                glowColor="#ffffff00"
                                            />
                                        </div>
                                        <div className=" col-span-1 w-full pointer-events-none relative z-10 flex justify-between">
                                            <h2 className="md:font-semibold leading-none  ">
                                                {item.number}
                                            </h2>
                                        </div>
                                        <div className=" col-span-2 pointer-events-none relative z-10 flex flex-col justify-between ">
                                            <h4 className=" leading-none">
                                                {item.title}
                                            </h4>
                                            <p className=" leading-tight opacity-80">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;