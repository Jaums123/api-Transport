const mysql=require('mysql')
const myconnect=require("express-myconnection")
const config={
    host:"localhost",
    user:"id19980366_jaums",
    password:"Jaums2002@",
    port:3306,
    database:"id19980366_flutter"
}

module.exports={
    myconnect,mysql,config
}