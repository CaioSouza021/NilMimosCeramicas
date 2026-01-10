// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

import Home from "./pages/Home/home";
import Produto from "./pages/Produto/produto";
import ProdutoDetalhe from "./pages/ProdutoDetalhe/produtoDetalhe";
import Sobre from "./pages/Sobre/sobre";

import "./Styles/Global.module.scss";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Produto" element={<Produto />} />
          <Route path="/ProdutoDetalhe" element={<ProdutoDetalhe />} />
          <Route path="Sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
