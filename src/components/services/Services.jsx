import React from 'react'
import "./Services.css"
import {BiCheck} from 'react-icons/bi'

export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Highly professional and unique design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile-Friendly Websites and landing pages</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile UI / UX designs for both iOS and Android platforms</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Source files: Adobe XD or Figma File</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>100% satisfaction guaranteed</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Unlimited Revision and Quick Response</p>
            </li>
          </ul>
        </article>
        {/*============== END OF THE UI/UX ================*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive website, High-Quality, clean and modern web design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Redesign Website specifically for your target audience</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I will show you my daily progress by hosting the app on heroku/vercel</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>The code will be clean with proper structure. It will be easy to maintain and understand</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure Website Security and SEO support</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Convert "xd, psd, jpg, png, html or other design format" to responsive WebApp</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>You can revise the work unlimited times and 100% payment back guarantee</p>
            </li>
          </ul>
        </article>

{/*============== END OF THE WEB DEVELOPMENT ================*/}
        <article className="service">
          <div className="service__head">
            <h3>Android App Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Provide High Quality Android App</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure Google Recommended Standards</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Complete End-To-End Testing (Android + IOS + Website)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Able to fix bugs in your Existing App</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure High Security </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensure Maintenance and Support</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
export default  Services;