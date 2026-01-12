const { Sequelize ,DataTypes} = require('sequelize');
const sequlize=require("../utils/db-connection");
const students=sequlize.define('Students',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
});
module.exports=students;