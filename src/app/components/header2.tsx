"use client"
import Link from "next/link";
import dynamic from "next/dynamic";

const SeletorIdiomas = dynamic(() => import("./seletorIdiomas"), {
  ssr: false,
});

function Header() {
  return (
    <header className="header" id="header">
      {/* nav */}
      <nav className="nav container padd-15">
        {/* nav logo */}
        <a href="/" className="nav-logo">
          <img
            className="logo"
            src="https://i.ibb.co/g4CVQ7m/logo.png"
            alt="Logo Salesforce"
          />
        </a>
        {/* nav menu */}
        <div className="nav-menu" id="nav-menu">
          {/* nav list */}
          <ul className="nav-list">
            {/* <li className="nav-item">
              <a href="/" className="nav-link active-link">
                Início
              </a>
            </li> */}
            <li className="nav-item">
              <a href="#about" className="nav-link">
                Produtos
              </a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link">
                Costumer 360
              </a>
            </li>
            <li className="nav-item">
              <a href="#pricing" className="nav-link">
                Nossos clientes
              </a>
            </li>

            <li className="nav-item">
              <a href="#portfolio" className="btn btn-login">
                LOGIN
              </a>
            </li>

            <li className="nav-item">
              <Link href="/Cadastro">
                <span className="btn btn-default">Teste Grátis</span>
              </Link>
            </li>

            <li className="nav-item">
              <SeletorIdiomas />
            </li>
          </ul>

          {/* nav close */}
          <div className="nav-close" id="nav-close">
            <i className="lni lni-close"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
