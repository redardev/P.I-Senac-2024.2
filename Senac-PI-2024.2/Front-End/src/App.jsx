import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Componets/Login/Login";
import Cadastro from "./Componets/Cadastro/Cadastro"; // Importando o componente Cadastro
import "./App.css"; // Importando o arquivo CSS
import ForgotPassword from "./Componets/ForgotPassword/ForgotPassword";
import CodePassword from "./Componets/CodePassword/CodePassword";
import NewPassword from "./Componets/NewPassword/NewPassword";
import Home from "./Componets/Home/Home";
import Services from "./Componets/Services/Services";
import Confirmation from "./Componets/Confirmation/Confirmation"

import ServiceAvailable from "./Componets/ServiceAvailable/ServiceAvailable";


function App() {
  return (
    <div className="App">
      {" "}
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />{" "}
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/codePassword" element={<CodePassword />} />
          <Route path="/newPassword" element={<NewPassword />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/confirmacao" element={<Confirmation />} />
          <Route path="/agendamento" element={<ServiceAvailable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
