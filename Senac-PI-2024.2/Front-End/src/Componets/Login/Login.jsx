import { useState } from "react";
import logo from "../../assets/logo-sec.png";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username && password) {
      navigate("/servicos");
    }
  };

  return (
    <div className="container-login">
      <div>
        <img src={logo} alt="logo do senac" className="logo-image" />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>
          <Link to="/ForgotPassword" className="esqueciSenha">
            Esqueci minha Senha
          </Link>
        </div>

        <button type="submit">Entrar</button>

        <div className="signup-link">
          <p>
            Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
