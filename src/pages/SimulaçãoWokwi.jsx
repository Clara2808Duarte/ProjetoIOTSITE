
import VideoW from "../assets/wokwiVideo.mp4";
import CircuitoImg from "../assets/ImgWokwi.png"; 
import Footer from "../components/Footer";

export default function SimulacaoWokwi() {
  return (
    <div>
      <header>
        <h1>Simulação Wokwi</h1>
      </header>

      <main>
        {/* ========================= SOBRE ========================= */}
        <section id="sobre">
          <h2>O que é a Simulação Wokwi?</h2>
          <p>
            A plataforma <strong>Wokwi</strong> permite criar e testar circuitos
            eletrônicos e códigos para microcontroladores de forma virtual. 
            Foi utilizada para simular o funcionamento do nosso projeto de monitoramento ambiental 
            (temperatura, umidade e gás). Abaixo segue o vídeo demonstrativo da simulação, 
            onde mostra o funcionamento do circuito com LED, sensor de gás, temperatura e umidade.
          </p>
        </section>

        {/* ========================= VÍDEO ========================= */}
        <section id="videos">
          <h2>Vídeo Demonstrativo Wokwi</h2>
          <div>
            <div>
              <video width="490" height="350" controls>
                {/* <source src={VideoW} type="video/mp4" /> */}
              </video>
              <p>
                Simulação do circuito com LED, sensor de gás, temperatura e
                umidade.
              </p>
            </div>
          </div>
        </section>

        {/* ========================= IMAGEM E DESCRIÇÃO ========================= */}
        <section id="imagem-projeto">
          <h2>Imagem do Projeto no Wokwi</h2>
          <img
            // src={CircuitoImg}
            alt="Circuito montado no Wokwi"
            width="500"
            style={{ borderRadius: "8px", marginBottom: "10px" }}
          />
          <p>
            Este é o circuito eletrônico montado no simulador Wokwi, composto por:
            <strong> LEDS indicadores</strong>, 
            <strong> sensor de gás</strong>, 
            <strong> sensor de temperatura e umidade</strong> e uma 
            <strong> placa dashboard</strong>. 
            O código foi desenvolvido na IDE Sketch (.ino), responsável por controlar a leitura dos sensores e os sinais visuais no LED.
          </p>

          <p>
            Acesse o projeto completo no Wokwi:&nbsp;
            <a
              href="https://wokwi.com/projects/443701960667665409"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#4043ccff", fontWeight: "bold" }}
            >
              Clique aqui para abrir
            </a>
          </p>
        </section>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
}