import { useState } from "react";

import bg from "../../assets/bg.svg";
import heroImg from "../../assets/lecture.jpg";
import pattern from "../../assets/pattern.svg";
import Container from "../UIComponents/Container";

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className="relative">
      <img
        src={bg}
        alt="Asset"
        className="absolute -z-10 right-0 opacity-30 max-w-[900px] md:max-w-[800px]"
      />
      <Container className="py-10 py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center md:justify-between">
          <div className="max-w-xl">
            <h1 className="text-3xl font-medium text-gray-900">
              Curso: Aprendendo a falar em público
            </h1>

            <p className="text-base text-gray-900 max-w-md">
              Com as aulas e mentorias do palestrante Marcos Oliveira, você
              perderá o medo de falar em público e conquistará novas
              oportunidades.
            </p>

            <button
              type="button"
              className="py-2 px-5 bg-mainColor mt-5 uppercase text-gray-900 transition duration-300 font-semibold hover:scale-105 rounded-sm tracking-wide"
              style={{
                // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                boxShadow: !isHovering
                  ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                  : "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              participar
            </button>
          </div>

          <div className="relative">
            <img
              src={heroImg}
              alt="Palestra de Marcos Oliveira"
              className="rounded-sm rounded-tl-2xl"
            />

            <img
              src={pattern}
              alt="Padrão Ilustrativo"
              className="absolute max-w-[130px] -bottom-8 -left-14 -z-10 opacity-20 md:opacity-30"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
