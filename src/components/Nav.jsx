import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Navbar() {
  const menuItens = [
    { nome: "Home", caminho: "/" },
    { nome: "Projeto", caminho: "/projeto" },
    { nome: "Simulação Wokwi", caminho: "/simulacao" },
    { nome: "Hardware", caminho: "/hardware" },
    { nome: "Software", caminho: "/software" },
    { nome: "Perguntas e Respostas", caminho: "/perguntas" },
    { nome: "Resultados", caminho: "/resultados" },
    { nome: "Equipe", caminho: "/equipe" },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {menuItens.map((item) => (
          <li key={item.nome} className="nav-item">
            <NavLink
              to={item.caminho}
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              {item.nome}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
