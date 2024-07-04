import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Aglaonema from "../components/tanamantnp/aglaonema";

export default function aglaonema() {
  return (
    <>
      <HtmlHead
        title="Aglaonema"
        decription="[insert page description]"
        link="/agrowisata/tnp/aglaonema"
      />
      <main className="overflow-hidden">
        <Aglaonema />
      </main>
    </>
  );
}