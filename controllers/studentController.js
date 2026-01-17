const db=require("../utils/db-connection");
const student=require("../models/student");
const identitycard=require("../models/identity_card");
const departments = require("../models/department");
const addEnteries=async (req,res)=>{
    const {name,email}=req.body;
    try{
            await student.create({
                name:name,
                email:email
            })
            res.status(200).send(`student ${name}insert succ`);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
    // const insetQuery=`insert into student(name,email)values(?,?)`;
    // db.execute(insetQuery,[name,email],(err)=>{
    //     if(err)
    //     {
    //         console.log(err);
    //         db.end();
    //         res.status(500).send(err.message);
    //         return;
    //     }
        
    //     return res.status(200).send(`New Student added ${name} and ${email}`);
    // })
};
const addStuentAndidentity=async(req,res)=>{
    /*
        //we wiill pay load data with req.body
        {
            student={"name":"jitender"},
            identitycard={"cardno","12345"}
        }
    */
   try
   {

              const studenttt=await student.create(req.body.student);
              const idcard=await identitycard.create({
                    ...req.body.identitycard,
                    StudentId:studenttt.id
              });
              res.status(201).json({studenttt,idcard});
    }
    catch(err)
    {
        res.status(500).send(err);
    }
};
const addDepartmentAndStudent=async(req,res)=>{
         try
   {

              const department=await departments.create(req.body.department);
              const studentt=await student.create({
                    ...req.body.student,
                    departmentId:department.id
              });
              res.status(201).json({department,studentt});
    }
    catch(err)
    {
        res.status(500).json({error:err.message});
    }
};
const updateEnteries=async(req,res)=>{
    try
    {
        const {name,email}=req.body;
        const id=req.params.id;
        const stud=await student.findByPk(id);
        if(!student)
        {
            res.status(404).send("student not found");
        }
        stud.name=name;
        stud.email=email;
        await stud.save();
        res.status(200).send("student update success");
    }
    catch(err)
    {
        res.status(500).send(err);
    }
    // const updateQuery=`update student set name=?,email=? where id=?`;
    // db.execute(updateQuery,[name,email,id],(err,result)=>{
    //     if(err)
    //     {
    //         console.log(err);
    //         db.end();
    //         res.status(500).send(err.message);
    //         return;
    //     }
    //     if(result.affectedRows===0)
    //     {
    //             res.status(404).send("Student not found");
    //             return;
    //     }
    //     return res.status(200).send(`update Student ${name} and ${email}`);
    // })
};
const deleteEnteries=async(req,res)=>{
    try{

        const id=req.params.id;
        const studen=await student.destroy({
            where:{
                id:id
            }
        });
        if(!studen)
        {
            return res.status(404).send("student not found");
            
        }
        return res.status(200).send("student delete success");
    }
    catch(err)
    {
        res.status(500).send("student not delete");
    }
    // const updateQuery=`delete from student where id=?`;
    // db.execute(updateQuery,[id],(err,result)=>{
    //     if(err)
    //     {
    //         console.log(err);
    //         db.end();
    //         res.status(500).send(err.message);
    //         return;
    //     }
    //     if(result.affectedRows===0)
    //     {
    //             res.status(404).send("Student not found");
    //             return;
    //     }
    //     return res.status(200).send(`Delete Student`);
    // })
};
module.exports={
    addEnteries,
    updateEnteries,
    deleteEnteries,
    addStuentAndidentity,
    addDepartmentAndStudent
}