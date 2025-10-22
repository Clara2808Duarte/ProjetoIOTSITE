function Software() {
  return (
    <section>
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
      <p>
        O código segue uma estrutura simples, mas eficiente:
      </p>
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
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

#define MQ135_PIN 34        // Pino analógico para o MQ-135 (e.g., VP no ESP32)

// --- Configuração do Wi-Fi ---
// ATENÇÃO: Substitua "SUA_REDE_WIFI" e "SENHA_WIFI" pelas suas credenciais reais.
const char* ssid = "SUA_REDE_WIFI";
const char* password = "SENHA_WIFI";

// --- Configuração do broker MQTT (Mosquitto) ---
const char* mqtt_server = "broker.hivemq.com"; // ou IP local do seu Mosquitto
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  dht.begin();
  
  // O pino analógico não precisa de d.begin(), apenas a leitura no loop
  // pinMode(MQ135_PIN, INPUT); // Não é estritamente necessário para analógico no ESP32, mas pode ser adicionado
  
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
  // Define uma função de callback para mensagens recebidas (se fosse um subscriber)
  // client.setCallback(callback); 
}

void setup_wifi() {
  delay(10);
  Serial.println("Conectando ao Wi-Fi...");
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.println("Wi-Fi conectado!");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());
}

// Tenta reconectar ao MQTT broker
void reconnect() {
  while (!client.connected()) {
    Serial.print("Tentando conexão MQTT...");
    // Tenta se conectar como "ESP32Client"
    if (client.connect("ESP32Client")) {
      Serial.println("Conectado!");
      // Se fosse um subscriber, aqui seria onde você se inscreveria em tópicos:
      // client.subscribe("estacao/comando"); 
    } else {
      Serial.print("Falha, rc=");
      Serial.print(client.state());
      Serial.println(" Tentando novamente em 5s...");
      delay(5000);
    }
  }
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop(); // Mantém a conexão MQTT ativa e processa callbacks

  // --- 1. Leitura dos sensores ---
  float temperatura = dht.readTemperature();
  float umidade = dht.readHumidity();
  int qualidade_ar_raw = analogRead(MQ135_PIN); // Leitura analógica do MQ-135

  // Checagem de erro do DHT
  if (isnan(temperatura) || isnan(umidade)) {
    Serial.println("Falha ao ler o sensor DHT11!");
    // Não envia dados falhos
    delay(5000); 
    return;
  }

  // --- 2. Montagem do Payload JSON (Corrigido o escape) ---
  // O formato JSON final deve ser: {"temperatura":X.X,"umidade":Y.Y,"qualidade_ar":Z}
  // No C++ com String, os caracteres aspas (") precisam ser escapados com a barra invertida (\)
  String payload = "{\"temperatura\":" + String(temperatura) +
                   ",\"umidade\":" + String(umidade) + 
                   ",\"qualidade_ar\":" + String(qualidade_ar_raw) + "}";

  // --- 3. Publicação ---
  client.publish("estacao/leituras", payload.c_str());
  Serial.println("Dados enviados: " + payload);
  
  // Aguarda 5 segundos antes da próxima leitura/envio
  delay(5000);
}
`}</pre> 

      <h3>4. Explicação do Código </h3>
      <ul>
        <li>
          <strong>DHTPIN (15)</strong>: define o pino onde o sensor DHT11 está conectado.
        </li>
        <li>
          <strong>MQ135\_PIN (34)</strong>: define o pino analógico onde o sensor MQ-135 está conectado (usando A0 no ESP32, que é GPIO 36 ou 39 em alguns modelos, mas 34 é um pino de uso comum para ADC).
        </li>
        <li>
          <strong>setup\_wifi()</strong>: conecta o ESP32 à rede Wi-Fi.
        </li>
        <li>
          <strong>PubSubClient</strong>: gerencia a publicação e assinatura de tópicos MQTT.
        </li>
        <li>
          <strong>payload</strong>: envia os valores de temperatura, umidade e a leitura **bruta analógica** do MQ-135 em formato JSON.
        </li>
        <li>
          <strong>loop()</strong>: repete a leitura e o envio a cada 5 segundos.
        </li>
      </ul>

      <h3>5. Comunicação MQTT</h3>
      <p>
        O protocolo MQTT é usado porque é leve e rápido, ideal para IoT. O broker Mosquitto atua como um
        “servidor central”, recebendo os dados da estação e disponibilizando-os para qualquer dispositivo
        inscrito no mesmo tópico.
      </p>

      <h3>6. Testes e Visualização</h3>
      <p>
        Para testar, use o aplicativo <strong>MQTT Dashboard</strong> (Android/iOS) ou o site 
        <a href="https://mqtt-explorer.com" target="_blank" rel="noopener noreferrer"> MQTT Explorer</a> 
        para observar os dados sendo publicados no tópico <code>estacao/leituras</code>.
      </p>

      <h3>7. Conclusão</h3>
      <p>
        O software garante a coleta e o envio confiável das medições ambientais, integrando hardware e nuvem
        em um projeto de automação completo, acessível e educativo.
      </p>
    </section>
  );
}

export default Software;