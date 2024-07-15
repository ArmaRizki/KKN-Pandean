import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Homepage = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="bg-center bg-cover h-screen w-full bg-homepage-cover opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 text-basic">
        <p className="font-Satisfy text-center font-bold text-6xl mb-4">
          Selamat datang
          <br />
          di Desa Pandean
        </p>
        <p className="text-center sm:text-lg md:text-xl text-basic">
          Nikmati asrinya perkebunan dan agungnya Telomoyo di Pandean
        </p>
      </div>
    </>
  );
};

export default Homepage;
