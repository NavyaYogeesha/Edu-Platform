import React from "react";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="education-platform__footer">
      <div className="education-platform__footer__container container">
        <div className="education-platform__footer__first-row">
          <div className="education-platform__footer__first-row--left">
            <h5>
              Lesson<span>.</span>
            </h5>
            <p>
              Need to help for your dream Career? trust us. With Lesson, study
              becomes a lot easier with us.
            </p>
            <div className="social-icons">
              <ul>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/twitter.svg"}
                    alt="hero-banner"
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/f.svg"}
                    alt="hero-banner"
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/linked_in.svg"}
                    alt="hero-banner"
                  />
                </li>
                <li>
                  <img
                    src={process.env.PUBLIC_URL + "/images/instagram.svg"}
                    alt="hero-banner"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="education-platform__footer__first-row--right">
            <div className="footer-item">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Features</li>
                <li>Our Pricing</li>
                <li>Latest News</li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>Support</h4>
              <ul>
                <li>FAQ’s</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="footer-item">
              <h4>Address</h4>
              <ul>
                <li>
                  <span>Location:</span> 27 Division St, New York, NY 10002, USA
                </li>
                <li>
                  <span>Email:</span> email@gmail.com
                </li>
                <li>
                  <span>Phone: </span>+ 000 1234 567 890
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="education-platform__footer__second-row">
          <p>Copyright &copy; 2022 webdesign.gdn All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
