"use client";
import React, { useState, useEffect } from "react";
import Paises from "./paises";
import Idiomas from "./idiomas";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  nome: string;
  sobrenome: string;
};

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <section className="salesForms">
      <section className="section pricing" id="pricing">
        <div className="container">
          {/* section title */}

          <form onSubmit={handleSubmit(onSubmit)}>
              <div className="formulario-item">
                <h2 className="section-titulo padd-15">
                  Inscreva-se para começar sua avaliação gratuita.
                </h2>

                <h3 className="section-subtitulo padd-15">
                  Preencha o formulário abaixo e em breve entraremos em contato
                  sobre seu teste gratuito.
                </h3>

                <div className="agrupar">
                  <div className="group">
                    <input
                      {...register("nome", { required: true, min: 4 })}
                      className="inputc"
                      id="nome" // Mantenha o mesmo ID para o campo de nome
                    />
                    <span className="highlight"></span>
                    <span className="bar" id="barNome"></span>
                    <label htmlFor="nome" className="rotulo">
                      Nome:
                    </label>
                    {errors.nome && <span>Obrigatório</span>}
                  </div>

                  <div className="group">
                    <input
                      {...register("sobrenome", { required: true })}
                      id="sobrenome"
                    />
                    <span className="highlight"></span>
                    <span className="bar" id="barSobrenome"></span>
                    <label htmlFor="sobrenome" className="rotulo">
                      Sobrenome:
                    </label>
                    {errors.sobrenome && <span>Obrigatório</span>}
                  </div>
                </div>

                <div className="group">
                  <input type="text" id="email" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="email" className="rotulo">
                    Email:
                  </label>
                </div>

                <div className="group">
                  <input type="text" id="nomeEmpresa" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="nomeEmpresa" className="rotulo">
                    Nome da Empresa:
                  </label>
                </div>

                <div className="group">
                  <input type="text" id="porteEmpresa" required />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label htmlFor="porteEmpresa" className="rotulo">
                    Porte da Empresa:
                  </label>
                </div>

                <Paises />
                <Idiomas />

                <h3 className="serviceAgreement">
                  <input type="checkbox" />
                  Estou de acordo com o Main Services Agreement.
                </h3>
                <p className="descricaoAvaliacao">
                  Sua avaliação gratuita pode ser provisionada ou migrada para o
                  Hyperforce, a infraestrutura de nuvem pública do Salesforce.
                  Ao inscrever-se, você confirma que concorda com o
                  processamento de seus dados pessoais pela Salesforce, conforme
                  descrito na Declaração de privacidade.
                </p>

                <div className="container">
                  <button type="submit" className="btn btn-default">
                    INICIAR TESTE GRATUITO
                  </button>
              </div>
            </div>
          </form>
        </div>

      </section>
    </section>
  );
}
