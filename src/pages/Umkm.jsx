import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Umkm1 from "../components/umkm/umkm1";
import Umkm2 from "../components/umkm/umkm2";
import Umkm3 from "../components/umkm/umkm3";
import Umkm4 from "../components/umkm/umkm4";

export default function Home() {
  return (
    <>
      <HtmlHead
        title="UMKM"
        decription="[insert page description]"
        link="/umkm"
      />
      <main className="overflow-hidden">
        <Umkm1 />
        <Umkm2 />
        <Umkm3 />
        <Umkm4 />
      </main>
    </>
  );
}