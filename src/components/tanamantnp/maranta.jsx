import { useState } from "react";
import { Link } from "react-router-dom";
import maranta from "../../assets/tanamantnp/Maranta.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Maranta = () => {
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

  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div className="items-center bg-basic pt-10 pb-4 px-20 xl:px-20">
      <div
        className="xl:items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="font-bold text-xl">
          Maranta Garut
          <br />
          <span className="italic">Maranta arundinacea L.</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl h-4/5"
              src={maranta}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-green text-basic p-3 rounded-lg mb-2">
                <span className="font-bold">Divisi :</span> Spermatophyta
                <br />
                <span className="font-bold">Sub Divisi :</span> Magnoliaphyta
                <br />
                <span className="font-bold">Kelas :</span> Liliopsida
                <br />
                <span className="font-bold">Ordo :</span> Zingiberales
                <br />
                <span className="font-bold">Famili :</span> Marantaceae
                <br />
                <span className="font-bold">Genus :</span> Maranta
                <br />
                <span className="font-bold">Spesies :</span><span className="italic"> Bambusa vulgaris</span>
            </div>
            <span className="font-bold">Habitat:</span>
            <br/>
            Dapat tumbuh di kawasan dengan iklim sedang, tidak
            terkena sinar matahari langsung, kelembaban tinggi,
            dan tanah dengan kandungan humus yang tinggi.
            <br/>
            <br/>
            <span className="font-bold">Manfaat:</span>
            <br/>
            1. Alternatif bahan pangan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maranta;
