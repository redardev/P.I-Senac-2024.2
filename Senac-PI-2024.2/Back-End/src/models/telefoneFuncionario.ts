import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Funcionario } from './funcionario'; // Importando a entidade Funcionario

@Entity('telefonefuncionario') // Nome da tabela
export class TelefoneFuncionario {
  @PrimaryColumn()
  funcionario_matricula: number; // Chave primária, que é a matrícula do funcionário

  @Column({ type: 'varchar', length: 45 })
  numero: string; // Número de telefone do funcionário

  // Relacionamento muitos-para-um com a tabela Funcionario
  @ManyToOne(() => Funcionario)
  @JoinColumn({ name: 'funcionario_matricula' }) // Coluna de chave estrangeira
  funcionario: Funcionario;

  // Construtor para inicializar os valores dos campos
  constructor(funcionario_matricula: number, numero: string, funcionario: Funcionario) {
    this.funcionario_matricula = funcionario_matricula;
    this.numero = numero;
    this.funcionario = funcionario;
  }
}