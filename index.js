const express = require("express")
const app = express()

const middleware = (req,res,next)=>{
    console.log("hii this is middleware")
    next()
}

app.use(middleware)

    app.get("/",(req,res)=>{
        res.send("hii this is the GET request")
    })

    app.post("/",(req,res)=>{
        res.send("hii this is POST request ")
    })

    app.put("/",(req,res)=>{
        res.send("hii this is PUT request ")
    })

    app.delete("/",(req,res)=>{
        res.send("hii this is DELETE request ")
    })

const PORT =3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))