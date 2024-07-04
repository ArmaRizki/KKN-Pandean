import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Araukaria from "../components/tanamantnp/araukaria";

export default function anthurium() {
  return (
    <>
      <HtmlHead
        title="Araukaria"
        decription="[insert page description]"
        link="/agrowisata/tnp/araukaria"
      />
      <main className="overflow-hidden">
        <Araukaria />
      </main>
    </>
  );
}