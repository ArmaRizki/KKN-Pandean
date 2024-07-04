import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/TNP.jpg";
import gambar2 from "../../assets/agrowisata/kemahatv.jpg";
import gambar3 from "../../assets/agrowisata/telomoyo.JPG";
import AOS from "aos";
import "aos/dist/aos.css";
import Agrowisata2 from "../../components/agrowisata/agrowisata2";
import Agrowisata3 from "../../components/agrowisata/agrowisata3";
import Agrowisata4 from "../../components/agrowisata/agrowisata4";
// import "./tentang.css";

const Agrowisata1 = () => {
  const handleTNP = () => {
    const element = document.getElementById("tnp");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleKemahatv = () => {
    const element = document.getElementById("kemahatv");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleTelomoyo = () => {
    const element = document.getElementById("telomoyo");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <div
      className="items-center bg-basic pt-24 pb-16 px-8 xl:px-24"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="">
        <div className="relative items-center text-white text-sm">
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="text-light-green font-Satisfy text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
                Liburan Mudah di Pandean
              </div>
            </div>
          </div>
          <div className="container flex-col xl:flex-row flex items-center justify-center">
            <div
              className="transform hover:transition-all hover:scale-[110%] pb-4 xl:pb-0 px-4"
              onClick={handleTNP}
            >
              <img className="rounded-2xl" src={gambar1} alt="tnp"></img>
            </div>
            <div
              className="transform hover:transition-all hover:scale-[110%] pb-4 xl:pb-0 px-4"
              onClick={handleKemahatv}
            >
              <img className="rounded-2xl" src={gambar2} alt="kemahatv"></img>
            </div>
            <div
              className="transform hover:transition-all hover:scale-[110%] pb-4 xl:pb-0 px-4"
              onClick={handleTelomoyo}
            >
              <img className="rounded-2xl" src={gambar3} alt="telomoyo"></img>
            </div>
          </div>
        </div>
        <div className="text-light-green flex-col flex xl:flex-row xl:mt-10 items-center justify-center xl:text-xl font-bold">
        Kenikmatan dataran tinggi ada di tanganmu
          {/* <div className="text-light-green items-center sm:text-base xl:text-xl xl:w-2/3 xl:mr-10 mb-4 xl:mb-0">
          Kenikmatan dataran tinggi ada di tanganmu
          </div> */}
          {/* <div className="xl:pb-0 items-center justify-center flex">
            <h3>2</h3>
            <img className="" src={map_muncak} alt="rectangle"></img>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Agrowisata1;