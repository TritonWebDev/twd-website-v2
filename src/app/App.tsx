import { BrowserRouter, Routes, Route } from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { TeamPage } from "./pages/TeamPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-page relative overflow-x-hidden">
        <Navigation />

        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}