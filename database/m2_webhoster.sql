DROP DATABASE IF EXISTS webhoster;
CREATE DATABASE webhoster;
USE webhoster;
-- Criar a tabela planos
CREATE TABLE plano (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tipo_de_plano VARCHAR(20),
  periodicidade VARCHAR(20),
  preco DECIMAL(10,2),
  armazenamento VARCHAR(20),
  numero_de_contas_email INT,
  numero_de_dominios INT,
  largura_de_banda VARCHAR(20),
  fidelizacao VARCHAR(20)
);

-- Inserir dados na tabela planos
INSERT INTO plano VALUES
(1, 'Básico', 'Mensal', 9.99, '10 GB', 1, 1, 'Ilimitada', 'Nenhuma'),
(2, 'Básico', 'Anual', 99.99, '10 GB', 1, 1, 'Ilimitada', '1 mês grátis'),
(3, 'Intermédio', 'Mensal', 19.99, '50 GB', 5, 3, 'Ilimitada', 'Nenhuma'),
(4, 'Intermédio', 'Anual', 199.99, '50 GB', 5, 3, 'Ilimitada', '2 meses grátis'),
(5, 'Avançado', 'Mensal', 29.99, '100 GB', 10, 5, 'Ilimitada', 'Nenhuma'),
(6, 'Avançado', 'Anual', 299.99, '100 GB', 10, 5, 'Ilimitada', '3 meses grátis'),
(7, 'Premium', 'Mensal', 39.99, '200 GB', 20, 10, 'Ilimitada', 'Nenhuma'),
(8, 'Premium', 'Anual', 399.99, '200 GB', 20, 10, 'Ilimitada', '4 meses grátis'),
(9, 'Ultra', 'Mensal', 49.99, '500 GB', 50, 20, 'Ilimitada', 'Nenhuma'),
(10, 'Ultra','Anual', 499.99, '500 GB', 50, 20, 'Ilimitada', '5 meses grátis');

-- Criar a tabela clientes
CREATE TABLE cliente (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  tipo_de_conta VARCHAR(20),
  numero_fiscal VARCHAR(20),
  email VARCHAR(50),
  contacto VARCHAR(20),
  plano INT NOT NULL,
  periodicidade_de_pagamento VARCHAR(20) ,
  data_ultimo_pagamento DATETIME,
  FOREIGN KEY (plano) REFERENCES plano(id)
);

-- Inserir dados na tabela clientes
INSERT INTO cliente VALUES
(1, 'João Silva', 'Empresarial', '123456789', 'joao@empresa.com', '912345678', 1, 'Mensal', '2023-11-30'),
(2, 'Maria Santos', 'Pessoal', '234567890', 'maria@santos.com', '923456789', 2, 'Anual', '2023-12-31'),
(3, 'Pedro Costa', 'Empresarial', '345678901', 'pedro@costa.com', '934567890', 3, 'Mensal', '2023-11-30'),
(4, 'Ana Sousa', 'Pessoal', '456789012', 'ana@sousa.com', '945678901', 4, 'Anual', '2023-12-31'),
(5, 'Rui Oliveira', 'Empresarial', '567890123', 'rui@oliveira.com', '956789012', 5, 'Mensal', '2023-11-30'),
(6, 'Carla Dias', 'Pessoal', '678901234', 'carla@dias.com', '967890123', 6, 'Anual', '2023-12-31'),
(7, 'Bruno Fernandes', 'Empresarial', '789012345', 'bruno@fernandes.com', '978901234', 7, 'Mensal', '2023-11-30'),
(8, 'Sofia Martins', 'Pessoal', '890123456', 'sofia@martins.com', '989012345', 8, 'Anual', '2023-12-31'),
(9, 'Carlos Mendes', 'Empresarial', '901234567', 'carlos@mendes.com', '990123456', 9, 'Mensal', '2023-11-30'),
(10, 'Lara Gomes', 'Pessoal', '012345678', 'lara@gomes.com', '901234567', 10, 'Anual', '2023-12-31'),
(11, 'Tiago Nunes', 'Empresarial', '112233445', 'tiago@nunes.com', '911223344', 1, 'Mensal', '2023-11-30'),
(12, 'Sara Rocha', 'Pessoal', '223344556', 'sara@rocha.com', '922334455', 2, 'Anual', '2023-12-31'),
(13, 'Miguel Alves', 'Empresarial', '334455667', 'miguel@alves.com', '933445566', 3, 'Mensal', '2023-11-30'),
(14, 'Clara Pinto', 'Pessoal', '445566778', 'clara@pinto.com', '944556677', 4, 'Anual', '2023-12-31'),
(15, 'Ricardo Lima', 'Empresarial', '556677889', 'ricardo@lima.com', '955667788', 5, 'Mensal', '2023-11-30'),
(16, 'Beatriz Cardoso', 'Pessoal', '667788990', 'beatriz@cardoso.com', '966778899', 6, 'Anual', '2023-12-31'),
(17, 'André Correia', 'Empresarial', '778899001', 'andre@correia.com', '977889900', 7, 'Mensal', '2023-11-30'),
(18, 'Inês Marques', 'Pessoal', '889900112', 'ines@marques.com', '988990011', 8, 'Anual', '2023-12-31'),
(19, 'Diogo Silva', 'Empresarial', '990011223', 'diogo@silva.com', '999001122', 9, 'Mensal', '2023-11-30'),
(20, 'Marta Reis', 'Pessoal', '001122334', 'marta@reis.com', '900112233', 10, 'Anual', '2023-12-31'),
(21, 'Filipe Moreira', 'Empresarial', '121212121', 'filipe@moreira.com', '912121212', 1, 'Mensal', '2023-11-30'),
(22, 'Catarina Lopes', 'Pessoal', '232323232', 'catarina@lopes.com', '923232323', 2, 'Anual', '2023-12-31'),
(23, 'Gonçalo Ribeiro', 'Empresarial', '343434343', 'goncalo@ribeiro.com', '934343434', 3, 'Mensal', '2023-11-30'),
(24, 'Joana Ferreira', 'Pessoal', '454545454', 'joana@ferreira.com', '945454545', 4, 'Anual', '2023-12-31'),
(25, 'Daniel Santos', 'Empresarial', '565656565', 'daniel@santos.com', '956565656', 5, 'Mensal', '2023-11-30'),
(26, 'Leonor Costa', 'Pessoal', '676767676', 'leonor@costa.com', '967676767', 6, 'Anual', '2023-12-31'),
(27, 'Hugo Rodrigues', 'Empresarial', '787878787', 'hugo@rodrigues.com', '978787878', 7, 'Mensal', '2023-11-30'),
(28, 'Eva Oliveira', 'Pessoal', '898989898', 'eva@oliveira.com', '989898989', 8, 'Anual', '2023-12-31'),
(29, 'Marco Dias', 'Empresarial', '909090909', 'marco@dias.com', '990909090', 9, 'Mensal', '2023-11-30'),
(30, 'Laura Monteiro', 'Pessoal', '010101010', 'laura@monteiro.com', '901010101', 10, 'Anual', '2023-12-31');



-- Criar a tabela dominios
CREATE TABLE dominio (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  codigo_TLD VARCHAR(10),
  estado BOOLEAN,
  data_de_inicio DATETIME,
  data_de_fim DATETIME,
  cliente INT NOT NULL,
  FOREIGN KEY (cliente) REFERENCES cliente(id)
);

-- Inserir dados na tabela dominios
INSERT INTO dominio VALUES
(1, 'empresa', '.com', true, '2023-01-01 00:00:00', NULL, 1),
(2, 'santos', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 2),
(3, 'costa', '.com', true, '2023-01-01 00:00:00', NULL, 3),
(4, 'sousa', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 4),
(5, 'oliveira', '.com', true, '2023-01-01 00:00:00', NULL, 5),
(6, 'dias', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 6),
(7, 'fernandes', '.com', true, '2023-01-01 00:00:00', NULL, 7),
(8, 'martins', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 8),
(9, 'mendes', '.com', true, '2023-01-01 00:00:00', NULL, 9),
(10, 'gomes', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 10),
(11, 'nunes', '.com', true, '2023-01-01 00:00:00', NULL, 11),
(12, 'rocha', '.com', true, '2023-01-01', '2024-01-01 00:00:00', 12),
(13, 'alves', '.com', true, '2023-01-01 00:00:00', NULL, 13),
(14, 'pinto', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 14),
(15, 'lima', '.com', true, '2023-01-01 00:00:00', NULL, 15),
(16, 'cardoso', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 16),
(17, 'correia', '.com', true, '2023-01-01 00:00:00', NULL, 17),
(18, 'marques', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 18),
(19, 'silva', '.com', true, '2023-01-01 00:00:00', NULL, 19),
(20, 'reis', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 20),
(21, 'moreira', '.com', true, '2023-01-01 00:00:00', NULL, 21),
(22, 'lopes', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 22),
(23, 'ribeiro', '.com', true, '2023-01-01 00:00:00', NULL, 23),
(24, 'ferreira', '.com', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 24),
(25, 'santos', '.net', true, '2023-01-01 00:00:00', NULL, 25),
(26, 'costa', '.net', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 26),
(27, 'rodrigues', '.net', true, '2023-01-01 00:00:00', NULL, 27),
(28, 'oliveira', '.net', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 28),
(29, 'dias', '.net', true, '2023-01-01 00:00:00', NULL, 29),
(30, 'monteiro', '.net', true, '2023-01-01 00:00:00', '2024-01-01 00:00:00', 30);

-- Criar a tabela pagamentos
CREATE TABLE pagamento (
  id INT PRIMARY KEY AUTO_INCREMENT,
  timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  valor DECIMAL(10,2),
  metodo_de_pagamento VARCHAR(20),
  numero_de_transacao VARCHAR(20),
  cliente INT NOT NULL,
  FOREIGN KEY (cliente) REFERENCES cliente(id)
);

-- Inserir dados na tabela pagamentos
INSERT INTO pagamento VALUES
(1, '2023-11-30 23:59:59', 9.99, 'Cartão de crédito', '1111111111', 1),
(2, '2023-01-01 00:00:00', 99.99, 'PayPal', '2222222222', 2),
(3, '2023-11-30 23:59:59', 19.99, 'Cartão de crédito', '3333333333', 3),
(4, '2023-01-01 00:00:00', 199.99, 'PayPal', '4444444444', 4),
(5, '2023-11-30 23:59:59', 29.99, 'Cartão de crédito', '5555555555', 5),
(6, '2023-01-01 00:00:00', 299.99, 'PayPal', '6666666666', 6),
(7, '2023-11-30 23:59:59', 39.99, 'Cartão de crédito', '7777777777', 7),
(8, '2023-01-01 00:00:00', 399.99, 'PayPal', '8888888888', 8),
(9, '2023-11-30 23:59:59', 49.99, 'Cartão de crédito', '9999999999', 9),
(10, '2023-01-01 00:00:00', 499.99, 'PayPal', '0000000000', 10),
(11, '2023-11-30 23:59:59', 9.99, 'Cartão de crédito', '1010101010', 11),
(12, '2023-01-01 00:00:00', 99.99, 'PayPal', '2020202020', 12),
(13, '2023-11-30 23:59:59', 19.99, 'Cartão de crédito', '3030303030', 13),
(14, '2023-01-01 00:00:00', 199.99, 'PayPal', '4040404040', 14),
(15, '2023-11-30 23:59:59', 29.99, 'Cartão de crédito', '5050505050', 15),
(16, '2023-01-01 00:00:00', 299.99, 'PayPal', '6060606060', 16),
(17, '2023-11-30 23:59:59', 39.99, 'Cartão de crédito', '7070707070', 17),
(18, '2023-01-01 00:00:00', 399.99, 'PayPal', '8080808080', 18),
(19, '2023-11-30 23:59:59', 49.99, 'Cartão de crédito', '9090909090', 19),
(20, '2023-01-01 00:00:00', 499.99, 'PayPal', '0101010101', 20),
(21, '2023-11-30 23:59:59', 9.99, 'Cartão de crédito', '1212121212', 21),
(22, '2023-01-01 00:00:00', 99.99, 'PayPal', '2323232323', 22),
(23, '2023-11-30 23:59:59', 19.99, 'Cartão de crédito', '3434343434', 23),
(24, '2023-01-01 00:00:00', 199.99, 'PayPal', '4545454545', 24),
(25, '2023-11-30 23:59:59', 29.99, 'Cartão de crédito', '5656565656', 25),
(26, '2023-01-01 00:00:00', 299.99, 'PayPal', '6767676767', 26),
(27, '2023-11-30 23:59:59', 39.99, 'Cartão de crédito', '7878787878', 27),
(28, '2023-01-01 00:00:00', 399.99, 'PayPal', '8989898989', 28),
(29, '2023-11-30 23:59:59', 49.99, 'Cartão de crédito', '9090909090', 29),
(30, '2023-01-01 00:00:00', 499.99, 'PayPal', '0101010101', 30);