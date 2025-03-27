import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('servico') // Nome da tabela
export class Servico {
  @PrimaryGeneratedColumn()
  idServico!: number; // Campo auto-incrementado que será a chave primária

  @Column({ type: 'varchar', length: 45 })
  nomeServico: string; // Nome do serviço

  @Column('decimal', { precision: 5, scale: 2 })
  valor: number; // Valor do serviço, com até 5 dígitos e 2 casas decimais

  // Construtor para inicializar os valores dos campos
  constructor(nomeServico: string, valor: number, id?:number) {
    this.nomeServico = nomeServico;
    this.valor = valor;
    if(id) this.idServico = id
  }
}