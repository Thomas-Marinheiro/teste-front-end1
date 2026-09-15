import React from "react";
import type { Produto } from "../../tipos/Produto";
import CardProduto from "../CardProduto/CardProduto";
import estilos from "./VitrineProdutos.module.scss";

interface Propriedades {
  titulo: string;
  produtos: Produto[];
  aoClicarProduto: (produto: Produto) => void;
}

const filtros = [
  "CELULAR",
  "ACESSÓRIOS",
  "TABLETS",
  "NOTEBOOKS",
  "TVS",
  "VER TODOS",
];

const VitrineProdutos: React.FC<Propriedades> = ({
  titulo,
  produtos,
  aoClicarProduto,
}) => {
  return (
    <section className={estilos.vitrine}>
      <div className="container">
        <div className={estilos.cabecalhoVitrine}>
          <div className={estilos.envolvedorTitulo}>
            <div className={estilos.linha}></div>
            <h2 className={estilos.titulo}>{titulo}</h2>
            <div className={estilos.linha}></div>
          </div>

          <ul className={estilos.filtros}>
            {filtros.map((filtro, indice) => (
              <li
                key={filtro}
                className={`${estilos.itemFiltro} ${indice === 0 ? estilos.ativo : ""}`}
              >
                <button>{filtro}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className={estilos.grade}>
          {produtos.slice(0, 4).map((produto) => (
            <CardProduto
              key={produto.id}
              produto={produto}
              aoClicar={aoClicarProduto}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VitrineProdutos;
