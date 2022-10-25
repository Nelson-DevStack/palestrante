import Container from "../UIComponents/Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div>
          <div>
            <h3>Marcos Oliveira</h3>
            <p>
              A comunicação não é só falar, é a arte de ver, ouvir e fazer
              entender.
            </p>
          </div>

          <div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Vantagens</a>
              </li>
              <li>
                <a href="/">Participar</a>
              </li>
              <li>
                <a href="/">Depoimentos</a>
              </li>
              <li>
                <a href="/">Sobre</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
