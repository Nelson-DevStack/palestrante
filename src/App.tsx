import reactLogo from "./assets/react.svg";
import "./App.css";
import AboutSection from "./components/AboutSection";
import AdvantagesSection from "./components/Advantages";
import Footer from "./components/Footer";
import FormSection from "./components/FormSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SocialProof from "./components/SocialProof";
import TestimonialsSection from "./components/Testimonials";
import Title from "./components/Title";
import Container from "./components/UIComponents/Container";

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

      <Container>
        <div className="flex gap-5 mt-10 justify-center">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>

        <h1 className="text-3xl text-center mt-5">Vite + React</h1>

        <div className="text-center">
          <Title />
        </div>
      </Container>
    </div>
  );
}

export default App;
