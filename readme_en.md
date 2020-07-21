# Virtual Store

<p align="center">
    <a href="readme_en.md">English</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="README.md">Português</a>&nbsp;&nbsp;&nbsp;
</p>

## About

Web application CRUD of an resource called product, that has name, description and value, all  fields are required. The user can interact with database through web interface.

## Application Preview

<p align="center">
  <img src="https://github.com/felipedmsantos95/virtual-store/blob/master/img/virtualstore.gif"/>
</p>

## Used technologies

*	Node.js for Backend
*	React.js for Frontend
* 	SQLite for database
*	Framework Jest for tests in backend 



## Requirements

*	Node 10.x or higher
*	NPM 6.x or higher
*	Yarn 1.X or higher


## Running Backend

1. In ./backend/ directory, run the following bash command to install the dependencies:

		npm i

2. After, run the following command to run the application backend, for standard it will be avaliable in 3333 port at http://localhost:3333/

		npm start

## Tests in Backend

1. To run the tests script that made for this application, in ./backend/ directory, run the following command:

		npm test


## Running Frontend

While backend is running, follow the steps below to run the application frontend locally.

1. In ./frontend/ directory, run the command below to install the app dependencies:

		yarn install

2. After, run the following command to run the frontend

		yarn start

3. Through an web browser (Chrome or Firefox preferencially), will can be possible to interact with the application developed.

		http://localhost:3000/