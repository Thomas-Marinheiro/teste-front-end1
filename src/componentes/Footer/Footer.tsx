import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import estilos from "./Footer.module.scss";
import logoImg from "../../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className={estilos.rodape}>
      <div className={estilos.secaoNewsletter}>
        <div className="container">
          <div className={estilos.conteudoNewsletter}>
            <div className={estilos.textoNewsletter}>
              <h2 className={estilos.tituloNewsletter}>Inscreva-se na nossa newsletter</h2>
              <p className={estilos.subtituloNewsletter}>
                Receba novidades e conteúdos exclusivos da Econverse diretamente no seu e-mail
              </p>
            </div>

            <form className={estilos.formularioNewsletter}>
              <div className={estilos.linhaInputsNewsletter}>
                <input type="text" placeholder="Digite seu nome" required />
                <input type="email" placeholder="Digite seu e-mail" required />
                <button type="submit" className={estilos.botaoNewsletter}>
                  INSCREVER
                </button>
              </div>

              <div className={estilos.containerCheckboxNewsletter}>
                <input type="checkbox" id="termos-footer" required />
                <label htmlFor="termos-footer">Aceito os termos e condições</label>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={estilos.topoRodape}>
          <div className={estilos.colunaLogo}>
            <div className={estilos.logo}>
              <img src={logoImg} alt="Econverse" />
            </div>
            <p className={estilos.textoLogo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={estilos.redesSociais}>
              <a href="#" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div className={estilos.coluna}>
            <h3 className={estilos.tituloColuna}>Institucional</h3>
            <ul className={estilos.listaLinks}>
              <li className={estilos.itemLink}>
                <a href="#">Sobre Nós</a>
              </li>
              <li className={estilos.itemLink}>
                <a href="#">Movimento</a>
              </li>
              <li className={estilos.itemLink}>
                <a href="#">Trabalhe Conosco</a>
              </li>
            </ul>
          </div>

          <div className={estilos.coluna}>
            <h3 className={estilos.tituloColuna}>Ajuda</h3>
            <ul className={estilos.listaLinks}>
              <li className={estilos.itemLink}>
                <a href="#">Suporte</a>
              </li>
              <li className={estilos.itemLink}>
                <a href="#">Fale Conosco</a>
              </li>
              <li className={estilos.itemLink}>
                <a href="#">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          <div className={estilos.coluna}>
            <h3 className={estilos.tituloColuna}>Termos</h3>
            <ul className={estilos.listaLinks}>
              <li className={estilos.itemLink}>
                <a href="#">Termos e Condições</a>
              </li>
              <li className={estilos.itemLink}>
                <a href="#">Política de Privacidade</a>
              </li>
              <li className={estilos.itemLink}>
                <a href="#">Troca e Devolução</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={estilos.baseRodape}>
        <div className="container">
          <div className={estilos.conteudoBase}>
            <p className={estilos.textoCopyright}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={estilos.logosBase}>
              <img
                src={logoImg}
                alt="Econverse"
                className={estilos.logoPequeno}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
