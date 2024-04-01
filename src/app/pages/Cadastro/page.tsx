import Footer from "../footer";
import Forms from "../forms";
import Header from "../header";
import Inscricao from "../inscricao";
import styles from "../styles/page.module.css";

export default function Cadastro() {
  return (
    <main className={styles.main}>
      <Header />
      <Inscricao />
      <Forms />
      <Footer />
    </main>
  );
}
