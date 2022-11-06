import Container from "../UIComponents/Container";

const Footer = () => {
  return (
    <footer className="w-full bg-[#212121] text-slate-50 py-5">
      <Container>
        <div>
          <div>
            <h3 className="text-2xl font-customSerif">Marcos Oliveira</h3>
            <p className="text-base font-light">
              &quot;A comunicação não se trata só de falar, é a arte de ver,
              ouvir e fazer entender.&quot;
            </p>
          </div>

          <div className="mt-5">
            <ul className="flex flex-col gap-2 font-light">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Vantagens
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Participar
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Sobre
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
