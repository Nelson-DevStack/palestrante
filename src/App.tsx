import "./App.css";
import AboutSection from "./components/AboutSection";
import AdvantagesSection from "./components/AdvantagesSection";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";
import Hero from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SocialProof from "./components/SocialProof";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <AdvantagesSection />
      <FormSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </main>
  );
}

export default App;
