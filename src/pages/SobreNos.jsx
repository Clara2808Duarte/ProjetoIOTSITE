import "./SobreNos.css";
import Julia from '../assets/FotoJulia.jpeg';
import Giovanna from '../assets/FotoGiovanna.jpeg';
import Duarte from '../assets/FotoDuarte.jpeg';
import Kamilly from '../assets/FotoKamilly.jpeg';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";


const integrantes = [
  {
    nome: "GIOVANNA FERREIRA",
    descricao: "Responsável pela criação do App do site, além de contribuir na elaboração da página de Perguntas e Respostas e Sobre Nós.",
    imagem: Giovanna
  },
  {
    nome: "MARIA CLARA DUARTE",
    descricao: "Responsável pela página de Simulação do Wokwi e Explicação do Projeto, além de contribuir na elaboração do Navbar.",
    imagem: Duarte
  },
  {
    nome: "JULIA PIAZZOLI  DOMENEGHETTI",
    descricao: "Responsável pela criação do Header do site, além de contribuir na elaboração da página de Hardware, Home e o CSS.",
    imagem: Julia
  },
  {
    nome: "KAMILLY EDUARDA SILVA BARRA",
    descricao: "Responsável pelas páginas de Resultados e Software, além de contribuir na criação do Footer.",
    imagem: Kamilly
  },
];

function Us() {
  return (
    <>
    <Header />
    <Nav />
    <div className="contnr">
      <h1 className="tit"> INTEGRANTES DO GRUPO </h1>
      <p className="subtit">
        As gatitas são um grupo cheio de vida, risadas e cumplicidade. 
        Cada uma tem seu jeitinho único — e juntas, formam uma mistura perfeita de carinho, fé e amizade verdadeira. 
        Entre conversas, sonhos e planos, elas se apoiam, se divertem e tornam cada momento mais especial.
      </p>

      <br/>

      <div className="gridd">
  {integrantes.map((pessoa, index) => (
    <div key={index} className={`cards card-${index}`}>
      <div className="imag-conter">
        <img src={pessoa.imagem} alt={pessoa.nome} />
        <div className="glow"></div>
      </div>
      <h2 className="nome">{pessoa.nome}</h2>
      <p className="desc">{pessoa.descricao}</p>
    </div>
        ))}

        <br />

      </div>
    </div>
    <Footer />
    </>
  );
}

export default Us