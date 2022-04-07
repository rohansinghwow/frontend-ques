# Welcome to frontend-ques!

# Installation

` npm install`
` npm init-y`

` npm run start`

# Important Files

`.env` - `DATABASE_URL=mongodb-URL`

`route.rest` - **for testing the endpoints in VS Code**

**Extension Name - REST Client**

**Extension ID - humao.rest-client**

`getQuestions.js`
fetch all the questions from server.js. imported to `listQuestions.html`

`submit.js`
post a question to server.js . import to `submit.html`

# Endpoints

**To change the Port number**

`const PORT` **= whatever you like**

## Get all the questions

`GET http://localhost:4000/questions`

## Post/upload a question to the DB

```
POST  http://localhost:4000/
Content-Type: application/json

{
    "questionTitle" : "What is your name ?",
    "answer" : "My name is Goku"
}
```
