"use client";

import React from "react";
import SectionHeading from "../common/SectionHeading";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
        title: "Strategic Advisory",
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
const FundraiseBg = () => (
    <div className="card-bg fundraise-bg">
        <svg viewBox="0 0 400 400" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            {[
                { x: 40, y: 300, h: 100 },
                { x: 100, y: 260, h: 140 },
                { x: 160, y: 230, h: 170 },
                { x: 220, y: 170, h: 230 },
                { x: 280, y: 140, h: 260 },
                { x: 340, y: 80, h: 320 },
            ].map((bar, i) => (
                <rect key={i} className={`bar bar-${i}`} x={bar.x} y={bar.y+10} width="32" height={bar.h} fill="#4688F0" rx="4" />
            ))}
            <polyline
                className="trend-line"
                points="56,300 116,260 176,230 236,170 296,140 356,80"
                fill="none"
                stroke="#4688F0"
                strokeWidth="2"
                strokeLinecap="round"
            />
            {[
                { cx: 56, cy: 300 },
                { cx: 116, cy: 260 },
                { cx: 176, cy: 230 },
                { cx: 236, cy: 170 },
                { cx: 296, cy: 140 },
                { cx: 356, cy: 80 },
            ].map((c, i) => (
                <circle key={i} className={`coin coin-${i}`} cx={c.cx} cy={c.cy} r="6" fill="#4688F0" />
            ))}
        </svg>
    </div>
);
const AdvisoryBg = () => (
    <div className="card-bg advisory-bg">
        <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
            <circle cx="200" cy="200" r="60" fill="none" stroke="#4688F050" />
            <circle cx="200" cy="200" r="110" fill="none" stroke="#4688F050" />
            <circle cx="200" cy="200" r="160" fill="none" stroke="#4688F050" />
            <g className="orbit orbit-1">
                <circle cx="260" cy="200" r="6" fill="#4688F0" />
            </g>
            <g className="orbit orbit-2">
                <circle cx="310" cy="200" r="5" fill="#4688F0" />
            </g>
            <g className="orbit orbit-3">
                <circle cx="360" cy="200" r="4" fill="#4688F0" />
            </g>
            <circle className="core" cx="200" cy="200" r="10" fill="#4688F0" />
        </svg>
    </div>
);
const VentureBg = () => (
    <div className="card-bg venture-bg">
        <div className="venture-grid" />
        <div className="cube-scene">
            <div className="cube">
                <span className="face f-front" />
                <span className="face f-back" />
                <span className="face f-right" />
                <span className="face f-left" />
                <span className="face f-top" />
                <span className="face f-bottom" />
            </div>
        </div>
    </div>
);
const WhatWeDo = () => {
    const bgMap = [FundraiseBg, AdvisoryBg, VentureBg];

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
                                const Bg = bgMap[index];

                                return (
                                    <div
                                        key={index}
                                        className={` group engage-card engage-card-${index} do_card_${index} group md:translate-y-10 max-sm:h-[30vh] md:aspect-4/3  relative flex flex-col justify-between rounded-lg  overflow-hidden bg-white text-black  p-5`}
                                    >
                                        <Bg />

                                        <div className="  w-full pointer-events-none relative z-10 ">
                                            <h4 className="md:font-semibold leading-none  ">
                                                {item.number}.  {item.title}
                                            </h4>
                                        </div>
                                        <div className=" opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none relative z-10 flex flex-col justify-between ">
                                            <p className=" leading-tight text-lg">
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