import { useState } from "react";
import { Link } from "react-router-dom";
import pinus from "../../assets/tanamantnp/Pinus.JPG";
import AOS from "aos";
import "aos/dist/aos.css";

const Pinus = () => {
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
          Pinus / Tusam
          <br />
          <span className="italic">Pinus merkusii Jungh.</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl"
              src={pinus}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-green text-basic p-3 rounded-lg mb-2">
                <span className="font-bold">Divisi :</span> Spermatophyta
                <br />
                <span className="font-bold">Sub Divisi :</span> Coniferophyta
                <br />
                <span className="font-bold">Kelas :</span> Pinopsida
                <br />
                <span className="font-bold">Ordo :</span> Pinales
                <br />
                <span className="font-bold">Famili :</span> Pinaceae
                <br />
                <span className="font-bold">Genus :</span> Pinus
                <br />
                <span className="font-bold">Spesies :</span><span className="italic"> Pinus merkusii Jungh.</span>
            </div>
            <span className="font-bold">Habitat:</span>
            <br/>
            Tumbuh pada ketinggian 200-2000 m di atas 
            permukaan laut dan tidak memerlukan persyaratan 
            tumbuh yang tinggi.
            <br/>
            <br/>
            <span className="font-bold">Manfaat:</span>
            <br/>
            1. Dapat merubah sifat fisik tanah
            <br/>
            2. Memacu penambahan air tanah karena terjadi perubahan lengas tanah
            <br/>
            3. Sebagai regulator air
            <br/>
            4. Seresah (jatuhan daun) dapat menambah kandungan bahan organik pada permukaan tanah
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pinus;
