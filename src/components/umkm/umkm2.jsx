import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Umkm2 = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="bg-center bg-cover bg-homepage-cover opacity-60 justify-center item-center grid grid-cols-2 py-48">
        <div className="justify-center items-center xl:flex col-span-2 flex py-6">
          <Link to="/mengenai_umkm">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              class="rounded bg-dark-green py-2 px-4 font-Montserrat text-3xl md text-white transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] mobile:text-sm"
            >
            Kulineran di Pandean
            </button>
          </Link>
        </div>
        <div className="justify-center items-center xl:flex col-span-2 flex py-6">
          <Link to="/peta_umkm">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              class="rounded bg-dark-green py-2 px-4 font-Montserrat text-3xl md text-white transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] mobile:text-sm"
            >
              Persebaran UMKM Desa Pandean
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Umkm2;
