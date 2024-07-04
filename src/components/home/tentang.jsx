import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Tentang = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div className="items-center bg-basic pt-8 xl:pt-16 pb-8 block px-8 xl:px-24">
      <div className="xl:grid xl:grid-cols-2 flex flex-col">
        <div
          className="relative items-end text-left text-white mobile:text-sm xl:w-[90%]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="sm:text-3xl md:text-4xl lg:text-5xl xl:mb-5 xl:text-5xl pointer-events-none">
            <div className="mt-1 flex flex-row sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <p className="font-Satisfy text-dark-green mobile:text-2xl font-bold mb-3">
                Tentang Pandean
              </p>
            </div>
          </div>

          <div className="text-justify text-dark-green sm:text-base xl:text-xl">
          Terletak di antara 4 gunung, yaitu Telomoyo, Andong, 
          Sumbing dan Sindoro, Desa Pandean memberikan suasana baru 
          dengan udaranya yang sejuk dan pemandangannya yang asri.
            <br />
            <br />
            Dapat ditempuh dengan motor atau mobil, dengan waktu perjalanan sekitar 
            1 jam dari kota Yogyakarta, Desa Pandean sangat cocok untuk Anda 
            yang tidak ingin menempuh perjalanan jauh dan berdomisili di sekitar Jawa Tengah.
            <br />
            <br />
            Untuk Anda yang ingin mencari destinasi dengan ketenangan alam untuk rehat sejenak,
            <br />
            <p className="font-bold mb-3">
            Desa Pandean menunggu kedatangan Anda.
            </p>
          </div>
          <div>
            <a href="https://storymaps.arcgis.com/stories/f8adad40e61943888ca13d296b2cf73f" 
            target="_blank" rel="noopener noreferrer">
              <button onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              class="mt-4 rounded bg-dark-green py-2 px-6 font-Montserrat text-lg md text-white transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] mobile:text-sm"
              >
                Selengkapnya
              </button>
            </a>
           </div>
        </div>
        <div
          className="mt-12 xl:mt-0 flex justify-center items-center container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <iframe
            className="container h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31654.281950743454!2d110.37654880576827!3d-7.377949478403611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7e995d2b9993%3A0xd2a7ac3eb50ad560!2sPandean%2C%20Ngablak%2C%20Magelang%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1688995033521!5m2!1sen!2sid"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map_pandean"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
