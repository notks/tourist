const express=require ('express')
let app=express()
app.post('/test',(req,res)=>{
    res.send("helloooo")
})
app.listen(3000)
