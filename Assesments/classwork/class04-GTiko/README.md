# CS477-2023-03-Class05
## Implement a server satisfy the following conditions
1. The server listens on port 3000.
2. If clients send the request POST 'http://localhost:3000/voters/thao?address=fairfield&phone=6411234567
    with the body {"president": "Michael", "vice-president": "Christine"}
3. Implement a middleware to ensure the above POST request will have a valid phone number, which contains 10 digits. In case the error happens, send that to an error handler.
4. If clients send other requests, this server will reply with status of 501 and text 'API is not supported'