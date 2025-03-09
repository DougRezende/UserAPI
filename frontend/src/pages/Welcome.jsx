import React from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  // Função para fazer o logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token do localStorage
    navigate("/login"); // Redireciona para a página de login
  };

  return (
    <div>
      <h1>Bem-vindo!</h1>
      <p>Você está logado com sucesso.</p>
      <button onClick={handleLogout}>Logout</button> {/* Botão de logout */}
    </div>
  );
}

export default Welcome;
