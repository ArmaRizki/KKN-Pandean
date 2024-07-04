import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Bambukuning from "../components/tanamantnp/bambukuning";

export default function anthurium() {
  return (
    <>
      <HtmlHead
        title="Bambukuning"
        decription="[insert page description]"
        link="/agrowisata/tnp/bambukuning"
      />
      <main className="overflow-hidden">
        <Bambukuning />
      </main>
    </>
  );
}