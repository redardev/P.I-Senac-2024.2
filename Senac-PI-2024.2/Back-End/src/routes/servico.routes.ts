import { Router } from "express";
import ServicoController from "../controllers/ServicoController";


class ServicoRoutes {
  router = Router();
  controller = new ServicoController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo Serviço.
    this.router.post("/servico", this.controller.create);

    // Retornar os Serviços existentes.
    this.router.get("/servicos", this.controller.findAll);

    // Retorna um serviço específico pelo seu id
    this.router.get("/servico/:id", this.controller.findOne);

    // Atualizar os serviço pelo seu id
    this.router.put("/servico/:id", this.controller.update);

    // Deleta um servico pelo id
    this.router.delete("/servico/:id", this.controller.delete);

    // Deleta todos os Agendamentos
    this.router.delete("/servicos", this.controller.deleteAll);
  }
}

export default new ServicoRoutes().router;