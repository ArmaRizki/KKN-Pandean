import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/tnp1.jpg";
import gambar2 from "../../assets/agrowisata/tnp2.jpg";
import gambar3 from "../../assets/agrowisata/tnp3.JPG";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

const Agrowisata3 = () => {
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
    <div className="items-center bg-basic py-10 xl:pt-12 xl:pb-0 px-8 xl:px-24 xl:-mb-24">
      <div className="">
        <div
          className="relative items-center text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none" id="tnp">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-dark-green font-Satisfy text-2xl sm:text-3xl text-right xl:text-4xl mb-3">
              Liburan Bersama Keluarga 
                <br />
                di Telomoyo Nature Park
              </div>
              <div className="rounded-xl bg-dark-green text-justify p-3 mb-3 xl:hidden">
                <p className="text-basic font-bold">HTM 10k dan Activities start from 30k</p>
              </div>
              <p className="text-justify xl:hidden">
              Bosan menginap di tempat yang itu-itu saja? 
               Ingin mencari suasana baru untuk liburan bersama keluarga?
               Telomoyo Nature Park jawabannya!
              </p>
            </div>
            <Link to="/agrowisata/informasitanamanTNP" className="z-0 xl:hidden">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  class="mt-4 rounded bg-dark-green py-2 px-6 z-50 font-Montserrat text-lg md text-basic transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] mobile:text-sm"
                >
                  Informasi tanaman Telomoyo Nature Park
                </button>
              </Link>
          </div>
          <div className="container grid grid-cols-2 xl:grid-cols-2 mt-3 gap-4 pt-4">
            <div className="xl:row-span-1 hidden xl:block text-xl text-justify text-dark-green">
              <div className="rounded-xl bg-dark-green text-justify p-3 mb-3 hidden xl:flex">
                <p className="text-basic font-bold">HTM 10k dan Activities start from 30k</p>
              </div>
              <p>
               Bosan menginap di tempat yang itu-itu saja? 
               Ingin mencari suasana baru untuk liburan bersama keluarga?
               Telomoyo Nature Park jawabannya!
              </p>
              <Link to="/agrowisata/informasitanamanTNP">
                <button
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  class="mt-4 rounded bg-dark-green py-2 px-6 font-Montserrat text-lg md text-basic transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] mobile:text-sm"
                >
                  Informasi tanaman Telomoyo Nature Park
                </button>
              </Link>
            </div>
            <div className="xl:row-span-1 flex justify-center transform xl:pb-0 col-span-2 xl:col-span-1">
              <img
                className="rounded-xl xl:h-3/4 w-full"
                src={gambar1}
                alt="rectangle"
              ></img>
            </div>
            <div className="flex justify-center items-center xl:h-1/2 transform xl:pb-0 md:col-span-1 xl:col-span-1">
              <img className="rounded-xl" src={gambar3} alt="rectangle"></img>
            </div>
            <div className="flex justify-center transform xl:pb-0 md:col-span-1 xl:col-span-1 items-center xl:h-1/2">
              <img className="rounded-xl" src={gambar2} alt="rectangle"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata3;
