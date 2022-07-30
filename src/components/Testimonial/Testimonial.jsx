import React from "react";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import "./Testimonial.scss";
const Testimonial = () => {
  return (
    <section className="education-platform__testimonial" id="review">
      <div className="container education-platform__testimonial__container">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
          visibleSlides={1}
        >
          <Slider>
            <Slide index={0}>
              <div className="education-platform__testimonial__item">
                <div className="education-platform__testimonial__left">
                  <img
                    src={process.env.PUBLIC_URL + "/images/test.svg"}
                    alt="hero-banner"
                  />
                  <h4>Peter Moddor</h4>
                  <p>Student of Web Design</p>
                  <DotGroup />
                </div>
                <div className="education-platform__testimonial__right">
                  <p>
                    Not only does my resume look impressive—filled with the
                    names and logos of world-class institutions—but these
                    certificates also bring me closer to my career goals by
                    validating the skills I've learned."
                  </p>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="education-platform__testimonial__item">
                <div className="education-platform__testimonial__left">
                  <img
                    src={process.env.PUBLIC_URL + "/images/test.svg"}
                    alt="hero-banner"
                  />
                  <h4>Peter Moddor</h4>
                  <p>Student of Web Design</p>
                  <DotGroup />
                </div>
                <div className="education-platform__testimonial__right">
                  <p>
                    Not only does my resume look impressive—filled with the
                    names and logos of world-class institutions—but these
                    certificates also bring me closer to my career goals by
                    validating the skills I've learned."
                  </p>
                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="education-platform__testimonial__item">
                <div className="education-platform__testimonial__left">
                  <img
                    src={process.env.PUBLIC_URL + "/images/test.svg"}
                    alt="hero-banner"
                  />
                  <h4>Peter Moddor</h4>
                  <p>Student of Web Design</p>
                  <DotGroup />
                </div>
                <div className="education-platform__testimonial__right">
                  <p>
                    Not only does my resume look impressive—filled with the
                    names and logos of world-class institutions—but these
                    certificates also bring me closer to my career goals by
                    validating the skills I've learned."
                  </p>
                </div>
              </div>
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </section>
  );
};

export default Testimonial;
