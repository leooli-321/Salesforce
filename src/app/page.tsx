"use client"

import Beneficios from "./components/beneficios";
import Costumer360 from "./components/costumer360";
import Footer from "./components/footer";
import Header from "./components/header";
import Inicio from "./components/inicio";
import Produtos from "./components/produtos";
import ProvaSocial from "./components/provaSocial";

export default function Home() {
  return (
    <main>
      <Header />
      <Inicio />
      <Produtos />
      <Beneficios />
      <Costumer360 />
      <ProvaSocial />
      <Footer />
    </main>
  );
}
