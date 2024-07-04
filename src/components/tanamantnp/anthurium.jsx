import { useState } from "react";
import { Link } from "react-router-dom";
import anthurium from "../../assets/tanamantnp/Anthurium.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Anthurium = () => {
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
          Anthurium
          <br />
          <span className="italic">Anthurium andraeanum</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl h-4/5"
              src={anthurium}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-green text-basic p-3 rounded-lg mb-2">
                <span className="font-bold">Divisi :</span> Tracheophyta
                <br />
                <span className="font-bold">Sub Divisi :</span> Spermatophyta
                <br />
                <span className="font-bold">Kelas :</span> Liliopsida
                <br />
                <span className="font-bold">Ordo :</span> Arales
                <br />
                <span className="font-bold">Famili :</span> Araceae
                <br />
                <span className="font-bold">Genus :</span> Anthurium
                <br />
                <span className="font-bold">Spesies :</span><span className="italic"> Anthurium andraeanum</span>
            </div>
            <span className="font-bold">Habitat:</span>
            <br/>
            Hutan hujan tropis pada ketinggian tempat 400-1200 
            mdpl dengan tanah yang lembab dan berdrainase baik.
            <br/>
            <br/>
            <span className="font-bold">Manfaat:</span>
            <br/>
            1. Tanaman hias
            <br/>
            2. Penyerap polutan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anthurium;
