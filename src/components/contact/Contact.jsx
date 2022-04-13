import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

export const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>shitol.cse@gmail.com</h5>
            <a href="mailto:shitol.cse@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>shitol.cse</h5>
            <a href="https://m.me/shitol.cse" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+8801717420309</h5>
            <a href="https://api.whatsapp.com/send?phone=+8801717420309" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form action=""> 
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="text" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
