# PROJETO BLOGS API

Projeto desenvolvido no módulo de Back-End do curso de desenvolvimento web da Trybe

## Objetivo

Desenvolver uma API e um banco de dados para a produção de conteúdo para um blog
  
## Tecnologias utilizadas no desenvolvimento
![Nodejs](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)

## Subindo os containers
  ```
  docker-compose up -d --build
  ```
## Acessando a API via CLI
  ```
  docker exec -it blogs_api bash
  ```
## Instalando as dependências
  ```
  npm install
  ```
## Populando o banco de dados com informações de test
  ```
  npm run seed
  ```
## Iniciando a aplicação
  ```
  npm run dev
  ```
