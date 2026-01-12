const express=require("express");
const studentRoute=require("./routes/studentRoute");

const app=express();
app.use(express.json());
app.use("/students",studentRoute);

const db=require("./utils/db-connection");
const studentmodal=require("./models/student");
db.sync().then(()=>{
    app.listen(3000,()=>{
    console.log("Server is running!!!");
});
})
.catch((err)=>{
    console.log(err);
});

