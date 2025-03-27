import { Application } from "express";
import loginRoutes from "./login.routes";
import agendamentoRoutes from "./agendamento.routes";
import servicoRoutes from "./servico.routes";

// Concentrador de rotas
export default class Routes {
  constructor(app: Application) {
    app.use("/salaoagil", loginRoutes);
    app.use("/salaoagil", agendamentoRoutes);
    app.use("/salaoagil", servicoRoutes);
  }
}