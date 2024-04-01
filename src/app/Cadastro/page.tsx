import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/page.module.css";
import Cadastrofull from "../components/pagCadastro";

export default function Cadastro() {
  return (
    <main className={styles.main}>
      <Header />
      <Cadastrofull />
      <Footer />
    </main>
  );
}
