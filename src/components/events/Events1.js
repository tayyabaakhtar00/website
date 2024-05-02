import React from 'react'
import Marquee from "react-fast-marquee";
function Events1() {
  return (
    <div className="flex  p-8 justify-between" id='home5-event-area'>  
    <div className="w-[64%] font-montserrat  ">
    <h1 className="text-[45px] font-semibold mt-[10%]">Welcome to the<span className="banner-heading text-[#2A3E5A] font-montserrat "> WCAD </span>Tech <br/> Solution Wizard. </h1>
    <div className="banner-content">
      <div className="">    
        <p className="font-montserrat text-[25px] font-medium">Lets quickly get to the information you require.</p>   
        </div> 
      </div>
    </div>
    <div className=" w-[32%] container-border p-6">
      <div className="border-b-1 mb-3 border-b-[1px]  border-black  flew-column justify-between">
            <div className='flex justify-between items-top'>  
                <div className="cardtitle text-[#016DB6]">
                     <h5 className="text-xl font-semibold ">Press Releases</h5>
                            <h6 className="text-xs font-medium ">Released March 21, 2024</h6>                     
                        </div>
                        <div className="cardtitleplace ">
                        <img src="assets/img/Press-Releases.svg" alt="#" className="w-8 h-8 mr-2" />
                        <div>             
                    </div>  
                      </div>
                </div>
                <p className="text-lg font-normal leading-[20px] overflow-hidden text-gray-500">
                    WCAD Technologies, Inc. Achieves Advanced Tier Partner Status with Amazon Web Services
                </p>
             <button className='rounded-full border bg-[#016DB6] text-white my-2'> <a href="https://ir.netsoltech.com/press-releases/detail/3208/netsol-technologies-inc-achieves-advanced-tier-partner" className="btn btn-small text-white text-sm">EXPLORE</a></button>  
            </div>
            <div className="border-b-1 mb-3 border-b-[1px] border-black  flew-column justify-between">
            <div className='flex justify-between items-top'>
  <div className="cardtitle text-[#016DB6]">
    <h5 className="text-xl font-semibold ">From Twitter</h5>
    <h6 className="text-xs font-medium ">Latest tweet from @wcadtech</h6>
  </div>
  <div className="cardtitleplace flex items-center">
    <img src="assets/img/twitter.svg" alt="#" className="w-8 h-8 mr-2" />
    
  </div>

   
                </div>
                <p className="text-lg font-normal leading-[20px]  text-gray-500">
                  
        Today we announced a $12 million agreement with a major global automotive provider for their operations in China. Read our full press release on our website: https://ir.netsoltech.com/press-releases/detail/3207/netsol-signs-12-million-agreement-with-major-global
        
                </p>
             <button className='rounded-full border bg-[#016DB6] text-white my-2'> <a href="https://ir.netsoltech.com/press-releases/detail/3208/netsol-technologies-inc-achieves-advanced-tier-partner" className="btn btn-small text-white text-sm ">EXPLORE</a></button>  
            </div>
            <div className="border-b-1 mb-3 border-b-[1px] border-black  flew-column justify-between">
            <div className='flex justify-between items-top'> 

        
                <div className="text-[#016DB6]">
                   
                            <h5 className="text-[1.2rem] font-semibold ">Events</h5>
                            <h6 className="text-xs font-medium ">Where you can find us</h6>
                           
                        </div>
                        <div className="items-center ">
                        <img src="assets/img/Events.svg" alt="#" className="w-8 h-8 mr-2" />
                        <div>
                        
                    </div>    </div>
                </div>
                <p className="text-lg font-normal leading-[20px] overflow-hidden text-gray-500">
                   
            Upcoming Event: 
            Leasing Foundation Industry Update and Drinks - Hispania On 
                </p>
             <button className='rounded-full border bg-[#016DB6] text-white my-2'> <a href="https://ir.netsoltech.com/press-releases/detail/3208/netsol-technologies-inc-achieves-advanced-tier-partner" className="btn btn-small text-white text-sm ">EXPLORE</a></button>  
            </div>
         
        </div>
</div>
 
  )
}

export default Events1
