[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10425428)
# CS477-2023-03-Class03
1. Create an http server using express on port 3000
2. Assume that the client sends to this server a POST "/numbers"  with the body like the below:
{
  "numbers": [1, 2, 3, 4] 
}
Create a middleware to ensure this server only accept the body with numbers as an array of ascending positive integer.
3. Assume that the client sends to this server a POST "/strings"  with the body like the below:
{
  "upper": "ABC",
  "lower": "abc"
}
Upper: The value is a string with all capital letters
Lower: the value is a string with all lower cases
Create a middleware to ensure this server only accept the above body.
