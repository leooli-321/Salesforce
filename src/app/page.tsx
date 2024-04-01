import Beneficios from "./components/beneficios";
import Costumer360 from "./components/costumer360";
import Footer from "./components/footer";
import Header from "./components/header";
import Inicio from "./components/inicio";
import Produtos from "./components/produtos";
import ProvaSocial from "./components/provaSocial";
import styles from "./styles/page.module.css";

// import { ReactElement } from 'react';

// export function coletaClicks(): ReactElement {
//   return <></>;
// }


export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Inicio />
      <Produtos />
      <Beneficios />
      <Costumer360 />
      <ProvaSocial />
      <Footer />
      {/* {coletaClicks()} */}
    </main>
  );
}
