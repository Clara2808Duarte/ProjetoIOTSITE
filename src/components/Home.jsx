import "./Home.css";
import { Wifi, Thermometer, BarChart3 } from "lucide-react";
import Nav from "./Nav";
import Footer from "./Footer";
import Header from "./Header";
import "./Banner.css";
import bannerImage from "../assets/BannerText.png";
import HardWare from "../assets/Hardware.jpeg";

export default function Home() {
  return (
    <>
      <Header />
      <Nav />

      <section>
        <div
          className="banner"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <p className="banner-text">
            “Conectando tecnologia e natureza para um futuro mais sustentável.”
          </p>
        </div>
        <h1 className="section-title">
          Estação de Monitoramento Ambiental IoT
        </h1>

        <p>
          Bem-vindo à documentação do nosso projeto de Internet das Coisas. Esse
          é o desenvolvimento da construção uma estação meteorológica compacta
          utilizando o microcontrolador ESP32 para monitoramento em tempo real
          de variáveis ambientais críticas.
        </p>

        <div className="cards-container">
          <div className="card card-v">
            <Thermometer className="card-icon" />
            <h3 className="card-title">Coleta de Dados</h3>
            <p className="card-text">
              Sensores DHT11 e MQ-135 para Temperatura, Umidade e Qualidade do
              Ar.
            </p>
          </div>

          <div className="card card-v">
            <Wifi className="card-icon" />
            <h3 className="card-title">Comunicação MQTT</h3>
            <p className="card-text">
              Protocolo leve para transmissão eficiente e em tempo real via
              Wi-Fi.
            </p>
          </div>

          <div className="card card-v">
            <BarChart3 className="card-icon" />
            <h3 className="card-title">Visualização Remota</h3>
            <p className="card-text">
              Dados acessíveis via clientes MQTT (ex: MQTT Dashboard) em
              qualquer lugar.
            </p>
          </div>
        </div>

        <div>
          <h4 className="section-challenge">O Desafio Tecnológico</h4>
          <p>
            O maior desafio reside na necessidade de interligar componentes que
            operam em diferentes tensões (DHT11 a 3.3V, MQ-135 a 5V) a um único
            microcontrolador (ESP32) e garantir uma comunicação de rede robusta
            e um fluxo de dados estruturado (JSON).
          </p>
        </div>

        <div className="Flex">
          <div className="section-obj">
            <h4 className="section-challenge"> Objetivo do Projeto </h4>
            <p>
              O WeatherNet é um projeto acadêmico desenvolvido com o objetivo de
              criar uma estação meteorológica IoT compacta e inteligente, capaz
              de monitorar em tempo real temperatura, umidade e qualidade do ar.
              O sistema utiliza um ESP32 como unidade principal de
              processamento, integrando os sensores DHT11 (operando a 3V) e
              MQ-135 (operando a 5V) para coleta dos dados ambientais. Além
              disso, controla LEDs de status e alerta, e realiza a publicação
              das leituras em um servidor Mosquitto (MQTT Broker), permitindo a
              visualização remota em dispositivos móveis por meio de um cliente
              MQTT. Este projeto representa a aplicação prática e
              multidisciplinar dos conhecimentos adquiridos nas disciplinas de
              Sistemas Operacionais, Arquitetura de Redes e IoT, Lógica de
              Programação e Algoritmos, e Levantamento de Requisitos,
              evidenciando como diferentes áreas da tecnologia podem se integrar
              para o desenvolvimento de soluções inteligentes e conectadas.
            </p>
          </div>

          <div>
            <img
              src={HardWare}
              alt="Banner sustentabilidade"
              className="banner-image"
            />
          </div>
        </div>

        <div className="section-obj-integr">
          <h4 className="section-challenge"> Integração MultiDisciplinar </h4>
          <p>
            O projeto de monitoramento ambiental de temperatura, umidade e gás representa a integração de diversos conhecimentos adquiridos ao longo das disciplinas do curso.
Por meio da Lógica de Programação e Algoritmos, foi possível desenvolver o código que realiza a leitura dos sensores e o envio dos dados coletados.
Com o apoio de Sistemas Operacionais, compreendeu-se o funcionamento do microcontrolador e a forma como ele gerencia as tarefas e os processos de comunicação.
A disciplina de Arquitetura de Redes e IoT contribuiu para estabelecer a conexão entre o dispositivo e o aplicativo cliente, permitindo a transmissão das informações por meio da rede.
O Levantamento de Requisitos orientou a análise e definição das necessidades do projeto, garantindo que o sistema atendesse às demandas de segurança e confiabilidade.
Por fim, o uso de IoT (Internet das Coisas) foi essencial para integrar todos esses elementos, tornando possível o monitoramento remoto do ambiente e a exibição, no celular do usuário, das condições de segurança em tempo real.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
