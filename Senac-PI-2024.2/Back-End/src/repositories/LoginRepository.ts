import { AppDataSource } from "../db/data-sources";
import { Login } from "../models/login";

class LoginRepository {
  loginRepository = AppDataSource.getRepository(Login);

  async save(login: Login): Promise<Login> {
    try {
      this.loginRepository.save(login);
      return login;
    } catch (error) {
      throw new Error("Falha ao registrar o login");
    }
  }

  async retrieveAll(): Promise<Array<Login>>{
      try {
          return this.loginRepository.find();
      } catch (error) {
          throw new Error("Falha ao retornar os agendamentos!")
      }
  }

  async retrieveByEmail(emailLogin: string): Promise<Login | null> {
    try {
      return this.loginRepository.findOneBy({ email: emailLogin });
    } catch (error) {
      throw new Error("Usuário não encontrado");
    }
  }

  async update(login: Login) {
    const { CPF, nome, sexo, dataNasc, email, senha } = login;
    try {
      this.loginRepository.save(login);
    } catch (error) {
      throw new Error("Falha ao atualizar o Login.");
    }
  }

  async delete(cpf: string): Promise<number> {
    try {
      const loginEncontrado = await this.loginRepository.findOneBy({
        CPF: cpf,
      });
      if (loginEncontrado) {
        this.loginRepository.delete(loginEncontrado);
        return 1;
      }
      return 0;
    } catch (error) {
      throw new Error("Falha ao deletar o usuário!");
    }
  }

  async deleteAll(): Promise<number> {
    try {
      let num = this.loginRepository.query("select count(CPF) from login;");
      this.loginRepository.query("delete from login;");
      return num;
    } catch (error) {
      throw new Error("Falha ao deletar todos os usuários!");
    }
  }
}
export default new LoginRepository();
