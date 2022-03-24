# Welcome to frontend-ques!

# Installation
``` npm install```

``` npm run serverStart```

# Important Files
``` .env ``` - **DATABASE_URL=mongodb-URL**

``` route.rest ``` - **for testing the endpoints in VS Code** 

**Extension Name - REST Client**

**Extension ID -  humao.rest-client**

# Endpoints

```GET http://localhost:4000/questions```


```GET http://localhost:4000/questions/:id```



```POST  http://localhost:4000/questions
Content-Type: application/json

{
    "questionTitle" : "What is your name ?",
    "answer" : "My name is Goku"
}
`

```PATCH  http://localhost:4000/questions/:id
Content-Type: application/json

{
    "questionTitle" : "What is your last name ?",
    "answer" : "My name is Son"
}
```


```DELETE http://localhost:4000/questions/:id```
