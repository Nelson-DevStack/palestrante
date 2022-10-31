import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

import advantageImg from "../../assets/meeting.jpg";
import Container from "../UIComponents/Container";

type AdvantageListItem = {
  text: string;
};

const ListItem: React.FC<AdvantageListItem> = ({ text }) => {
  return (
    <li className="flex items-center gap-2 text-xl my-4">
      <span className="text-mainColor">
        <BsFillCheckCircleFill />
      </span>{" "}
      {text}
    </li>
  );
};

const AdvantagesSection = () => {
  const advantages: AdvantageListItem[] = [
    {
      text: "Impressionar seus chefes e clientes",
    },
    {
      text: "Se apresentar no meio de multidões",
    },
    {
      text: "Impulsionar suas relações e Networking",
    },
    {
      text: "Export suas ideias sem medo de ser julgado",
    },
  ];

  return (
    <section className="py-10">
      <Container className="bg-mainColorBg bg-cover py-20">
        <div className="flex flex-col justify-center md:items-center gap-5 md:grid md:grid-cols-2 md:gap-28">
          <div>
            <img
              src={advantageImg}
              alt="Vantagens do Curso"
              className="rounded-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl font-medium mb-5 md:mb-6">
              Após esse curso, você será capaz de
            </h2>
            <ul>
              {advantages.map((item) => (
                <ListItem text={item.text} key={item.text} />
              ))}
            </ul>

            <button type="button">Quero participar</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdvantagesSection;
