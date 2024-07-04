import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Agrowisata from "./pages/Agrowisata";
import Umkm from "./pages/Umkm";
import Peta from "./pages/Peta";
import Mengenaiumkm from "./pages/Mengenaiumkm";
import TanamanTNP from "./pages/TanamanTNP";

import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agrowisata" element={<Agrowisata />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/peta_umkm" element={<Peta />} />
        <Route path="/mengenai_umkm" element={<Mengenaiumkm />} />
        <Route path="/agrowisata/informasitanamanTNP" element={<TanamanTNP />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;