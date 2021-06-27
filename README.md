# API Rest: Employees - Challenge #02

## Index

* [Goal](#goal)
* [Entities](#entities)
* [How use](#how-use)
* [Routes](#routes)
  * [Users](#users)
  * [Employees](#employees-routes)
  * [Occupations](#occupation-routes)


## Goal

Api developed in order to allow CRUD operations (Create - Read - Update - Delete), using two entities: Employees and Occupations.
For agility, the occupations table allows the registration of functions that an employee can perform in a company, so the employees table has a 1: 1 relationship with the occupations table.


## Entities

### Users

Its an entitie that provides access to the endpoits below.

    - https://c0mpany-api.herokuapp.com/employees - POST
    - https://c0mpany-api.herokuapp.com/employees/edit/{id} - PUT
    - https://c0mpany-api.herokuapp.com/employees/{id} - DELETE

    - https://c0mpany-api.herokuapp.com/occupations - POST
    - https://c0mpany-api.herokuapp.com/occupations/edit/{id} - PATCH
    - https://c0mpany-api.herokuapp.com/occupations/{id} - DELETE
    - https://c0mpany-api.herokuapp.com/users/login - POST

To have acess to those endpois ts necessary to login in:

### @Post - https://c0mpany-api.herokuapp.com/users/login

Passing the following structure:

```
{
	"email": "mail@mail.com",
	"password": "123"
}
``` 
After that you will received a token that its necessary to insert in your API tool, you can follow the documentation of insmnia if you are new: [Tutorial Insomnia](https://support.insomnia.rest/article/174-authentication).


### @Post - https://c0mpany-api.herokuapp.com/users/create

To create a new user just use this example:

```
{
	"name":"any_mail",
	"email": "mail@email.com",
	"password": "123"
}
``` 

### @Get - https://c0mpany-api.herokuapp.com/users

To see all the users in the database.

<hr>

### Employees 

Field  | Value | Type
 :------------- |  :-------------: | :-------------:
Id  | Integer  | Pk, Not Null
name | Varchar(128)  | Not Null
OccupationId| Integer | Fk, Not Null
createdAt | timestamp | Not Null
updatedAt | timestamp | Not Null



### Occupations 

Field  | Value | Type
 :------------- |  :-------------: | :-------------:
Id  | Integer  | Pk, Not Null
name | Varchar(128)  | Not Null
createdAt | timestamp | Not Null
updatedAt | timestamp | Not Null

# How use
##### [Back to Index](#index)
Through one of the apis testing tools: [Postman](https://www.postman.com) or [Insomnia](https://insomnia.rest).
You can download the [file](https://drive.google.com/file/d/1lW4pUW0LmomPf7nrtcxDqsYoAhxbM1uz/view?usp=sharing) and import into some of these programs to have the routes configured.
Bearing in mind that to register an employee it is necessary to register an occupation beforehand.

- https://c0mpany-api.herokuapp.com/employees - To the Employess routes
- https://c0mpany-api.herokuapp.com/occupations - To the Occupations routes


# Routes
##### [Back to index](#index)
<hr>

### Employees routes

#### @Get: https://c0mpany-api.herokuapp.com/employees


* Return all the users in database.

Status Code | Description | 
 :------------- |  :-------------: |
200  | Request returned successfully  | 
500 | Internal server error  | 


#### @Get: https://c0mpany-api.herokuapp.com/employees/{id}

* Passing an id to return a specific user

Status Code | Description | 
 :------------- |  :-------------: |
200  | Request returned successfully  | 
400 | Invalid request  |
404 | Request not found | 
500 | Internal server error  | 



#### @Post: https://c0mpany-api.herokuapp.com/employees

* Register an employee in the system

* Payload


```
{
    "name":"Kamila",
    "age":23,    
    "OccupationId":4
}
```


Status Code | Description | 
 :------------- |  :-------------: |
201  | Entity created successfully  | 
400 | Invalid request  |


#### @Put: https://c0mpany-api.herokuapp.com/employees/edit/{id}

* Update an employee data in the system

* Payload


```
{
    "name":"Carol",
    "age":23,    
    "OccupationId":4
}
```


Status Code | Description | 
 :------------- |  :-------------: |
201  | Entity created successfully  | 
400 | Invalid request  | 
404 | Request not found |

#### @Delete: https://c0mpany-api.herokuapp.com/employees/{id}

* Deletes an employee from the database

Status Code | Description | 
 :------------- |  :-------------: |
200  | Request returned successfully  | 
400 | Invalid request  | 
404 | Request not found | 
500 | Internal server error |
##### [Back to index](#index)
<hr>

### Occupations routes
##### [Back to index](#index)

#### @Get: https://c0mpany-api.herokuapp.com/occupations


* Returns all occupations registered in the database

Status Code | Description | 
 :------------- |  :-------------: |
200  | Request returned successfully   | 
500 | Internal server error  | 


#### @Get: https://c0mpany-api.herokuapp.com/occupations/{id}

* Passing an id to return a specific user

Status Code | Description | 
 :------------- |  :-------------: |
200  | Request returned successfully  | 
400 | Invalid request  |
404 | Request not found | 
500 | Internal server error | 


#### @Post: https://c0mpany-api.herokuapp.com/occupations

* Register an occupation in the system

* Payload


```
{
    "name":"Estagiário"
}
```

Status Code | Description | 
 :------------- |  :-------------: |
201  | Entity created successfully  | 
400 | Invalid request | 


#### @Patch: https://c0mpany-api.herokuapp.com/occupations/edit/18

* Edit the selected record.

* Payload


```
{
    "name":"Estagiário de Tecnologia"
}
```


Status Code | Description | 
 :------------- |  :-------------: |
201  | Entity updated successfully  | 
400 | Invalid request  | 
404 | Request not found | 


#### @Delete: https://c0mpany-api.herokuapp.com/occupations/{id}

* Deletes a selected record

Status Code | Description | 
 :------------- |  :-------------: |
200  | Request returned successfully  | 
400 | Invalid request  | 
404 | Request not found | 
500 | Internal server error |

##### Back to index](#index)
