import { Link } from "react-router-dom";
import { HtmlHead } from "../components/HtmlHead";

import Agrowisata1 from "../components/agrowisata/agrowisata1";
import Agrowisata2 from "../components/agrowisata/agrowisata2";
import Agrowisata3 from "../components/agrowisata/agrowisata3";
import Agrowisata4 from "../components/agrowisata/agrowisata4";
import Video from "../components/agrowisata/video";

export default function Home() {
  return (
    <>
      <HtmlHead
        title="Agrowisata"
        decription="[insert page description]"
        link="/agrowisata"
      />
      <main className="overflow-hidden">
        <Agrowisata1 />
        <Agrowisata2 />
        <Agrowisata3 />
        <Agrowisata4 />
        <Video />
      </main>
    </>
  );
}