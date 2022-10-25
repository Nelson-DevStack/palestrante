import reactLogo from "./assets/react.svg";
import "./App.css";
import Title from "./components/Title";
import Container from "./components/UIComponents/Container";

function App() {
  return (
    <div>
      <Container>
        <div className="flex gap-5 mt-10 justify-center">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>

        <h1 className="text-3xl text-center mt-5">Vite + React</h1>

        <div className="text-center">
          <Title />
        </div>
      </Container>
    </div>
  );
}

export default App;
