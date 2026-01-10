import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/icon/logo.jpeg";

import S from "./header.module.scss";

export default function Header() {
  // Controle do modo escuro
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className={`${S.header} ${darkMode ? S.dark : ""}`}>
      <section className={S.container}>
        <figure>
          <Link to="/">
            {/* Logo do Site */}
            <img className={S.Logo} src={Logo} alt="Loo NilMimos Cêramicas" />
          </Link>
        </figure>
        {/* Navegação */}
        <nav>
          <Link className={S.textLink}> Home</Link>
          <Link className={S.textLink}> Produto</Link>
          <Link className={S.textLink}> Sobre</Link>
        </nav>
        {/* Botão para trocar modo Claro/Escuro */}
        <div className={S.darkToggle}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Alternar tema"
          >
            {darkMode ? "☀" : "☾"}
          </button>
        </div>
      </section>
    </header>
  );
}
