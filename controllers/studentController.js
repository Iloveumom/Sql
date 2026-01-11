const db=require("../utils/db-connection");
const addEnteries=(req,res)=>{
    const {name,email}=req.body;
    const insetQuery=`insert into student(name,email)values(?,?)`;
    db.execute(insetQuery,[name,email],(err)=>{
        if(err)
        {
            console.log(err);
            db.end();
            res.status(500).send(err.message);
            return;
        }
        
        return res.status(200).send(`New Student added ${name} and ${email}`);
    })
};
const updateEnteries=(req,res)=>{
    const {name,email}=req.body;
    const id=req.params.id;
    const updateQuery=`update student set name=?,email=? where id=?`;
    db.execute(updateQuery,[name,email,id],(err,result)=>{
        if(err)
        {
            console.log(err);
            db.end();
            res.status(500).send(err.message);
            return;
        }
        if(result.affectedRows===0)
        {
                res.status(404).send("Student not found");
                return;
        }
        return res.status(200).send(`update Student ${name} and ${email}`);
    })
};
const deleteEnteries=(req,res)=>{
    const id=req.params.id;
    const updateQuery=`delete from student where id=?`;
    db.execute(updateQuery,[id],(err,result)=>{
        if(err)
        {
            console.log(err);
            db.end();
            res.status(500).send(err.message);
            return;
        }
        if(result.affectedRows===0)
        {
                res.status(404).send("Student not found");
                return;
        }
        return res.status(200).send(`Delete Student`);
    })
};
module.exports={
    addEnteries,
    updateEnteries,
    deleteEnteries
}