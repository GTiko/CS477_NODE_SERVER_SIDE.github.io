[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10368081)
# CS477-2023-03-homework03
1. Create a https server which is listen to 3000 port. 
2. Create the route of “/” which returns 'Hello World' using http GET. For example, sending a GET request http://localhost:3000, the result is "Hello World"
3. Create the route which returns query strings using http GET. For example, sending a GET request http://localhost:3000?id=1&&name=abc, the response is {id: 1, name: 'abc'}
4. Create the route which returns body of POST request. For example, sending a POST request http://localhost:3000/users/add with the body is {first_name: 'thao', last_name: 'vu'}, the response will be {first_name: 'thao', last_name: 'vu'}.
5. Use Postman or Thunder Client to test API
6. (Optional)
Create a function to return an array from two arrays.
The returned array contains all different elements in both input arrays.
Input: [1, 2, 3, 4, 4, 5], [3, 4, 5, 6]
Output: [1,2,3,4,5,6]
