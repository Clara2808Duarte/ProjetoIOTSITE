import "./Nav.css";
import  { useState } from "react";

export default function Navbar() {

  const [active, setActive] = useState("Home");

  const menuItens = [
    "Home",
    "Projeto",
    "Simulação Wokwi",
    "Hardware",
    "Software",
    "Perguntas e Respostas",
    "Resultados",
    "Equipe",
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {menuItens.map((item) => (
          <li
            key={item}
            className={`nav-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <hr className="nav-divider" />
    </nav>
  );
}

