# API Rest: Empregados - Desafio #02

## Função

Api desenvolvida com intuito de permitir operações de CRUD(Create - Read - Update - Delete), utilizando duas entidades: Empregados e Ocuppações.
Visando a agilidade, a tabela de Ocupações permite o cadastro de funções que um funcionário pode exercer em uma empresa, logo a tabela de Empregados tem um relacionamento 1:1 com a tabela Ocupações.


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

Através de uma das ferramentas de testes de Apis: [Postman](https://www.postman.com) ou [Insomnia](https://insomnia.rest), testando as rotas a seguir.
Tendo em mente que para cadastrar um funcionário é necessário antes cadastrar uma ocupação.

- http://restemployeesapi-com.umbler.net/employees/{rotadefinida} - Para as Rotas de Empregados
- http://restemployeesapi-com.umbler.net/ocuppations/{rotadefinida} - Para as Rotas de Ocupações 


# Rotas

<hr>

### Rotas : Empregados

### @Get: http://restemployeesapi-com.umbler.net/employees/list


* Retorna todos os usuários cadastrados no sistema

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Request Retornada com sucesso  | 
500 | Erro interno no servidor  | 


### @Get: http://restemployeesapi-com.umbler.net/employees/list/{id}

* Passando um id para retornar um usuário específico

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Request Retornada com sucesso  | 
500 | Erro interno no servidor  | 


### @Post: http://restemployeesapi-com.umbler.net/employees/create

* Cadastra um funcionário no sistema

* Payload


```
{
    "name":"Kamila",
    "age":23,    
    "OcuppationId":4,
    "createdAt":"2019-09-28T10:55:51.603",
    "updatedAt":"2020-09-28T10:55:51.604"
}
```


Status Code | Descrição | 
 :------------- |  :-------------: |
201  | Entidade criada com sucesso  | 
400 | Solicitação inválida ao servidor  | 
404 | Entidade não encontrada |

### @Put: http://restemployeesapi-com.umbler.net/employees/edit/{id}

* Cadastra um funcionário no sistema

* Payload


```
{
    "name":"Carol",
    "age":23,    
    "OcuppationId":4,
    "createdAt":"2019-09-28T10:55:51.603",
    "updatedAt":"2020-09-28T10:55:51.604"
}
```


Status Code | Descrição | 
 :------------- |  :-------------: |
201  | Entidade criada com sucesso  | 
400 | Requisição inválida ao servidor  | 
404 | Entidade não encontrada |

### @Delete: http://restemployeesapi-com.umbler.net/employees/delete/{id}

* Deleta um funcionário no sistema

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Requisição feita com sucesso  | 
400 | Requisição inválida ao servidor  | 
500 | Erro interno do servidor |

<hr>

### Rotas : Ocupações

### @Get: http://restemployeesapi-com.umbler.net/ocuppations/list


* Retorna todos as ocupações cadastradas no sistema

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Request Retornada com sucesso  | 
500 | Erro interno no servidor  | 


### @Get: http://restemployeesapi-com.umbler.net/ocuppations/list/{id}

* Passando um id para retornar um usuário específico

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Request Retornada com sucesso  | 
400 | Requisição inválida ao servidor  |
404 | Entidade não encontrada  | 


### @Post: http://restemployeesapi-com.umbler.net/ocuppations/create

* Cadastra uma ocupação no sistema

* Payload


```
{
    "name":"Estagiário",
    "createdAt":"2019-09-28T10:55:51.603",
    "updatedAt":"2020-09-28T10:55:51.603"
}
```

Status Code | Descrição | 
 :------------- |  :-------------: |
201  | Entidade criada com sucesso  | 
400 | Solicitação inválida ao servidor | 


### @Put: http://restemployeesapi-com.umbler.net/ocuppations/edit/{id}

* Edita o registro selecionado.

* Payload


```
{
    "name":"Estagiário de Tecnologia",
    "createdAt":"2019-09-28T10:55:51.603",
    "updatedAt":"2020-09-28T10:55:51.603"
}
```


Status Code | Descrição | 
 :------------- |  :-------------: |
201  | Entidade criada com sucesso  | 
400 | Requisição inválida ao servidor  | 


### @Delete: http://restemployeesapi-com.umbler.net/ocuppations/delete/{id}

* Deleta um registro selecionado

Status Code | Descrição | 
 :------------- |  :-------------: |
200  | Requisição feita com sucesso  | 
400 | Requisição inválida ao servidor  | 
500 | Erro interno do servidor |



















