const mysql=require("mysql2");
const con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"root@123",
        database:"testdb"
});
con.connect((err)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log("COnnection has been created");
    const creationQuery=`create table IF not exists Student
            (
                id int auto_increment primary key,
                name varchar(100),
                email varchar(100)
            )`;
    con.execute(creationQuery,(err)=>{
            if(err)
            {
                 console.log(err);
                 con.end();
                 return;   
            }
            console.log("Table created");
    });
});
module.exports=con;