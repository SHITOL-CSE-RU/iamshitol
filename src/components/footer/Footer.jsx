import React from 'react'
import "./Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
//import {IoLogoTwitter} from "react-icons/io"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
export const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">SHITOL SARKER</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/shitol.cse"><FaFacebookF /></a>
        <a href="https://www.instagram.com/shitol.cse"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/shitol-sarker-9b3824218/"><BsLinkedin /></a>
        <a href="https://www.github.com/SHITOL-CSE-RU" ><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SHITOL SARKER. All rights reserved.</small>
      </div>
    </footer>
  )
}
export default Footer;