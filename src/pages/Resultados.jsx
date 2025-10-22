import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Video from "../assets/TesteLeds.mp4"
import Foto from "../assets/FotoLed.jpeg";

function Resultados() {
  return (
    <>
      <Header />
      <Nav />
      <section>
        <h2>Resultados e Conclusão</h2>

        <p>
          Esta seção finaliza o projeto apresentando os resultados práticos
          obtidos. Mostramos o protótipo final em operação, a comprovação da
          transmissão de dados via MQTT e os principais aprendizados técnicos e
          práticos adquiridos ao longo do desenvolvimento.
        </p>

        <h3>1. Protótipo em Funcionamento</h3>

        <p>
          O protótipo da estação de monitoramento ambiental foi montado com
          sucesso, seguindo o diagrama de hardware. O ESP32 atua como o cérebro,
          coletando dados dos sensores DHT11 (Temperatura e Umidade) e MQ-135
          (Qualidade do Ar/Gases) e gerenciando a conexão Wi-Fi.
        </p>

        {/* Vídeo do protótipo */}
        <div style={{ margin: "20px 0", textAlign: "center" }}>
          <video width="600" controls>
            <source src={Video} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
          <figcaption>Vídeo mostrando o protótipo em funcionamento.</figcaption>
        </div>

        <div>
          {/*
          NOTA: Em um projeto real, você substituiria estas URLs por caminhos para suas imagens.
          Utilize o estilo 'img-thumbnail' ou 'prototipo-img' para formatar as imagens.
        */}
          <figure>
            <img
              src={Foto}
              alt="Protótipo Final da Estação"
            />
            <figcaption>
              Vista frontal do protótipo montado, com sensores e ESP32 visíveis.
            </figcaption>
          </figure>
        </div>

        <h4>Especificações de Operação:</h4>
        <ul>
          <li>Microcontrolador: ESP32, operando em 3.3V.</li>
          <li>Taxa de Leitura: Dados lidos e publicados a cada 5 segundos.</li>
          <li>
            Consumo Médio: Baixo consumo, ideal para operação contínua (detalhes
            sobre o modo Deep Sleep poderiam ser explorados em futuras
            iterações).
          </li>
        </ul>

        <h3>2. Comprovação da Comunicação de Dados (MQTT)</h3>

        <p>
          A etapa crucial do projeto foi verificar a comunicação de dados em
          tempo real através do protocolo MQTT. Utilizamos o broker público
          HiveMQ (ou Mosquitto local) e a ferramenta MQTT Explorer para
          monitorar o tópico de publicação.
        </p>

        <h4>2.1. Saída da IDE Arduino (Monitor Serial)</h4>
        <p>
          O monitor serial do ESP32 confirmou a conexão bem-sucedida e o envio
          de mensagens no formato JSON:
        </p>
        <pre>{`Wi-Fi conectado!
IP: 192.168.1.100
Tentando conexão MQTT... Conectado!
Dados enviados: {"temperatura":25.70,"umidade":62.40,"qualidade_ar":1850}
Dados enviados: {"temperatura":25.80,"umidade":62.30,"qualidade_ar":1855}
...
`}</pre>

        <h4>2.2. Visualização no MQTT Explorer / Cliente</h4>
        <p>
          A screenshot abaixo demonstra o cliente MQTT recebendo as mensagens no
          tópico configurado (<code>estacao/leituras</code>), validando a
          funcionalidade de ponta a ponta.
        </p>

        <figure>
          <img
            src="/caminho/para/print-mqtt-explorer.png"
            alt="Screenshot do MQTT Explorer mostrando os dados recebidos"
          />
          <figcaption>
            Tela do MQTT Explorer. Nota-se a atualização periódica do *payload*
            JSON.
          </figcaption>
        </figure>

        <h3>3. Principais Aprendizados</h3>

        <p>
          Este projeto proporcionou um valioso aprendizado sobre a integração de
          sistemas físicos e digitais:
        </p>

        <ul>
          <li>
            Integração Hardware/Software (Embedded): Domínio da programação do
            ESP32 com a IDE Arduino, gerenciando interrupções, pinos digitais e
            analógicos, e tratamento de erros de leitura de sensores (e.g.,
            `isnan` para DHT11).
          </li>
          <li>
            Comunicação IoT (MQTT): Compreensão da arquitetura
            Publisher/Subscriber do MQTT e a importância de um protocolo leve
            para dispositivos de baixa potência. Foi um desafio configurar e
            manter a conexão persistente com o broker.
          </li>
          <li>
            Tratamento de Dados (JSON): Experiência na formatação de dados
            brutos dos sensores em um formato estruturado (JSON) no ambiente C++
            do Arduino, garantindo a interoperabilidade com sistemas
            web/aplicativos de visualização.
          </li>
          <li>
            Gerenciamento de Dependências: Habilidade em identificar, instalar e
            utilizar bibliotecas específicas (`DHT.h`, `PubSubClient.h`) para
            acelerar o desenvolvimento.
          </li>
        </ul>

        <h3>4. Conclusão do Projeto</h3>

        <p>
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
      <Footer />
    </>
  );
}

export default Resultados;
