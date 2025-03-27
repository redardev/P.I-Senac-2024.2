import { Request, Response } from "express";
import { Servico } from "../models/servico";
import ServicoRepository from "../repositories/ServicoRepository";

export default class ServicoController {
  async create(req: Request, res: Response) {
    if (req.body.idServico) {
      res.status(400).send({
        message: "Já existe um serviço com esse id !",
      });
      return;
    }

    try {
      const servico: Servico = req.body;
      const savedServico = await ServicoRepository.save(servico);
      res.status(201).send(savedServico);
    } catch (err) {
      res.status(500).send({
        message: "Erro ao criar o serviço!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const servicos = await ServicoRepository.retrieveAll();
      res.status(200).send(servicos);
    } catch (err) {
      res.status(500).send({
        message:
          "Erro encontrado ao solicitar as visualizações de todos os serviços.",
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const servicoId: number = parseInt(req.params.id);

    try {
      const agendamento = await ServicoRepository.retrieveById(servicoId);
      if (agendamento) res.status(200).send(agendamento);
      else
        res.status(404).send({
          message: `Não foi encontrado nenhum serviço com esse id ${servicoId}.`,
        });
    } catch (err) {
      res.status(500).send({
        message: `Erro não foi possível retornar o agendamento com esse id${servicoId}.`,
      });
    }
  }

  async update(req: Request, res: Response) {
    const servico: Servico = req.body;
    servico.idServico = parseInt(req.params.id)
    try {
      await ServicoRepository.update(servico);
      res.send({ message: "O serviço foi atualizada com sucesso!" });
    } catch (error) {
      res.status(500).send({
        message: `Erro ao atualizar o serviço de ID ${servico.idServico}.`,
      });
    }
  }

  async delete(req: Request, res: Response) {
    const id: number = parseInt(req.params.id);

    try {
      const flag = await ServicoRepository.delete(id);

      if (flag == 1) {
        res.send({
          message: "Serviço deletado com sucesso!",
        });
      } else {
        res.send({
          message: `Não foi possível deletar o serviço de id ${id}, pois não foi encontrado.`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `O serviço de id ${id}, não pode ser deletado.`,
      });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const num = await ServicoRepository.deleteAll();

      res.send({ message: `${num} serviços foram deletados com sucesso!` });
    } catch (err) {
      res.status(500).send({
        message: "Algum erro ocorreu enquato deletava todos os serviços.",
      });
    }
  }
}
