import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Pakis from "../components/tanamantnp/pakis";

export default function pakis() {
  return (
    <>
      <HtmlHead
        title="Pakis"
        decription="[insert page description]"
        link="/agrowisata/tnp/pakis"
      />
      <main className="overflow-hidden">
        <Pakis />
      </main>
    </>
  );
}