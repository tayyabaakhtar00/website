import Link from 'next/link'
import React from 'react'

function CaseStudy6() {
  return (
    <div className="home6-case-study-section sec-mar">
    <div className="container">
      <div className="row mb-55">
        <div className="col-lg-12 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
          <div className="section-title-6 text-center">
            <span>Case Study</span>
            <h2>Case Study</h2>
          </div>
        </div>
      </div>
      <div className="row g-lg-4 gy-5 border-rights">
        <div className="col-lg-6">
          <div className="case-left">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-12 col-md-6 border-bottom1">
                <div className="home6-case-study">
                  <div className="case-img magnetic-item">
                    <img className="img-fluid" src="assets/img/home-6/home6-case-01.png" alt="" />
                  </div>
                  <div className="case-content pb-50">
                    <span>CLOUD HOSTING</span>
                    <h3><Link legacyBehavior href="/case-study-details"><a>Unlocking Scalability, Reliability, and Efficiency.</a></Link></h3>
                    <p>Integer purus odio, placerat nec rhoncus in, ullamcorper necbomi doloroei. aptent taciti sociosqu.</p>
                    <div className="learn-btn">
                      <Link legacyBehavior href="/case-study-details">
                        <a className="primary-btn9">
                        <span>Learn More</span>
                        <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0.5L15 7.5M15 7.5L8 13.5M15 7.5L1.30274e-07 7.5" />
                        </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="home6-case-study">
                  <div className="case-img pt-50 magnetic-item">
                    <img className="img-fluid" src="assets/img/home-6/home6-case-02.png" alt="" />
                  </div>
                  <div className="case-content">
                    <span>MOBILE DEVELOPMENT</span>
                    <h3><Link legacyBehavior href="/case-study-details"><a>Empowering Businesses through Cutting-Edge Mobile.</a></Link></h3>
                    <p>Integer purus odio, placerat nec rhoncus in, ullamcorper necbomi doloroei. aptent taciti sociosqu.</p>
                    <div className="learn-btn">
                    <Link legacyBehavior href="/case-study-details">
                        <a className="primary-btn9">
                        <span>Learn More</span>
                        <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0.5L15 7.5M15 7.5L8 13.5M15 7.5L1.30274e-07 7.5" />
                        </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="case-right">
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-12 col-md-6 border-bottom2">
                <div className="home6-case-study pb-50">
                  <div className="case-img magnetic-item">
                    <img className="img-fluid" src="assets/img/home-6/home6-case-03.png" alt="" />
                  </div>
                  <div className="case-content">
                    <span>IT CONSULTING</span>
                    <h3><Link legacyBehavior href="/case-study-details"><a>Empowering Business Performan through Expert.</a></Link></h3>
                    <p>Integer purus odio, placerat nec rhoncus in, ullamcorper necbomi doloroei. aptent taciti sociosqu.</p>
                    <div className="learn-btn">
                    <Link legacyBehavior href="/case-study-details">
                        <a className="primary-btn9">
                        <span>Learn More</span>
                        <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0.5L15 7.5M15 7.5L8 13.5M15 7.5L1.30274e-07 7.5" />
                        </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6">
                <div className="home6-case-study">
                  <div className="case-img pt-50 magnetic-item">
                    <img className="img-fluid" src="assets/img/home-6/home6-case-04.png" alt="" />
                  </div>
                  <div className="case-content">
                    <span>CLOUD HOSTING</span>
                    <h3><Link legacyBehavior href="/case-study-details"><a>Unlocking Scalability, Reliability, and Efficiency.</a></Link></h3>
                    <p>Integer purus odio, placerat nec rhoncus in, ullamcorper necbomi doloroei. aptent taciti sociosqu.</p>
                    <div className="learn-btn">
                    <Link legacyBehavior href="/case-study-details">
                        <a className="primary-btn9">
                        <span>Learn More</span>
                        <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 0.5L15 7.5M15 7.5L8 13.5M15 7.5L1.30274e-07 7.5" />
                        </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="view-btn">
            <Link legacyBehavior href="/case-study"><a className="primary-btn3">View All Case</a></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CaseStudy6
