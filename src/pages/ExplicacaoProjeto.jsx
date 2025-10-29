import "./ExplicacaoProjeto.css";
import DiagramaImg from "../assets/Fluxograma.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SoluçãoImg from "../assets/Solucao.jpeg";

export default function MonitoramentoIOT() {
  return (
    <div>
      <Header />
      <Nav />

      <header className="monitoramento-header">
        <h1 className="monitoramento-title">Monitoramento Ambiental com IoT</h1>
      </header>

      <main className="monitoramento-main">
        {/* ===== BLOCO 1 ===== */}
        <section id="problema" className="monitoramento-section">
          <h2 className="monitoramento-subtitle">O Problema</h2>
          <p>
            Monitorar a <strong>temperatura</strong>, a <strong>umidade</strong> e a{" "}
            <strong>qualidade do ar</strong> é essencial para garantir ambientes
            mais saudáveis e seguros. Variações bruscas de temperatura e umidade
            podem afetar o conforto térmico, equipamentos eletrônicos e até
            processos industriais. Já a presença de gases nocivos pode indicar
            riscos à saúde ou falhas em sistemas de ventilação.
          </p>
          <p>
            Em muitos locais, esses parâmetros não são acompanhados de forma
            contínua, o que dificulta a prevenção de problemas e o controle
            eficiente da qualidade ambiental.
          </p>
        </section>

        {/* ===== IMAGENS BLOCO 1 ===== */}
        <section className="monitoramento-section">
          <h3 className="monitoramento-subsubtitle">
            Exemplos de Problemas na Indústria
          </h3>
          <p>
            A ausência de monitoramento pode gerar falhas em equipamentos, riscos à saúde dos funcionários e prejuízos na produção.
          </p>

          <div className="monitoramento-image-grid">
            <img
              src="https://instrumentationtools.com/wp-content/uploads/2024/01/Temperature-Sensors-Fault-scaled.jpg"
              alt="Falha em equipamentos industriais devido à variação de temperatura"
              className="monitoramento-image"
            />

            <img
              src="https://highmarkanalytics.com/wp-content/uploads/Gas-Leak-Detection.jpg"
              alt="Ambiente industrial com alta concentração de gases tóxicos"
              className="monitoramento-image"
            />

            <img
              src="https://movitherm.com/wp-content/uploads/2022/07/industrial-warehouse-on-fire.jpg"
              alt="Prejuízos na linha de produção causados por falta de controle ambiental"
              className="monitoramento-image"
            />
          </div>
        </section>

        {/* ===== BLOCO 2 ===== */}
        <section id="solucao" className="monitoramento-section">
          <h2 className="monitoramento-subtitle">A Solução</h2>
          <p>
            Com o avanço da <strong>Internet das Coisas (IoT)</strong>, tornou-se
            possível criar sistemas inteligentes de monitoramento ambiental.
            Sensores coletam informações sobre temperatura, umidade e gases em
            tempo real, enviando os dados para um microcontrolador, como o{" "}
            <strong>ESP32</strong>.
          </p>
          <p>
            Esses dados são então transmitidos via protocolo{" "}
            <strong>MQTT</strong> para um <strong>broker</strong> (como o{" "}
            <strong>Mosquitto</strong>), que distribui as informações para
            dispositivos clientes — como dashboards, aplicativos ou plataformas
            web — permitindo o acompanhamento em tempo real e a tomada de
            decisões imediatas.
          </p>

            <section id="solucao" className="monitoramento-section solucao">
          <h2 className="monitoramento-subtitle">Projeto Montado com Cliente e Servidor</h2>
          <p>Esta imagem representa o nosso projeto de monitoramento ambiental, que realiza 
            a medição de temperatura, umidade e gás. 
            Na parte traseira, estão os sensores responsáveis pela coleta dos dados, 
            enquanto na parte frontal o dispositivo móvel (cliente) recebe as 
            informações, indicando se o ambiente está seguro ou não, mostrando também os valores de medição
            da temperatura e umidade.</p>

          <img
            src={SoluçãoImg}
            alt="Imagem do projeto montado com cliente e servidor"
            className="solucaoimage"
          />
        </section> 


          <h3 className="monitoramento-subsubtitle">Qual a solução proposta?</h3>
          <p>
            O problema de não monitorar temperatura, umidade e qualidade do ar em tempo real pode
            gerar desconforto térmico, riscos à saúde e falhas em equipamentos ou sistemas de ventilação.
            Pensando nisso, nosso projeto surge como uma solução prática e eficiente por meio do uso da tecnologia IoT.
            Utilizamos sensores para coletar informações importantes sobre o ambiente, como temperatura e umidade com o
            sensor DHT11 e concentração de gases com o sensor MQ-2. Esses dados são processados pelo microcontrolador
            ESP32 e enviados para um broker MQTT, gerenciado pelo Mosquitto, que distribui as informações para um dashboard
            online de forma rápida e organizada. Isso permite acompanhar tudo em tempo real, receber alertas e agir
            preventivamente caso os níveis ultrapassem limites seguros. Além disso, utilizamos a plataforma Wokwi para
            simular e testar o circuito e o código antes da implementação física, tornando o desenvolvimento mais seguro e
            eficiente. Com isso, oferecemos uma solução tecnológica que automatiza o monitoramento ambiental, facilitando a
            prevenção de problemas e contribuindo para ambientes mais saudáveis e controlados.
          </p>
        </section>

        {/* ===== IMAGEM DO DIAGRAMA ===== */}
        <section id="diagrama" className="monitoramento-section monitoramento-diagram">
          <h2 className="monitoramento-subtitle">Fluxo de Dados do Sistema</h2>
          <p>Representação simplificada do funcionamento do monitoramento IoT:</p>

          <img
            src={DiagramaImg}
            alt="Diagrama do fluxo de dados IoT"
            className="monitoramento-diagram-image"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
