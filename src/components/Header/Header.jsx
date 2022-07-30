import React from "react";
import { Link } from "react-scroll";

import "./Header.scss";

const Header = () => {
  return (
    <header className="container">
      <div className="education-platform__header__container">
        <div className="education-platform__header__left">
          <h1>
            Lesson
            <span>.</span>
          </h1>
        </div>
        <div className="education-platform__header__right">
          <nav>
            <ul>
              <li>
                <Link activeClass="active" to="home" spy={true} smooth={true}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="courses" spy={true} smooth={true}>
                  Courses
                </Link>
              </li>
              <li>
                <Link to="pricing" spy={true} smooth={true}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="review" spy={true} smooth={true}>
                  Reviews
                </Link>
              </li>
              <li>
                <button>Sign Up</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
