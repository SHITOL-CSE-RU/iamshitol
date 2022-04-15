import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Client Avater" />
          </div>
          <h5 className="client__name">ultrapixelwebde</h5>
          <small className="client__review">
          Extremely precise work. Super professionally implemented and the most important thing, 
          people think independently here. thank you I'm very satisfied every time.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Client Avater" />
          </div>
          <h5 className="client__name">pietrik13</h5>
          <small className="client__review">
          Working with shitol allows me to concentrate on business. He works perfectly on my web sites. 
          Fixes them and improves them. Will keep coming back!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Client Avater" />
          </div>
          <h5 className="client__name">adamdjbrett</h5>
          <small className="client__review">
          It was a great experience working with you! Answered all my questions before we started, 
          showed me outstanding samples of his work, and answered the questions I had after! Amazing to work with!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Client Avater" />
          </div>
          <h5 className="client__name">luckytuvshee</h5>
          <small className="client__review">
          The best experience I have had working with anyone on the site. 
          He is a knowledgeable and thorough developer. Truly an expert in REACT.JS and NODE.JS. Book him today
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Testimonials;
