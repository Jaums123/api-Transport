const mysql=require('mysql')
const myconnect=require("express-myconnection")
const config={
    host:"localhost",
    user:"id19980366_jaums",
    password:"Junior2002@",
    port:3306,
    database:"id19980366_notes"
}

module.exports={
    myconnect,mysql,config
}