import { Request, Response } from "express";
import { Agendamento } from "../models/agendamento";
import AgendamentoRepository from "../repositories/AgendamentoRepository";

export default class AgendamentoController {
  async create(req: Request, res: Response) {
    if (!req.body.dataHora) {
      res.status(400).send({
        message: "Não há horário disponível para o agendamento!",
      });
      return;
    }

    try {
      const agendamento: Agendamento = req.body;
      const savedAgendamento = await AgendamentoRepository.save(agendamento);
      res.status(201).send(savedAgendamento);
    } catch (err) {
      res.status(500).send({
        message: "Erro ao criar o agendamento!",
      });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const agendamentos = await AgendamentoRepository.retrieveAll();
      res.status(200).send(agendamentos);
    } catch (err) {
      res.status(500).send({
        message:
          "Erro encontrado ao solicitar as visualizações dos agendamentos.",
      });
    }
  }

  async findOne(req: Request, res: Response) {
    const agendamentoId: number = parseInt(req.params.id);

    try {
      const agendamento = await AgendamentoRepository.retrieveById(
        agendamentoId
      );
      if (agendamento) res.status(200).send(agendamento);
      else
        res.status(404).send({
          message: `Não foi encontrado nenhum agendamento com esse id ${agendamentoId}.`,
        });
    } catch (err) {
      res.status(500).send({
        message: `Erro não foi possível retornar o agendamento com esse id${agendamentoId}.`,
      });
    }
  }

  async update(req: Request, res: Response) {
    const agendamento: Agendamento = req.body;
    agendamento.idAgendamento = parseInt(req.params.id);
    try {
      await AgendamentoRepository.update(agendamento);
      res.send({ message: "Agendamento atualizado com sucesso!" });
    } catch (error) {
      res.status(500).send({
        message: `Erro ao atualizar o agendamento de ID ${agendamento.idAgendamento}.`,
      });
    }
  }

  async delete(req: Request, res: Response) {
    const id: number = parseInt(req.body);
    
    try {
      const num = await AgendamentoRepository.delete(id);

      if (num == 1) {
        res.send({
          message: "Agendamento deletado com sucesso!",
        });
      } else {
        res.send({
          message: `Não foi possível deletar o agendamneto de id ${id}, pois não foi encontrado.`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: `O agendamneto de id ${id}, não pode ser deletado.`,
      });
    }
  }

  async deleteAll(req: Request, res: Response) {
    try {
      const num = await AgendamentoRepository.deleteAll();

      res.send({ message: `${num} Agendamentos foram deletados com sucesso!` });
    } catch (err) {
      res.status(500).send({
        message: "Algum erro ocorreu enquato deletava todos os agendamentos.",
      });
    }
  }
}
