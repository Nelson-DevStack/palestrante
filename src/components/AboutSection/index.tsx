import { ImQuotesLeft } from "react-icons/im";

import aboutImg from "../../assets/palestrante-bg.png";
import aboutImgWebp from "../../assets/palestrante-bg.webp";
import CTABtn from "../Button";
import Container from "../UIComponents/Container";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-10 md:py-0 md:pt-20 bg-slate-100">
      <Container>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <picture>
              <source srcSet={aboutImgWebp} type="image/webp" />
              <source srcSet={aboutImg} type="image/jpeg" />
              <img
                src={aboutImg}
                alt="Palestrante Marcos Oliveira"
                className="w-full max-w-lg md:max-w-sm lg:max-w-lg mx-auto"
              />
            </picture>
          </div>

          <div className="max-w-lg mx-auto md:mx-0 relative z-20">
            <h2 className="text-4xl font-medium text-gray-800 text-center md:text-left">
              Quem é Marcos Oliveira, o palestrante?
            </h2>

            <div className="mx-auto">
              <p className="my-4 text-lg text-gray-800">
                Formado em Publicidade e Propaganda pela Universidade XYZ,
                Marcos Oliveira dedica sua carreira a mentorias e palestras,
                incentivando e ensinando a comunicação.
              </p>

              <p className="my-4 text-lg text-gray-800">
                Com uma metodologia intuitiva, Marcos já lecionou e ajudou
                muitas pessoas em mais de três Universades renomadas, como
                Harvard, Yale University e Stanford University.
              </p>

              <div className="flex gap-2 max-w-sm mt-10">
                <span className="text-mainColor text-xl">
                  <ImQuotesLeft />
                </span>
                <p className="text-xl text-gray-800 font-medium">
                  A comunicação não se trata só de falar, é a arte de ver, ouvir
                  e fazer entender.
                </p>
              </div>

              <div className="mt-5 flex justify-center md:justify-start">
                <CTABtn />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
