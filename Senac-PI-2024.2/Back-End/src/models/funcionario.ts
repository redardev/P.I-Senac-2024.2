import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cargo } from './cargo'; // Importando a entidade Cargo para a chave estrangeira

@Entity('funcionario') // Nome da tabela
export class Funcionario {
  @PrimaryColumn()
  matricula: number; // Campo matricula, chave primária

  @Column({ type: 'varchar', length: 45 })
  nomeFuncionario: string; // Nome do funcionário

  @Column('datetime')
  dataAdm: Date; // Data de admissão

  @Column('datetime', { nullable: true, default: null })
  dataDem: Date | null; // Data de demissão (pode ser nulo)

  @Column('date')
  dataNasc: Date; // Data de nascimento

  @Column({ type: 'varchar', length: 45, nullable: true, default: null })
  nomeSocial: string | null; // Nome social (pode ser nulo)

  @ManyToOne(() => Cargo) // Relacionamento muitos-para-um com a tabela Cargo
  @JoinColumn({ name: 'cargo_idCargo' }) // Nome da coluna de chave estrangeira
  cargo: Cargo; // Campo que representa o cargo associado ao funcionário

  // Construtor para inicializar os valores dos campos
  constructor(
    matricula: number,
    nomeFuncionario: string,
    dataAdm: Date,
    dataDem: Date | null,
    dataNasc: Date,
    nomeSocial: string | null,
    cargo: Cargo
  ) {
    this.matricula = matricula;
    this.nomeFuncionario = nomeFuncionario;
    this.dataAdm = dataAdm;
    this.dataDem = dataDem;
    this.dataNasc = dataNasc;
    this.nomeSocial = nomeSocial;
    this.cargo = cargo;
  }
}