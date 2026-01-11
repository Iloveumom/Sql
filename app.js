const express=require("express");
const studentRoute=require("./routes/studentRoute");
const app=express();
app.use(express.json());
app.use("/students",studentRoute);
app.listen(3000,()=>{
    console.log("Server is running!!!");
});