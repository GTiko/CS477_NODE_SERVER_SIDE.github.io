[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10500315)
# CS477-2023-03-Class06
## Implement a voting system
1. The server listens on port 4000.
2. If clients send the request POST 'http://localhost:4000/voters/thao?address=fairfield&phone=6411234567
    with the body {"president": "Michael", "vice-president": "Christine"}
* Save all information to json file.
3. Implement a middleware to ensure the above POST request will have a valid phone number, which contains 10 digits. In case the error happens, send that to an error handler.
4. Implement the error handler
5. If clients send other requests, this server will reply with status of 501 and text 'API is not supported'
6. Implement a middleware to ensure one voter only votes once. The combination of name and phone will be unique for each voter
7. Implement GET "http://localhost:4000/voters/summary", which returns all candidates with positions and number of votes. e.g. 
{
  President: {Michael: 3, John: 5, Thao: 1},
  VicePresident: {Christine: 5, Harris: 3},
  CurrentWinner: {John, Christine}
}
8. Implement GET "http://localhost:4000/voters", which return all data in the system.
9. Implement PUT "http://localhost:4000/voters/thao/6411234567, which updates the candidates in the body. e.g. {"president": "John", "vice-president": "Christine"}
10. Implement GET "http://localhost:4000/voters/thao?address=fairfield&phone=6411234567, which returns the vote's information of this voter.
## Today (03/13/2023)
11. Implement POST "http://localhost:4000/voters" with the body 
`{"phone": "6411234567", password: "123", "name": "thao", "address": "fairfield"}`
* This route will sign up a new user.
* The username is the phone number. Ensure this phone is unique in this system.
* Hash the password using bcrypt module, const hashed = bcrypt.hashSync(password, 8);
* A file 'voters.json' will store all voters.
12. Implement the signin request POST "http://localhost:4000/voters" with the body 
`{"phone": "6411234567", "password": "123" }`
13. Change the routes in the questions 2, 9, 10, to get the information from the logged in voter.
* POST 'http://localhost:4000/voters' with the body {"president": "Michael", "vice-president": "Christine"}
* PUT 'http://localhost:4000/voters', which updates the candidates in the body. e.g. {"president": "John", "vice-president": "Christine"}
* GET 'http://localhost:4000/voters', which returns the vote's information of this voter
