import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            INSERT INTO usuario (CPF, nome, sexo, dataNasc) VALUES
                ('369.258.147-00', 'Tiago Mendes', 'Masculino', '1987-04-22'),
                ('159.753.486-00', 'Paula Freitas', 'Feminino', '1995-11-13'),
                ('852.741.963-00', 'Marcelo Araujo', 'Masculino', '1992-06-09'),
                ('951.753.357-00', 'Beatriz Moura', 'Feminino', '1996-12-17'),
                ('357.159.456-00', 'André Santos', 'Masculino', '1989-03-05'),
                ('123.654.789-00', 'Juliana Barreto', 'Feminino', '1994-01-28'),
                ('654.789.321-00', 'Rodrigo Cunha', 'Masculino', '1998-07-14'),
                ('987.321.654-00', 'Carla Ribeiro', 'Feminino', '2001-02-10'),
                ('741.852.963-00', 'Vinícius Lopes', 'Masculino', '1993-09-23'),
                ('258.369.147-00', 'Fernanda Silva', 'Feminino', '2000-05-18');
                        `);

    await queryRunner.query(`INSERT INTO cargo (idCargo, nomeCargo, salario, cargaHora) VALUES
            (01, 'Instrutor', 2500.00, '08:00:00'),  
            (02, 'Recepcionista', 1800.00, '08:00:00'),  
            (03, 'Aluno', 200.00, '04:00:00'),  
            (04, 'Depiladora', 2000.00, '08:00:00'),  
            (05, 'Supervisor', 3000.00, '08:00:00');`);

    await queryRunner.query(`INSERT INTO funcionario (matricula, nomeFuncionario, dataAdm, dataDem,dataNasc, nomeSocial, cargo_idCargo) VALUES
            (1, 'João Silva', '2020-01-15 09:00:00', NULL, '1985-05-20', NULL, 01),
            (2, 'Maria Oliveira', '2019-06-10 09:00:00', '2023-03-01 18:00:00', '1990-11-10', 'Maria O.', 02),
            (3, 'Pedro Santos', '2021-09-01 08:30:00', NULL, '1992-02-15', 'Pedro S.', 03),
            (4, 'Ana Lima', '2020-12-05 09:15:00', '2022-07-20 17:30:00', '1988-07-25', NULL, 04),
            (5, 'Carlos Pereira', '2018-03-18 09:00:00', NULL, '1980-10-30', NULL, 05);`);
    
    await queryRunner.query(`INSERT INTO servico (idServico, nomeServico, valor) VALUES
            (1, 'Corte de Cabelo', 50.00),
            (2, 'Manicure', 30.00),
            (3, 'Pedicure', 35.00),
            (4, 'Escova', 60.00),
            (5, 'Penteado', 80.00),
            (6, 'Design de Barba', 25.00),`);
            
    await queryRunner.query(`INSERT INTO agendamento (idAgendamento, valorPago, dataHora, formaPagamento) VALUES
            (1, 50.00, '2024-01-15 09:00:00', 'PIX'),
            (2, 30.00, '2024-02-20 10:30:00', 'Cartão de Crédito'),
            (3, 35.00, '2024-03-25 12:00:00', 'Cartão de Débito'),
            (4, 60.00, '2024-04-10 13:30:00', 'Cartão de Débito'),
            (5, 80.00, '2024-05-05 15:00:00', 'PIX');`)
            
    await queryRunner.query(`INSERT INTO mydb.login (usuario_CPF, email, senha) VALUES
            ('369.258.147-00', 'tiago.mendes@email.com', 'senha123'),
            ('159.753.486-00', 'paula.freitas@email.com', 'paula456'),
            ('852.741.963-00', 'marcelo.araujo@email.com', 'm4rc3l0'),
            ('951.753.357-00', 'beatriz.moura@email.com', 'b3atriz!'),
            ('357.159.456-00', 'andre.santos@email.com', 'andr3s@ntos'),
            ('123.654.789-00', 'juliana.barreto@email.com', 'juli4n@'),
            ('654.789.321-00', 'rodrigo.cunha@email.com', 'cunh4Rod!'),
            ('987.321.654-00', 'carla.ribeiro@email.com', 'C4rlaRi!'),
            ('741.852.963-00', 'vinicius.lopes@email.com', 'v1n1Lop3s'),
            ('258.369.147-00', 'fernanda.silva@email.com', 'f3rn@silv@')`)        
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Revertendo os inserts feitos no 'up' (deletando os registros)
    await queryRunner.query(`
            DELETE FROM user 
            WHERE email IN ('joao@example.com', 'maria@example.com');
        `);
  }
}
