import { Cpu, Thermometer, AirVent, Lightbulb, Grid3x3 } from "lucide-react";
import "./Hardware.css";
import Header from "./components/Header";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";

export default function Hardware() {
  return (
    <>
      <Header />
      <Navbar />
      <section className="section bg-gray-50 p-6 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">
          Hardware: Componentes da Estação
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          O sistema é construído em torno de um ESP32, que atua como
          microcontrolador principal. A montagem requer a interconexão cuidadosa
          de sensores que operam em diferentes níveis de tensão para garantir a
          funcionalidade e a segurança do circuito.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center mt-8">
          {/* Card ESP32 */}
          <div className="p-4 bg-white rounded-lg shadow-md border-t-4 border-indigo-500 card-indigo">
            <Cpu className="w-8 h-8 mx-auto text-indigo-500 mb-2" />
            <h3 className="font-semibold text-xl mb-1">ESP32 Dev Module</h3>
            <p className="text-sm text-gray-600">
              <strong>Microcontrolador Principal.</strong> Responsável pelo
              processamento dos dados dos sensores e pela comunicação Wi-Fi e
              MQTT. Tensão de operação de 3.3V.
            </p>
          </div>

          {/* Card DHT11 */}
          <div className="p-4 bg-white rounded-lg shadow-md border-t-4 border-teal-500 card-teal">
            <Thermometer className="w-8 h-8 mx-auto text-teal-500 mb-2" />
            <h3 className="font-semibold text-xl mb-1">DHT11</h3>
            <p className="text-sm text-gray-600">
              <strong>Sensor de Temperatura/Umidade.</strong> Leitura digital de
              baixo custo. Opera com alimentação de 3V a 5V (compatível com a
              lógica de 3.3V do ESP32).
            </p>
          </div>

          {/* Card MQ-135 */}
          <div className="p-4 bg-white rounded-lg shadow-md border-t-4 border-blue-500 card-blue">
            <AirVent className="w-8 h-8 mx-auto text-blue-500 mb-2" />
            <h3 className="font-semibold text-xl mb-1">MQ-135</h3>
            <p className="text-sm text-gray-600">
              <strong>Sensor de Qualidade do Ar.</strong> Utilizado para
              detectar gases poluentes. Requer alimentação de 5V, demandando
              atenção na interconexão.
            </p>
          </div>

          {/* Card LEDs */}
          <div className="p-4 bg-white rounded-lg shadow-md border-t-4 border-yellow-500">
            <Lightbulb className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
            <h3 className="font-semibold text-xl mb-1">LEDs Indicadores</h3>
            <p className="text-sm text-gray-600">
              Indicadores de status (ex: conexão Wi-Fi ativa) e alerta (ex:
              qualidade do ar abaixo do limite).
            </p>
          </div>

          {/* Card Protoboard */}
          <div className="p-4 bg-white rounded-lg shadow-md border-t-4 border-gray-400">
            <Grid3x3 className="w-8 h-8 mx-auto text-gray-500 mb-2" />
            <h3 className="font-semibold text-xl mb-1">Protoboard e Cabos</h3>
            <p className="text-sm text-gray-600">
              Utilizados para montagem temporária e conexões elétricas do
              circuito.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200">
          <h4 className="text-2xl font-semibold text-gray-800 mb-3">
            Tensão de Alimentação Crítica
          </h4>
          <p className="text-gray-700 bg-red-50 p-3 rounded-lg border border-red-300">
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
