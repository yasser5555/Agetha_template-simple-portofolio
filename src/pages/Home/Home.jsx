import React, { useEffect } from "react";
import logo from "../../Assets/HomeP.png";
import Small_Title from "../../components/Small-title/Small-Title";
import Title from "./../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import Aos from "aos";
import Button from "../../components/Button/Button";
import {  useTypewriter } from "react-simple-typewriter";
let seconds = "1500";
export default function Home() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
    return () => {
      Aos.refreshHard(); // or Aos.destroy() if existed
    };
  }, []);
  // by using typewriter-hook:
  const [typer] = useTypewriter({
    words:  ["visual designer","creative director","graphic artist","ui specialist","brand strategist"],
    loop:true,
    typeSpeed:90,   
  })
  return (
    <div className="full-screen container-fluid w-100 bg-black d-flex flex-column flex-lg-row overflow-hidden">
      <div className="col-12 col-lg-6 d-flex justify-content-center ">
        <img
          data-aos-duration={seconds}
          data-aos="fade-right"
          src={logo}
          className="img-fluid w-65"
          alt="bad-internet"
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration={seconds}
        className="col d-flex justify-content-center  mb-md-0 flex-column"
      >
        <Small_Title text="hello i'm agatha" />
        <Title text={typer} />
        <div className="px-2">
          <Paragraph
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
        necessitatibus itaque officiis. Earum, explicabo delectus! Harum,
        quisquam officia ea modi quidem dolores nostrum cupiditate et similique
        minus? Laboriosam, fugit recusandae res nostrum cupiditate et similique
        minus? Laboriosam, fugit recusandae res nostrum cupiditate et similique
        minus? Laboriosam, fugit recusandae "
        />
        </div>
        <div className="my-3 my-md-0">
          <Button to='/about' text="about me" />
        </div>
      </div>
    </div>
  );
}