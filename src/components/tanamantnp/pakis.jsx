import { useState } from "react";
import { Link } from "react-router-dom";
import pakis from "../../assets/tanamantnp/Pakis Raksasa.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Pakis = () => {
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
          Paku Gajah / Pakis Raksasa
          <br />
          <span className="italic">Angiopteris evecta</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl"
              src={pakis}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-green text-basic p-3 rounded-lg mb-2">
                <span className="font-bold">Divisi :</span> Tracheophyta
                <br />
                <span className="font-bold">Kelas :</span> Marattiopsida
                <br />
                <span className="font-bold">Ordo :</span> Marattaiales
                <br />
                <span className="font-bold">Famili :</span> Marattiaceae
                <br />
                <span className="font-bold">Genus :</span> Angiopteris
                <br />
                <span className="font-bold">Spesies :</span><span className="italic"> Angiopteris evecta</span>
            </div>
            <span className="font-bold">Habitat:</span>
            <br/>
            Dapat hidup di daerah dengan suhu tahunan rata-rata 
            19-27 C, curah hujan tahunan 1,054-5,447 mm, dan 
            kemiringan tempat 0-1,492 m. Tumbuhan ini cocok 
            tumbuh pada hutan dataran rendah sampai menengah, 
            lembah basah, ngarai, dan tempat terbuka serta ternaungi.
            <br/>
            <br/>
            <span className="font-bold">Manfaat:</span>
            <br/>
            1. Tanaman hias
            <br/>
            2. Bahan makanan
            <br/>
            3. Obat untuk menghentikan pendarahan
            <br/>
            4. Obat batuk
            <br/>
            5. Minyak aromatik
            <br/>
            6. Obat pengurangan rasa nyeri
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pakis;
