/**
 *  ESTRUTURA DO BANCO DE DADOS E TABELAS 'SIS'
 */
CREATE DATABASE sistemas CHARACTER SET utf8 COLLATE utf8_general_ci;

/**
 *  USUÁRIOS
 */
create table sistemas.sis_usuario
(
  id_usuario integer not null auto_increment primary key,
  nome varchar(50) not null,
  email varchar(200) null,
  usuario varchar(20) not null,
  senha text null
) ENGINE = InnoDB;

create index idx_usuario_id_usuario on sistemas.sis_usuario (id_usuario);
create index idx_usuario_nome on sistemas.sis_usuario (nome);
create index idx_usuario_email on sistemas.sis_usuario (email);
create index idx_usuario_usuario on sistemas.sis_usuario (usuario);

-- usuario: usuario
-- senha: 123456
INSERT INTO sistemas.sis_usuario (id_usuario, nome, email, usuario, senha) VALUES (5, 'Usuário', 'email@email.com.br', 'usuario', 'f77bbb61dd00ae1beafe50b542de65c44ed0d3a4a299af2dc7b59711f57d03ddc21277c81fa6c435e898eaa58998910dae4e79653517f7fa942c6e5940e4e935');