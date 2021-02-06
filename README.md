# API Rest: Empregados - Desafio #02

## Índice

* [Objetivo](#objetivo)
* [Entidades](#entidades)
* [Como Usar](#como-usar)
* [Rotas](#rotas)
  * [Empregados](#rotas-de-empregados)
  * [Ocupações](#rotas-de-ocupações)




## Objetivo

Api desenvolvida com intuito de permitir operações de CRUD(Create - Read - Update - Delete), utilizando duas entidades: Empregados e Ocuppações.
Visando a agilidade, a tabela de Ocupações permite o cadastro de funções que um funcionário pode exercer em uma empresa, logo a tabela de Empregados tem um relacionamento 1:1 com a tabela Ocupações.


## Entidades

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

# Como usar
##### [Voltar ao índice](#índice)
Através de uma das ferramentas de testes de Apis: [Postman](https://www.postman.com) ou [Insomnia](https://insomnia.rest).
Você pode baixar o [arquivo](https://github.com/DanielMarquesz/employees-api/blob/master/Companys%20-%20Stone%20-%20Ton.postman_collection.json) e importar em algun desses programas para ter as rotas configuradas.
Tendo em mente que para cadastrar um funcionário é necessário antes cadastrar uma ocupação.

- http://restemployeesapi-com.umbler.net/employees/{rotadefinida} - Para as Rotas de Empregados
- http://restemployeesapi-com.umbler.net/ocuppations/{rotadefinida} - Para as Rotas de Ocupações 


# Rotas
##### [Voltar ao índice](#índice)
<hr>

### Rotas de empregados

#### @Get: http://restemployeesapi-com.umbler.net/employees/list


* Retorna todos os usuários cadastrados no sistema

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Request Retornada com sucesso  | 
500 | Erro interno no servidor  | 


#### @Get: http://restemployeesapi-com.umbler.net/employees/list/{id}

* Passando um id para retornar um usuário específico

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Request Retornada com sucesso  | 
500 | Erro interno no servidor  | 


#### @Post: http://restemployeesapi-com.umbler.net/employees/create

* Cadastra um funcionário no sistema

* Payload


```
{
    "name":"Kamila",
    "age":23,    
    "OcuppationId":4
}
```


Status Code | Descrição | 
 :------------- |  :-------------: |
201  | Entidade criada com sucesso  | 
400 | Solicitação inválida ao servidor  | 
404 | Entidade não encontrada |

#### @Put: http://restemployeesapi-com.umbler.net/employees/edit/{id}

* Cadastra um funcionário no sistema

* Payload


```
{
    "name":"Carol",
    "age":23,    
    "OcuppationId":4
}
```


Status Code | Descrição | 
 :------------- |  :-------------: |
201  | Entidade criada com sucesso  | 
400 | Requisição inválida ao servidor  | 
404 | Entidade não encontrada |

#### @Delete: http://restemployeesapi-com.umbler.net/employees/delete/{id}

* Deleta um funcionário no sistema

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Requisição feita com sucesso  | 
400 | Requisição inválida ao servidor  | 
500 | Erro interno do servidor |
##### [Voltar ao índice](#índice)
<hr>

### Rotas de ocupações
##### [Voltar ao índice](#índice)
#### @Get: http://restemployeesapi-com.umbler.net/ocuppations/list


* Retorna todos as ocupações cadastradas no sistema

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Request Retornada com sucesso  | 
500 | Erro interno no servidor  | 


#### @Get: http://restemployeesapi-com.umbler.net/ocuppations/list/{id}

* Passando um id para retornar um usuário específico

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Request Retornada com sucesso  | 
400 | Requisição inválida ao servidor  |
404 | Entidade não encontrada  | 


#### @Post: http://restemployeesapi-com.umbler.net/ocuppations/create

* Cadastra uma ocupação no sistema

* Payload


```
{
    "name":"Estagiário"
}
```

Status Code | Descrição | 
 :------------- |  :-------------: |
201  | Entidade criada com sucesso  | 
400 | Solicitação inválida ao servidor | 


#### @Patch: http://restemployeesapi-com.umbler.net/ocuppations/edit/{id}

* Edita o registro selecionado.

* Payload


```
{
    "name":"Estagiário de Tecnologia"
}
```


Status Code | Descrição | 
 :------------- |  :-------------: |
201  | Entidade criada com sucesso  | 
400 | Requisição inválida ao servidor  | 


#### @Delete: http://restemployeesapi-com.umbler.net/ocuppations/delete/{id}

* Deleta um registro selecionado

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Requisição feita com sucesso  | 
400 | Requisição inválida ao servidor  | 
500 | Erro interno do servidor |
##### [Voltar ao índice](#índice)
