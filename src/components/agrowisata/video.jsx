import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Video = () => {
    AOS.init();
    AOS.refresh();
    AOS.refreshHard();
  
    const [width] = useState(window.innerWidth);
    const isDesktop = width > 640;
  
    return (
    <div className="items-center bg-basic pb-10 pt-10 xl:pt-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="300"
    >   
        <div 
        className ="mt-12 xl:mt-8 flex justify-center items-center"
        data-aos="fade-up"
        data-aos-duration="1000"
        >
            <iframe className="xl:w-[840px] xl:h-[472.5px] w-[560px] h-[315px]"
            src="https://www.youtube.com/embed/5F3J91b9Rw4" 
            title="Evaluasi Praktik Pariwisata Berkelanjutan di Gunung Telomoyo" 
            frameborder="10"    
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
            </iframe>
        </div>
        <div>
        <div>
            <a href="https://drive.google.com/file/d/1yJL-YtT11n9HdULRCVPt4sercNjKJv6h/view?usp=drive_link" 
            target="_blank" rel="noopener noreferrer">
              <button onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              class="mt-4 rounded bg-dark-green py-2 px-6 font-Montserrat text-lg md text-white transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)] mobile:text-sm"
              >
                Baca Selengkapnya
              </button>
            </a>
           </div>
        </div>
    </div>
    );
};

export default Video;