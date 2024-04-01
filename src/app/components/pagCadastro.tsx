import React from "react";
import Inscricao from "./inscricao";
import SalesForms from "./forms";

const Cadastrofull = () => {
  return (
    <div className="container1">
      <h3 className="titulo-sales-cloud">
        Experimente nossa solução completa de CRM e vendas, grátis por 30 dias.
      </h3>
      <div className="container2">
        <Inscricao />
        <SalesForms />
      </div>
      <img
          className="astroMedalha"
          src="https://i.ibb.co/k5Y3FP4/astro-Medalha.png"
          alt="Astro, o mascote da Salesforce segurando uma medalha"
        />
    </div>
  );
};

export default Cadastrofull;
