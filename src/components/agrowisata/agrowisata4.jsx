import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/kemahatv1.JPG";
import gambar2 from "../../assets/agrowisata/kemahatv2.jpg";
import gambar3 from "../../assets/agrowisata/kemahatv3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

const Agrowisata4 = () => {
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
    <div className="items-center bg-light-green py-10 xl:pt-12 xl:pb-0 px-8 xl:px-24">
      <div className="">
        <div
          className="relative items-center text-white text-sm"
          id="kemahatv"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-basic font-Satisfy text-2xl sm:text-3xl text-center xl:text-4xl mb-3">
                Berpetualang di alam dengan berkemah
                <br />
                dan ATV adventure
              </div>
              <p className="text-justify xl:hidden">
              <br />
              Untuk kalian yang senang berkemah dan berpetualang, kalian juga bisa 
              menikmati sejuknya gunung dengan berkemah dan menghangatkan diri dengan api unggun.
              <br />
              <br />
              Tak lupa menjelajahi hutan pinus, main air di air terjun Seloprojo dan menikmati 
              pemandangan indah Desa Pandean dengan 4 rute menarik yang beginner friendly
              </p>
            </div>
          </div>
          <div className="container grid grid-cols-2 xl:grid-cols-2 mt-3 gap-4 pt-4">
            <div className="xl:row-span-1 hidden xl:block text-xl text-justify">
              <br />
              Untuk kalian yang senang berkemah dan berpetualang, kalian juga bisa 
              menikmati sejuknya gunung dengan berkemah dan menghangatkan diri dengan api unggun.
              <br />
              <br />
              Tak lupa menjelajahi hutan pinus, main air di air terjun Seloprojo dan menikmati 
              pemandangan indah Desa Pandean dengan 4 rute menarik yang beginner friendly
            </div>
            <div className="xl:row-span-1 flex justify-center transform xl:pb-0 col-span-2 xl:col-span-1">
              <img
                className="rounded-xl h-full"
                src={gambar3}
                alt="rectangle"
              ></img>
            </div>
            <div className="flex justify-center items-center xl:h-3/4 transform xl:pb-0 md:col-span-1 xl:col-span-1">
              <img className="rounded-xl" src={gambar1} alt="rectangle"></img>
            </div>
            <div className="flex justify-center transform xl:pb-0 items-center mx-2 my-2 ">
              <img className="rounded-xl" src={gambar2} alt="rectangle"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata4;
