import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import About5 from "@/components/about/About5";
import Newbanner from "@/components/bannner/New-banner";
import WhatWeDo5 from "@/components/choose/WhatWeDo5";
import Sidebar from "@/components/common/Sidebar";
import Events1 from "@/components/events/Events1";
import Footer3 from "@/components/footer/Footer3";
import Head from "next/head";

function HomepageThree() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const eventsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (eventsRef.current && !scrolled) {
        eventsRef.current.scrollIntoView({ behavior: 'smooth' });
        setScrolled(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>WCAD : Website Content Artificial and Design</title>
        <meta name="description" content="WCAD : Unify imaginations" />
      </Head>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="main-container">
        <div className="sidebar-wrapper">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img src="assets/img/logo-blue.jpeg" alt="" />
              </a>
            </Link>
          </div>
          <div className="sidebar-button mobile-menu-btn" onClick={toggleMenu}>
            <span />
          </div>
          <div className="banner-area">
            <div className="social-area mt-20">
              <ul>
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-content">
          <header className="header5 d-lg-none d-flex">
            <div className="header-logo">
              <Link legacyBehavior href="/">
                <a>
                  {/* <img src="assets/img/logo.svg" alt="" /> */}
                </a>
              </Link>
            </div>
            <div className="sidebar-button mobile-menu-btn2" onClick={toggleMenu}>
              <span />
            </div>
          </header>
          <Newbanner />
          <div ref={eventsRef}>
            <Events1 />
          </div>
          <About5 />
          {/* <Service5 />
          <WhatWeDo5 />
          <Testimonial5 />
          <Footer5 /> */}
          <Footer3 />
        </div>
      </div>
    </>
  );
}

export default HomepageThree;
