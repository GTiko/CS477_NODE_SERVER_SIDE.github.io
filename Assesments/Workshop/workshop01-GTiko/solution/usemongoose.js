const mongoose = require('mongoose');

const uri = "mongodb://127.0.0.1:27017/myapp"
async function main(){
    return mongoose.connect(uri);
}


function run(){
    main().then(testDB).catch(err => console.log(err));
}

//1. Create a new school with name, code & address (code should be unique)
async function createSchool(name, code, address){

}
//2. Update address of an existing school
async function updateSchoolAddress(code, address){

}
// 3. Delete a school
async function deleteSchool(code){

}
// 4. Add teacher *(level 1)*
async function addTeacher(schoolCode, teacher){

}
// 5. Update teacher by ID *(level 1)*
async function updateTeacher(schoolCode, teacherId, newTeacherName){

}
// 6. Delete teacher by ID *(level 1)*
async function deleteTeacher(schoolCode, teacherId){

}
// 7. Add a new course with title *(level 1)*
// 8. Add a new student to specific course *(level 2)*
// 9. Update a student's name *(level 2)*
// 10. Delete a student *(level 2)*
function testDB(){
    console.log('DB connected')
    //Test your code here
}


module.exports = run;
