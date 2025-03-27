import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario'; // Importando a entidade Usuario

@Entity('telefoneusuario') // Nome da tabela
export class TelefoneUsuario {
  @PrimaryColumn({ type: 'varchar', length: 45 })
  numero: string; // Número de telefone do usuário

  @PrimaryColumn({ type: 'varchar', length: 14 })
  usuario_CPF: string; // Chave primária composta com o CPF do usuário

  // Relacionamento muitos-para-um com a tabela Usuario
  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_CPF' }) // Coluna de chave estrangeira
  usuario: Usuario;

  // Construtor para inicializar os valores dos campos
  constructor(numero: string, usuario_CPF: string, usuario: Usuario) {
    this.numero = numero;
    this.usuario_CPF = usuario_CPF;
    this.usuario = usuario;
  }
}