import React, { useEffect, useState } from "react";
import Title from "./../../components/Title/Title";
import Paragraph from "./../../components/Paragraph/Paragraph";
import { NavLink } from "react-router-dom";
import Aos from 'aos'
  export default function Services() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleCardClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
useEffect(()=>{
  Aos.init({});
  Aos.refresh();
  return ()=>{
    return Aos.refreshHard();
  }
})
  return (
    <div className="max-screen container-fluid bg-black d-flex flex-column align-items-center col-12 full-screen">
   {/* ! upper-side */}
      <div className="container full-screen py-3 d-flex mb-5 justify-content-start justify-content-lg-center flex-direction-column flex-column flex-lg-row">
        {/* === Card 1 === */}
        <div
     
          onClick={() => handleCardClick(0)}
          className={`card active-card ${
            activeIndex === 0 ? "activated-card" : ""
          } w-30 full-screen-width bg-gray p-5 fs-1 card-height`}
             data-aos="fade-right"
        >
          <i className="fa-solid fa-wallet" style={{ color: "#b22222" }}></i>
          <div className="card-body">
            <div className="card-title fw-bold">
              <Title text="ui design" />
            </div>
            <div className="card-pargraph">
              <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quia omnis, debitis consequatur libero quo alias a numquam quibusdam architecto tempora cupiditate doloribus qui error nemo dolorum, tenetur porro consequuntur." />
              <NavLink
                className="fs-4 c-primary text-capitalize text-decoration-none d-flex justify-content-between align-items-baseline"
                to="/"
              >
                learn more <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>

        {/* === Card 2 === */}
        <div
          onClick={() => handleCardClick(1)}
          className={`card active-card ${
            activeIndex === 1 ? "activated-card" : ""
          } w-30 my-3 my-lg-0 mx-0 mx-lg-5 full-screen-width bg-gray p-5 fs-1 card-height`}
          
        data-aos="fade-right" 
        data-aos-delay="100"
        >
          <i
            className="fa-solid fa-clipboard-list"
            style={{ color: "#b22222" }}
          ></i>
          <div className="card-body">
            <div className="card-title fw-bold">
              <Title text="product design" />
            </div>
            <div className="card-pargraph">
              <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quia omnis, debitis consequatur libero quo alias a numquam quibusdam architecto tempora cupiditate doloribus qui error nemo dolorum, tenetur porro consequuntur." />
              <NavLink
                className="fs-4 c-primary text-capitalize text-decoration-none d-flex justify-content-between align-items-baseline"
                to="/"
              >
                learn more <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>

        {/* === Card 3 === */}
        <div
        data-aos="fade-right"
          onClick={() => handleCardClick(2)}
          className={`card active-card ${
            activeIndex === 2 ? "activated-card" : ""
          } w-30 full-screen-width bg-gray p-5 fs-1 card-height`}
        >
          <i className="fa-solid fa-ring" style={{ color: "#b22222" }}></i>
          <div className="card-body">
            <div className="card-title fw-bold">
              <Title text="branding" />
            </div>
            <div className="card-pargraph">
              <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quia omnis, debitis consequatur libero quo alias a numquam quibusdam architecto tempora cupiditate doloribus qui error nemo dolorum, tenetur porro consequuntur." />
              <NavLink
                className="fs-4 c-primary text-capitalize text-decoration-none d-flex justify-content-between align-items-baseline"
                to="/"
              >
                learn more <i className="fa-solid fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* ! Lower-side */}
      <div className="container d-flex  flex-column flex-lg-row w-100">
        <div className="years text-capitalize">
          <h1 className="fs-1   text-danger m-0" data-aos="fade-in">12</h1>
          <p className="fs-2 text-light" data-aos="fade-in" data-aos-delay="200">years experience</p>
        </div>
        <div className="box  mb-5 d-flex justify-content-center flex-column align-items-start flex-lg-row">
          {/* Card--1 */}
          <div className="card-">
          <h1 className="text-danger" data-aos="fade-in" data-aos-delay="300">60+</h1>
            <p className="text-light text-capitalize" data-aos="fade-in" data-aos-delay="400">clients</p>
          </div>

          {/* Card--2 */}
           <div className="card-">
            <h1 className="text-danger" data-aos="fade-in" data-aos-delay="500">08</h1>
            <p className="text-light text-capitalize" data-aos="fade-in" data-aos-delay="600">leading experience</p>
          </div>
              {/* Card--3 */}
           <div className="card-">
             <h1 className="text-danger" data-aos="fade-in" data-aos-delay="700">122+</h1>
            <p data-aos="fade-in" data-aos-delay="900" className="text-light text-capitalize" >compeleted projects</p>
          </div>
              {/* Card--4 */}
           <div className="card-">
            <h1 className="text-danger"  data-aos="fade-in" data-aos-delay="1000">10</h1>
            <p className="text-light text-capitalize"  data-aos="fade-in" data-aos-delay="1100">achievements</p>
          </div>
        </div>
      </div>
    </div>
  );
}
