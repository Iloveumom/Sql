const { Sequelize ,DataTypes} = require('sequelize');
const sequlize=require("../utils/db-connection");
const studentcourses=sequlize.define('Studentcourses',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    }
});
module.exports=studentcourses;