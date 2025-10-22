import { Cpu, Thermometer, AirVent, Lightbulb, Grid3x3 } from "lucide-react";
import "./Hardware.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Hardware() {
  return (
    <>
      <Header />
      <Nav />

      <section className="hardware-section">
        <h2 className="hardware-title">Hardware: Componentes da Estação</h2>
        <p className="hardware-description">
          O sistema é construído em torno de um ESP32, que atua como
          microcontrolador principal. A montagem requer a interconexão cuidadosa
          de sensores que operam em diferentes níveis de tensão para garantir a
          funcionalidade e a segurança do circuito.
        </p>

        <div className="hardware-grid">
          {/* Card ESP32 */}
          <div className="hardware-card card-ver">
            <Cpu className="hardware-icon text-ver" />
            <h3 className="hardware-card-title">ESP32 Dev Module</h3>
            <p className="hardware-card-text">
              <strong>Microcontrolador Principal.</strong> Responsável pelo
              processamento dos dados dos sensores e pela comunicação Wi-Fi e
              MQTT. Tensão de operação de 3.3V.
            </p>
          </div>

          {/* Card DHT11 */}
          <div className="hardware-card card-ver">
            <Thermometer className="hardware-icon text-ver" />
            <h3 className="hardware-card-title">DHT11</h3>
            <p className="hardware-card-text">
              <strong>Sensor de Temperatura/Umidade.</strong> Leitura digital de
              baixo custo. Opera com alimentação de 3V a 5V (compatível com a
              lógica de 3.3V do ESP32).
            </p>
          </div>

          {/* Card MQ-135 */}
          <div className="hardware-card card-ver">
            <AirVent className="hardware-icon text-ver" />
            <h3 className="hardware-card-title">MQ-135</h3>
            <p className="hardware-card-text">
              <strong>Sensor de Qualidade do Ar.</strong> Utilizado para
              detectar gases poluentes. Requer alimentação de 5V, demandando
              atenção na interconexão.
            </p>
          </div>

          {/* Card LEDs */}
          <div className="hardware-card card-ver">
            <Lightbulb className="hardware-icon text-ver" />
            <h3 className="hardware-card-title">LEDs Indicadores</h3>
            <p className="hardware-card-text">
              Indicadores de status (ex: conexão Wi-Fi ativa) e alerta (ex:
              qualidade do ar abaixo do limite).
            </p>
          </div>

          {/* Card Protoboard */}
          <div className="hardware-card card-ver">
            <Grid3x3 className="hardware-icon text-ver" />
            <h3 className="hardware-card-title">Protoboard e Cabos</h3>
            <p className="hardware-card-text">
              Utilizados para montagem temporária e conexões elétricas do
              circuito.
            </p>
          </div>
        </div>

        <div className="hardware-alert">
          <h4 className="hardware-alert-title">
            Tensão de Alimentação Crítica
          </h4>
          <p className="hardware-alert-text">
            <strong>Atenção:</strong> O ESP32 opera nativamente em 3.3V, mas o
            sensor MQ-135 requer 5V. É crucial garantir que o pino de dados do
            MQ-135 (saída analógica) seja lido pelo ESP32 dentro da faixa de
            3.3V para evitar danos ao microcontrolador.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
