[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10457084)
# CS477-2023-03-Homework05
1. Create a server using Express to manage books. A book has properties: id, title, ISBN, publishedDate, author.
2. Implement a server listening on port 3000
3. Implement POST `http://localhost:3000/books` with the body 
`
{
    "title": "NodeJS programming",
    "ISBN": "9783161484100",
    "publishedDate": "Jan 1, 2022",
    "author": "Thao Vu"
}
`
* You should generate the id for a new book
* Implement the middleware for this POST request to ensure the ISBN is a string of 13 digits.
* Save all books in the file 'book.json' and load that file when starting the server
4. Implement GET `http://localhost:3000/books`, which returns all books
5. Implement PUT `http://localhost:3000/books/{id}` with the body
{
    "title": "Server-side programming"
}
* This request will trigger updating the title of the book with id
6. Implement DELETE `http://localhost:3000/books/{id}`, which delete the book with id
7. Implement GET `http://localhost:3000/books/{id}`, which returns the book with id
8. (Optional) Upload a transcript of a book as a file while creating or updating. Save the file in Server and share that location publicly to clients.
