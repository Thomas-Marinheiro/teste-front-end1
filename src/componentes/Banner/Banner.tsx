import React from 'react';
import estilos from './Banner.module.scss';

const Banner: React.FC = () => {
  return (
    <section className={estilos.banner}>
      <div className={estilos.sobreposicao}>
        <div className="container">
          <div className={estilos.conteudo}>
            <h1 className={estilos.titulo}>Venha conhecer nossas<br />promoções</h1>
            <p className={estilos.subtitulo}>50% Off nos produtos</p>
            <button className={estilos.botao}>Ver produto</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
