import SimulacaoWokwi from "./pages/SimulacaoWokwi";
import Explicaçãoprojeto from "./pages/ExplicacaoProjeto";
import Header from "./components/Header";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <SimulacaoWokwi />
      <Explicaçãoprojeto />
      <Footer />
    </>
  );
}

export default App;
