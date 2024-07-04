import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Anthurium from "../components/tanamantnp/anthurium";

export default function anthurium() {
  return (
    <>
      <HtmlHead
        title="Anthurium"
        decription="[insert page description]"
        link="/agrowisata/tnp/anthurium"
      />
      <main className="overflow-hidden">
        <Anthurium />
      </main>
    </>
  );
}