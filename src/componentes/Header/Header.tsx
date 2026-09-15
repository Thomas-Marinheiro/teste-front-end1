import React from "react";
import {
  Search,
  Heart,
  User,
  ShoppingCart,
  Box,
  ShieldCheck,
  Truck,
  CreditCard,
} from "lucide-react";
import estilos from "./Header.module.scss";
import logoImg from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.barraSuperior}>
        <div className="container">
          <div className={estilos.conteudoBarraSuperior}>
            <div className={estilos.itemInformacao}>
              <ShieldCheck size={20} color="#9F9F9F" />
              <span>
                Compra <strong>100% segura</strong>
              </span>
            </div>
            <div className={estilos.itemInformacao}>
              <Truck size={20} color="#9F9F9F" />
              <span>
                <strong>Frete grátis</strong> acima de R$ 200
              </span>
            </div>
            <div className={estilos.itemInformacao}>
              <CreditCard size={20} color="#9F9F9F" />
              <span>
                <strong>Parcele</strong> suas compras
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={estilos.barraPrincipal}>
        <div className="container">
          <div className={estilos.conteudoPrincipal}>
            <div className={estilos.logo}>
              <img src={logoImg} alt="VTEX" />
            </div>

            <div className={estilos.busca}>
              <input type="text" placeholder="O que você está procurando?" />
              <button type="submit" aria-label="Buscar">
                <Search size={24} color="#9F9F9F" />
              </button>
            </div>

            <div className={estilos.acoes}>
              <button className={estilos.itemAcao} aria-label="Produtos">
                <Box size={24} color="#9F9F9F" />
              </button>
              <button className={estilos.itemAcao} aria-label="Favoritos">
                <Heart size={24} color="#9F9F9F" />
              </button>
              <button className={estilos.itemAcao} aria-label="Minha conta">
                <User size={24} color="#9F9F9F" />
              </button>
              <button className={estilos.itemAcao} aria-label="Carrinho">
                <ShoppingCart size={24} color="#9F9F9F" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className={estilos.navegacao}>
        <div className="container">
          <ul className={estilos.listaNavegacao}>
            <li>
              <a href="#" className={estilos.itemNavegacao}>
                TODAS CATEGORIAS
              </a>
            </li>
            <li>
              <a href="#" className={estilos.itemNavegacao}>
                SUPERMERCADO
              </a>
            </li>
            <li>
              <a href="#" className={estilos.itemNavegacao}>
                LIVROS
              </a>
            </li>
            <li>
              <a href="#" className={estilos.itemNavegacao}>
                MODA
              </a>
            </li>
            <li>
              <a href="#" className={estilos.itemNavegacao}>
                LANÇAMENTOS
              </a>
            </li>
            <li>
              <a href="#" className={estilos.itemNavegacao}>
                OFERTAS DO DIA
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${estilos.itemNavegacao} ${estilos.itemNavegacaoDestaque}`}
              >
                <ShieldCheck size={16} />
                ASSINATURA
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
