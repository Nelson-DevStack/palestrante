import formImg from "../../assets/arte-da-oratoria.png";
import formImgWebp from "../../assets/arte-da-oratoria.webp";
import CTABtn from "../Button";
import Container from "../UIComponents/Container";

const FormSection = () => {
  return (
    <section className="py-10 bg-[#212121]" id="participe">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-wide text-[#fafafa]">
              Participe e faça a diferença
            </h2>
            <p className="text-slate-50 text-lg font-light tracking-wide max-w-md">
              Se inscreva e ganhe gratuitamente o Ebook A Arte da Oratória
            </p>

            <form className="flex flex-col gap-4 max-w-sm mt-5 mx-auto md:mx-0 ">
              <label
                htmlFor="name"
                className="flex flex-col text-slate-50 text-lg"
              >
                Seu nome:
                <input
                  type="text"
                  id="name"
                  className="rounded-sm py-2 px-2 text-gray-900"
                />
              </label>

              <label
                htmlFor="email"
                className="flex flex-col text-slate-50 text-lg"
              >
                Seu E-mail:
                <input
                  type="text"
                  id="email"
                  className="rounded-sm py-2 px-2 text-gray-900"
                />
              </label>

              <CTABtn />
            </form>
          </div>

          <div>
            <picture>
              <source srcSet={formImgWebp} type="image/webp" />
              <source srcSet={formImg} type="image/jpeg" />
              <img
                src={formImg}
                alt="Livro a Arte da Oratória"
                className="-ml-5 md:ml-0"
              />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FormSection;
