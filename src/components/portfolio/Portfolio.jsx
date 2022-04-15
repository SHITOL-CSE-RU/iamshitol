import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/seniorrun.png"
import IMG2 from "../../assets/sweetchat.png"
import IMG3 from "../../assets/employe.png"
import IMG4 from "../../assets/ecom.png"
import IMG5 from "../../assets/attendence.jpg"
import IMG6 from "../../assets/portfolio.png"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
              <h3>"SeniorRuns" a Popular US Organization</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com/SHITOL-CSE-RU" className="btn" target="_blank">GitHub</a>
              <a href="https://seniorruns.com/" className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
              <h3>"SWEETCHAT" a real time messaging application</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com/iamnoyon/sweetchat-nextjs" className="btn" target="_blank">GitHub</a>
              <a href="https://sweet-self.vercel.app/" className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
              <h3>Employee information System</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com/SHITOL-CSE-RU/Employe_Management_System.git" className="btn" target="_blank">GitHub</a>
              <a href="https://employe-management-system.herokuapp.com" className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
              <h3>Ecommerce Web Application</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com/SHITOL-CSE-RU/Ecommerce-WebApp.git" className="btn" target="_blank">GitHub</a>
              <a href="http://ecommerce-web-app.vercel.app" className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
              <h3>"My-Attendance" AI Python Project</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com/SHITOL-CSE-RU/My-Attendance.git" className="btn" target="_blank">GitHub</a>
              <a href="https://github.com/SHITOL-CSE-RU" className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
          </article>

          <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
              <h3>Portfolio Website Using REACT.JS</h3>
              <div className="portfolio__item-cta">
              <a href="https://github.com/SHITOL-CSE-RU/iamshitol.git" className="btn" target="_blank">GitHub</a>
              <a href="http://iamshitol.vercel.app" className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
          </article>
        </div>
    </section>
  )
}

export default Portfolio;