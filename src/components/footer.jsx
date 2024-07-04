import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faGoogle,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo-saujana-small.png";
import logo from "../assets/logo-saujana-big.png";

const footer = () => {
  return (
    <footer className=" bg-dark-green z-100 pt-8 xl:py-0">
      <div className="flex flex-row xl px:8">
        <div className="container mx-auto px-2 text-left sm:w-auto xl:w-full h-full">
          <div className="mx-4 flex justify-evenly gap-y-2 xl:flex-row xl:items-start flex-col gap-8 mobile:text-2xl">
            <div className="flex flex-col items-center self-center xl:items-start xl:self-auto">
              <div className="flex items-center sm:px-[15rem] xl:px-0 xl:gap-10 xl:flex-row mb-4 xl:py-12">
                <img
                  src={Logo}
                  alt=""
                  className="transition-all xl:hidden xl:h-28 xl:scale-[1.4]"
                />
                <img
                  src={logo}
                  alt=""
                  className=" hidden transition-all xl:inline-flex xl:h-28 xl:scale-[1.4]"
                />
                <span className="hidden xl:block">
                  <p className="">
                    <span className="font-bold content-left text-lg xl:text-xl text-white">
                      DESA PANDEAN
                    </span>
                    <br />
                    <span className="text-center xl:content-left text-md xl:text-lg text-white">
                      Kecamatan Ngablak, Kabupaten Magelang, Jawa Tengah, 56194
                    </span>
                  </p>
                </span>
              </div>
              <span className="xl:hidden">
                <p className="font-bold text-center text-lg text-white lg:mt-6">
                  DESA PANDEAN
                </p>
                <p className="text-center text-base text-white lg:mt-6 mb-2">
                  Kecamatan Ngablak, Kabupaten Magelang, Jawa Tengah, 56194
                </p>
              </span>
            </div>
            <div className="flex flex-col text-lg text-white xl:gap-2 xl:text-xl gap-2 my-6">
              <div className="flex flex-col text-lg gap-2">
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/home"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  Beranda
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/agrowisata"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  Agrowisata dan Pariwisata
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/umkm"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  UMKM
                </Link>
              </div>
            </div>
            {/* kontak person whatsapp */}
            <div className="flex flex-col text-base xl:text-lg text-white gap-2 xl:py-6">
              <div className="flex flex-col gap-2">
                <p className="font-bold">Hubungi Kami</p>
                <a
                  href={"https://wa.me/6281548638400"}
                  rel="noreferrer"
                  target="_blank"
                  className="group w-fit transition-colors hover:text-yellow-500"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    color="white"
                    size="1x"
                    className="transition-all  group-hover:text-yellow-500"
                  ></FontAwesomeIcon>{" "}
                  Whatsapp
                  <p>(+62)815-4863-8400</p>
                </a>
                <a
                  href={"mailto:kantordesapandean@gmail.com"}
                  rel="noreferrer"
                  target="_blank"
                  className="group w-fit transition-colors hover:text-yellow-500"
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    size="sm"
                    color="white"
                    className="transition-all group-hover:text-yellow-500"
                  ></FontAwesomeIcon>{" "}
                  Email
                  <p>kantordesapandean@gmail.com</p>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-white bg-light-green mt-3 py-2">
        Developed by Tim KKN Saujana Ngablak 2023
      </p>
    </footer>
  );
};

export default footer;