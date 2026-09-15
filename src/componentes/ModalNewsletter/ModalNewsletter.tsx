import React, { useState, useEffect } from "react";
import estilos from "./ModalNewsletter.module.scss";
import { X } from "lucide-react";
import imagemModal from "../../assets/black_friday.png";

const ModalNewsletter: React.FC = () => {
  const [estaAberto, setEstaAberto] = useState(false);

  useEffect(() => {
    const jaViuModal = localStorage.getItem("jaViuModalNewsletter");
    if (!jaViuModal) {
      const temporizador = setTimeout(() => {
        setEstaAberto(true);
      }, 2000);
      return () => clearTimeout(temporizador);
    }
  }, []);

  const lidarFechar = () => {
    setEstaAberto(false);
    localStorage.setItem("jaViuModalNewsletter", "true");
  };

  const lidarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    lidarFechar();
  };

  if (!estaAberto) return null;

  return (
    <div className={estilos.sobrepor} onClick={lidarFechar}>
      <div className={estilos.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={estilos.botaoFechar}
          onClick={lidarFechar}
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        <div className={estilos.conteudoModal}>
          <div className={estilos.containerImagem}>
            <img src={imagemModal} alt="Newsletter" className={estilos.imagemModal} />
          </div>

          <div className={estilos.containerFormulario}>
            <h2 className={estilos.tituloModal}>
              BEM-VINDO À <strong>ECONVERSE</strong>
            </h2>
            <p className={estilos.subtituloModal}>
              Seja o primeiro a receber nossas novidades e ofertas exclusivas
            </p>

            <form className={estilos.formulario} onSubmit={lidarEnvio}>
              <input
                type="text"
                placeholder="Digite seu nome"
                required
                className={estilos.campoInput}
              />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                required
                className={estilos.campoInput}
              />
              <button type="submit" className={estilos.botaoEnviar}>
                GANHAR 10% OFF
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNewsletter;
