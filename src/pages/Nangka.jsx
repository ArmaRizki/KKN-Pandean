import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Nangka from "../components/tanamantnp/nangka";

export default function nangka() {
  return (
    <>
      <HtmlHead
        title="Nangka"
        decription="[insert page description]"
        link="/agrowisata/tnp/nangka"
      />
      <main className="overflow-hidden">
        <Nangka />
      </main>
    </>
  );
}