const {MongoClient, ObjectId} = require('mongodb');

const uri = "mongodb://127.0.0.1:27017"
let client = new MongoClient(uri);
let db = null;
async function main(){
    await client.connect();
    db = client.db('myapp');
}


function run(){
    main().then(testDB).catch(err => console.log(err));
}

let _id;
const CONNECTION_NAME = "STUDENTS";

//1. Create a new school with name, code & address (code should be unique)
async function createSchool(name, code, address){
    const data = await db.collection(CONNECTION_NAME).find({}).toArray()
    _id = data.length + 1
    await db.collection(CONNECTION_NAME).insertOne({_id, name, code, address});
    console.log("Added successfully")
}
//2. Update address of an existing school
async function updateSchoolAddress(code, address){
    await db.collection(CONNECTION_NAME).updateOne({code:code}, {$set:{address: address}})
    console.log("Updated successfully")
}
// 3. Delete a school
async function deleteSchool(code){
    await db.collection(CONNECTION_NAME).deleteOne({code: code})
    console.log("Deleted successfully")
}
// 4. Add teacher *(level 1)*
async function addTeacher(schoolCode, teacher){
    await db.collection(CONNECTION_NAME).updateOne(
        {code: schoolCode}, 
        {$addToSet:{teachers:{_id: new ObjectId(),name:teacher}}}
    );
    console.log("Added successfully");
}
// 5. Update teacher by ID *(level 1)*
async function updateTeacher(schoolCode, teacherId, newTeacherName){
    await db.collection(CONNECTION_NAME).updateOne(
        {code:schoolCode, teachers:{$elemMatch:{_id:teacherId}}},
        {$set:{"teachers.$.name":newTeacherName}}
        );
    console.log("Teacher updated successfully");
}
// 6. Delete teacher by ID *(level 1)*
async function deleteTeacher(schoolCode, teacherId){
        await db.collection(CONNECTION_NAME).updateOne(
        {code:schoolCode, teachers:{$elemMatch:{_id:teacherId}}},
        {$pull:{teachers:{_id:teacherId}}}
        );
        console.log("Teacher deleted successfully");
}
// 7. Add a new course with title *(level 1)*
async function addNewCourse(schoolCode, title){
        await db.collection(CONNECTION_NAME).updateOne(
            {code:schoolCode},
            {$addToSet:{courses:{_id:new ObjectId(), title:title}}}
        );
        console.log("Course added successfully");
}

// 8. Add a new student to specific course *(level 2)*

async function addNewStudent(schoolCode, title, studentName){
    try{
        let std = {_id: new ObjectId(), name: studentName};
            await db.collection(CONNECTION_NAME).updateOne(
            {code: schoolCode},
            {$push:{"courses.$[c].student":std}},
            {arrayFilters: [{ "c.title":title}]}
    )
        console.log("student added successfully")
    }catch(err){
        console.log(err);
    }
}

// 9. Update a student's name *(level 2)*

async function updateStudent(schoolCode, oldName, title, newName){
    await db.collection(CONNECTION_NAME).updateOne(
        {code:schoolCode},
        {$set: {"courses.$[c].student.$[s].name":newName}},
        {arrayFilters: [{ "c.title":title}, {"s.name":oldName}] }
    );
}

// 10. Delete a student *(level 2)*

async function deleteStudent(schoolCode, title, name){
    await db.collection(CONNECTION_NAME).updateOne(
        {code: schoolCode},
        {$pull : {"courses.$[c].student":{name:name}}},
        {arrayFilters:[{"c.title":title}]}
    )
}


function    testDB(){
    console.log('DB connected')
    //Test your code here
  
// createSchool("Maharishi", "MIU", "Fairfield, IA");
// updateSchoolAddress("MIU", "Des-Monies, IA");
// deleteSchool("MIU");
// addTeacher("MIU", "Mike");
// updateTeacher("MIU", new ObjectId("6413a7dcb313d24ec16c7e1e"),"Mike");
// deleteTeacher("MIU", new ObjectId("6413a7dcb313d24ec16c7e1e"));
// addNewCourse("MIU", "CS477");
// addNewStudent("MIU", "CS477", "Abel");
// updateStudent("MIU", "Abel", "CS477", "Weeknd");
// deleteStudent("MIU", "CS477", "weeknd");

}

module.exports = run;
