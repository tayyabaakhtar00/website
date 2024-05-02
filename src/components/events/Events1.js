import React from 'react'
import { useEffect } from 'react';
function Events1() {
    
    useEffect(()=>{


        particleground(document.getElementById("particles-foregrounds"), {
          dotColor: "rgba(6, 137,216, 1)",
          lineColor: "rgba(6, 137, 216, 0.1)",
          minSpeedX: 0.3,
          maxSpeedX: 0.6,
          minSpeedY: 0.3,
          maxSpeedY: 0.6,
          density: 50000, // One particle every n pixels
          curvedLines: false,
          proximity: 250, // How close two dots need to be before they join
          parallaxMultiplier: 10, // Lower the number is more extreme parallax
          particleRadius: 6, // Dot size
        });
        
        particleground(document.getElementById("particles-backgrounds"), {
          dotColor: "rgba(6, 137,216, 1)",
          lineColor: "rgba(6, 137, 216, 0.1)",
          minSpeedX: 0.075,
          maxSpeedX: 0.15,
          minSpeedY: 0.075,
          maxSpeedY: 0.15,
          density: 30000, // One particle every n pixels
          curvedLines: false,
          proximity: 20, // How close two dots need to be before they join
          parallaxMultiplier: 20, // Lower the number is more extreme parallax
          particleRadius: 2, // Dot size
        });
    })
  return (
    <div className="preloaders bg-white">
    <div id="particles-backgrounds" className="vertical-centered-box" />
    <div id="particles-foregrounds" className="vertical-centered-box" />
    <div className="flex  p-8 justify-between relative " id='home5-event-area'>  
    <div className="w-[64%] font-montserrat wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s  ">
    <h1 className="text-[45px] font-semibold mt-[10%] ">Welcome to the<span className="banner-heading text-[#2A3E5A] font-montserrat "> WCAD </span>Tech <br/> Solution Wizard. </h1>
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
                     <h5 className="text-xl font-semibold h-4 ">Press Releases</h5>
                            <h6 className="text-xs font-medium ">Released March 21, 2024</h6>                     
                        </div>
                        <div className="cardtitleplace ">
                        <img src="assets/img/Press-Releases.svg" alt="#" className="w-8 h-8 mr-2" />
                        <div>             
                    </div>  
                      </div>
                </div>
                <p className="text-md font-normal leading-[20px] overflow-hidden text-gray-500">
                    WCAD Technologies, Inc. Achieves Advanced Tier Partner Status with Amazon Web Services
                </p>
             <button className='rounded-full border bg-[#016DB6] text-white my-2'> <a href="https://ir.netsoltech.com/press-releases/detail/3208/netsol-technologies-inc-achieves-advanced-tier-partner" className="btn btn-small text-white text-sm">EXPLORE</a></button>  
            </div>
            <div className="border-b-1 mb-3 border-b-[1px] border-black  flew-column justify-between">
            <div className='flex justify-between items-top'>
  <div className="cardtitle text-[#016DB6]">
    <h5 className="text-xl font-semibold h-4">From Twitter</h5>
    <h6 className="text-xs font-medium ">Latest tweet from @wcadtech</h6>
  </div>
  <div className="cardtitleplace flex items-center">
    <img src="assets/img/twitter.svg" alt="#" className="w-8 h-8 mr-2" />
    
  </div>

   
                </div>
                <p className="text-md font-normal leading-[20px]  text-gray-500">
                  
        Today we announced a $12 million agreement with a major global automotive provider for their operations in China. Read our full press release on our website: https://ir.netsoltech.com/press-releases/detail/3207/netsol-signs-12-million-agreement-with-major-global
        
                </p>
             <button className='rounded-full border bg-[#016DB6] text-white my-2'> <a href="https://ir.netsoltech.com/press-releases/detail/3208/netsol-technologies-inc-achieves-advanced-tier-partner" className="btn btn-small text-white text-sm ">EXPLORE</a></button>  
            </div>
            <div className="border-b-1 mb-3 border-b-[1px] border-black  flew-column justify-between">
            <div className='flex justify-between items-top'> 

        
                <div className="text-[#016DB6]">
                   
                            <h5 className="text-[1.2rem] font-semibold h-4">Events</h5>
                            <h6 className="text-xs font-medium ">Where you can find us</h6>
                           
                        </div>
                        <div className="items-center ">
                        <img src="assets/img/Events.svg" alt="#" className="w-8 h-8 mr-2" />
                        <div>
                        
                    </div>    </div>
                </div>
                <p className="text-md font-normal leading-[20px] overflow-hidden text-gray-500">
                   
            Upcoming Event: 
            Leasing Foundation Industry Update and Drinks - Hispania On 
                </p>
             <button className='rounded-full border bg-[#016DB6] text-white my-2'> <a href="https://ir.netsoltech.com/press-releases/detail/3208/netsol-technologies-inc-achieves-advanced-tier-partner" className="btn btn-small text-white text-sm ">EXPLORE</a></button>  
            </div>
         
        </div>
</div></div>
 
  )
}

export default Events1
