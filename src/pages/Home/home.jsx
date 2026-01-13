import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Hero from "../../assets/img/HeroHome.jpg";
import S from "./home.module.scss";

export default function Home() {
  return (
    <main className={S.ContainerHeroHome}>
      <figure className={S.HeroHome}>
        {/* Hero */}
        <div className={S.BoxHeroHome}>
          <h1>
            Cerâmica artesanal em Campo Grande Peças únicas, aulas práticas e
            queima em alta temperatura
          </h1>
        </div>
      </figure>

      {/* Texto pos Hero */}

      <div className={S.ContainerTextHome}>
        <h1>
          Cerâmica artesanal em Campo Grande Peças únicas, aulas práticas e
          queima em alta temperatura
        </h1>
      </div>

      {/* inicio de card de resumo */}

      {/* Card Normal */}
      <section className={S.CardInicioHome}>
        <figure className={S.ContainerImgCard}>
          <img src={Hero} alt="" />
        </figure>
        <div className={S.ContainerTextcard}>
          <h2>Aulas em ambiente aberto</h2>
          <p>Contato direto com a natureza</p>
        </div>
      </section>

      {/* Card invertido */}

      <section className={S.CardInversoHome}>
        <div className={S.ContainerinversoTextcard}>
          <h2>Peças feitas à mão</h2>
          <p>Decoração ou revenda</p>
        </div>
        <figure className={S.ContainerInvertidoImgCard}>
          <img src={Hero} alt="" />
        </figure>
      </section>

      {/* Card Normal */}
      <section className={S.CardInicioHome}>
        <figure className={S.ContainerImgCard}>
          <img src={Hero} alt="" />
        </figure>
        <div className={S.ContainerTextcard}>
          <h2>Local Exclusivo</h2>
          <p>Único ateliê em Campo Grande</p>
        </div>
      </section>

      {/* Prévia das peças  */}

      {/* peça 1 */}
      <section className={S.ContainerPrevia}>
        <div className={S.TextoPeças}>
          <h2>Peças e produtos</h2>
        </div>
        <section className={S.BoxPrevia}>
          <figure>
            <img src={Hero} alt="" />
          </figure>
          <div>
            <h3>Nome da peça</h3>
          </div>
        </section>
        {/* Peça 2 */}
        <section className={S.BoxPrevia}>
          <figure>
            <img src={Hero} alt="" />
          </figure>
          <div>
            <h3>Nome da peça</h3>
          </div>
        </section>
        {/* Peça 3 */}
        <section className={S.BoxPrevia}>
          <figure>
            <img src={Hero} alt="" />
          </figure>
          <div>
            <h3>Nome da peça</h3>
          </div>
        </section>
      </section>
    </main>
  );
}
