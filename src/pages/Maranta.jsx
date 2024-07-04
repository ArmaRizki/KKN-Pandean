import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Maranta from "../components/tanamantnp/maranta";

export default function maranta() {
  return (
    <>
      <HtmlHead
        title="Maranta"
        decription="[insert page description]"
        link="/agrowisata/tnp/maranta"
      />
      <main className="overflow-hidden">
        <Maranta />
      </main>
    </>
  );
}