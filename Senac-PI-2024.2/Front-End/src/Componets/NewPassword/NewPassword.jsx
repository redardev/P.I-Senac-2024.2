import { useState } from "react";
import "./NewPassword.css";
import logo from "../../assets/logo-sec.png";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validatePassword(password)) {
      setError(
        "A senha deve conter pelo menos 8 letras*, 1 número* e 1 caractere especial*."
      );
      return;
    }
    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    } else {
      navigate("/login")
    }

    setError("");
    alert("Senha redefinida com sucesso!");
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <div className="NewPassword-container">
      <div>
        <img
          src={logo}
          alt="logo do senac"
          className="NewPassword-logo-image"
        />
      </div>

      <form onSubmit={handleSubmit} className="NewPassword-form">
        <label className="label-form">
          <h2>Digite sua nova senha</h2>
          <p>Deve conter no mínimo:</p>
          <ul>
            <li>8 letras*</li>
            <li>1 número*</li>
            <li>1 caractere especial*</li>
          </ul>
        </label>

        <div className="input-container-NewPassword">
          <FaLock className="NewPassword-icon" />
          <input
            type="password"
            placeholder="Nova senha"
            className="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-container-NewPassword">
          <FaLock className="NewPassword-icon" />
          <input
            type="password"
            placeholder="Confirmar senha"
            className="password-input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <p className="NewPassword-error-message">{error}</p>}

        <button type="submit" className="NewPassword-confirm-button">
          Confirmar
        </button>
        <button
          type="button"
          className="NewPassword-back-button"
          onClick={() => window.history.back()}
        >
          Voltar
        </button>
      </form>
    </div>
  );
};

export default NewPassword;
