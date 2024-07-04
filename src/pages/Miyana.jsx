import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Miyana from "../components/tanamantnp/miyana";

export default function miyana() {
  return (
    <>
      <HtmlHead
        title="Miyana"
        decription="[insert page description]"
        link="/agrowisata/tnp/miyana"
      />
      <main className="overflow-hidden">
        <Miyana />
      </main>
    </>
  );
}