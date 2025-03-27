import { AppDataSource } from "../db/data-sources";
import { Agendamento } from "../models/agendamento";

class AgendamentoRepository {
agendamentoRepository = AppDataSource.getRepository(Agendamento)

async save(agendamento:Agendamento): Promise<Agendamento>{
    try {
     this.agendamentoRepository.save(agendamento);
     return agendamento;   
    } catch (error) {
        throw new Error("Falha ao salvar o agendamento!")
    }
}

async retrieveAll(): Promise<Array<Agendamento>>{
    try {
        return this.agendamentoRepository.find();
    } catch (error) {
        throw new Error("Falha ao retornar os agendamentos!")
    }
}

async retrieveById(agendamentoId: number): Promise<Agendamento | null>{
    try {
        return this.agendamentoRepository.findOneBy({idAgendamento: agendamentoId});
    } catch (error) {
        throw new Error("Falha ao buscar o agendamento!")
    }
}

async update(agendamento: Agendamento) {
    const { idAgendamento,valorPago, dataHora, formaPagamento } = agendamento;
    try {
        this.agendamentoRepository.save(agendamento);
    } catch (error) {
        throw new Error("Falha ao atualizar o agendamento!");
    }
}

async delete(agendamentoId: number): Promise<number> {
    try {
        const agendamentoEncontrado = await this.agendamentoRepository.findOneBy({
            idAgendamento: agendamentoId,
        });        
        if (agendamentoEncontrado) {            
            this.agendamentoRepository.delete(agendamentoId);
            return 1;
        }
        return 0;
    } catch (error) {
        throw new Error("Falha ao deletar o agendamento!");
    }
}

async deleteAll(): Promise<number> {
    try {
      let num = this.agendamentoRepository.query("select count(idAgendamento) from agendamento;");
      this.agendamentoRepository.query("delete from agendamento;");
      return num;
    } catch (error) {
      throw new Error("Falha ao deletar todos os agendamentos!");
    }
  }

}

export default new AgendamentoRepository()