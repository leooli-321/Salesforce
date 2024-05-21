import Footer from "../components/footer";
import Header from "../components/header";
import Cadastrofull from "../components/pagCadastro";
import styles from "../styles/page.module.css";

export default function Cadastro() {
  
  return (
    <main className={styles.main}>
      <Header />
      <Cadastrofull />
      <Footer />
    </main>
  );
}
