import "./Home.css";
import { Wifi, Thermometer, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="section bg-gray-50 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4 border-b pb-2">
          Estação de Monitoramento Ambiental IoT
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Bem-vindo à documentação do nosso projeto de Internet das Coisas.
          Nosso objetivo foi construir uma estação meteorológica compacta
          utilizando o microcontrolador ESP32 para monitoramento em tempo real
          de variáveis ambientais críticas.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center mt-8">
          {/* Card de Coleta de Dados */}
          <div className="p-4 bg-white rounded-lg shadow-md border-t-4 border-teal-500 card-teal">
            <Thermometer className="w-8 h-8 mx-auto text-teal-500 mb-2" />
            <h3 className="font-semibold text-xl mb-1">Coleta de Dados</h3>
            <p className="text-sm text-gray-600">
              Sensores DHT11 e MQ-135 para Temperatura, Umidade e Qualidade do
              Ar.
            </p>
          </div>
          {/* Card de Comunicação */}
          <div className="p-4 bg-white rounded-lg shadow-md border-t-4 border-blue-500 card-blue">
            <Wifi className="w-8 h-8 mx-auto text-blue-500 mb-2" />
            <h3 className="font-semibold text-xl mb-1">Comunicação MQTT</h3>
            <p className="text-sm text-gray-600">
              Protocolo leve para transmissão eficiente e em tempo real via
              Wi-Fi.
            </p>
          </div>
          {/* Card de Visualização */}
          <div className="p-4 bg-white rounded-lg shadow-md border-t-4 border-indigo-500 card-indigo">
            <BarChart3 className="w-8 h-8 mx-auto text-indigo-500 mb-2" />
            <h3 className="font-semibold text-xl mb-1">Visualização Remota</h3>
            <p className="text-sm text-gray-600">
              Dados acessíveis via clientes MQTT (ex: MQTT Dashboard) em
              qualquer lugar.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t">
          <h4 className="text-2xl font-semibold text-gray-800 mb-3">
            O Desafio Tecnológico
          </h4>
          <p className="text-gray-700">
            O maior desafio reside na necessidade de interligar componentes que
            operam em diferentes tensões (DHT11 a 3.3V, MQ-135 a 5V) a um único
            microcontrolador (ESP32) e garantir uma comunicação de rede robusta
            e um fluxo de dados estruturado (JSON).
          </p>
        </div>
      </section>
    </>
  );
}
