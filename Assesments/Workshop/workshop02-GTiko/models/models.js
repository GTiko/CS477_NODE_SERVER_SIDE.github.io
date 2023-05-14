const CONNECTION_NAME = "STUDENTS";
const {ObjectId} = require('mongodb');

class School{

    static async save(name, code, address, db){
        try{
            await db.collection(CONNECTION_NAME).insertOne({name, code, address});
            return "successfully added";
        }catch(err){
            return null;
        }
    }
    static async updateAddress(code, name, db){
        try {
            await db.collection(CONNECTION_NAME).updateOne({code}, {$set:{name}})
        } catch (err) {
            return null;
        }
    }
    static async deleteSchool(code, db){
        try {
            await db.collection(CONNECTION_NAME).deleteOne({code})
        } catch (err) {
            return null;
        }
    }
    static async addTeachers(code, teacherName, db){
        try {
            await db.collection(CONNECTION_NAME).updateOne(
                {code}, 
                {$addToSet:{teachers:{_id: new ObjectId(),name:teacherName}}}
            );
        } catch (err) {
            return null;
        }
    }
    static async updateTeachers(code, id, name, db){
        try {
            await db.collection(CONNECTION_NAME).updateOne(
                {code:code, "teachers._id":new ObjectId(id)},
                {$set:{"teachers.$.name":name}}
            );
        } catch (err) {
            return null;
        }
    }
    static async deleteTeachers(code, id, db){
        try {
            await db.collection(CONNECTION_NAME).updateOne(
                {code:code, "teachers._id":new ObjectId(id)},
                {$pull:{teachers:{_id: new ObjectId(id)}}}
            );
        } catch (err) {
            return null;
        }
    }
    static async addCourses(code, title, db){
       try {
            await db.collection(CONNECTION_NAME).updateOne(
                {code:code},
                {$addToSet:{courses:{_id:new ObjectId(), title:title}}}
            );
       } catch (err) {
            return null;
       }
    }
    static async addStudent(code, id, name, db){
        try{
            let std = {_id: new ObjectId(), name: name};
                await db.collection(CONNECTION_NAME).updateOne(
                    {code: code},
                    {$push:{"courses.$[c].student":std}},
                    {arrayFilters: [{ "c._id":new ObjectId(id)}]}
                );
        }catch(err){
            return null;
        }
    }
    static async updateStudent(code, coursesId, studentId, name, db){
        try {
            await db.collection(CONNECTION_NAME).updateOne(
                {code},
                {$set: {"courses.$[c].student.$[s].name":name}},
                {arrayFilters: [{ "c._id": new ObjectId(coursesId)}, {"s._id":new ObjectId(studentId)}]}
            );
        } catch (err) {
            return null;
        }
    }
    static async deleteStudent(code, coursesId, studentId, db){
        try {
            await db.collection(CONNECTION_NAME).updateOne(
                {code: code},
                {$pull : {"courses.$[c].student":{_id: new ObjectId(studentId)}}},
                {arrayFilters:[{"c._id": new ObjectId(coursesId)}]}
            )
        } catch (err) {
            return null;
        }
    }
    static async getAll(db){
        try {
            const data = await db.collection(CONNECTION_NAME).find({});
            return data.toArray();
        } catch (error) {
            return null;
        }
    }
    static async getAllTeachers(code, db){
        try {
        let data = await db.collection(CONNECTION_NAME).find(
                    {code:code}
                ).project({"teachers": 1, _id: 0}).toArray();
            return data;
        } catch (err) {
            return null;
        }
    }

    static async getCourses(code, db){
        try {
        let data =  await db.collection(CONNECTION_NAME).find(
                {code:code}, {"courses.name":true}
                ).project({"courses": 1, _id: 0}).toArray();
            return data;
        } catch (err) {
            return null;
        }
    }

    static async getAllStudents(code, coursesId, sort, db){
        try {
            let data = await db.collection(CONNECTION_NAME).find(
                {code:code, "courses._id":new ObjectId(coursesId)}
            ).project({"courses.student.name": 1, _id: 0}).toArray()

            if(sort){
                return data.sort();
            }else{
                return data;
            }
        } catch (error) {
            console.log("err")
            return null;
        }
    }
}

module.exports = School