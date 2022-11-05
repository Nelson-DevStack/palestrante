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
    <div>
      <Navbar />
      <Hero />
      <SocialProof />
      <AdvantagesSection />
      <FormSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
