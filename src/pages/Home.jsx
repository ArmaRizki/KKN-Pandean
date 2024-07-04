import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Homepage from "../components/home/homepage";
import Tentang from "../components/home/tentang";
import Terbaik from "../components/home/terbaik";
import Cerita from "../components/home/cerita";
import Kelerengan from "../components/home/kelerengan";
export default function Home() {
  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="[insert page description]"
        link="/"
      />
      <main className="overflow-hidden">
        <Homepage />
        <Tentang />
        <Kelerengan />
        <Terbaik />
        <Cerita />
      </main>
    </>
  );
}