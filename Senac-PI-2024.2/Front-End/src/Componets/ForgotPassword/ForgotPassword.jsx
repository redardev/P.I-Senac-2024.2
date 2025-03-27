import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo-sec.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailCharge = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`O código de recuperação foi enviado para: ${email}`);
      navigate("/CodePassword");
    } else {
      alert("Por favor, preencha o campo de e-mail.");
    }
  };

  return (
    <div className="container">
      <div>
        <img src={logo} alt="logo do senac" className="logo-image" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="label-password">
          <span className="titulo-texto">Esqueceu a senha?</span>
          <br />
          <br />
          Digite seu <span className="email">Email</span> para <br />
          recuperar sua <span className="senha">Senha</span>
          <br /> <br />
          <span className="left-text">Email*</span>
        </div>

        <div className="input-Password">
          <input
            className="input-ForgotPassword"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailCharge}
            required
          />
          <FaUser className="icon" />
        </div>
        <button className="button-ForgotPassword" type="submit">
          Solicitar Código
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
