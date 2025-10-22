import "./SobreNos.css";
import Julia from '../assets/FotoJulia.jpeg';
import Giovanna from '../assets/FotoGiovanna.jpeg';
import Duarte from '../assets/FotoDuarte.jpeg';
import Kamilly from '../assets/FotoKamilly.jpeg';


const integrantes = [
  {
    nome: "GIOVANNA FERREIRA",
    descricao: "Líder criativa do grupo, sempre com boas ideias e energia positiva.",
    imagem: Giovanna
  },
  {
    nome: "MARIA CLARA DUARTE",
    descricao: "Cheia de fé e alegria, é o coração acolhedor do grupo.",
    imagem: Duarte
  },
  {
    nome: "JULIA PIAZZOLI",
    descricao: "Organizada, dedicada e sempre pronta pra ajudar nas missões.",
    imagem: Julia
  },
  {
    nome: "KAMILLY BARRA",
    descricao: "A mais tranquila, traz paz e equilíbrio em todos os momentos.",
    imagem: Kamilly
  },
];

function Us() {
  return (
    <div className="contnr">
      <h1 className="tit"> INTEGRANTES DO GRUPO </h1>
      <p className="subtit">
        Unidas pela fé, amizade e propósito. Cada uma com seu brilho especial! 💕
      </p>

      <div className="gridd">
        {integrantes.map((pessoa, index) => (
          <div key={index} className="cards">
            <div className="imag-conter">
              <img src={pessoa.imagem} alt={pessoa.nome} />
              <div className="glow"></div>
            </div>
            <h2 className="nome">{pessoa.nome}</h2>
            <p className="desc">{pessoa.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Us