import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useMediaQuery } from "react-responsive";

import "./Courses.scss";

const Courses = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const isTablet = useMediaQuery({ query: "(min-device-width: 600px)" });
  const slideCount = isDesktop ? 3 : isTablet ? 2 : 1;
  return (
    <section className="education-platform__courses" id="courses">
      <div className="education-platform__courses__container container">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={15}
          totalSlides={6}
          visibleSlides={slideCount}
          //   infinite
        >
          {/* <div className="education-platform__courses__container"> */}
          <div className="education-platform__courses__header">
            <div className="education-platform__courses__title">
              <h3>Our popular courses</h3>
              <p>
                Build new skills with new trendy courses and shine for the next
                future career.
              </p>
            </div>
            <div className="education-platform__courses__carousel">
              <ButtonBack>
                <img
                  src={process.env.PUBLIC_URL + "/images/Icon_inactive.svg"}
                  alt="hero-banner"
                />
              </ButtonBack>
              <ButtonNext>
                <img
                  src={process.env.PUBLIC_URL + "/images/Icon_active.svg"}
                  alt="hero-banner"
                />
              </ButtonNext>
            </div>
          </div>
          <div className="education-platform__courses__body">
            <Slider>
              <Slide index={0}>
                <div className="education-platform__courses__item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/Image.svg"}
                    alt="hero-banner"
                  />
                  <div className="course-title">
                    <p>Basic web design</p>
                    <div className="rating">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Star.svg"}
                        alt="hero-banner"
                      />
                      <p>4.5</p>
                    </div>
                  </div>
                  <p className="course-desc">
                    Get the best course, gain knowledge and shine for your
                    future career.
                  </p>
                  <div className="course-actions">
                    <p>$120.75</p>
                    <button>Book Now</button>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="education-platform__courses__item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/image1.svg"}
                    alt="hero-banner"
                  />
                  <div className="course-title">
                    <p>UI/UX design</p>
                    <div className="rating">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Star.svg"}
                        alt="hero-banner"
                      />
                      <p>4.5</p>
                    </div>
                  </div>
                  <p className="course-desc">
                    Get the best course, gain knowledge and shine for your
                    future career.
                  </p>
                  <div className="course-actions">
                    <p>$120.75</p>
                    <button>Book Now</button>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="education-platform__courses__item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/image2.svg"}
                    alt="hero-banner"
                  />
                  <div className="course-title">
                    <p>Web App design</p>
                    <div className="rating">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Star.svg"}
                        alt="hero-banner"
                      />
                      <p>4.5</p>
                    </div>
                  </div>
                  <p className="course-desc">
                    Get the best course, gain knowledge and shine for your
                    future career.
                  </p>
                  <div className="course-actions">
                    <p>$120.75</p>
                    <button>Book Now</button>
                  </div>
                </div>
              </Slide>
              <Slide index={3}>
                <div className="education-platform__courses__item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/Image.svg"}
                    alt="hero-banner"
                  />
                  <div className="course-title">
                    <p>Basic web design</p>
                    <div className="rating">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Star.svg"}
                        alt="hero-banner"
                      />
                      <p>4.5</p>
                    </div>
                  </div>
                  <p className="course-desc">
                    Get the best course, gain knowledge and shine for your
                    future career.
                  </p>
                  <div className="course-actions">
                    <p>$120.75</p>
                    <button>Book Now</button>
                  </div>
                </div>
              </Slide>
              <Slide index={4}>
                <div className="education-platform__courses__item">
                  <img
                    src={process.env.PUBLIC_URL + "/images/Image.svg"}
                    alt="hero-banner"
                  />
                  <div className="course-title">
                    <p>UI/UX design</p>
                    <div className="rating">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Star.svg"}
                        alt="hero-banner"
                      />
                      <p>4.5</p>
                    </div>
                  </div>
                  <p className="course-desc">
                    Get the best course, gain knowledge and shine for your
                    future career.
                  </p>
                  <div className="course-actions">
                    <p>$120.75</p>
                    <button>Book Now</button>
                  </div>
                </div>
              </Slide>
            </Slider>
          </div>
          {/* </div> */}
        </CarouselProvider>
      </div>
    </section>
  );
};

export default Courses;
