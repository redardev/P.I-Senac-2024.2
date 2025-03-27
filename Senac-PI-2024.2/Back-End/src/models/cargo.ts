
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cargo') // Nome da tabela
export class Cargo {
  @PrimaryGeneratedColumn()
  idCargo!: number; // Campo auto-incremento

  @Column({ type: 'varchar', length: 45 })
  nomeCargo: string; // Campo varchar(45)

  @Column('decimal', { precision: 6, scale: 2 })
  salario: number;  // Campo decimal (6, 2)

  @Column('time')
  cargaHora: string;  // Campo time (horário de carga)

  // Construtor para inicializar os valores dos campos
  constructor(nomeCargo: string, salario: number, cargaHora: string) {
    this.nomeCargo = nomeCargo;
    this.salario = salario;
    this.cargaHora = cargaHora;
  }
}