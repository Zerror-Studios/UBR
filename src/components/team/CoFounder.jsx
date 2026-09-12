import React from 'react'
import DotButton from '../common/DotButton'
import SectionHeading from '../common/SectionHeading'

const CoFounders = () => {
    return (
        <div className='space-y-5 md:space-y-16 py-12 md:py-24 border-t border-b border-black/50'>
            <SectionHeading
                btnText="Co Founders"
                heading={<>Three operators. <br /> One model.</>}
                desc={<div className='space-y-2'>
                    <p> UBR brings disciplined capital and operator discipline.</p>
                    <p>DISRPTVE brings audience ownership and brand-building.  </p>
                   <p className='highlight'>Together, the two cultures most consumer ventures struggle to combine.</p>
                   </div>}
            />
            <div className="container flex overflow-x-scroll scroller_none md:grid grid-cols-3 gap-x-5">
                <div className=" w-[80vw] md:w-full shrink-0 space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <div data-clip-effect className="w-full h-full">
                            <img className='cover' src="/images/team/binoy.png" alt="img" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 className='  md:font-semibold leading-none'>Binoy Khimji</h4>
                        <h6 className=''>Co-founder • UBR</h6>
                        <p className='leading-tight  w-full opacity-80 max-sm:mt-4 md:w-[90%] mt-5'>Brings disciplined capital, enterprise scaling, and a proven playbook for turning revenue into profit. Brings P&L rigour, strong governance, and the operational discipline required to scale businesses.</p>
                    </div>
                </div>
                <div className=" w-[80vw] md:w-full shrink-0 space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <div data-clip-effect className="w-full h-full">
                            <img className='cover' src="/images/team/ashish.png" alt="img" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 className='  md:font-semibold leading-none'>Ashish Chowdhry</h4>
                        <h6 className=''>Co-founder • disrptve</h6>
                        <p className='leading-tight  w-full opacity-80 max-sm:mt-4 md:w-[90%] mt-5'>Authentic celebrity co-ownership, deep brand-building experience, unrivalled access to high-affinity audiences. The talent and brand side of the operating model.</p>
                    </div>
                </div>
                <div className=" w-[80vw] md:w-full shrink-0 space-y-4">
                    <div className="w-full rounded-sm  overflow-hidden aspect-6/7">
                        <div data-clip-effect className="w-full h-full">
                            <img className='cover' src="/images/team/kaushik.png" alt="img" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <h4 className='  md:font-semibold leading-none'>Kaushik Sundararajan</h4>
                        <h6 className=''>Co-founder • disrptve</h6>
                        <p className='leading-tight  w-full opacity-80 max-sm:mt-4 md:w-[90%] mt-5'>15+ years across marketing and brand strategy. Ran Omnikon for a decade before co-founding DISRPTVE Communications. Founder’s mindset, agency-built execution.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CoFounders