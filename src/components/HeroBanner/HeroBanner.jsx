import React from "react";

import Header from "../Header/Header";

import "./HeroBanner.scss";

const HeroBanner = () => {
  return (
    <div className="education-platform__home" id="home">
      <Header />
      <div className="education-platform__herobanner container">
        <div className="education-platform__herobanner__container">
          <div className="education-platform__herobanner__left">
            <img
              src={process.env.PUBLIC_URL + "/images/hero-image.png"}
              alt="hero-banner"
            />
            <div className="education-platform__herobanner__stats">
              <ul>
                <li>
                  <figure>
                    <img
                      src={process.env.PUBLIC_URL + "/images/Orion_page.svg"}
                      alt=""
                    />
                  </figure>
                  <div className="stats-container">
                    <p>20 Courses</p>
                    <p>UI/UX Design</p>
                  </div>
                </li>
                <li>
                  <figure>
                    <img
                      src={process.env.PUBLIC_URL + "/images/Orion_code.svg"}
                      alt=""
                    />
                  </figure>
                  <div className="stats-container">
                    <p>20 Courses</p>
                    <p>Development</p>
                  </div>
                </li>
                <li>
                  <figure>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/Orion_megaphone.svg"
                      }
                      alt=""
                    />
                  </figure>
                  <div className="stats-container">
                    <p>20 Courses</p>
                    <p>Marketing</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="education-platform__herobanner__right">
            <h2>Learn without limits and spread knowledge.</h2>
            <p className="tagline">
              Build new skills for that “this is my year” feeling with courses,
              certificates, and degrees from world-class universities and
              companies.
            </p>
            <div className="action-btn">
              <button>See Courses</button>
              <div className="watch-video">
                <figure>
                  <img
                    src={process.env.PUBLIC_URL + "/images/Polygon.svg"}
                    alt=""
                  />
                </figure>
                <span>Watch video</span>
              </div>
            </div>
            <p className="recent-engmnt">Recent engagement</p>
            <div className="student-stats">
              <p>
                50K <span>Students</span>
              </p>
              <p>
                70+ <span>Courses</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroBanner;
