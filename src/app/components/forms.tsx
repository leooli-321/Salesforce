"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Idiomas from "./idiomas";
import Paises from "./paises";
import { useRouter } from "next/navigation";

import axios, {AxiosRequestConfig} from 'axios';
import { BASE_URL } from "@/Utils/requests";

type FormValues = {
  nome: string;
  sobrenome: string;
  email: string;
  nomeEmpresa: string;
  porteEmpresa: string;
};

export default function Forms() {
  // ------> CONST getPaises PARA TESTAR ENDPOINT
  // const getPaises = async () => {
  //   try {
  //     const resp = await fetch("http://localhost:8080/Salesforce/rest/pais");
  //     const data = await resp.json();
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.error("Ocorreu um erro ao obter os países:", error);
  //     return null; // ou outra manipulação de erro desejada
  //   }
  // }
  // getPaises();
  
  const router = useRouter();
  
  
  const retornaData = () => {
    const data = new Date();
    const formato = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      // hour: 'numeric',
      // minute: 'numeric',
      // second: 'numeric'
    });
    
    return formato.format(data); // Exemplo de formato: "'01/04/2024, 09:24:44'"
  }
  

  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // const onSubmit: SubmitHandler<FormValues> = (event) => {
  //   // Armazenando os dados do formulário em um objeto JSON
  //   const formData = JSON.stringify(event);
  //   console.log(formData);
  // }; 

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nome = (event.target as any).nome.value,
      sobrenome = (event.target as any).sobrenome.value,
      // senha = (event.target as any).senha.value,
      email = (event.target as any).email.value,
      nomeEmpresa = (event.target as any).nomeEmpresa.value,
      porteEmpresa = (event.target as any).porteEmpresa.value
      // tipo = (event.target as any).tipo.value,
      // dataRegistro = (event.target as any).dataRegistro.value
      // idPais = (event.target as any).idPais.value,

    

    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: "POST",
      url: "/usuario",
      data: {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: '123456abc',
        nomeEmpresa: nomeEmpresa,
        porteEmpresa: porteEmpresa,
        tipo: "TG",
        idPais: 21,
        dataRegistro: retornaData()
      },
    };

    axios(config).then((response) => {
      console.log(response.data);
      router.push('/Dashboard');
    });
  };
  
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  
  return (
    <section className="salesForms">
      <section className="section pricing" id="pricing">
        <div className="container">
          <div id="lista-de-paises"></div>
          {/* section title */}

          <form onSubmit={handleSubmit}>
            <div className="formulario-item">
              <h2 className="section-titulo">
                Inscreva-se para começar sua avaliação gratuita.
              </h2>

              <h3 className="section-subtitulo">
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
