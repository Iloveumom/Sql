const db=require("../utils/db-connection");
const student=require("../models/student");
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
            res.status(404).send("student not found");
            
        }
        res.status(200).send("student delete success");
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
    deleteEnteries
}