const express=require("express");
const {addCourse,addStudentsToCourses}=require("../controllers/coursecontroller");
const router=express.Router();
router.post("/addcourses",addCourse);
router.post("/addStudentsToCourses",addStudentsToCourses);
module.exports=router;