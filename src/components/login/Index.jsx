import React, { useState } from "react";
import "./Login.css";
import { FaLock, FaUser } from "react-icons/fa";

const Login = () => {

    const [username, setUsername] =useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        // Impede que a página seja recarregada
        event.preventDefault();
    
        // Faz o console log das credenciais do usuário
        console.log("Dados de Login:", { username, password });
      };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesso Baxter Building</h1>
        <div className="input-field">
          <input type="text" placeholder="Usuário" required  value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <FaUser className="icon"/>
        </div>
        <div className="input-field">
          <input type="password" placeholder="Senha" required value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>
        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Login</button>
        <div className="signup-link">
          <p>
            Não tem uma conta? <a href="#">Registar</a>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;