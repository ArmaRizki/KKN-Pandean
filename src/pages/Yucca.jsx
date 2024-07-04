import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Yucca from "../components/tanamantnp/yucca";

export default function yucca() {
  return (
    <>
      <HtmlHead
        title="Yucca"
        decription="[insert page description]"
        link="/agrowisata/tnp/yucca"
      />
      <main className="overflow-hidden">
        <Yucca />
      </main>
    </>
  );
}