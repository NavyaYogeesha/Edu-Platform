import React from "react";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useMediaQuery } from "react-responsive";

import "./Blogs.scss";

const Blogs = () => {
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });
  const isTablet = useMediaQuery({ query: "(min-device-width: 600px)" });
  const slideCount = isDesktop ? 3 : isTablet ? 2 : 1;
  return (
    <section className="education-platform__blogs">
      <div className="education-platform__blogs__container container">
        <div className="education-platform__blogs__header">
          <h4>Our blog</h4>
          <p>
            Read our regular travel blog and know the latest update of tour and
            travel
          </p>
        </div>
        <CarouselProvider
          naturalSlideWidth={360}
          naturalSlideHeight={600}
          totalSlides={6}
          visibleSlides={slideCount}
          infinite
          // isIntrinsicHeight
        >
          <Slider>
            <Slide index={0}>
              <div className="education-platform__blogs__items">
                <img
                  src={process.env.PUBLIC_URL + "/images/blog3.svg"}
                  alt="hero-banner"
                />
                <div className="blog_body">
                  <div className="blog-date">
                    <span>
                      <span>.</span>21 November 2021
                    </span>
                  </div>
                  <p className="blog-desc">
                    How to become a pro web designer in 2022 and get remot job?
                  </p>
                  <div className="blog-actions">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div className="education-platform__blogs__items">
                <img
                  src={process.env.PUBLIC_URL + "/images/blog1.svg"}
                  alt="hero-banner"
                />
                <div className="blog_body">
                  <div className="blog-date">
                    <span>
                      <span>.</span>21 November 2021
                    </span>
                  </div>
                  <p className="blog-desc">
                    How to become a pro web designer in 2022 and get remot job?
                  </p>
                  <div className="blog-actions">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div className="education-platform__blogs__items">
                <img
                  src={process.env.PUBLIC_URL + "/images/blog2.svg"}
                  alt="hero-banner"
                />
                <div className="blog_body">
                  <div className="blog-date">
                    <span>
                      <span>.</span>21 November 2021
                    </span>
                  </div>
                  <p className="blog-desc">
                    How to become a pro web designer in 2022 and get remot job?
                  </p>
                  <div className="blog-actions">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={3}>
              <div className="education-platform__blogs__items">
                <img
                  src={process.env.PUBLIC_URL + "/images/blog3.svg"}
                  alt="hero-banner"
                />
                <div className="blog_body">
                  <div className="blog-date">
                    <span>
                      <span>.</span>21 November 2021
                    </span>
                  </div>
                  <p className="blog-desc">
                    How to become a pro web designer in 2022 and get remot job?
                  </p>
                  <div className="blog-actions">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={4}>
              <div className="education-platform__blogs__items">
                <img
                  src={process.env.PUBLIC_URL + "/images/blog1.svg"}
                  alt="hero-banner"
                />
                <div className="blog_body">
                  <div className="blog-date">
                    <span>
                      <span>.</span>21 November 2021
                    </span>
                  </div>
                  <p className="blog-desc">
                    How to become a pro web designer in 2022 and get remot job?
                  </p>
                  <div className="blog-actions">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </Slide>
            <Slide index={5}>
              <div className="education-platform__blogs__items">
                <img
                  src={process.env.PUBLIC_URL + "/images/blog2.svg"}
                  alt="hero-banner"
                />
                <div className="blog_body">
                  <div className="blog-date">
                    <span>
                      <span>.</span>21 November 2021
                    </span>
                  </div>
                  <p className="blog-desc">
                    How to become a pro web designer in 2022 and get remot job?
                  </p>
                  <div className="blog-actions">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </Slide>
          </Slider>
          <Dot slide={0} />
          <Dot slide={3} />
        </CarouselProvider>
      </div>
    </section>
  );
};
export default Blogs;
