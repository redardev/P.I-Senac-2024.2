import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Usuario } from "./usuario"; // Importando a entidade Usuario

@Entity("login") // Nome da tabela
export class Login extends Usuario {
  @Column({ type: "varchar", length: 45 })
  email: string; // Email do usuário

  @Column({ type: "varchar", length: 45 })
  senha: string; // Senha do usuário

  // Construtor para inicializar os valores dos campos
  constructor(
    CPF: string,
    nome: string,
    sexo: string,
    dataNasc: Date,
    email: string,
    senha: string
  ) {
    super(CPF, nome, sexo, dataNasc);
    this.email = email;
    this.senha = senha;
  }
}
