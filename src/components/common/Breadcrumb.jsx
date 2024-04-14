
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
SwiperCore.use([Pagination, Autoplay, EffectFade]);
function Breadcrumb({ title, pageName, pageList }) {
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
    <div className="banner-area-wrapper">
    <div className="banner-areas">
   
    <section className="breadcrumbs">
   
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb-cnt">
                <span>{pageName}</span>
                <h1>"{title}"</h1>
                {/* <div className="breadcrumb-list">
                  <Link legacyBehavior href="/"><a>Home</a></Link>
                  <img
                    src="assets/img/inner-pages/breadcrumb-arrow.svg"
                    alt=""
                  />
                  {pageList}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      <div className="banner-text-slider">
      <Marquee>  <h2 className="marquee_text"><img src="assets/img/home-5/star.svg" alt="" />We are Design Agency<img src="assets/img/home-5/star.svg" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star.svg" alt="" />We Help To Achieve <img src="assets/img/home-5/star.svg" alt="" />We are Design Agency<img src="assets/img/home-5/star.svg" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star.svg" alt="" />We Help To Achieve<img src="assets/img/home-5/star.svg" alt="" />We are Design Agency<img src="assets/img/home-5/star.svg" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star.svg" alt="" />We Help To Achieve <img src="assets/img/home-5/star.svg" alt="" />We are Design Agency<img src="assets/img/home-5/star.svg" alt="" />Creative &amp; Clean Design<img src="assets/img/home-5/star.svg" alt="" />We Help To Achieve</h2></Marquee>
      </div>
    </div>
  </div>
    
  );
}

export default Breadcrumb;
