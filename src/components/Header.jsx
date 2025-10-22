import "./Header.css";
import Logo from '../assets/Logo (Site).png';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src={Logo} 
          alt="WeatherNet Logo"
          className="logo"
        />
        <h1 className="brand-name">WeatherNet</h1>
      </div>

      <div className="divider"></div>

      <h2 className="header-title">Dados do Clima em Tempo Real</h2>
    </header>
  );
}
