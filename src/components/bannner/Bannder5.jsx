import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
SwiperCore.use([Pagination, Autoplay, EffectFade]);
function Bannder5() {
  const slider = useMemo(()=>{
    return {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 3000,
      effect: 'fade',
      autoplay: {
          delay: 2500
      },
      pagination: {
          el: ".swiper-pagination1",
          clickable: true,
      },
      fadeEffect: {
          crossFade: true,
      },
    }
},[])
  return (
    <div className="banner-area-wrapper" id="">
        <div className="company-name ">
        <h2 className="font-montserrat md:text-[45px]  lg:text-[48px] xl:text-[47px] xxl:text-[80px]">Unify&#8209;Imagination</h2>
        </div>
        <div className="banner-area">
       
          <div className="banner-title font-montserrat mt-[15%] xxl:text-[120px]">
          <h1 className="xxl:text-[120px]"><span className="banner-heading  font-montserrat xxl:text-[120px]">Unlock  </span><br/>to your Business your growth & the future.</h1>
      
          <div className="banner-content">
            <div className="">
              <div className="col-lg-12">
              <p className="font-roboto">Proudly serving the world's top asset finance & leasing companies with smart software technology for over four decades.</p>
                <div className="scroll-and-social-area">
                  <div className="scroll-down-area font-roboto">
                    <a href="#home5-event-area ">
                      <span />
                      Scroll Down to explore
                    </a>
                  </div>
                  <div className="swiper-pagination1 two " />
                </div>
                </div>      
              </div> 
            </div>
          </div>
          <div className="banner-text-slider">
          {/* <Marquee>  <h2 className="marquee_text"><img src="assets/img/home-5/star3.png" alt="" />We are Design Agency<img src="assets/img/home-5/star3.png" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star3.png" alt="" />We Help To Achieve <img src="assets/img/home-5/star3.png" alt="" />We are Design Agency<img src="assets/img/home-5/star3.png" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star3.png" alt="" />We Help To Achieve<img src="assets/img/home-5/star3.png" alt="" />We are Design Agency<img src="assets/img/home-5/star3.png" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star3.png" alt="" />We Help To Achieve <img src="assets/img/home-5/star3.png" alt="" />We are Design Agency<img src="assets/img/home-5/star3.png" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star3.png" alt="" />We Help To Achieve</h2></Marquee> */}
          </div>
        </div>
      </div>
  )
}

export default Bannder5
