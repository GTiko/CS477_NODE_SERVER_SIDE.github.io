const models = require("../models/models");


exports.createSchool = async (req, res) =>{
    const {name, code, address} = req.body;
    models.save(name, code, address, req.db);
    res.send("School created successfully");
}

exports.updateAddress = async (req, res) =>{
    const {code} = req.params;
    const {name} = req.body;
    models.updateAddress(code, name, req.db);
    res.send("Address updated successfully");
}

exports.deleteSchool = async (req, res) =>{
    const {code} = req.params;
    models.deleteSchool(code, req.db);
    res.send("School deleted successfully");
}

exports.addTeachers = async (req, res) =>{
    const {code} = req.params;
    const {name} = req.body;
    models.addTeachers(code, name, req.db);
    res.send("Teacher added successfully");
}

exports.updateTeachers = async (req, res) =>{
    const {code, id} = req.params;
    const {name} = req.body;
    models.updateTeachers(code, id, name, req.db);
    res.send("Teacher updated successfully");
}

exports.deleteTeachers = async (req, res) =>{
    const {code, id} = req.params;
    models.deleteTeachers(code, id, req.db);
    res.send("Teacher deleted successfully");
}

exports.addCourses = async (req, res) =>{
    const {code} = req.params;
    const {title} = req.body;
    console.log(code, title);
    models.addCourses(code, title, req.db);
    res.send("courses added successfully");
}

exports.addStudent = async (req, res) =>{
    const {code, id} = req.params;
    const {name} = req.body;
    console.log(code, id);
    models.addStudent(code, id, name, req.db);
    res.send("student added successfully");
}

exports.updateStudent = async (req, res) =>{
    const {code, coursesId, studentId} = req.params;
    const {name} = req.body;
    models.updateStudent(code, coursesId, studentId, name, req.db);
    res.send("student updated successfully");
}

exports.deleteStudent = (req, res) =>{
    const {code, coursesId, studentId} = req.params;
    models.deleteStudent(code, coursesId, studentId, req.db);
    res.send("student deleted successfully");
}

exports.getAll = async (req, res) =>{
    const data = await models.getAll(req.db);
    res.send(data);
}

exports.getAllTeachers = async (req, res)=>{
    const {code} = req.params;
    const data = await models.getAllTeachers(code, req.db);
    res.send(data);
}

exports.getCourses = async (req, res, next)=>{
    const {code} = req.params;
    const data = await models.getCourses(code, req.db);
    res.send(data);
}

exports.getAllStudents = async (req, res)=>{
    const {code, coursesId} = req.params;
    const {sort} = req.query;

    const data = await models.getAllStudents(code, coursesId, sort, req.db);

    res.send(data);
}