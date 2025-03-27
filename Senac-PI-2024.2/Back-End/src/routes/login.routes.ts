import { Router } from "express";
import LoginController from "../controllers/LoginController";


class LoginRoutes {
  router = Router();
  controller = new LoginController();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {

    // Criar um novo Usuário.
    this.router.post("/login", this.controller.create);

    // Retornar os usuários já cadastrados.
    this.router.get("/logins", this.controller.findAll);

    // Retorna um usuário específico pelo seu email
    this.router.get("/login/:email", this.controller.findOne);

    // Atualizar os dados Usuário pelo seu email
    this.router.put("/login/:email", this.controller.update);

    // Deleta um usuário pelo seu cpf
    this.router.delete("/login", this.controller.delete);

    // Deleta todos os usuários
    this.router.delete("/logins", this.controller.deleteAll);
  }
}

export default new LoginRoutes().router;