"use client";
import React, { useState, useEffect } from "react";
import Paises from "./paises";
import Idiomas from "./idiomas";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  nome: string;
  sobrenome: string;
  email: string;
  nomeEmpresa: string;
  porteEmpresa: string;
};

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Armazenando os dados do formulário em um objeto JSON
    const formData = JSON.stringify(data);
    console.log(formData);
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
                  {errors.nome && (
                    <span>
                      O nome é obrigatório e deve ter pelo menos 4 caracteres.
                    </span>
                  )}
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
                  {errors.sobrenome && <span>O sobrenome é obrigatório.</span>}
                </div>
              </div>

              <div className="group">
                <input
                  {...register("email", { required: true })}
                  type="text"
                  id="email"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="email" className="rotulo">
                  Email:
                </label>
                {errors.email && <span>O email é obrigatório.</span>}
              </div>

              <div className="group">
                <input
                  {...register("nomeEmpresa", { required: true })}
                  type="text"
                  id="nomeEmpresa"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="nomeEmpresa" className="rotulo">
                  Nome da Empresa:
                </label>
                {errors.nomeEmpresa && (
                  <span>O nome da empresa é obrigatório.</span>
                )}
              </div>

              <div className="group">
                <input
                  {...register("porteEmpresa", { required: true })}
                  type="text"
                  id="porteEmpresa"
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="porteEmpresa" className="rotulo">
                  Porte da Empresa:
                </label>
                {errors.porteEmpresa && (
                  <span>O porte da empresa é obrigatório.</span>
                )}
              </div>

              <Paises />
              <Idiomas />

              <h3 className="serviceAgreement">
                <input type="checkbox" />
                Estou de acordo com o Main Services Agreement.
              </h3>
              <p className="descricaoAvaliacao">
                Sua avaliação gratuita pode ser provisionada ou migrada para o
                Hyperforce, a infraestrutura de nuvem pública do Salesforce. Ao
                inscrever-se, você confirma que concorda com o processamento de
                seus dados pessoais pela Salesforce, conforme descrito na
                Declaração de privacidade.
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
