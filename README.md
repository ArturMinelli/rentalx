# Cadastro de carro

**Requisitos Funcionais**
- Deve ser possível cadastrar um carro
- Deve ser possível listar todas as categorias

**Regras de Negócio**
- Não deve ser possível cadastrar um carro com uma placa já existente
- Não deve ser possível alterar a placa de um carro já existente
- O carro deve ser cadastrado por padrão com a disponibilidade marcada com verdadeira
- Apenas usuários administradores devem ter autorização para cadastrar um carro


# Listagem de carros

**Requisitos Funcionais**
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis por categoria
- Deve ser possível listar todos os carros disponíveis por marca
- Deve ser possível listar todos os carros disponíveis por carro

**Regras de Negócio**
- O usuário não precisa estar logado no sistema


# Cadastro de especifição no carro

**Requisitos Funcionais**
- Deve ser possível cadastrar uma especificação para um carro
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**Regras de Negócio**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro


# Cadastro de imagens do carro

**Requisitos Funcionais**
- Deve ser possível cadastrar a imagem do carro

**Requisitos Não Funcionais**
- Deve ser usado o multer para o upload de arquivos

**Regras de Negócio**
- Deve serpossível cadastrar mais de uma imagem para o mesmo carro
- Apenas usuários administradores devem ter autorização para cadastrar imagens de um carro


# Aluguel de carro

**Requisitos Funcionais**
- Deve ser possível cadastrar um aluguel

**Requisitos Não Funcionais**
- Deve ser usado o multer para o upload de arquivos

**Regras de Negócio**
- O aluguel deve ter duração mínima de 4 horas
- Não deve ser permitido o cadastro de mais de um aluguel para o mesmo carro ao mesmo tempo
- Não deve ser permitido o cadastro de mais de um aluguel para o mesmo usuário ao mesmo tempo
