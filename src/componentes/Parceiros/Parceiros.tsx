import React from 'react';
import estilos from './Parceiros.module.scss';

const Parceiros: React.FC = () => {
  const banners = [
    {
      id: 1,
      titulo: 'Parceiros',
      descricao: 'Lorem ipsum dolor sit amet, consectetur',
      link: '#',
    },
    {
      id: 2,
      titulo: 'Parceiros',
      descricao: 'Lorem ipsum dolor sit amet, consectetur',
      link: '#',
    }
  ];

  return (
    <section className={estilos.parceiros}>
      <div className="container">
        <div className={estilos.gradeParceiros}>
          {banners.map((banner) => (
            <div key={banner.id} className={estilos.bannerParceiro}>
              <div className={estilos.sobreposicaoBanner}>
                <h2 className={estilos.tituloBanner}>{banner.titulo}</h2>
                <p className={estilos.descricaoBanner}>{banner.descricao}</p>
                <a href={banner.link} className={estilos.botaoBanner}>Confira</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parceiros;
