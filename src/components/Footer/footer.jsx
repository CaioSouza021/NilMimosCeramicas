import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import S from "./footer.module.scss";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <section className={S.BoxLocalizacao}>
        <p>Campo Grande - Rio de Janeiro RJ</p>
      </section>
      <section className={S.ContainerSocial}>
        <div className={S.boxIcons}>
          <a href="" target="_blank">
            <button>
              <FaWhatsapp />
            </button>
          </a>

          <a href="" target="_blank">
            <button>
              <FaInstagram />
            </button>
          </a>

          <a href="" target="_blank">
            <button>
              <FaPinterestP />
            </button>
          </a>
        </div>
      </section>
      {/* linha divisória */}
      <div className={S.boxLinha}>
        <div className={S.Linha}></div>
      </div>

      {/* Direitos Autorais */}
      <section className={S.BoxDireitos}>
        <p>NilMimos Cerâmica © Todos os direitos reservados</p>
      </section>
    </footer>
  );
}
