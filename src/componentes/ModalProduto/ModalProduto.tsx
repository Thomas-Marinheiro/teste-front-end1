import React, { useState } from "react";
import type { Produto } from "../../tipos/Produto";
import estilos from "./ModalProduto.module.scss";
import { X, Minus, Plus } from "lucide-react";

interface Propriedades {
  produto: Produto;
  aoFechar: () => void;
}

const ModalProduto: React.FC<Propriedades> = ({ produto, aoFechar }) => {
  const [quantidade, setQuantidade] = useState(1);

  const precoFormatado = produto.preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const diminuirQuantidade = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  const aumentarQuantidade = () => {
    setQuantidade(quantidade + 1);
  };

  return (
    <div className={estilos.sobrepor} onClick={aoFechar}>
      <div className={estilos.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={estilos.botaoFechar}
          onClick={aoFechar}
          aria-label="Fechar"
        >
          <X size={24} color="#707070" />
        </button>

        <div className={estilos.conteudoModal}>
          <div className={estilos.containerImagem}>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className={estilos.imagem}
            />
          </div>

          <div className={estilos.detalhes}>
            <h2 className={estilos.tituloProduto}>{produto.nome}</h2>
            <p className={estilos.precoProduto}>{precoFormatado}</p>
            <p className={estilos.descricao}>{produto.descricao}</p>
            <a href="#" className={estilos.linkDetalhes}>
              Veja mais detalhes do produto &gt;
            </a>

            <div className={estilos.acoesProduto}>
              <div className={estilos.quantidade}>
                <button
                  onClick={diminuirQuantidade}
                  disabled={quantidade <= 1}
                  aria-label="Diminuir quantidade"
                >
                  <Minus size={20} />
                </button>
                <span>{quantidade}</span>
                <button
                  onClick={aumentarQuantidade}
                  aria-label="Aumentar quantidade"
                >
                  <Plus size={20} />
                </button>
              </div>
              <button className={estilos.botaoComprar}>Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalProduto;
