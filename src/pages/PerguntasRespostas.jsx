import { useState } from "react";
import "./PerguntasRespostas.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";

const perguntasRespostas = [
  {
    pergunta: "1. O que é IoT?",
    resposta:
      "IoT (Internet das Coisas) é o conceito de conectar objetos físicos à internet para coletar e trocar dados, como sensores, eletrodomésticos, veículos e outros dispositivos.",
  },
  {
    pergunta: "2. Quais são os principais componentes de um sistema IoT?",
    resposta:
      "Dispositivos (sensores/atuadores), conectividade (Wi-Fi, Bluetooth, LoRa, etc.), processamento (microcontroladores), plataforma em nuvem e uma interface de usuário.",
  },
  {
    pergunta: "3. Quais são os principais desafios da IoT?",
    resposta:
      "Segurança, privacidade, interoperabilidade entre dispositivos, consumo de energia e escalabilidade.",
  },
  {
    pergunta: "4. Cite três aplicações reais de IoT.",
    resposta:
      "Elas podem ser: Casas inteligentes (smart homes), Agricultura de precisão e Monitoramento industrial (IIoT).",
  },
  {
    pergunta: "5. O que é o protocolo MQTT?",
    resposta:
      "MQTT (Message Queuing Telemetry Transport) é um protocolo leve de mensagens publicado/assinado, ideal para comunicações de IoT.",
  },
  {
    pergunta: "6. Como funciona o modelo publish/subscribe no MQTT?",
    resposta:
      "Dispositivos 'publicam' mensagens em tópicos, e outros dispositivos 'assinam' esses tópicos para receber mensagens.",
  },
  {
    pergunta: "7. Quais são os principais elementos do MQTT?",
    resposta: "Broker (servidor), tópicos, clientes (publishers/subscribers).",
  },
  {
    pergunta: "8. Quais são as vantagens do MQTT em sistemas IoT?",
    resposta:
      "Baixo consumo de banda, simplicidade, confiabilidade e ideal para redes instáveis.",
  },
  {
    pergunta: "9. O que é o Wokwi?",
    resposta:
      "Wokwi é uma plataforma online de simulação de projetos com microcontroladores, como Arduino e ESP32.",
  },
  {
    pergunta: "10. Quais dispositivos podem ser simulados no Wokwi?",
    resposta:
      "Arduino Uno, Mega, ESP32, sensores (DHT22, LDR, etc.), displays, botões, LEDs, entre outros.",
  },
  {
    pergunta: "11. É possível simular MQTT no Wokwi?",
    resposta:
      "Sim, o Wokwi permite conexões MQTT reais usando o ESP32 virtual e configurando conexões com brokers públicos.",
  },
  {
    pergunta: "12. Quais as vantagens de usar o Wokwi?",
    resposta:
      "Sem necessidade de hardware físico, fácil de compartilhar projetos e aprendizado rápido.",
  },
  {
    pergunta: "13. O que é o Mosquitto?",
    resposta:
      "Mosquitto é um broker MQTT de código aberto, usado para gerenciar a comunicação entre clientes MQTT.",
  },
  {
    pergunta: "14. Como instalar o Mosquitto localmente?",
    resposta:
      "Em sistemas baseados em Linux: sudo apt update e sudo apt install mosquitto mosquitto-clients",
  },
  {
    pergunta: "15. Qual a porta padrão usada pelo Mosquitto?",
    resposta:
      "A porta padrão é a 1883 para conexões sem TLS e 8883 com TLS/SSL.",
  },
  {
    pergunta: "16. Como testar a publicação e a assinatura usando Mosquitto?",
    resposta:
      "Usando comandos como: mosquitto_sub -t 'topico/teste'  e mosquitto_pub -t 'topico/test' -m 'Mensagem de teste'",
  },
  {
    pergunta: "17. O que é a IDE Arduino?",
    resposta:
      "É um ambiente de desenvolvimento usado para programar placas Arduino e compatíveis, como o ESP32.",
  },
  {
    pergunta: "18. Quais linguagens a IDE Arduino suporta?",
    resposta:
      "Principalmente C e C++ com bibliotecas específicas para facilitar a programação de microcontroladores.",
  },
  {
    pergunta: "19. Como adicionar o suporte ao ESP32 na IDE Arduino?",
    resposta:"Adicionando a URL do ESP32 no Gerenciador de Placas",
  },
  {
    pergunta: "20. O que é o ESP32?",
    resposta:
      "É um microcontrolador da Espressif com Wi-Fi e Bluetooth integrados, ideal para projetos de IoT.",
  },
  {
    pergunta: "21. Quais são os recursos do ESP32?",
    resposta:
      "Duas CPUs, Wi-Fi, Bluetooth, ADC, DAC, PWM, SPI, I2C, UART, e GPIOs diversos.",
  },
  {
    pergunta: "22. O ESP32 pode usar MQTT?",
    resposta:
      "Sim. Utilizando bibliotecas como PubSubClient, o ESP32 pode se conectar a brokers MQTT e trocar mensagens.",
  },
  {
    pergunta: "23. Em um projeto IoT, por que o protocolo MQTT é considerado mais eficiente que o HTTP para comunicação entre dispositivos?",
    resposta: "O MQTT é mais eficiente que o HTTP porque foi feito para dispositivos simples e economiza recursos: usa **menos banda, mantém conexão contínua e envia mensagens pequenas, enquanto o HTTP é mais pesado e consome mais energia e tempo.",
  },
  {
    pergunta: "24. Qual é a função dos pinos GPIO do ESP32 em um projeto IoT e como eles podem ser simulados no Wokwi?",
    resposta: "Os pinos GPIO do ESP32 permitem conectar e controlar sensores e componentes, funcionando como entrada ou saída. No Wokwi, eles podem ser simulados virtualmente, permitindo testar o circuito sem montagem física.",
  },
];

export default function PerguntasRespostas() {
  const [virado, setVirado] = useState(Array(perguntasRespostas.length).fill(false));

  const virarCard = (index) => {
    const novoVirado = [...virado];
    novoVirado[index] = !novoVirado[index];
    setVirado(novoVirado);
  };

  return (
    <>
    <Header />
    <Nav />
    <div className="cont">
        <br/>
      <h1>PERGUNTAS E RESPOSTAS</h1>
      <br/>
      <br/>
      <div className="cards-vira">
        {perguntasRespostas.map((item, index) => (
          <div key={index} className="card" onClick={() => virarCard(index)}>
            <div className={`card-inner ${virado[index] ? "virado" : ""}`}>
              <div className="card-frente">
                <h2>{item.pergunta}</h2>
              </div>
              <div className="card-tras">
                <p>{item.resposta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Footer/>
    </>
  );
}