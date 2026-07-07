"use client";
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SectionHeading from '../common/SectionHeading';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
gsap.registerPlugin(ScrollTrigger);

const statsData = [
    {
        value: "$4.3T",
        suffix: "T",
        title: "Consumer market by 2030",
        rotationX: 0.01,
        rotationY: 0.01,
        img: "/images/home/scroll_img/card1.png",
        description:
            "India's spending becomes the world's second largest, expanding 46% from 2024.",
    },
    {
        value: "$600B",
        suffix: "B",
        rotationX: 5,
        rotationY: -10,
        title: "Brand unlock",
        img: "/images/home/scroll_img/card2.png",
        description:
            "Structural shift from unbranded retail creates white space for new players.",
    },
    {
        value: "28",
        suffix: "",
        title: "Median age",
        rotationX: 5,
        rotationY: 10,
        img: "/images/home/scroll_img/card3.jpg",
        description:
            "Versus 39 in China. A young, aspirational population drives global consumption.",
    },
    {
        value: "3x",
        suffix: "X",
        rotationX: -5,
        rotationY: 10,
        title: "E-commerce users by 2030",
        img: "/images/home/scroll_img/card4.png",
        description:
            "Online shoppers more than triple, building a vast accessible marketplace.",
    },
    {
        value: "$350B",
        suffix: "B",
        rotationX: 0,
        rotationY: 0,
        title: "Digital GMV by 2030",
        img: "/images/home/scroll_img/card5.png",
        rotation: "rotateX(-10deg) rotateY(-5deg)",
        description:
            "Reaches the same scale as Brazil's full retail sector today.",
    },
];

const MacroPicture = () => {

    const cardRef = useRef();
    const imageRefs = useRef([]);
    const imageRefs2 = useRef([]);
    const containerRef = useRef();
    const containerRef2 = useRef();


    const currentIndex = useRef(-1);

    useGSAP(() => {
        const total = statsData.length - 1;

        gsap.set(imageRefs.current, { opacity: 0 });
        gsap.set(imageRefs.current[0], { opacity: 1 });

        gsap.to(".anim_y", {
            yPercent: -80,
            ease: "none",

            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,

                snap: {
                    snapTo: 1 / total,
                    duration: 0.4,
                    ease: "power2.inOut",
                },

                onUpdate: (self) => {
                    const index = Math.round(self.progress * total);

                    imageRefs.current.forEach((img, i) => {
                        gsap.to(img, {
                            opacity: i === index ? 1 : 0,
                            duration: 0.2,
                            overwrite: true,
                        });
                    });

                    if (currentIndex.current !== index) {
                        currentIndex.current = index;

                        gsap.to(cardRef.current, {
                            rotationX: statsData[index].rotationX,
                            rotationY: statsData[index].rotationY,
                            duration: 0.6,
                            ease: "power3.out",
                            transformPerspective: 1000,
                            overwrite: true,
                        });
                    }
                },
            },
        });
    }, { scope: containerRef });

    useGSAP(() => {
        const total = statsData.length - 1;

        gsap.set(imageRefs2.current, {
            opacity: 0,
        });

        gsap.set(imageRefs2.current[0], {
            opacity: 1,
        });

        gsap.to(".anim_y", {
            yPercent: -80,
            ease: "none",

            scrollTrigger: {
                trigger: containerRef2.current,
                start: "top top",
                end: `bottom bottom`,
                scrub: true,
                // markers:true,

                snap: {
                    snapTo: 1 / total,
                    duration: 0.4,
                    ease: "power2.inOut",
                },

                onUpdate: (self) => {
                    const index = Math.round(
                        self.progress * total
                    );

                    imageRefs2.current.forEach((img, i) => {
                        gsap.to(img, {
                            opacity: i === index ? 1 : 0,
                            duration: 0.2,
                            overwrite: true,
                        });
                    });
                },
            },
        });
    }, { scope: containerRef2 });

    return (
        <>
            <div className=' hidden md:block'>
                <div className=" pt-12 md:pt-24 border-t border-black/50">
                    <SectionHeading
                        btnText={"The context"}
                        heading={
                            <>India's consumer market <br /> is about to double.</>
                        }
                        desc={<>
                            <div className="space-y-2">
                                <p>
                                    The doubling market will not save the current playbook.
                                </p>
                                <p>
                                    CAC is broken, margins are leaking, 90% of new D2C brands fail in year one.
                                </p>
                                <p className='highlight'>
                                    The winners will be the brands that find a different model before the wave breaks.
                                </p>
                            </div>
                        </>}
                    />
                </div>
                <div ref={containerRef} className=' cont_deskt_mov container w-full  relative h-[250vh]! '>
                    <div className=" sticky top-0 w-full h-screen  center ">

                        <div className=" max-sm:hidden absolute grid grid-cols-8 left-0 w-full  top-1/2 -translate-y-30 text-center">
                            <div className="col-span-4"></div>
                            <div className=" col-span-3 anim_y">
                                {statsData.map((row, rowIndex) => (
                                    <div key={rowIndex} className=" h-44 lg:h-60 center">
                                        <p className=' text-5xl lg:text-9xl leading-none font-bold'>{row.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 max-sm:gap-y-8 md:grid-cols-8 ">
                            <div className="col-span-3 relative center flex-col ">
                                <div className="w-full h-28 text-center overflow-hidden">
                                    <div className="anim_y">
                                        {statsData.map((row, rowIndex) => (
                                            <div key={rowIndex} className=" h-28 center">
                                                <h3 className=' leading-none   font-semibold'>{row.title}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full h-16 text-center overflow-hidden">
                                    <div className="anim_y">
                                        {statsData.map((row, rowIndex) => (
                                            <div key={rowIndex} className=" h-16 center w-[80%] mx-auto">
                                                <p className=' lg:text-xl leading-none '>{row.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1"></div>
                            <div className=" col-span-3 relative  ">
                                <div className="lg:perspective-[40rem]  lg:transform-3d">
                                    <div
                                        ref={cardRef}
                                        className="w-full aspect-square  transform-3d rounded-xl overflow-hidden relative bg-[#4688F0]"
                                    >
                                        {statsData.map((item, i) => (
                                            <Image
                                                fill
                                                key={i}
                                                ref={(el) => (imageRefs.current[i] = el)}
                                                src={item.img}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className=" absolute w-full aspect-square inset-0 z-[99] text-white center text-center">
                                    <div className="w-full h-44 lg:h-60 text-center overflow-hidden">
                                        <div className="anim_y">
                                            {statsData.map((row, rowIndex) => (
                                                <div key={rowIndex} className=" h-44 lg:h-60 center">
                                                    <p className=' text-5xl lg:text-9xl leading-none font-bold'>{row.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <div className=' md:hidden'>
                <div ref={containerRef2} className='  w-full  relative h-[250vh]! '>
                    <div className=" sticky top-0 w-full h-screen flex flex-col justify-center gap-y-10 ">

                        <div className="">
                            <SectionHeading
                                btnText={"The context"}
                                heading={
                                    <>India's consumer market  is about to double.</>
                                }
                                desc={<>
                                    <div className="space-y-2">
                                        <p>
                                            The doubling market will not save the current playbook.
                                        </p>
                                        <p>
                                            CAC is broken, margins are leaking, 90% of new D2C brands fail in year one.
                                        </p>
                                        <p className='highlight'>
                                            The winners will be the brands that find a different model before the wave breaks.
                                        </p>
                                    </div>
                                </>}
                            />
                        </div>

                        <div className="padding grid grid-cols-1 max-sm:gap-y-2 md:grid-cols-12 ">
                            <div className="col-span-4 relative center ">
                                <div className="w-full h-16 text-center overflow-hidden">
                                    <div className="anim_y">
                                        {statsData.map((row, rowIndex) => (
                                            <div key={rowIndex} className=" h-16 center">
                                                <h3 className=' leading-none   font-semibold'>{row.title}</h3>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className=" col-span-4 relative  ">
                                <div className="md:perspective-[40rem]  md:transform-3d">
                                    <div
                                        className="w-full aspect-video md:rotate-x-15 md:-rotate-y-6 transform-3d rounded-xl overflow-hidden relative bg-[#4688F0]"
                                    >
                                        {statsData.map((item, i) => (
                                            <Image
                                                fill
                                                key={i}
                                                ref={(el) => (imageRefs2.current[i] = el)}
                                                src={item.img}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover will-change-transform"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className=" absolute w-full aspect-video inset-0 z-[99] text-white center text-center">
                                    <div className="w-full h-44 text-center overflow-hidden">
                                        <div className="anim_y">
                                            {statsData.map((row, rowIndex) => (
                                                <div key={rowIndex} className=" h-44 center">
                                                    <p className=' text-7xl leading-none font-bold'>{row.value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-4 relative center">
                                <div className="w-full h-16 text-center overflow-hidden">
                                    <div className="anim_y">
                                        {statsData.map((row, rowIndex) => (
                                            <div key={rowIndex} className=" h-16 center w-full mx-auto">
                                                <p className=' text-xl leading-none '>{row.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default MacroPicture