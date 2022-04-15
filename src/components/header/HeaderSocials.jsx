import React from 'react'
import {FaFacebookSquare} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
const HeaderSocials = () => {
  return (
    <div className="header__socials">
    <a href="https://www.facebook.com/shitol.cse" target="_blank"><FaFacebookSquare /></a>
    <a href="https://www.instagram.com/shitol.cse" target="_blank"><BsInstagram /></a>
    <a href="https://www.linkedin.com/shitol.cse" target="_blank"><BsLinkedin /></a>
    <a href="https://www.github.com/SHITOL-CSE-RU" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials;