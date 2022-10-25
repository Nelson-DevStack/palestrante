import Container from "../UIComponents/Container";

const Navbar = () => {
  return (
    <header className="bg-gray-900 h-20">
      <Container className="h-full">
        <nav className="h-full flex items-center justify-between">
          <a href="/" className="text-xl text-slate-50">
            Marcos Oliveira
          </a>

          <ul className="flex gap-4 text-slate-100">
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
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
