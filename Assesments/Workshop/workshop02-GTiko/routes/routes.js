const controllers = require("../controller/controllers");
const middleware = require("../middleware/middleware");
const express = require("express");
const routers = express.Router();


routers.post("/createSchool",middleware.checkSchoolUnique, controllers.createSchool);
routers.put("/updateAddress/:code", controllers.updateAddress);
routers.delete("/delete/:code", controllers.deleteSchool);
routers.put("/:code/teachers", controllers.addTeachers);
routers.patch("/:code/teachers/:id", controllers.updateTeachers);
routers.delete("/:code/teachers/:id", controllers.deleteTeachers);
routers.put("/:code/courses", controllers.addCourses);
routers.put("/:code/courses/:id/students", controllers.addStudent);
routers.patch("/:code/courses/:coursesId/students/:studentId", controllers.updateStudent);
routers.delete("/:code/courses/:coursesId/students/:studentId", controllers.deleteStudent);
routers.get("/", controllers.getAll);
routers.get("/:code/teachers", controllers.getAllTeachers);
routers.get("/:code/courses", controllers.getCourses);
routers.get("/:code/courses/:coursesId/students", controllers.getAllStudents);


module.exports = routers;