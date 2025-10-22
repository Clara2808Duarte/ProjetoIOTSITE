import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Software.css";

function Software() {
  return (
    <>
      <Header />
      <Nav />
      <section className="software-section">
        <h2>Software</h2>

        <p>
          A parte de software do projeto é responsável por fazer toda a lógica e comunicação entre os sensores, 
          o microcontrolador ESP32 e o servidor MQTT. Ela garante que as leituras de temperatura, umidade e qualidade do ar 
          (MQ-135) sejam coletadas corretamente e enviadas pela internet para visualização em tempo real.
        </p>

        <h3>1. Ferramentas utilizadas</h3>
        <ul>
          <li>
            <strong>IDE Arduino</strong> — ambiente de desenvolvimento usado para programar o ESP32.
          </li>
          <li>
            <strong>Bibliotecas</strong>:
            <ul>
              <li><code>WiFi.h</code> — conecta o ESP32 à rede Wi-Fi.</li>
              <li><code>PubSubClient.h</code> — gerencia a comunicação MQTT com o broker Mosquitto.</li>
              <li><code>DHT.h</code> — faz a leitura do sensor de temperatura e umidade DHT11.</li>
            </ul>
          </li>
        </ul>

        <h3>2. Fluxo do Programa</h3>
        <p>O código segue uma estrutura simples, mas eficiente:</p>
        <ol>
          <li>Inicializa as bibliotecas e define as credenciais do Wi-Fi.</li>
          <li>Conecta o ESP32 à rede local.</li>
          <li>Estabelece conexão com o <strong>broker MQTT</strong> (Mosquitto).</li>
          <li>Realiza leituras periódicas dos sensores DHT11 e MQ-135.</li>
          <li>Publica as informações coletadas nos tópicos MQTT definidos em formato JSON.</li>
          <li>Repete o ciclo a cada poucos segundos.</li>
        </ol>

        <h3>3. Exemplo de Código Completo e Funcional (Arduino)</h3>
         <pre>{`#include <WiFi.h>
#include <PubSubClient.h>
#include "DHT.h"

// --- Configurações de Sensores ---
#define DHTPIN 15           // Pino de dados do DHT11
#define DHTTYPE DHT11 // Tipo do sensor DHT
DHT dht(DHTPIN, DHTTYPE); // Inicializa o DHT11

#define MQ135_PIN 34        // Pino analógico para o MQ-135 (e.g., VP no ESP32)

// --- Configuração do Wi-Fi ---
// ATENÇÃO: Substitua "SUA_REDE_WIFI" e "SENHA_WIFI" pelas suas credenciais reais.
const char* ssid = "SUA_REDE_WIFI"; // Nome da rede Wi-Fi
const char* password = "SENHA_WIFI"; // Senha da rede Wi-Fi

// --- Configuração do broker MQTT (Mosquitto) ---
const char* mqtt_server = "broker.hivemq.com"; // ou IP local do seu Mosquitto
const int mqtt_port = 1883; // Porta padrão do MQTT

WiFiClient espClient; // Cliente Wi-Fi para o ESP32
PubSubClient client(espClient); // Cliente MQTT

// Função para conectar ao Wi-Fi
void setup_wifi();

void setup() { // Configuração inicial
  Serial.begin(115200); // Inicializa a comunicação serial
  dht.begin(); // Inicializa o sensor DHT11
  
  // O pino analógico não precisa de d.begin(), apenas a leitura no loop
  // pinMode(MQ135_PIN, INPUT); // Não é estritamente necessário para analógico no ESP32, mas pode ser adicionado
  
  setup_wifi();// Conecta ao Wi-Fi
  client.setServer(mqtt_server, mqtt_port); // Configura o broker MQTT
  // Define uma função de callback para mensagens recebidas (se fosse um subscriber)
  // client.setCallback(callback); // Não usado neste exemplo
}

void setup_wifi() { // Conecta ao Wi-Fi
  delay(10); // Pequena pausa
  Serial.println("Conectando ao Wi-Fi..."); // Mensagem de status
  WiFi.begin(ssid, password); // Inicia a conexão

  while (WiFi.status() != WL_CONNECTED) { // Aguarda até conectar
    delay(500); // Espera meio segundo
    Serial.print("."); // Indica progresso
  }
  Serial.println("");// Nova linha após conexão
  Serial.println("Wi-Fi conectado!");// Mensagem de sucesso
  Serial.print("IP: "); // Mostra o IP atribuído
  Serial.println(WiFi.localIP()); // Exibe o IP
}

// Tenta reconectar ao MQTT broker
void reconnect() { // Loop até conectar
  while (!client.connected()) { // Enquanto não estiver conectado
    Serial.print("Tentando conexão MQTT..."); // Mensagem de status
    // Tenta se conectar como "ESP32Client"
    if (client.connect("ESP32Client")) { // Se conectar com sucesso
      Serial.println("Conectado!"); // Mensagem de sucesso
      // Se fosse um subscriber, aqui seria onde você se inscreveria em tópicos:
      // client.subscribe("estacao/comando"); // Exemplo de inscrição
    } else {
      Serial.print("Falha, rc="); // Mensagem de falha
      Serial.print(client.state()); // Mostra o código de erro
      Serial.println(" Tentando novamente em 5s..."); // Mensagem de retry
      delay(5000);// Espera 5 segundos antes de tentar novamente
    }
  }
}

void loop() {
  if (!client.connected()) { // Verifica se está conectado ao MQTT
    reconnect();// Tenta reconectar se não estiver conectado
  }
  client.loop(); // Mantém a conexão MQTT ativa e processa callbacks

  // --- 1. Leitura dos sensores ---
  float temperatura = dht.readTemperature(); // Leitura da temperatura em Celsius
  float umidade = dht.readHumidity(); // Leitura da umidade relativa
  int qualidade_ar_raw = analogRead(MQ135_PIN); // Leitura analógica do MQ-135

  // Checagem de erro do DHT
  if (isnan(temperatura) || isnan(umidade)) { // Verifica se a leitura falhou
    Serial.println("Falha ao ler o sensor DHT11!"); // Mensagem de erro
    // Não envia dados falhos
    delay(5000); // Aguarda 5 segundos antes da próxima tentativa
    return;
  }

  // --- 2. Montagem do Payload JSON (Corrigido o escape) ---
  // O formato JSON final deve ser: {"temperatura":X.X,"umidade":Y.Y,"qualidade_ar":Z}
  // No C++ com String, os caracteres aspas (") precisam ser escapados com a barra invertida (\)
  String payload = "{\"temperatura\":" + String(temperatura) +
                   ",\"umidade\":" + String(umidade) + 
                   ",\"qualidade_ar\":" + String(qualidade_ar_raw) + "}";

  // --- 3. Publicação ---
  client.publish("estacao/leituras", payload.c_str()); // Publica no tópico "estacao/leituras"
  Serial.println("Dados enviados: " + payload); // Log dos dados enviados
  
  // Aguarda 5 segundos antes da próxima leitura/envio
  delay(5000);
}
`}</pre> 

        <h3>4. Explicação do Código</h3>
        <ul>
          <li><strong>DHTPIN (15)</strong>: pino onde o DHT11 está conectado.</li>
          <li><strong>MQ135_PIN (34)</strong>: pino analógico do MQ-135.</li>
          <li><strong>setup_wifi()</strong>: conecta o ESP32 ao Wi-Fi.</li>
          <li><strong>PubSubClient</strong>: gerencia a comunicação MQTT.</li>
          <li><strong>payload</strong>: envia dados de temperatura, umidade e qualidade do ar.</li>
          <li><strong>loop()</strong>: repete o envio a cada 5 segundos.</li>
        </ul>

        <h3>5. Comunicação MQTT</h3>
        <p>
          O protocolo MQTT é leve e ideal para IoT. O broker Mosquitto atua como servidor central,
          recebendo dados da estação e disponibilizando-os para dispositivos inscritos no mesmo tópico.
        </p>

        <h3>6. Testes e Visualização</h3>
        <p>
          Use o aplicativo <strong>MQTT Dashboard</strong> (Android/iOS) ou o site{" "}
          <a href="https://mqtt-explorer.com" target="_blank" rel="noopener noreferrer">
            MQTT Explorer
          </a>{" "}
          para observar os dados publicados no tópico <code>estacao/leituras</code>.
        </p>

        <h3>7. Conclusão</h3>
        <p>
          O software garante a coleta e o envio confiável das medições ambientais, integrando hardware e nuvem
          em um projeto de automação completo, acessível e educativo.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Software;
