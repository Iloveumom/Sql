const {DataTypes}=require("sequelize");
const sequelize=require('../utils/db-connection');
const identitycard=sequelize.define('identitycard',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:true,
        autoIncrement:true
    },
    cardno:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }

});
module.exports=identitycard;