import FloatingLines from '@/components/animation/FloatingLines'
import React from 'react'

const page = () => {
    return (
        <>
            <div className="w-full h-screen relative  bg-white text-white perspective-[30rem] center">

                <div className="w-full absolute h-full inset-0    ">
                    <FloatingLines
                        enabledWaves={["top", "middle", "bottom"]}
                        lineCount={8}
                        lineDistance={20}
                        bendRadius={8}
                        bendStrength={-1}
                        interactive
                        parallax={true}
                        animationSpeed={1}
                        linesGradient={["#4688F0"]}
                    />

                </div>

                <div className=" z-100 pointer-events-none video_section max-sm:-translate-y-[80%] w-[80vw]  lg:rotate-x-20 md:w-[30vw] aspect-video transform-3d  absolute  rounded-xl overflow-hidden">
                    <video src="/videos/hero_video.mp4" loop autoPlay muted playsInline className='cover'></video>
                </div>

                <div className=' z-200 pointer-events-none hero_content  container h-[100svh] flex items-end pb-10  md:pb-16'>

                    <div className="pointer-events-none w-full  relative z-10 md:grid items-end grid-cols-6">
                        <div className="col-span-4">
                            <p className="md:text-xl paragraph_split mb-2   ">The integrated model  for    non-linear growth.</p>

                            <h1 className=' max-sm:mb-5 max-sm:mt-2 max-sm:hidden  leading-none tracking-tighter heading_split '>Built for Entrepreneurs <br /> chasing meaningful outcomes.</h1>
                            <h1 className=' max-sm:mb-5 max-sm:mt-2 md:hidden   leading-none tracking-tighter heading_split '>Built for Entrepreneurs chasing meaningful outcomes.</h1>
                        </div>
                        <div className=" pb-4 text-left md:text-right flex md:justify-end pointer-events-none relative z-10 w-full col-span-2">
                            <p className='leading-tight  md:text-xl   paragraph_split  mt-5'>By <b> Binoy Khimji,</b> <b> Ashish Chowdhry </b> <br /> and  <b>Kaushik Sundararajan.</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page