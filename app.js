const express=require("express");
const studentRoute=require("./routes/studentRoute");
const coursesRoute=require("./routes/courseRoute");
const app=express();
app.use(express.json());
app.use("/students",studentRoute);
app.use("/courses",coursesRoute);

const db=require("./utils/db-connection");
//const studentmodal=require("./models/student");
//all models
require('./models');
db.sync().then(()=>{
    app.listen(3000,()=>{
    console.log("Server is running!!!");
});
})
.catch((err)=>{
    console.log(err);
});

