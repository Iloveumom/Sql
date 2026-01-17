const student=require('./student');
const department=require('./department');
const identitycard=require('./identity_card');
const courses = require('./courses');
const studentcourses = require('./studentcourse');
//one to one ass
student.hasOne(identitycard);
identitycard.belongsTo(student);

//one to many ass
department.hasMany(student);
student.belongsTo(department);


//mamny to many
student.belongsToMany(courses,{through:studentcourses});
courses.belongsToMany(student,{through:studentcourses});
module.exports={
    student,identitycard,department,studentcourses
}