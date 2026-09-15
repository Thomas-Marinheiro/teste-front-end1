import React from "react";
import estilos from "./Marcas.module.scss";
import logoImg from "../../assets/logo.png";

const marcas = [
  { id: 1, nome: "Apple", logo: logoImg },
  { id: 2, nome: "Samsung", logo: logoImg },
  { id: 3, nome: "Motorola", logo: logoImg },
  { id: 4, nome: "Xiaomi", logo: logoImg },
  { id: 5, nome: "LG", logo: logoImg },
];

const Marcas: React.FC = () => {
  return (
    <section className={estilos.marcas}>
      <div className="container">
        <h2 className={estilos.titulo}>Navegue por marcas</h2>
        <div className={estilos.listaMarcas}>
          {marcas.map((marca) => (
            <div key={marca.id} className={estilos.itemMarca}>
              <img src={marca.logo} alt={marca.nome} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marcas;
