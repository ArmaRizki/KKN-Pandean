import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Pinus from "../components/tanamantnp/pinus";

export default function pinus() {
  return (
    <>
      <HtmlHead
        title="Pinus"
        decription="[insert page description]"
        link="/agrowisata/tnp/pinus"
      />
      <main className="overflow-hidden">
        <Pinus />
      </main>
    </>
  );
}