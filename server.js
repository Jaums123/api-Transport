const express= require('express')
const {myconnect,mysql,config}=require('./connexion')
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(myconnect(mysql,config,"pool"))


module.exports=app
