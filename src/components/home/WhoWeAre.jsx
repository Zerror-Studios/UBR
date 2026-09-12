import React from 'react'
import SectionHeading from '../common/SectionHeading'
import Image from 'next/image'

export const modelCards = [
    {
        brand: "UBR Brings",
        logo: "/images/logo-ubrxdisrptve.png",
        title: "The Capital And The Muscle.",
        desc: "A capital and operating advisory founded by Binoy Khimji. Institutional capital access, multiple consumer ventures built and scaled, and deep distribution intelligence across India.",
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

const WhoWeAre = () => {
    return (
        <div className=' py-12 md:py-12 md:py-24 space-y-5 md:space-y-16'>
            <SectionHeading
                btnText={"Who we are"}
                heading={
                    <>
                        Two operators.
                        <br />
                        One model.
                    </>
                }
                desc="A marketing agency with a decade of consumer brand work. A capital firm with a track record of building and scaling consumer ventures. Same team on every engagement."
            />
            <div className="w-full container overflow-hidden">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                    {modelCards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative border flex flex-col justify-between border-black/20  rounded-lg p-7 md:p-10 overflow-hidden"
                        >
                            <img className=' cover absolute inset-0 group-hover:opacity-100 opacity-50 transition-all duration-300' src={card.img} alt="img" />
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


                            <div className="relative mt-5 md:mt-10 grid grid-cols-3  gap-3">
                                {card.tags.map((tag, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className={`rounded-md font-medium text-sm p-3 border border-black/20  bg-[#FFFFFF80] text-black`}
                                        >
                                            <div className="flex flex-col justify-center items-center gap-5">
                                                <Image height={40} width={40} src={tag.icon} className='' alt='icon' />

                                                <p className=" max-sm:text-xs diagramm md:md:font-semibold   uppercase">
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

                <div className="w-full center mt-12 md:mt-12 md:mt-24 text-center">
                    <h4 data-para-effect className=' md:w-[60%] leading-tight'>Together, UBR × DISRPTVE is a venture builder that installs the operating model behind profitable scaling, whether you are launching a new brand or reigniting an established one.</h4>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre