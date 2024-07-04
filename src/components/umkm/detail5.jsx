import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/umkm/aqillah.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

const Detail5 = () => {
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
    <div className="items-center bg-basic pt-10 pb-12 xl:py-12">
      <div
        className="relative items-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="flex-col flex xl:grid xl:grid-cols-2 gap-3 xl:px-24">
          <div className="w-full col-span-1">
            <div className="flex justify-center items-center">
                <img
                className="rounded-2xl w-3/4"
                src={gambar1}
                alt="rectangle"
              ></img>
            </div>
          </div>
          <div className="px-4 py-2 col-span-1">
            <div className="font-black pointer-events-none">
              <div className="mt-1 justify-center">
                <div className="text-dark-green font-Satisfy text-2xl sm:text-3xl xl:text-5xl font-bold text-left mb-4 xl:mb-12 px-6">
                Warung Makan Aqillah
                </div>
              </div>
            </div>
            <iframe
            className="h-[300px] w-full px-6"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.7957608153074!2d110.3959658168199!3d-7.376773274793711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7f797228f00f%3A0xb5c7e68775e59c96!2sWarung%20Makan%20Aqillah!5e0!3m2!1sid!2sid!4v1691503338973!5m2!1sid!2sid"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map_warungaqillah"
          ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail5;