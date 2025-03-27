
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Funcionario } from './funcionario'; // Importando a entidade Funcionario

@Entity('funcionarioEndereco') // Nome da tabela
export class FuncionarioEndereco {
  @PrimaryColumn()
  funcionario_matricula: number; // Chave primária, referência à matricula do funcionário

  @Column({ type: 'varchar', length: 100 })
  rua: string; // Rua do endereço

  @Column({ type: 'varchar', length: 100 })
  bairro: string; // Bairro do endereço

  @Column({ type: 'varchar', length: 100 })
  cidade: string; // Cidade do endereço

  // Relacionamento muitos-para-um com a tabela Funcionario
  @ManyToOne(() => Funcionario)
  @JoinColumn({ name: 'funcionario_matricula' }) // Coluna de chave estrangeira
  funcionario: Funcionario;

  // Construtor para inicializar os valores dos campos
  constructor(
    funcionario_matricula: number,
    rua: string,
    bairro: string,
    cidade: string,
    funcionario: Funcionario
  ) {
    this.funcionario_matricula = funcionario_matricula;
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.funcionario = funcionario;
  }
}