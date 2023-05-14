[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=10521708)
# CS477-2023-3-Workshop01
Please find below an Express application that connects to a local MongoDB instance, each document has the following structure for `schools` collection:
```JavaScript
{
    "_id":1,
    "name": "Maharishi International University",
    "code": "MIU",
    "address": "Fairfield, IA",
    "teachers": [
        {"_id":1, "name":"Asaad"},
        {"_id":2, "name":"Umur"}
    ],
    "courses":[
        {"_id":1, "title": "CS477", "students":[
            {"_id":1, "name":"John"},
            {"_id":2, "name":"Selin"}
        ]},
        {"_id":2, "title": "CS571", "students":[
            {"_id":1, "name":"Alican"},
            {"_id":2, "name":"Dean"}
        ]},
        {"_id":3, "title": "CS415", "students":[
            {"_id":1, "name":"Tina"},
            {"_id":2, "name":"Clyde"}
        ]}
    ]
}
```
Your are responsible on writing code for 6 MongoDB queries within 6 pre-defined routes in `app.js` file:
1. Create a new school with name, code & address (code should be unique)
2. Update address of an existing school
3. Delete a school
4. Add teacher *(level 1)*
5. Update teacher by ID *(level 1)*
6. Delete teacher by ID *(level 1)*
7. Add a new course with title *(level 1)*
8. Add a new student to specific course *(level 2)*
9. Update a student's name *(level 2)*
10. Delete a student *(level 2)*
