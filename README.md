# API Rest: Empregados

## - Função

Api desenvolvida com intuito de permitir operações de CRUD(Create - Read - Update - Delete), utilizando duas entidades: Empregados e Ocuppações.
Visando a agilidade a tabela de Ocupações permite o cadastro de funções que um funcionário pode exercer em uma empresa, logo a tabela de Empregados tem um relacionamento 1:1 com ocupações.


### Empregados 

Campo  | Valor | Tipo
 :------------- |  :-------------: | :-------------:
Id  | Integer  | Pk, Not Null
name | Varchar(128)  | Not Null
OcuppationId| Integer | Fk, Not Null
createdAt | timestamp | Not Null
updatedAt | timestamp | Not Null



### Ocupações 

Campo  | Valor | Tipo
 :------------- |  :-------------: | :-------------:
Id  | Integer  | Pk, Not Null
name | Varchar(128)  | Not Null
createdAt | timestamp | Not Null
updatedAt | timestamp | Not Null

## - Como usar

* Acessar
- http://restemployeesapi-com.umbler.net/employees/{rotadefinida} - Para as Rotas de Empregados
- http://restemployeesapi-com.umbler.net/ocuppations/{rotadefinida} - Para as Rotas de Ocupações 


### Rotas:

@Get: http://restemployeesapi-com.umbler.net/employees/list


* Retorna todos os usuários cadastrados no sistema

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Request Retornada com sucesso  | 
500 | Erro interno no servidor  | 


@Get: http://restemployeesapi-com.umbler.net/employees/list/{id}

* Passando um id para retornar um usuário específico

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Request Retornada com sucesso  | 
500 | Erro interno no servidor  | 


@Get: http://restemployeesapi-com.umbler.net/employees/create

* Cadastra um funcionário no sistema

Status Code | Descrição | 
 :------------- |  :-------------: |
201  | Entidade criada com sucesso  | 
500 | Erro interno no servidor  | 
404 | Entidade não encontrada |














