import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('agendamento')
export class Agendamento {
  @PrimaryGeneratedColumn()
  idAgendamento!: number;  // Campo auto-incremento

  @Column('decimal', { precision: 10, scale: 0 })
  valorPago: number;  // Campo decimal

  @Column('datetime')
  dataHora: Date;  // Campo datetime

  @Column({ type: 'varchar', length: 45 })
  formaPagamento: string;  // Campo varchar
  
  constructor(valorPago: number, dataHora: Date, formaPagamento: string, id?:number) {
    this.valorPago = valorPago;
    this.dataHora = dataHora;
    this.formaPagamento = formaPagamento;
    if(id) this.idAgendamento = id
  }
}