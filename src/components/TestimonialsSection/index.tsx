import abstractPattern from "../../assets/blur-abstract-pattern.svg";
import profilePic2 from "../../assets/profile-pic-2.jpg";
import profilePic from "../../assets/profile-pic.jpg";
import roundedPattern from "../../assets/rounded-abstract-pattern.svg";
import CTABtn from "../Button";
import Container from "../UIComponents/Container";

type Testimonial = {
  image: string;
  alt: string;
  name: string;
  job: string;
  text: string;
};

const TestimonialCard: React.FC<Testimonial> = ({
  image,
  alt,
  name,
  job,
  text,
}) => {
  return (
    <div className="border border-gray-300 rounded-md transition duration-300 bg-white z-10 shadow-md hover:shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,_rgba(0,0,0,0.3)_0px_30px_60px_-30px]">
      <div className="p-8">
        <img
          src={image}
          alt={alt}
          className="rounded-full max-w-[90px] mx-auto -mt-20"
        />
        <p className="mt-4 text-gray-800 text-[1.1em]">{text}</p>
      </div>
      <div className="border-t border-gray-300 p-4 flex flex-col items-center justify-center ">
        <h3 className="uppercase text-yellow-700 font-semibold">{name}</h3>
        <p className="text-sm">{job}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      image: profilePic,
      alt: "João Gomes, Vendedor",
      name: "João Gomes",
      job: "Vendedor",
      text: "Nunca tive coragem de falar em público antes. Tudo mudou quando decidi assistir a palestra do Marcos Oliveira. Percebi que toda pessoa tem dentro de si o poder de fazer a diferença através da oratória.",
    },
    {
      image: profilePic2,
      alt: "Marilia Correia, Empreendedor",
      name: "Marilia Correia",
      job: "Empreendedora",
      text: "Sempre me senti pra baixo por não conseguir me expressar para as pessoas. Depois do curso, realizei meu sonho de dar palestras e apresentar meus projetos.",
    },
  ];

  return (
    <section className="py-20 relative bg-slate-100" id="depoimentos">
      <img
        src={abstractPattern}
        alt="Ilustração"
        className="absolute -left-24 -top-12 md:-left-[350px] md:-mt-56 md:top-0 opacity-40 md:opacity-60"
      />
      <img
        src={roundedPattern}
        alt="Ilustração"
        className="absolute z-10 -right-[50vw] mt-24 md:-right-[550px] opacity-20 md:opacity-30"
      />
      <Container className="relative z-20">
        <div>
          <div className="mb-24 text-center">
            <h2 className="text-4xl font-medium">
              O curso que está mudando vidas
            </h2>
          </div>
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-20 mx-auto max-w-lg md:max-w-6xl">
            {/* Card */}
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                image={testimonial.image}
                alt={testimonial.alt}
                name={testimonial.name}
                job={testimonial.job}
                text={testimonial.text}
              />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <CTABtn />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
