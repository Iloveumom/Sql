const express=require("express");
const {addEnteries,updateEnteries,deleteEnteries, addStuentAndidentity, addDepartmentAndStudent}=require("../controllers/studentController");
const router=express.Router();
router.post("/add",addEnteries);
router.put("/update/:id",updateEnteries);
router.delete("/delete/:id",deleteEnteries);
router.post("/addstudentanidentity/",addStuentAndidentity);
router.post("/adddepartandstudent/",addDepartmentAndStudent);
module.exports=router;