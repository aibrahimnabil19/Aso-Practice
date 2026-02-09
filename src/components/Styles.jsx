import React from 'react'

const Styles = () => {
  return (
    <section className="bg-[#F9F9F9]">
        <div className='flex flex-col px-2.5 mx-auto max-w-5xl'>
            <div className="w-full flex justify-between items-center pt-3 pb-8">
                <div className="bg-white flex px-6 py-5.5 h-fit w-87.5 rounded-3xl gap-2.5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.66 16.66M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#919297" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    <input className="text-[#919297] text-[16px] leading-5 h-full w-full" type="text" placeholder="Find your style"/>
                    {/* <p className="text-[#919297] text-[16px] leading-5">Find your style</p> */}
                </div>

                <div className="flex gap-2 w-fit h-fit">
                    <div className="w-17.5 h-13 text-[16px] text-white bg-[#CC5500] flex items-center justify-center rounded-full">All</div>
                    <div className="w-fit h-13 text-[16px] p-4 text-[#CC5500] bg-[#F4EAE3] flex items-center justify-center rounded-full">Formal</div>
                    <div className="w-fit h-13 text-[16px] p-4 text-[#CC5500] bg-[#F4EAE3] flex items-center justify-center rounded-full">Streetwear</div>
                    <div className="w-fit h-13 text-[16px] p-4 text-[#CC5500] bg-[#F4EAE3] flex items-center justify-center rounded-full">Harmattan</div>
                    <div className="w-fit h-13 text-[16px] p-4 text-[#CC5500] bg-[#F4EAE3] flex items-center justify-center rounded-full">Summer</div>
                    <div className="w-fit h-13 text-[16px] p-4 text-[#CC5500] bg-[#F4EAE3] flex items-center justify-center rounded-full">Weddings</div>
                </div>
            </div>

            <div className="flex py-8 justify-between items-center">
                <h2 className="text-[#333333] font-bold font-['Fregan_Serif'] text-[32px] leading-9">Trending Looks</h2>
                <div className="flex gap-2">
                    <p className="text-[#CC5500] font-semibold text-[14px] leading-5">View All</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 15L12.5 10L7.5 5" stroke="#CC5500" stroke-width="0.833333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Styles