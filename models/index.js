const student=require('./student');
const department=require('./department');
const identitycard=require('./identity_card');
//one to one ass
student.hasOne(identitycard);
identitycard.belongsTo(student);

//one to many ass
department.hasMany(student);
student.belongsTo(department);
module.exports={
    student,identitycard
}