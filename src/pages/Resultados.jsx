import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Video from "../assets/TesteLeds.mp4";
import Foto from "../assets/FotoLed.jpeg";
import "./Resultados.css";

function Resultados() {
  return (
    <>
      <Header />
      <Nav />
      <main className="simulacao-main">
        <section className="simulacao-section simulacao-header">
          <h2 className="titulo-principal">RESULTADOS E CONCLUSÃO</h2>
          <p className="texto">
            Esta seção finaliza o projeto apresentando os resultados práticos
            obtidos. Mostramos o protótipo final em operação, a comprovação da
            transmissão de dados via MQTT e os principais aprendizados técnicos
            e práticos adquiridos ao longo do desenvolvimento.
          </p>
        </section>

        <section className="simulacao-section">
          <h3 className="subtitulo">1. Protótipo em Funcionamento</h3>
          <p className="texto">
            O protótipo da estação de monitoramento ambiental foi montado com
            sucesso, seguindo o diagrama de hardware. O ESP32 atua como o
            cérebro, coletando dados dos sensores DHT11 (Temperatura e Umidade)
            e MQ-135 (Qualidade do Ar/Gases) e gerenciando a conexão Wi-Fi.
          </p>
<div className="especificacoes-section">
          <div className="video-section video-container">
            <video className="video-wokwi" width="458" controls>
              <source src={Video} type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
            <br />
            <span className="video-legenda">
              Vídeo mostrando o protótipo em funcionamento.
            </span>
          </div>

          <div className="imagem-section">
            <figure>
              <img
                src={Foto}
                alt="Protótipo Final da Estação"
                className="imagem-circuito"
              />
              <figcaption className="video-legenda">
                Vista frontal do protótipo montado, com sensores e ESP32
                visíveis.
              </figcaption>
            </figure>
          </div>
          </div>
                    <h4 className="subbtitulo">Especificações de Operação:</h4>
          <ul className="texto">
            <li>Microcontrolador: ESP32, operando em 3.3V.</li>
            <li>
              Taxa de Leitura: Dados lidos e publicados a cada 5 segundos.
            </li>
            <li>
              Consumo Médio: Baixo consumo, ideal para operação contínua
              (detalhes sobre o modo Deep Sleep poderiam ser explorados em
              futuras iterações).
            </li>
          </ul>
        </section>

        <section className="simulacao-section">
          <h3 className="subtitulo">
            2. Comprovação da Comunicação de Dados (MQTT)
          </h3>
          <p className="texto">
            A etapa crucial do projeto foi verificar a comunicação de dados em
            tempo real através do protocolo MQTT. Utilizamos o broker público
            HiveMQ (ou Mosquitto local) e a ferramenta MQTT Explorer para
            monitorar o tópico de publicação.
          </p>

          <h4 className="subbtitulo">
            2.1. Saída da IDE Arduino (Monitor Serial)
          </h4>
          <p className="texto">
            O monitor serial do ESP32 confirmou a conexão bem-sucedida e o envio
            de mensagens no formato JSON:
          </p>
          <pre className="textooo">{`Wi-Fi conectado!
IP: 192.168.1.100
Tentando conexão MQTT... Conectado!
Dados enviados: {"temperatura":25.70,"umidade":62.40,
"qualidade_ar":1850}
Dados enviados: {"temperatura":25.80,"umidade":62.30,
"qualidade_ar":1855}
...`}</pre>

          <h4 className="subbtitulo">
            2.2. Visualização no MQTT Explorer / Cliente
          </h4>
          <p className="texto">
            A screenshot abaixo demonstra o cliente MQTT recebendo as mensagens
            no tópico configurado (<code>estacao/leituras</code>), validando a
            funcionalidade de ponta a ponta.
          </p>
          </section>
        <section className="simulacao-section">
          <h3 className="subtitulo">3. Principais Aprendizados</h3>
          <p className="texto">
            Este projeto proporcionou um valioso aprendizado sobre a integração
            de sistemas físicos e digitais:
          </p>
          <ul className="texto">
            <li>
              Integração Hardware/Software (Embedded): Domínio da programação do
              ESP32 com a IDE Arduino, gerenciando interrupções, pinos digitais
              e analógicos, e tratamento de erros de leitura de sensores (e.g.,
              <code>isnan</code> para DHT11).
            </li>
            <li>
              Comunicação IoT (MQTT): Compreensão da arquitetura
              Publisher/Subscriber do MQTT e a importância de um protocolo leve
              para dispositivos de baixa potência. Foi um desafio configurar e
              manter a conexão persistente com o broker.
            </li>
            <li>
              Tratamento de Dados (JSON): Experiência na formatação de dados
              brutos dos sensores em um formato estruturado (JSON) no ambiente
              C++ do Arduino.
            </li>
            <li>
              Gerenciamento de Dependências: Habilidade em identificar, instalar
              e utilizar bibliotecas específicas (<code>DHT.h</code>,{" "}
              <code>PubSubClient.h</code>) para acelerar o desenvolvimento.
            </li>
          </ul>
        </section>

        <section className="simulacao-section">
          <h3 className="subtitulo">4. Conclusão do Projeto</h3>
          <p className="texto">
            O projeto de estação de monitoramento ambiental utilizando ESP32 e
            MQTT demonstrou ser um sucesso técnico. Conseguimos criar um sistema
            robusto, de baixo custo e com capacidade de transmissão de dados em
            tempo real. O sucesso na integração do hardware com o software e a
            validação da comunicação MQTT abrem caminho para futuras expansões,
            como a criação de um Dashboard Web para visualização ou a
            implementação de alertas baseados em limites de leitura. O objetivo
            educacional e técnico foi plenamente alcançado.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Resultados;
