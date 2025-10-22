
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Nav";
import Footer from "./components/Footer";

// Páginas
import Home from "./components/Home";
import Projeto from "./pages/ExplicacaoProjeto";
import Simulacao from "./pages/Simulacao0Wokwi";
import Hardware from "./pages/Hardware";
import Software from "./pages/Software";
import Perguntas from "./pages/PerguntasRespostas";
import Resultados from "./pages/Resultados";
import Equipe from "./pages/SobreNos";

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: "20px", minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/simulacao" element={<Simulacao />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/software" element={<Software />} />
          <Route path="/perguntas" element={<Perguntas />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/equipe" element={<Equipe />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

