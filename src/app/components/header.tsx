"use client";

import React, { useState } from "react";
import Login from "./login";
import { useRouter } from "next/navigation";


function Header() {
  const [showLogin] = useState(false);
  const router = useRouter();

  const navigation = (pageName: string) => {
    router.push(pageName);
  }

  return (
    <header className="header" id="header">
      <nav className="nav container padd-15">
        <a href="/" className="nav-logo">
          <img
            className="logo"
            src="https://i.ibb.co/g4CVQ7m/logo.png"
            alt="Logo Salesforce"
          />
        </a>
        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list">
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
                <span className="btn btn-login" onClick={() => navigation('/Login')}>LOGIN</span>
            </li>
            <li className="nav-item">
                <span className="btn btn-default" onClick={() => navigation('/Cadastro')}>Teste Grátis</span>
            </li>
          </ul>
        </div>
      </nav>
      {showLogin && <Login />}
    </header>
  );
}

export default Header;
