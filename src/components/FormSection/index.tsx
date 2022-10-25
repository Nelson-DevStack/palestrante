import Container from "../UIComponents/Container";

const FormSection = () => {
  return (
    <section>
      <Container>
        <div>
          <div>
            <h2>Participe e faça a diferença</h2>
            <p>Se inscreva e ganhe gratuitamente o Ebook A Arte da Oratória</p>

            <form>
              <label htmlFor="name">
                Seu nome:
                <input type="text" id="name" />
              </label>

              <label htmlFor="email">
                Seu E-mail:
                <input type="text" id="email" />
              </label>

              <button type="button">Participar</button>
            </form>
          </div>

          <div>
            <p>Image Area</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FormSection;
