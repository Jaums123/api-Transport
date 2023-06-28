const mysql=require('mysql')
const myconnect=require("express-myconnection")
const config={
    host:"localhost",
    user:"root",
    password:"",
    port:3306,
    database:"notes"
}

module.exports={
    myconnect,mysql,config
}