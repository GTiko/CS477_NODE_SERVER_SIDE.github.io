[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10427866)
# CS477-2023-03-Homework04
1. Create a http server which is listen to 3000 port using Express
   1. npm init
   2. npm install express
2. Create the route of “/” which returns 'Hello World' using http GET. For example, sending a GET request http://localhost:3000, the result is "Hello World"
3. Create the route which add a new user. For example, sending a POST request http://localhost:3000/users/add with the body is {first_name: 'thao', last_name: 'vu'}, the response will be {first_name: 'thao', last_name: 'vu'}. Save all data to a file
4. Create the route which returns a specific user. For example, sending a GET request http://localhost:3000/users/thao, the response is {id: 1, name: 'abc'}
5. Create a middleware to make sure the first name and last name should not contains numeric characters or space
6. Customize your 404 page
7. Provide your own error handling

