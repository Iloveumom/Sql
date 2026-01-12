const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('testdb', 'root', 'root@123', {
  host: 'localhost',
  dialect: 'mysql'
 });
 (async()=>{try
 {
        await sequelize.authenticate();
        console.log("connection created");
 }
 catch(err)
 {
    console.log(err);
 }})();
 module.exports=sequelize;

//const mysql=require("mysql2");
// const con=mysql.createConnection({
//         host:"localhost",
//         user:"root",
//         password:"root@123",
//         database:"testdb"
// });
// con.connect((err)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log("COnnection has been created");
//     const creationQuery=`create table IF not exists Student
//             (
//                 id int auto_increment primary key,
//                 name varchar(100),
//                 email varchar(100)
//             )`;
//     con.execute(creationQuery,(err)=>{
//             if(err)
//             {
//                  console.log(err);
//                  con.end();
//                  return;   
//             }
//             console.log("Table created");
//     });
// });
// module.exports=con;