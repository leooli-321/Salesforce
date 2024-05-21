import React from "react";

const LanguageSelector = () => {
  return (
    <div className="group">
      <select id="idioma" required className="input-select">
        <option value=""></option>
        <option value="ingles">Inglês</option>
        <option value="mandarim">Mandarim</option>
        <option value="hindi">Hindi</option>
        <option value="espanhol">Espanhol</option>
        <option value="frances">Francês</option>
        <option value="arabe">Árabe</option>
        <option value="bengali">Bengali</option>
        <option value="russo">Russo</option>
        <option value="portugues">Português</option>
        <option value="indonesio">Indonésio</option>
        <option value="urdu">Urdu</option>
        <option value="alemao">Alemão</option>
        <option value="japones">Japonês</option>
        <option value="swahili">Suaíli</option>
        <option value="marathi">Marathi</option>
      </select>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label htmlFor="idioma" className="rotulo">
        Idioma:
      </label>
    </div>
  );
};

export default LanguageSelector;
