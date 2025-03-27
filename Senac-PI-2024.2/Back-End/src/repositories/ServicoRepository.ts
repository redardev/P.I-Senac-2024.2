import { AppDataSource } from "../db/data-sources";
import { Servico } from "../models/servico";

class ServicoRepository {
  servicoRepository = AppDataSource.getRepository(Servico);

  async save(servico: Servico): Promise<Servico> {
    try {
      this.servicoRepository.save(servico);
      return servico;
    } catch (error) {
      throw new Error("Falha ao registrar o serviço!");
    }
  }

  async retrieveAll(): Promise<Array<Servico>>{
      try {
          return this.servicoRepository.find();
      } catch (error) {
          throw new Error("Falha ao retornar os serviços!")
      }
  }

  async retrieveById(servicoId: number): Promise<Servico | null> {
    try {
      return this.servicoRepository.findOneBy({ idServico: servicoId });
    } catch (error) {
      throw new Error("Serviço não encontrado");
    }
  }

  async update(servico: Servico) {
    const { idServico,nomeServico,valor } = servico;
    try {
      this.servicoRepository.save(servico);
    } catch (error) {
      throw new Error("Falha ao atualizar o serviço.");
    }
  }

  async delete(id: number): Promise<number> {
    try {
      const servicoEncontrado = await this.servicoRepository.findOneBy({
        idServico: id,
      });
      if (servicoEncontrado) {
        this.servicoRepository.delete(servicoEncontrado);
        return 1;
      }
      return 0;
    } catch (error) {
      throw new Error("Falha ao deletar o serviço!");
    }
  }

  async deleteAll(): Promise<number> {
    try {
      let num = this.servicoRepository.query("select count(idServico) from servico;");
      this.servicoRepository.query("delete from servico;");
      return num;
    } catch (error) {
      throw new Error("Falha ao deletar todos os serviços!");
    }
  }
}
export default new ServicoRepository();