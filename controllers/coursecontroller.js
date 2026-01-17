const course=require('../models/courses');
const Student=require('../models/student');
const addCourse=async (req,res)=>{
    const {name}=req.body;
    try{
            await course.create({
                course_name:name,
            })
            res.status(200).send(`student ${name}insert succ`);
    }
    catch(err)
    {
        res.status(500).send(err);
    }
};
const addStudentsToCourses=async(req,res)=>{

            /*
                "StudentId":1,
                "CourseIds":[1,2]
            */
    try
    {
           const {StudentId,CourseIds}=req.body;
           const student=await Student.findByPk(StudentId);
           const courses=await course.findAll({
                where:{
                    id:CourseIds
                }
           });
          await student.addCourse(courses);
          const updateStudent=await Student.findByPk(StudentId,{include:course});
          res.status(200).json(updateStudent);
        }
        catch(err)
        {
            res.status(500).json({error:err.message});
        }
};
module.exports={addCourse,addStudentsToCourses};