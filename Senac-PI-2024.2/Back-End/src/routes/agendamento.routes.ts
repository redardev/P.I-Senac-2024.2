import { Router } from "express";
import AgendamentoController from "../controllers/AgendamentoController";


class AgendamentoRoutes {
  router = Router();
  controller = new AgendamentoController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo Agendamento.
    this.router.post("/agendamento", this.controller.create);

    // Retornar os Agendamentos existentes.
    this.router.get("/agendamentos", this.controller.findAll);

    // Retorna um Agendamento específico pelo seu id
    this.router.get("/agendamento/:id", this.controller.findOne);

    // Atualizar os Agendamentos pelo seu id
    this.router.put("/agendamento/:id", this.controller.update);

    // Deleta um Agendamento pelo id
    this.router.delete("/agendamento", this.controller.delete);

    // Deleta todos os Agendamentos
    this.router.delete("/agendamentos", this.controller.deleteAll);
  }
}

export default new AgendamentoRoutes().router;