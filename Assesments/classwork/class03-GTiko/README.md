[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10442208)
# CS477-2023-03-Class04
## Create a server using Express to satisfy the following conditions
1. The server listens on port 3000
2. If clients send a GET request 'http://localhost:3000/count?string='AbceDE', the server will reply with the number of the upper letters. The respons is three in this case.
3. If clients send a GET request 'http://localhost:3000/reverse/AbceDE, the server will recognize 'AbceDE' as the params 'string', it will reverse all letters of that string and return the result to clients. The response is EDecbA in this case
4. If clients send a POST request 'http://localhost:3000/upper with the body {"string": "abc"}, the server will convert the string to a capital string and return that to the client. The response is ABC in this case.
5. Write a middleware to ensure all incoming requests only contain the string without numeric letters 
