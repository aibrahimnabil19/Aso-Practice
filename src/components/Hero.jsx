import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className="bg-[rgb(249,244,240)]">
        <section className="flex flex-col mx-auto max-w-5xl py-16 gap-4">
            <div className="w-full flex justify-between items-center h-fit">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[#333333] font-bold font-['Fregan_Serif'] text-[40px] leading-6" >Wear the Culture</h2>
                    <p className="text-[#919297] text-[16px] leading-6">Explore the finest collection of contemporary African fashion</p>
                </div>

                <div className="flex gap-2">
                    <div className="w-14 h-14 rounded-full bg-[#F4EAE3] flex justify-center items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99996 15.8333L4.16663 9.99999M4.16663 9.99999L9.99996 4.16666M4.16663 9.99999H15.8333" stroke="#CC5500" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-[#CC5500] flex justify-center items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16669 10H15.8334M15.8334 10L10 4.16667M15.8334 10L10 15.8333" stroke="#FFFFFF" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full h-125 relative rounded-[24px]">
                <Image
                alt=""
                src={"/aso-oke.png"
                }
                width={585}
                height={400}
                className="w-full h-full rounded-[24px] absolute inset-0 object-cover"
                />                
                <div className="absolute inset-0 bg-black/50 rounded-[24px]"></div>
                <div className="absolute z-10 mx-14.75 mb-8 text-white bottom-0 left-0 flex flex-col gap-4">
                    <div className="px-4 py-1.5 bg-[#CC5500] rounded-full inline-flex justify-center items-center gap-2.5 w-fit">
                        <div className="text-white text-sm font-bold leading-6 tracking-[3.20px]">FEATURED SELECTION</div>
                    </div>
                    <h2 className="text-white text-5xl font-bold font-['Fregan_Serif'] leading-14.75">Vibrant Traditions</h2>
                    <p className="w-137.5 text-white text-base font-medium">Experience the rich heritage of handwoven fabrics designed for modern royalty. Every thread tells a story of elegance and identity.</p>

                    <div className="flex py-4 px-7 h-14 gap-2.5 rounded-full bg-[#2A2A2A] w-fit">
                        <div>Discover Collecions</div>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.16669 10H15.8334M15.8334 10L10 4.16667M15.8334 10L10 15.8333" stroke="#EDEDED" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
            
        </section>

    </main>
  )
}

export default Hero