import React from "react";
import estilos from "./Newsletter.module.scss";

const Newsletter: React.FC = () => {
  return (
    <section className={estilos.newsletter}>
      <div className="container">
        <div className={estilos.envolvedor}>
          <div className={estilos.conteudoTexto}>
            <h2 className={estilos.titulo}>Inscreva-se na nossa newsletter</h2>
            <p className={estilos.subtitulo}>
              Assine nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse
            </p>
          </div>

          <form className={estilos.formulario}>
            <div className={estilos.linhaInputs}>
              <input type="text" placeholder="Digite seu nome" required />
              <input type="email" placeholder="Digite seu e-mail" required />
              <button type="submit" className={estilos.botaoAssinar}>
                INSCREVER
              </button>
            </div>

            <div className={estilos.containerCheckbox}>
              <input type="checkbox" id="termos" required />
              <label htmlFor="termos">Aceito os termos e condições</label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
