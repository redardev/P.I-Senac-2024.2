import { useState } from "react";
import logo from "../../assets/logo-sec.png";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa"; // Ícones adicionais
import "./Cadastro.css";
import { Link } from "react-router-dom"; // Link para navegação

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    console.log("Dados de Cadastro:", { nome, email, senha });
  };

  return (
    <div className="container-cadastro">
      <div>
        <img src={logo} alt="logo do senac" className="logo-image" />
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Criar Conta</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="Digite seu nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="email"
            placeholder="Digite seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FaEnvelope className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Digite sua senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <FaLock className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Confirme sua senha"
            required
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <button>Cadastrar-se</button>

        <div className="signup-link">
          <p>
            Possui uma conta? <Link to="/login">Conecte-se</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
