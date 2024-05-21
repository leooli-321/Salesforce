import React, { useEffect } from "react";

declare const $: any;

const DropdownComponent: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js";
    script.async = true;
    document.body.appendChild(script);

    $(document).ready(() => {
      $("#dropDown").click(() => {
        $(".drop-down").toggleClass("drop-down--active");
      });
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="seletorIdiomas">
      <div className="table_center">
        <div className="drop-down">
          <div id="dropDown" className="drop-down__button">
            <img
              id="idiomasel"
              src="https://i.ibb.co/m8L3nGJ/earth.png"
              alt="Seleção de idiomas"
              title="Seleção de idiomas"
            />
          </div>

          <div className="drop-down__menu-box">
            <ul className="drop-down__menu">
              <li data-name="ingles" className="drop-down__item">
                Inglês
              </li>
              <li data-name="mandarim" className="drop-down__item">
                Mandarim
              </li>
              <li data-name="hindi" className="drop-down__item">
                Hindi
              </li>
              <li data-name="espanhol" className="drop-down__item">
                Espanhol
              </li>
              <li data-name="frances" className="drop-down__item">
                Francês
              </li>
              <li data-name="arabe" className="drop-down__item">
                Árabe
              </li>
              <li data-name="bengali" className="drop-down__item">
                Bengali
              </li>
              <li data-name="russo" className="drop-down__item">
                Russo
              </li>
              <li data-name="portugues" className="drop-down__item">
                Português
              </li>
              <li data-name="indonesio" className="drop-down__item">
                Indonésio
              </li>
              <li data-name="urdu" className="drop-down__item">
                Urdu
              </li>
              <li data-name="alemao" className="drop-down__item">
                Alemão
              </li>
              <li data-name="japones" className="drop-down__item">
                Japonês
              </li>
              <li data-name="swahili" className="drop-down__item">
                Suaíli
              </li>
              <li data-name="marathi" className="drop-down__item">
                Marathi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;
