import { Request, Response } from "express";
import { Login } from "../models/login";
import LoginRepository from "../repositories/LoginRepository";

export default class LoginController {
  async create(req: Request, res: Response) {
    if (!req.body) {
      res.status(400).send({
        message: "Favor preencher os dados necessários para cadastro!",
      });
      return;
    }

    try {
      const login: Login = req.body;
      const savedLogin = await LoginRepository.save(login);
      res.status(201).send(savedLogin);
    } catch (err) {
      res.status(500).send({
        message: "Erro ao cadastrar.",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const logins = await LoginRepository.retrieveAll();
      res.status(200).send(logins);
    } catch (err) {
      res.status(500).send({
        message: "Erro encontrado ao buscar por todos os usuários.",
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const email: string = req.params.email;

    try {
      const login = await LoginRepository.retrieveByEmail(email);
      if (login) res.status(200).send(login);
      else
        res.status(404).send({
          message: `Não foi encontrado nenhum usuário com esse email: ${email}.`,
        });
    } catch (err) {
      res.status(500).send({
        message: `Erro ao pesquisar o usuário com email=${email}.`,
      });
    }
  }

  async update(req: Request, res: Response) {
    const login: Login = req.body;
    try {
      await LoginRepository.update(login);
      res.send({ message: "A senha atualizada com sucesso!" });
    } catch (error) {
      res.status(500).send({
        message: `Error ao atualizar a senha do usuário ${login.nome}.`,
      });
    }
  }

  async delete(req: Request, res: Response) {
    const cpf: string = req.params.CPF;

    try {
      const flag = await LoginRepository.delete(cpf);

      if (flag == 1) {
        res.send({
          message: "Usuário deletado com sucesso!",
        });
      } else {
        res.send({
          message: `Não foi possível deletar o usuário com cpf ${cpf}, pois não foi encontrado.`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `O usuário com cpf==${cpf}, não pode ser deletado.`,
      });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const num = await LoginRepository.deleteAll();

      res.send({ message: `${num} Usuários foram deletados com sucesso!` });
    } catch (err) {
      res.status(500).send({
        message: "Algum erro ocorreu enquato deletava todos os usuários.",
      });
    }
  }
}
