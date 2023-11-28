## Descrição do Projeto: Informações FIPE de Veículos

Este projeto é uma aplicação React desenvolvida para auxiliar os usuários a obterem informações detalhadas sobre veículos, como marca, modelo, ano e preço, com base no banco de dados FIPE (Fundo de Investimento em Pesquisa Econômica). A aplicação realiza chamadas assíncronas a uma API personalizada para buscar e exibir dados relevantes.

### Modelo de Tabela FIPE Utilizado:

O design e a estrutura do projeto foram inspirados no [Modelo de Tabela FIPE](https://deividfortuna.github.io/fipe/) para proporcionar uma experiência intuitiva aos usuários.

### Recursos Principais:

1. **Seleção de Modelo:**
   - Os usuários podem escolher um modelo de veículo em um menu suspenso preenchido com dados obtidos da API.

2. **Detalhes do Modelo:**
   - Ao selecionar um modelo, detalhes adicionais sobre esse modelo são buscados e exibidos, permitindo aos usuários escolher uma variante específica.

3. **Seleção de Ano:**
   - Os usuários podem, então, selecionar um ano específico para a variante escolhida, com os anos disponíveis sendo populados dinamicamente com base no modelo selecionado.

4. **Informações do Veículo:**
   - Após a seleção de um ano, informações detalhadas sobre o veículo escolhido, incluindo marca, modelo, ano, tipo e preço, são exibidas.

### Tecnologias Utilizadas:

- **React:**
  - O projeto é construído utilizando a biblioteca React, proporcionando uma estrutura baseada em componentes para um código modular e fácil de manter.

- **Gerenciamento de Estado:**
  - A aplicação utiliza o hook `useState` do React para gerenciar o estado do modelo selecionado, detalhes do modelo, ano selecionado e dados obtidos.

- **Integração com API:**
  - Chamadas assíncronas a uma API personalizada são realizadas utilizando a biblioteca `axios` para buscar informações sobre modelos de veículos, detalhes e preços.

- **Estilização:**
  - A estilização é implementada usando SCSS (Sass) para uma funcionalidade CSS aprimorada e um design limpo e responsivo.

### Como Utilizar:

1. **Clonar o Repositório:**
   - Clone este repositório em sua máquina local utilizando a URL do GitHub fornecida.

   ```bash
   git clone https://github.com/seu-nome/nome-do-repositorio.git
   ```

2. **Instalar Dependências:**
   - Navegue até o diretório do projeto e instale as dependências necessárias.

   ```bash
   cd nome-do-repositorio
   npm install
   ```

3. **Executar a Aplicação:**
   - Inicie a aplicação React.

   ```bash
   npm start
   ```
