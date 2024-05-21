"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

const LoginForm: React.FC = () => {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Adicione a lógica de login aqui
    // Navegação removida daqui
    router.push('/Dashboard')
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="user-box">
        <input type="text" name="username" required />
        <label>Usuário</label>
      </div>
      <div className="user-box">
        <input type="password" name="password" required />
        <label>Senha</label>
      </div>
      <button type="submit" className="submit">
        Log In
      </button>
    </form>
  );
};

export default Login;
