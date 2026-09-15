import type { Produto } from "../tipos/Produto";

const URL_API = "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

const dadosFallback = {
  products: [
    {
      productName: "Lorem ipsum dolor sit amet",
      descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 28.9,
      listPrice: 49.95,
      installments: 2,
      installmentValue: 14.45,
    },
    {
      productName: "Lorem ipsum dolor sit amet",
      descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 28.9,
      listPrice: 49.95,
      installments: 2,
      installmentValue: 14.45,
    },
    {
      productName: "Lorem ipsum dolor sit amet",
      descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 28.9,
      listPrice: 49.95,
      installments: 2,
      installmentValue: 14.45,
    },
    {
      productName: "Lorem ipsum dolor sit amet",
      descriptionShort: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      photo: "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
      price: 28.9,
      listPrice: 49.95,
      installments: 2,
      installmentValue: 14.45,
    },
  ],
};

type ProdutoAPI = {
  productName: string;
  photo: string;
  descriptionShort?: string;
  description?: string;
  price: number;
  listPrice?: number;
  installments?: number;
  installmentValue?: number;
};

function mapearProduto(produto: ProdutoAPI, indice: number): Produto {
  return {
    id: indice + 1,
    nome: produto.productName,
    imagem: produto.photo,
    descricao:
      produto.descriptionShort ||
      produto.description ||
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    preco: produto.price,
    precoAntigo: produto.listPrice ?? produto.price * 1.2,
    parcelas: produto.installments ?? 2,
    valorParcela: produto.installmentValue ?? produto.price / 2,
  };
}

export const buscarProdutos = async (): Promise<Produto[]> => {
  try {
    const resposta = await fetch(URL_API);
    if (!resposta.ok) throw new Error("Erro na API");
    const dados = await resposta.json();
    return dados.products.map(mapearProduto);
  } catch {
    return dadosFallback.products.map(mapearProduto);
  }
};
