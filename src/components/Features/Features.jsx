import React from "react";

import "./Features.scss";

const Features = () => {
  return (
    <section className="education-platform__features" id="pricing">
      <div className="education-platform__features__container container">
        <div className="education-platform__features__left">
          <img
            src={process.env.PUBLIC_URL + "/images/Images.svg"}
            alt="hero-banner"
          />
        </div>
        <div className="education-platform__features__right">
          <h4>Learner outcomes through our awesome platform</h4>
          <p>
            87% of people learning for professional development report career
            benefits like getting a promotion, a raise, or starting a new career
          </p>
          <p>Lesson Impact Report (2022)</p>
          <button>Sign Up</button>
        </div>
      </div>
      <div className="education-platform__features__container container">
        <div className="education-platform__features__left">
          <h4>
            Take the next step toward your personal and professional goals with
            Lesson.
          </h4>
          <p>
            Take the next step toward. Join now to receive personalized and more
            recommendations from the full Coursera catalog.
          </p>

          <button>Join Now</button>
        </div>
        <div className="education-platform__features__right">
          <img
            src={process.env.PUBLIC_URL + "/images/Rectangle 11.svg"}
            alt="hero-banner"
          />
        </div>
      </div>
    </section>
  );
};
export default Features;
