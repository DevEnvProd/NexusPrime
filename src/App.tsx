import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RoadmapPage from "./pages/RoadmapPage";
import EarnPage from "./pages/EarnPage";
import PlaylandTokenPage from "./pages/PlaylandTokenPage";
import DAOPage from "./pages/DAOPage";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-black min-h-screen text-white selection:bg-[#F5009F] selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/earn" element={<EarnPage />} />
            <Route path="/play" element={<PlaylandTokenPage />} />
            <Route path="/dao" element={<DAOPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
