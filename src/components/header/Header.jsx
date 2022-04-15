import React from 'react'
import "./Header.css"
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { Typewriter } from 'react-simple-typewriter'


export const Header = () => {
  return (
    
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Shitol Sarker</h1>
        <h5 className="text-light"> a Professional
        <span style={{ color: "#4db5ff", fontWeight: 'bold' }}>
          <Typewriter
            words={[' Web Developer', ' Android Developer', ' Graphics Designer', ' Programmer']}
            loop={20}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}
export default Header;
