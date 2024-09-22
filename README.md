
# Project description

<img src="assets/images/project-desc.png" alt="Ci description">

In this project comes from [roadma.sh](https://roadmap.sh/). <br> I'm required to develop **a RESTful API to allow users to manage their to-do list.** The previous backend projects have only focused on the CRUD operations, but this project will require me to implement user authentication as well.




#### Image illustration


## Goals
Skills required for this project include:

* [ ] User authentication
* [ ] Schema design and Databases
* [ ] RESTful API design
* [ ] CRUD operations
* [ ] Error handling
* [ ] Security

## Requirements
I'm required to develop a **RESTful API with following endpoints**

* [ ] User registration to create a new user
* [ ] Login endpoint to authenticate the user and generate a token
* [ ] CRUD operations for managing the to-do list
* [ ] Implement user authentication to allow only authorized users to access the to-do list
* [ ] Implement error handling and security measures
* [ ] Use a database to store the user and to-do list data (you can use any database of your choice)
* [ ] Implement proper data validation
* [ ] Implement pagination and filtering for the to-do list

Given below is a list of the endpoints and the details of the request and response:

**User Registration**
Register a new user using the following request:
```sh
POST /register
{
  "name": "John Doe",
  "email": "john@doe.com"
  "password": "password"
}
```
This will validate the given details, make sure the email is unique and store the user details in the database. Make sure to hash the password before storing it in the database. Respond with a token that can be used for authentication if the registration is successful.
```sh
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

The token can either be a JWT token or a random string that can be used for authentication. We leave it up to you to decide the implementation details.

##### **User Login**
Authenticate the user using the following request:
```sh
POST /login
{
  "email": "john@doe.com",
  "password": "password"
}
```
This will validate the given email and password, and respond with a token if the authentication is successful.

```sh
POST /login
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

##### **Create a To-Do Item**
Create a new to-do item using the following request:
```sh
POST /todos
{
  "title": "Buy groceries",
  "description": "Buy milk, eggs, and bread"
}
```

User must send the token received from the login endpoint in the header to authenticate the request. You can use the Authorization header with the token as the value. In case the token is missing or invalid, respond with an error and status code 401.

```sh
{
  "message": "Unauthorized"
}
```
Upon successful creation of the to-do item, respond with the details of the created item.
```sh
{
  "id": 1,
  "title": "Buy groceries",
  "description": "Buy milk, eggs, and bread"
}
```
##### **Update a To-Do Item**
Update an existing to-do item using the following request:

[...] All the requirement are found [here](https://roadmap.sh/projects/todo-list-api)

##### Bonus
* [ ] Implement filtering and sorting for the to-do list
* [ ] Implement unit tests for the API
* [ ] Implement rate limiting and throttling for the API
* [ ] Implement refresh token mechanism for the authentication



---

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Description

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)

<div style="align-items: center">


[![Feature Branch CI Pipeline](https://github.com/TheGreatJordach/Todo-List-APP/actions/workflows/dev-branch-pipeline.yml/badge.svg)](https://github.com/TheGreatJordach/Todo-List-APP/actions/workflows/dev-branch-pipeline.yml)
[![codecov](https://codecov.io/gh/TheGreatJordach/Todo-List-APP/graph/badge.svg?token=ilMpWHnJYl)](https://codecov.io/gh/TheGreatJordach/Todo-List-APP)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=TheGreatJordach_Todo-List-APP&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=TheGreatJordach_Todo-List-APP&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=TheGreatJordach_Todo-List-APP&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=TheGreatJordach_Todo-List-APP&metric=bugs)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=TheGreatJordach_Todo-List-APP&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=TheGreatJordach_Todo-List-APP&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=TheGreatJordach_Todo-List-APP&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=TheGreatJordach_Todo-List-APP&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=TheGreatJordach_Todo-List-APP&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=TheGreatJordach_Todo-List-APP&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Todo-List-APP)

</div>

## CI / CD

> Dev workflow
<img src="assets/images/dev_ci_workflow.png" alt="Ci description">

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
