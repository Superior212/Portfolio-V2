import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";
import "../css/NavBar.css";


const NavBar = ({ hamburger }) => {
  const springNavBar = useSpring({
    opacity: 1,
    to: { opacity: 1, marginTop: 0 },
    from: { opacity: 0, marginTop: -10 },
    delay: 700,
    config: { mass: 1, tension: 400, friction: 25 },
  });

  return (
    <section className="NavBar">
      <animated.div style={springNavBar} className="name">
       
      </animated.div>

      <animated.div style={springNavBar} className="nav_links">
        <ul>
          <li>
            <Link to="Projects" smooth={true} duration={1000} offset={-200}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="AboutMe" smooth={true} duration={1000} offset={-200}>
              About
            </Link>
          </li>
          <li>
            <Link to="Contact" smooth={true} duration={1000}>
              Contact me
            </Link>
          </li>
        </ul>
        <button id="resume">
          <a
            href="./Samson_Aderonmu.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </button>
      </animated.div>

      <animated.div
        style={springNavBar}
        className="hamburger__menu"
        onClick={hamburger}
      >
        <div id="ham1"></div>
        <div id="ham2"></div>
        <div id="ham3"></div>
      </animated.div>
    </section>
  );
};

export default NavBar;
