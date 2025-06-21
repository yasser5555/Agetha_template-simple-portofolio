import React, { useEffect } from "react";
import Paragraph from "../../components/Paragraph/Paragraph";
import { NavLink } from "react-router-dom";
import card_1 from "../../Assets/card (1).jpg";
import Aos from "aos";
export default function About() {
  useEffect(()=>{
    Aos.init();
    Aos.refresh();
    return ()=>Aos.refreshHard();
  },[])
  return (
    <div className="min-vh-100  container-fluid w-100 bg-black d-flex flex-column">
      {/* ! upper-side_contianer */}
      <div className="container flex-column flex-lg-row d-flex align-items-center justify-content-between align-items-lg-baseline">
        <div data-aos="fade-right" className="text-container p-3 text-light d-flex flex-column">
          <h1 className="text-capitalize fw-bold">featured projects</h1>
          <Paragraph text="Lorem ipsum dolor sit amet consectetu" />
        </div>
        <NavLink
        data-aos="fade-left" data-aos-delay="100"
          className="text-decoration-none align-self-start align-self-lg-baseline text-light bg-danger py-2 px-4 rounded text-capitalize"
          to="/"
        >
          view-all
        </NavLink>
        {/* Lower-side_container */}
      </div>
      <div className=" container mt-4 mt-lg-0 d-flex justify-content-center w-100  align-items-baseline flex-wrap flex-column flex-lg-row">
        {/* ! card-1 */}
        <div data-aos="fade-right" className="card-w card bg-black">
          <div className=" imgcard bg-dark ">
            <img src={card_1} alt="bad-internet" className="img-fluid" />
          </div>
          <div className="card-title">
            <h1 className="text-capitalize text-light fw-bolder fs-3">
              the vintage
            </h1>
            <div className="fs-4">
              <NavLink
                className="fs-4 text-danger hover NavMax text-capitalize text-decoration-none d-flex justify-content-between align-items-baseline"
                to="/"
              >
                learn more{" "}
                <i className="fa-solid fa-arrow-right text-danger"></i>
              </NavLink>
            </div>
          </div>
        </div>
        {/* ! card-2 */}
         <div data-aos="fade-right" data-aos-delay="200" className=" card-w card bg-black">
          <div className=" imgcard bg-dark ">
            <img src={card_1} alt="bad-internet" className="img-fluid" />
          </div>
          <div className="card-title">
            <h1 className="text-capitalize text-light fw-bolder fs-3">
            foodasa
            </h1>
            <div className="fs-4">
              <NavLink
                className="fs-4 text-danger hover NavMax text-capitalize text-decoration-none d-flex justify-content-between align-items-baseline"
                to="/"
              >
                learn more{" "}
                <i className="fa-solid fa-arrow-right text-danger"></i>
              </NavLink>
            </div>
          </div>
        </div>
          {/* ! card-3 */}
         <div  data-aos="fade-right" data-aos-delay="300" className=" card-w card bg-black">
          <div className=" imgcard bg-dark ">
            <img src={card_1} alt="bad-internet" className="img-fluid" />
          </div>
          <div className="card-title">
            <h1 className="text-capitalize text-light fw-bolder fs-3">
             marco accent
            </h1>
            <div className="fs-4">
              <NavLink
                className="fs-4 text-danger hover NavMax text-capitalize text-decoration-none d-flex justify-content-between align-items-baseline"
                to="/"
              >
                learn more{" "}
                <i className="fa-solid fa-arrow-right text-danger"></i>
              </NavLink>
            </div>
          </div>
        </div>
          {/* ! card-4 */}
         <div data-aos="fade-right" data-aos-delay="400" className=" card-w card bg-black mb-5">
          <div className=" imgcard bg-dark ">
            <img src={card_1} alt="bad-internet" className="img-fluid" />
          </div>
          <div className="card-title">
            <h1 className="text-capitalize text-light fw-bolder fs-3">
             moziak
            </h1>
            <div className="fs-4">
              <NavLink
                className="fs-4 text-danger hover NavMax text-capitalize text-decoration-none d-flex justify-content-between align-items-baseline"
                to="/"
              >
                learn more{" "}
                <i className="fa-solid fa-arrow-right text-danger"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
