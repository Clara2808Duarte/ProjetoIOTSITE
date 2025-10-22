
import "./Footer.css";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaClock, FaMapMarkerAlt, FaGithub, FaLaptopCode } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Coluna 1 */}
        <div className="footer-section">
          <h3>Projeto desenvolvido pelo Grupo 4 – As Gatitas</h3>
          <p>para a disciplina de <strong>Internet das Coisas (IoT)</strong>.</p>
          <p>Nosso objetivo é mostrar como a tecnologia pode ajudar a cuidar do meio ambiente e melhorar a qualidade de vida.</p>
          <p>
            <strong>Instituição:</strong> Serviço Nacional de Aprendizagem Industrial – SENAI<br />
            <strong>Disciplina:</strong> Internet das Coisas (IoT)<br />
            <strong>Professor:</strong> Antônio Tupinambá | Leandro Grosso
          </p>
          <p className="footer-links">
            <FaLaptopCode /> <a href="#">Simulação Wokwi: Acessar o Projeto</a><br />
            <FaGithub /> <a href="#">Repositório: GitHub – ProjetoIOTSITE</a>
          </p>
        </div>

        {/* Coluna 2 */}
        <div className="footer-section">
          <p>
            A <strong>WeatherNet</strong> é uma empresa especializada em soluções de monitoramento climático e ambiental com tecnologia IoT.
          </p>
          <p>
            Nosso objetivo é fornecer dados meteorológicos precisos em tempo real, auxiliando empresas, órgãos públicos e pesquisadores na tomada de decisões sustentáveis.
          </p>
          <p>
            <strong>Razão Social:</strong> WeatherNet Soluções Ambientais Ltda.<br />
            <strong>CNPJ:</strong> 48.352.917/0001-25<br />
            <FaMapMarkerAlt /> Endereço: Av. das Inovações, 450 – Parque Tecnológico, São Paulo – SP, CEP 04567-890<br />
            <FaClock /> Horário de atendimento: Segunda a sexta, das 8h às 18h.
          </p>
        </div>

        {/* Coluna 3 */}
        <div className="footer-section">
          <p><FaPhoneAlt /> Telefone: (11) 3090-4578</p>
          <p><FaWhatsapp /> WhatsApp: (11) 91234-5678</p>
          <p><FaEnvelope /> E-mail comercial: contato@weathernet.com.br</p>
          <p><FaEnvelope /> E-mail de suporte: suporte@weathernet.com.br</p>

          <p><FaInstagram /> Instagram: @weathernet.tech</p>
          <p><FaLinkedin /> LinkedIn: WeatherNet Soluções Ambientais</p>
          <p><FaTwitter /> Twitter (X): @weathernet_br</p>
          <p><FaFacebook /> Facebook: facebook.com/weathernetoficial</p>

          <p><strong>Missão:</strong> Tornar o monitoramento ambiental acessível, inteligente e sustentável.</p>
          <p><strong>Visão:</strong> Ser referência na América Latina em tecnologia para análise climática e ambiental.</p>
          <p><strong>Valores:</strong> Inovação · Transparência · Sustentabilidade · Responsabilidade Social</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 <strong>WeatherNet</strong> — Projeto Estação Meteorológica IoT | Desenvolvido por <strong>As Gatitas</strong>
      </div>
    </footer>
  );
}
