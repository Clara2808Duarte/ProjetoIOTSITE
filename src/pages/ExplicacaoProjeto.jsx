import DiagramaImg from "../assets/Fluxograma.png";

export default function MonitoramentoIOT() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <header>
        <h1 style={{ textAlign: "center" }}>Monitoramento Ambiental com IoT</h1>
      </header>

      <main>
        {/* ========================= BLOCO 1 ========================= */}
        <section id="problema" style={{ marginTop: "40px" }}>
          <h2>O Problema</h2>
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

        {/* ========================= BLOCO 2 ========================= */}
        <section id="solucao" style={{ marginTop: "40px" }}>
          <h2>A Solução</h2>
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
        </section>

        {/* ========================= IMAGEM DO DIAGRAMA ========================= */}
        <section id="diagrama" style={{ marginTop: "50px", textAlign: "center" }}>
          <h2>Fluxo de Dados do Sistema</h2>
          <p>Representação simplificada do funcionamento do monitoramento IoT:</p>

          <img
            src={DiagramaImg}
            alt="Diagrama do fluxo de dados IoT"
            width="700"
            style={{
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              marginTop: "15px",
            }}
          />
        </section>
      </main>

      <footer>
        <p style={{ textAlign: "center", marginTop: "60px", fontSize: "14px" }}>
          © 2025 Projeto IoT - Monitoramento Ambiental
        </p>
      </footer>
    </div>
  );
}
