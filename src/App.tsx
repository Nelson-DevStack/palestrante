import "./App.css";
import AboutSection from "./components/AboutSection";
import AdvantagesSection from "./components/Advantages";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SocialProof from "./components/SocialProof";
import TestimonialsSection from "./components/Testimonials";

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
