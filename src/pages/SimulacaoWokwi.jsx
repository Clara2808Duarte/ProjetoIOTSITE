import "./SimulacaoWokwi.css";
import VideoW from "../assets/wokwiVideo.mp4";
import CircuitoImg from "../assets/ImgWokwi.png";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SimulacaoWokwi() {
  return (
    <>
      <Header />
      <Nav />
      <div className="simulacao-container">
        <header className="simulacao-header">
          <h1 className="titulo-principal">Simulação Wokwi</h1>
        </header>

        <main className="simulacao-main">
          {/* ========================= SOBRE ========================= */}
          <section id="sobre" className="simulacao-section">
            <h2 className="subtitulo">O que é a Simulação Wokwi?</h2>
            <p className="texto">
              A plataforma <strong>Wokwi</strong> permite criar e testar circuitos
              eletrônicos e códigos para microcontroladores de forma virtual.
              Foi utilizada para simular o funcionamento do nosso projeto de monitoramento ambiental
              (temperatura, umidade e gás). Abaixo segue o vídeo demonstrativo da simulação,
              onde mostra o funcionamento do circuito com LED, sensor de gás, temperatura e umidade.
            </p>
          </section>

          {/* ========================= VÍDEO ========================= */}
          <section id="videos" className="simulacao-section video-section">
            <h2 className="subbtitulo">Vídeo Demonstrativo Wokwi</h2>
            <div className="video-container">
              <video className="video-wokwi" width="760" height="520" controls>
                <source src={VideoW} type="video/mp4" />
              </video>
              <p className="video-legenda">
                Simulação do circuito com LED, sensor de gás, temperatura e umidade.
              </p>
            </div>
          </section>

          {/* ========================= IMAGEM E DESCRIÇÃO ========================= */}
          <section id="imagem-projeto" className="simulacao-section imagem-section">
            <h2 className="subbtitulo">Imagem do Projeto no Wokwi</h2>
            <img
              className="imagem-circuito"
              src={CircuitoImg}
              alt="Circuito montado no Wokwi"
            />
            <p className="texto">
              Este é o circuito eletrônico montado no simulador Wokwi, composto por:
              <strong> LEDS indicadores</strong>,
              <strong> sensor de gás</strong>,
              <strong> sensor de temperatura e umidade</strong> e uma
              <strong> placa dashboard</strong>.
              O código foi desenvolvido na IDE Sketch (.ino), responsável por controlar
              a leitura dos sensores e os sinais visuais no LED.
            </p>

            <p className="texto">
              Acesse o projeto completo no Wokwi:&nbsp;
              <a
                className="link-wokwi"
                href="https://wokwi.com/projects/443701960667665409"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clique aqui para abrir
              </a>
            </p>
          </section>
        </main>

        <footer className="simulacao-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}
