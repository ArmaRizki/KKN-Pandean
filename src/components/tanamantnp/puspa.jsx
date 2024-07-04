import { useState } from "react";
import { Link } from "react-router-dom";
import puspa from "../../assets/tanamantnp/Puspa.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Puspa = () => {
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
    <div className="items-center bg-basic pt-10 pb-6 px-20 xl:px-20">
      <div
        className="xl:items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <p className="font-bold text-xl">
          Puspa
          <br />
          <span className="italic">Schima wallichii</span>
        </p>
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:pt-2">
          <div className="xl:col-span-1 py-3 xl:py-0">
            <img
              className="rounded-xl"
              src={puspa}
              alt="rectangle"
            ></img>
          </div>
          <div className="xl:col-span-2 text-justify xl:pl-12">
            <div className="bg-dark-green text-basic p-3 rounded-lg mb-2">
                <span className="font-bold">Divisi :</span> Spermatophyta
                <br />
                <span className="font-bold">Sub Divisi :</span> Magnoliaphyta
                <br />
                <span className="font-bold">Kelas :</span> Magnoliopsida
                <br />
                <span className="font-bold">Ordo :</span> Ericales
                <br />
                <span className="font-bold">Famili :</span> Theaceae
                <br />
                <span className="font-bold">Genus :</span> Schima
                <br />
                <span className="font-bold">Spesies :</span><span className="italic"> Schima wallichii</span>
            </div>
            <span className="font-bold">Habitat:</span>
            <br/>
            Mampu hidup pada berbagai kondisi iklim dan habitat. 
            Sering ditemukan di dataran redah hingga pegunungan 
            dengan ketinggian mencapai 1000 mdpl, serta dapat 
            hidup pada kondisi tekstur dan kesuuran tanah yang beragam.
            <br/>
            <br/>
            <span className="font-bold">Manfaat:</span>
            <br/>
            1. Bahan bangunan
            <br/>
            2. Bahan baku pembuat kertas
            <br/>
            3. Industri meubel
            <br/>
            4. Penghasil zat warna
            <br/>
            5. Bahan pelindung reklamasi
            <br/>
            6. Penyumbang unsur hara sebasar 7,73 kg/tahun yang meliputi N, P, K, Ca, dan Mg
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puspa;
