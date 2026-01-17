const { Sequelize ,DataTypes} = require('sequelize');
const sequlize=require("../utils/db-connection");
const courses=sequlize.define('Courses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    course_name:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
module.exports=courses;