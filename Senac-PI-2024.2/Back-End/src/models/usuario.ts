import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('usuario') // Nome da tabela
export class Usuario {
  @PrimaryColumn({ type: 'varchar', length: 14 })
  CPF?: string; // CPF do usuário, que é a chave primária

  @Column({ type: 'varchar', length: 45 })
  nome: string; // Nome do usuário

  @Column({ type: 'varchar', length: 45 })
  sexo: string; // Sexo do usuário

  @Column('date')
  dataNasc: Date; // Data de nascimento do usuário

  // Construtor para inicializar os valores dos campos
  constructor(CPF: string, nome: string, sexo: string, dataNasc: Date) {
    this.CPF = CPF;
    this.nome = nome;
    this.sexo = sexo;
    this.dataNasc = dataNasc;
  }
}