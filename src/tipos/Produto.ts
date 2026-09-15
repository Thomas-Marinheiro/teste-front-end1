export type Produto = {
  id: number;
  nome: string;
  imagem: string;
  preco: number;
  descricao: string;
  precoAntigo?: number;
  parcelas?: number;
  valorParcela?: number;
};
