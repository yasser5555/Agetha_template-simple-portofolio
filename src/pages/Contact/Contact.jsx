import React, { useEffect } from "react";
import Paragraph from "./../../components/Paragraph/Paragraph";
import { NavLink } from "react-router-dom";
import Aos from "aos";
export default function Contact() {
  useEffect(()=>{
    Aos.init();
    Aos.refreshHard();
    return ()=>Aos.refreshHard();
  },[])
  return (
    <div className="container-fluid bg-black full-screen full-screen  w-100  d-flex flex-column align-items-center justify-content-between">
      <div data-aos="fade-in"  className="container half-port  my-5 d-flex ">
        <div className="card  w-100 d-flex flex-column align-self-center  flex-lg-row  justify-content-between align-items-baseline  bg-dark p-5 ">
          {/* ! Text */}
          <div className="txt d-flex flex-column ">
            <h1 className="text-light fs-1 text-capitalize">
              let's work togther on your next project
            </h1>
            <Paragraph
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          voluptatem ut eos sint debitis dolorem eligendi porro ea
          reprehenderit. Tenetur optio nemo suscipit repellendus voluptates
          molestias voluptas. Aliquam, nemo dolores!"
            />
          </div>
          {/* Button */}
          <NavLink
            className="text-decoration-none text-light bg-danger full-width w-25 py-2 px-5 text-center rounded text-capitalize"
            to="/"
          >
            view-all
          </NavLink>
        </div>
      </div>
      {/* ! Footer */}
      <footer  className="bg-black w-100 text-light py-4 ">
        <div className="container w-100 d-flex justify-content-between flex-column flex-lg-row align-items-center">
          <div className="d-flex align-items-center flex-column flex-lg-row w-100 justify-content-between text-center ">
            {/* Logo */}

            <i
              className="fa-brands fa-wolf-pack-battalion fs-1 "
              style={{ color: "#b22222" }}
            ></i>

            {/* Social Icons */}
            <div  className=" d-flex justify-content-between my-5 my-lg-0">
              <a href="#" className="text-light mx-2">
                <i className="fab fa-facebook fs-5"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i className="fab fa-twitter fs-5"></i>
              </a>
              <a href="#" className="text-light mx-2">
                <i className="fab fa-youtube fs-5"></i>
              </a>
            </div>

            {/* Credit */}
            <div className="d-flex flex-row align-items-baseline">
              <i className="fas fa-heart me-1 text-danger"></i>

              <p>Created by wizard0_o </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
