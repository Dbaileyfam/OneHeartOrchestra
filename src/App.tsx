import { HashRouter, Route, Routes } from "react-router-dom";
import { MouseGlow } from "@/components/MouseGlow";
import { RootLayout } from "@/components/RootLayout";
import Home from "@/pages/Home";
import Music from "@/pages/Music";
import Shows from "@/pages/Shows";
import Epk from "@/pages/Epk";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <HashRouter>
      <MouseGlow />
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/epk" element={<Epk />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
