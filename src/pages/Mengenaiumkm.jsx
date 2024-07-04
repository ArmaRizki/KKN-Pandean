import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Detail1 from "../components/umkm/detail1";
import Detail2 from "../components/umkm/detail2";
import Detail3 from "../components/umkm/detail3";
import Detail4 from "../components/umkm/detail4";
import Detail5 from "../components/umkm/detail5";

export default function Mengenaiumkm() {
  return (
    <>
      <HtmlHead
        title="Mengenai UMKM"
        decription="[insert page description]"
        link="/mengenai_umkm"
      />
      <main className="overflow-hidden">
        <Detail1 />
        <Detail2 />
        <Detail3 />
        <Detail4 />
        <Detail5 />
      </main>
    </>
  );
}