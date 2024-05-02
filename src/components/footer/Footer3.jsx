import Link from 'next/link'
import React from 'react'

function Footer3() {
  return (
    <footer>
  <div className="footer-btm bg-[#2A3E5A]">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="footer-btn-content">
            <div className="copyright-area">
            <p>©Copyright 2023 <a href="#">WCAD</a> | Design By <a href="https://www.wcadlimited.com/">WCAD Limited</a></p></div>
            <div className="footer-social">
              <ul>
                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook" /></a></li>
                <li><a href="https://twitter.com/"><i className="bx bxl-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/"><i className="bx bxl-pinterest-alt" /></a></li>
                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer3
