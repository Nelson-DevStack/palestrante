import bg from "../../assets/bg.svg";
import heroImg from "../../assets/lecture.jpg";
import pattern from "../../assets/pattern.svg";
import blurPattern from "../../assets/rounded-abstract-pattern.svg";
import CTABtn from "../Button";
import Container from "../UIComponents/Container";

const Hero = () => {
  return (
    <section className="relative" id="home">
      <img
        src={blurPattern}
        alt="Asset"
        // className="absolute -z-10 right-0 opacity-30 max-w-[900px] md:max-w-[800px]"
        className="absolute -z-10 -right-52 opacity-60 -top-48 max-w-[900px] md:max-w-[800px] lg:max-w-6xl w-full"
      />
      <Container className="py-28 lg:py-[12.5rem] lg:py-[11.4vw]">
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

            <CTABtn />
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
