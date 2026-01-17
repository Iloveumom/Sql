const {DataTypes}=require("sequelize");
const sequelize=require('../utils/db-connection');
const department=sequelize.define('department',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:true,
        autoIncrement:true
    },
    department_name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }

});
module.exports=department;