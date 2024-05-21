import Footer from "../../components/footer";
import Forms from "../../components/forms";
import Header from "../../components/header";
import Inscricao from "../../components/inscricao";

export default function Cadastro() {
  return (
    <main className="cadastros">
      <Header />
      <Inscricao />
      <Forms />
      <Footer />
    </main>
  );
}
