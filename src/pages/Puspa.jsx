import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Puspa from "../components/tanamantnp/puspa";

export default function puspa() {
  return (
    <>
      <HtmlHead
        title="Puspa"
        decription="[insert page description]"
        link="/agrowisata/tnp/puspa"
      />
      <main className="overflow-hidden">
        <Puspa />
      </main>
    </>
  );
}