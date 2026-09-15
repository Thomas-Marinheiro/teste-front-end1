import React from "react";
import type { Produto } from "../../tipos/Produto";
import estilos from "./CardProduto.module.scss";

interface Propriedades {
  produto: Produto;
  aoClicar: (produto: Produto) => void;
}

const CardProduto: React.FC<Propriedades> = ({ produto, aoClicar }) => {
  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const precoAntigoFormatado = (produto.precoAntigo ?? produto.preco * 1.2).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const qtdParcelas = produto.parcelas ?? 2;
  const vlrParcela = (produto.valorParcela ?? produto.preco / 2).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const parcelas = `${qtdParcelas}x de ${vlrParcela} sem juros`;

  return (
    <div className={estilos.cartao}>
      <div className={estilos.containerImagem}>
        <img src={produto.imagem} alt={produto.nome} className={estilos.imagem} />
      </div>

      <div className={estilos.conteudo}>
        <h3 className={estilos.nome}>{produto.nome}</h3>
        <p className={estilos.descricao}>{produto.descricao}</p>

        <div className={estilos.precos}>
          <span className={estilos.precoAntigo}>{precoAntigoFormatado}</span>
          <span className={estilos.preco}>{precoFormatado}</span>
        </div>

        <p className={estilos.parcelamento}>ou {parcelas}</p>
        <p className={estilos.frete}>Frete grátis</p>

        <button className={estilos.botaoComprar} onClick={() => aoClicar(produto)}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default CardProduto;
