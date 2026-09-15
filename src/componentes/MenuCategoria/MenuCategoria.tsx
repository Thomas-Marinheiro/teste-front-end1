import React from "react";
import {
  Smartphone,
  ShoppingBag,
  Coffee,
  Wrench,
  Heart,
  Dumbbell,
  Shirt,
} from "lucide-react";
import estilos from "./MenuCategoria.module.scss";

const categorias = [
  { id: 1, nome: "Tecnologia", icone: <Smartphone size={32} />, ativo: true },
  { id: 2, nome: "Supermercado", icone: <ShoppingBag size={32} /> },
  { id: 3, nome: "Bebidas", icone: <Coffee size={32} /> },
  { id: 4, nome: "Ferramentas", icone: <Wrench size={32} /> },
  { id: 5, nome: "Saúde", icone: <Heart size={32} /> },
  { id: 6, nome: "Esportes e Fitness", icone: <Dumbbell size={32} /> },
  { id: 7, nome: "Moda", icone: <Shirt size={32} /> },
];

const MenuCategoria: React.FC = () => {
  return (
    <section className={estilos.menuCategoria}>
      <div className="container">
        <div className={estilos.listaCategoria}>
          {categorias.map((categoria) => (
            <div
              key={categoria.id}
              className={`${estilos.itemCategoria} ${categoria.ativo ? estilos.ativo : ""}`}
            >
              <div className={estilos.iconeContainer}>{categoria.icone}</div>
              <span className={estilos.nomeCategoria}>{categoria.nome}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategoria;
