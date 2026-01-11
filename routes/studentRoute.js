const express=require("express");
const {addEnteries,updateEnteries,deleteEnteries}=require("../controllers/studentController");
const router=express.Router();
router.post("/add",addEnteries);
router.put("/update/:id",updateEnteries);
router.delete("/delete/:id",deleteEnteries);
module.exports=router;