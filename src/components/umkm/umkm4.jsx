import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/umkm/telomoyo1.JPG";
import gambar2 from "../../assets/umkm/telomoyo2.JPG";
import gambar3 from "../../assets/umkm/telomoyo3.jpg";
import gambar4 from "../../assets/umkm/telomoyo4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

const Umkm4 = () => {
  var settings = {
    dots: false,
    // arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div className="items-center bg-basic pt-8 pb-12 xl:py-24">
      <div className="">
        <div
          className="relative items-center text-white text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center">
            <div className="font-black bg-dark-green mb-8 py-6 text-2xl xl:text-4xl text-basic text-center">
          SEMUA BISA DI TELOMOYO
        </div>
            </div>
          </div>
          <div className="grid grid-cols-4 xl:grid-cols-6 xl:flex-row items-center justify-center px-4">
            <div className=" xl:pb-0 content-center justify-self-center col-span-2 xl:col-span-2 xl:col-start-2 flex justify-center items-center mb-3 mr-1">
              <img
                className="rounded-xl h-full w-full items-center flex justify-center content-center justify-self-center"
                src={gambar1}
                alt="rectangle"
              ></img>
            </div>
            <div className="xl:pb-0 content-center justify-self-center col-span-2 xl:col-span-2 xl:col-start-4 flex justify-center items-center mb-3 ml-1">
              <img
                className="rounded-xl h-full w-full items-center flex justify-center content-center justify-self-center"
                src={gambar2}
                alt="rectangle"
              ></img>
            </div>
            <div className="xl:pb-0 content-center justify-self-center col-span-2 xl:col-span-2 xl:col-start-2 flex justify-center items-center mb-3 mr-1">
              <img
                className="rounded-xl h-full w-full items-center flex justify-center content-center"
                src={gambar3}
                alt="rectangle"
              ></img>
            </div>
            <div className="xl:pb-0 content-center justify-self-center col-span-2 xl:col-span-2 xl:col-start-4 flex justify-center items-center mb-3 ml-1">
              <img
                className="rounded-xl h-full w-full items-center flex justify-center content-center"
                src={gambar4}
                alt="rectangle"
              ></img>
            </div>
          </div>
          <div className="text-light-green text-sm xl:text-lg text-center mt-2 font-semibold">
            Berkeliling menikmati pemandangan memukau sekitar Desa Pandean dan Gunung Telomoyo bisa juga Anda lakukan,
            <br/>
            Atau bersantai sejenak sambil foto-foto di cafe pilihan Anda!    
              </div>      
        </div>
      </div>
    </div>
  );
};

export default Umkm4;
