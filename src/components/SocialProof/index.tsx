import { GoPlus } from "react-icons/go";

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
    <section>
      <Container>
        <div>
          <h2 className="text-3xl text-center font-medium">
            Com a melhor didática
          </h2>

          <div className="flex justify-center items-center gap-20 mt-6 mb-16">
            {socialProofInfo.map((info) => (
              <SocialCard number={info.number} text={info.text} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SocialProof;
