import Link from "next/link";

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
            <li className="nav-item">
              <a href="/" className="nav-link active-link">
                Início
              </a>
            </li>
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
              <Link href="/Cadastro" className="btn btn-default">
                Teste Grátis
              </Link>
            </li>

            <li className="nav-item">
              <a href="#acessibilidade" className="">
                <img
                  src="https://i.ibb.co/ZV9MCHs/vetor-mundo.png"
                  alt="Acessibilidade"
                />
              </a>
            </li>
          </ul>

          {/* nav close */}
          <div className="nav-close" id="nav-close">
            <i className="lni lni-close"></i>
          </div>
        </div>
        {/* nav btn */}
        <div className="nav-btns">
          {/* toggle btn */}
          <div className="nav-toggle" id="nav-toggle">
            <i className="lni lni-grid-alt"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
