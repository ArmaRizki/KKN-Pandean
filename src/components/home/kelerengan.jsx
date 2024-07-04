import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/peta/kelerengan.jpg";
import AOS from "aos";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "aos/dist/aos.css";

const Kelerengan = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [isTampilGambar1, setIsTampilGambar1] = useState(false);
  const [fotoTampilGambar1, setFotoTampilGambar1] = useState();

  function closeFotoGambar1() {
    setIsTampilGambar1(false);
    setFotoTampilGambar1();
  }

  function openFotoGambar1(fotoGambar1) {
    setFotoTampilGambar1(fotoGambar1);
    setIsTampilGambar1(true);
    console.log(isTampilGambar1, fotoTampilGambar1);
  }

  return (
    <div className="items-center bg-dark-green pt-8 pb-8 px-20 xl:pb-12 xl:pt-8"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-offset="300"
    >
      <div>
        <h1 className="text-basic font-montserrat text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
              Kelerengan Desa Pandean
        </h1>
        <div className="items-center justify-center mt-2 xl:mt-8">
            <button
              className="transition ease-in-out duration-500 filter transform md:hover:scale-110"
              onClick={() => openFotoGambar1(gambar1)}
            >
              <img
                className="rounded-xl sm:py-1 sm:px-1 xl:py-10 xl:px-40"
                src={gambar1}
                alt="rectangle"
              ></img>
            </button>
          </div>
        </div>
        <Dialog open={isTampilGambar1} onClose={closeFotoGambar1}>
          <Dialog.Overlay />
          <div className="fixed px-2 py-4 mt-20 xl:top-0 top-12 inset-0 rounded-xl overflow-y-scroll overflow-x-hidden">
            <div
              className="fixed top-0 left-0 bg-gray-900 bg-opacity-70 w-full h-full"
              onClick={closeFotoGambar1}
            />
            <div className="relative xl:mt-8 m-auto">
              {fotoTampilGambar1 && (
                <div
                  className={`m-auto p-1 relative rounded-xl shadow green-900`}
                >
                  <button
                    className="md:text-4xl text-3xl text-dark-green absolute md:right-0 right-0 px-2 pt-4 rounded-full overflow-hidden z-40"
                    onClick={closeFotoGambar1}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                  <img
                    className="rounded-xl mx-auto w-full my-4"
                    src={gambar1}
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </Dialog>
      </div>
  );
}
export default Kelerengan;
