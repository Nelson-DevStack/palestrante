import profilePic from "../../assets/profile-pic.jpg";
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
    <div className="border border-gray-200 rounded-md transition duration-200 hover:shadow-xl hover:border hover:border-gray-200">
      <div className="p-8">
        <img
          src={image}
          alt={alt}
          className="rounded-full max-w-[90px] mx-auto -mt-20"
        />
        <p className="mt-4 text-gray-800 text-[1.1em]">{text}</p>
      </div>
      <div className="border-t border-gray-200 p-4 flex flex-col items-center justify-center ">
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
      image: profilePic,
      alt: "Márcio Correia, Empreendedor",
      name: "Márcio Correia",
      job: "Empreendedor",
      text: "Nunca tive coragem de falar em público antes. Tudo mudou quando decidi assistir a palestra do Marcos Oliveira. Percebi que toda pessoa tem dentro de si o poder de fazer a diferença através da oratória.",
    },
  ];

  return (
    <section className="py-20" id="depoimentos">
      <Container>
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
