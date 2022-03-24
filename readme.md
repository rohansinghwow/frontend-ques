# Welcome to frontend-ques!

# Installation
``` npm install```

``` npm run serverStart```

# Important Files
``` .env ``` - ```DATABASE_URL=mongodb-URL```

``` route.rest ``` - **for testing the endpoints in VS Code** 

**Extension Name - REST Client**

**Extension ID -  humao.rest-client**

# Endpoints
**To change the Port number**

```const PORT``` **= whatever you like**

## Get all the questions

```GET http://localhost:4000/questions```

## Get a specific question based on id

```GET http://localhost:4000/questions/:id```

## Post/upload a question to the DB

```
POST  http://localhost:4000/questions
Content-Type: application/json

{
    "questionTitle" : "What is your name ?",
    "answer" : "My name is Goku"
}
```
## Update certain question/answer on DB

``` 
PATCH  http://localhost:4000/questions/:id
Content-Type: application/json

{
    "questionTitle" : "What is your age ?",
    "answer" : " 231 years "
}
```
## Delete a particular question on DB

```DELETE http://localhost:4000/questions/:id```
