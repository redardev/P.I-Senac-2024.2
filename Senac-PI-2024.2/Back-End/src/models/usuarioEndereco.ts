import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario'; // Importando a entidade Usuario

@Entity('usuarioEndereco') // Nome da tabela
export class UsuarioEndereco {
  @PrimaryColumn({ type: 'varchar', length: 14 })
  usuario_CPF: string; // CPF do usuário, que é a chave primária

  @Column({ type: 'varchar', length: 100 })
  rua: string; // Rua do endereço do usuário

  @Column({ type: 'varchar', length: 100 })
  bairro: string; // Bairro do endereço do usuário

  @Column({ type: 'varchar', length: 100 })
  cidade: string; // Cidade do endereço do usuário

  // Relacionamento muitos-para-um com a tabela Usuario
  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'usuario_CPF' }) // Chave estrangeira
  usuario: Usuario;

  // Construtor para inicializar os valores dos campos
  constructor(usuario_CPF: string, rua: string, bairro: string, cidade: string, usuario: Usuario) {
    this.usuario_CPF = usuario_CPF;
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.usuario = usuario;
  }
}