import { useEffect, useState } from "react";
import { buscarProdutos } from "../servicos/api";
import type { Produto } from "../tipos/Produto";

import Header from "../componentes/Header/Header";
import Banner from "../componentes/Banner/Banner";
import MenuCategoria from "../componentes/MenuCategoria/MenuCategoria";
import VitrineProdutos from "../componentes/VitrineProdutos/VitrineProdutos";
import ModalProduto from "../componentes/ModalProduto/ModalProduto";
import Marcas from "../componentes/Marcas/Marcas";
import Footer from "../componentes/Footer/Footer";
import ModalNewsletter from "../componentes/ModalNewsletter/ModalNewsletter";
import Parceiros from "../componentes/Parceiros/Parceiros";

export default function Home() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null,
  );
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    buscarProdutos()
      .then((dados) => {
        setProdutos(dados);
      })
      .catch(console.error)
      .finally(() => setCarregando(false));
  }, []);

  const lidarComCliqueProduto = (produto: Produto) => {
    setProdutoSelecionado(produto);
  };

  if (carregando)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>Carregando...</p>
      </div>
    );

  return (
    <div className="home">
      <Header />

      <main>
        <Banner />
        <MenuCategoria />

        <VitrineProdutos
          titulo="Mais vendidos"
          produtos={produtos}
          aoClicarProduto={lidarComCliqueProduto}
        />

        <Parceiros />

        <VitrineProdutos
          titulo="Lançamentos"
          produtos={produtos}
          aoClicarProduto={lidarComCliqueProduto}
        />

        <Marcas />

        <VitrineProdutos
          titulo="Ofertas do dia"
          produtos={produtos}
          aoClicarProduto={lidarComCliqueProduto}
        />
      </main>

      <Footer />

      <ModalNewsletter />

      {produtoSelecionado && (
        <ModalProduto
          produto={produtoSelecionado}
          aoFechar={() => setProdutoSelecionado(null)}
        />
      )}
    </div>
  );
}
