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


## Post/upload a question to the DB

```
POST  http://localhost:4000/
Content-Type: application/json

{
    "questionTitle" : "What is your name ?",
    "answer" : "My name is Goku"
}
```

