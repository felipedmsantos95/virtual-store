#**Projeto Loja Virtual**#


Consiste em uma aplicação web onde há um CRUD de um recurso chamado produto, que possui nome, descrição e valor, sendo todos os campos de preenchimento obrigatório. Toda a interação do usuário com o banco de dados é possível ser feita através de um frontend web.

**Tecnologias Utilizadas**

*	Para o desenvolvimento do backend foi utilizada a plataforma Node.js baseada na linguagem Javascript
*	Para o desenvolvimento do frontend foi utilizada a plataforma React.js baseado na linguagem Javascript
* 	O banco de dados utilizado foi SQLite, por não necessitar de um processo SGBD sendo executado separadamente
*	Testes foram feitos no backend através do framework Jest 



**Requisitos:**

*	Node 10.x ou superior
*	NPM 6.x ou superior
*	Yarn 1.X ou superior


**Executando Backend:**

1. Para rodar a API pela primeira vez, acessar o diretório ./backend/ e executar o comando abaixo para instalar as dependências:

		npm i

2. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o backend da aplicação, por padrão ele estará disponível para requisições através da porta 3333 no endereço http://localhost:3333/:

		npm start

**Testes no Backend:**

1. Para verificar o script dos testes que foram feitos no desenvolvimento da aplicação, acessar o diretório ./backend/ e executar o comando abaixo:

		npm test


**Executando Frontend:**

Com o backend sendo executado, pode-se executar os passos abaixo para rodar o frontend da aplicação localmente.

1. Acessar o diretório ./frontend/ e executar o comando abaixo para instalar as dependências:

		yarn install

2. Uma vez instaladas as dependências, pelo comando abaixo é possível executar o frontend da aplicação:

		yarn start

3. Feito isso, através de um navegador de internet (preferencialmente o Chrome ou o Firefox), através do endereço abaixo, será possível interagir com a aplicação desenvolvida.

		http://localhost:3000/


