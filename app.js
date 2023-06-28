const app=require("./server")
let port=process.env.PORT || 3001
/////AJOUTER 

app.post("/add",(req,res)=>{
    const value=req.body
    req.getConnection((erro,connection)=>{
       if(erro){
        console.log(erro)
       }else{
        const requete="INSERT INTO note (num, titre, description) VALUES (NULL,?,?)" 
        connection.query(requete,[value.titre,value.description],(error,result)=>{
            if (error) {
                return res.status(500).json({message:error})
            }else{
               return res.status(200).json(result) 
            }
        })
       }
    })
})

////////Afficher toute la liste
app.get("/get",(req,res,next)=>{
    const body=req.body
    req.getConnection((erro,connection)=>{
       if(erro){
        console.log(erro)
       }else{
        const requete="select *from note"
        connection.query(requete,[],(error,result)=>{
            if (error) {
                return res.status(500).json({message:error})
            }else{
               return res.status(200).json(result) 
            }
        })
       }
    })
})
/////////MODIFIER
app.patch("/update/:id",(req,res)=>{
    const id= req.params.id
  const value=req.body
  req.getConnection((erro,connection)=>{
     if(erro){
      console.log(erro)
     }else{
      const requete="update note set titre=?,description=? where num=?"
      connection.query(requete,[value.titre,value.description,id],(error,result)=>{
          if (error) {
              return res.status(500).json({message:error})
          }else{
              if (result.affectedRows ==0) {
                  return res.status(404).json({message:"La clé n'existe pas"})
              }else{
                  return res.status(200).json(result) 
              }
            
          }
      })
     }
  })
})

/////SUPPRIMER TOUTE LA LISTE 
app.delete("/delete/:id",(req,res,next)=>{
      const id= req.params.id
    const body=req.body
    req.getConnection((erro,connection)=>{
       if(erro){
        console.log(erro)
       }else{
        const requete="delete from note where num=?"
        connection.query(requete,[id],(error,result)=>{
            if (error) {
                return res.status(500).json({message:error})
            }else{
                if (result.affectedRows ==0) {
                    return res.status(404).json({message:"La clé n'existe pas"})
                }else{
                    return res.status(200).json(result) 
                }
              
            }
        })
       }
    })
})

app.listen(port,()=>{
    console.log("Super ")
})