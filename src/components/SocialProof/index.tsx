import { GoPlus } from "react-icons/go";

import blurPattern from "../../assets/blur-pattern.svg";
import Container from "../UIComponents/Container";

type SocialProofType = {
  number: number | string;
  text: string;
};

const SocialCard: React.FC<SocialProofType> = ({ number, text }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-lg">
        <GoPlus className="text-mainColor" />
      </div>
      <div className="text-center">
        <p className="text-2xl font-medium">{number}</p>
        <p className="uppercase font-semibold text-sm">{text}</p>
      </div>
    </div>
  );
};

const SocialProof = () => {
  const socialProofInfo: SocialProofType[] = [
    {
      number: 1000,
      text: "Inscritos",
    },
    {
      number: 50,
      text: "vídeos",
    },
    {
      number: 200,
      text: "alunos",
    },
  ];

  return (
    <section className="relative bg-slate-100">
      <img
        src={blurPattern}
        alt="Padrão de Ilustração"
        className="absolute w-[500px] h-auto -left-[50vw] md:-left-48 -mt-20 md:-mt-48 transition transition-opacity !opacity-30 duration-500"
      />
      <Container>
        <div className="border max-w-2xl mx-auto py-8 shadow-xl rounded-xl border-gray-300 bg-white z-20 relative">
          <h2 className="text-3xl text-center font-medium">
            Com a melhor didática
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20 mt-6">
            {socialProofInfo.map((info) => (
              <SocialCard
                key={info.text}
                number={info.number}
                text={info.text}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialProof;
