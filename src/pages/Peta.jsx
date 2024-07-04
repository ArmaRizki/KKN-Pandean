import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Peta1 from "../components/umkm/peta1";

export default function Peta() {
  return (
    <>
      <HtmlHead
        title="Peta Distribusi UMKM"
        decription="[insert page description]"
        link="/peta_umkm"
      />
      <main className="overflow-hidden">
        <Peta1 />
      </main>
    </>
  );
}