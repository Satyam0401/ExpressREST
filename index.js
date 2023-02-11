const express = require("express")
const app = express()
const uuid = require("uuid")
const members = require("./members") 


/*const middleware = (req,res,next)=>{
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
*/



app.use(express.json())
app.get("/showAllUser",(req,res)=>{
    res.status(200).json(members)
})

app.get("/showUser/:uid",(req,res)=>{
    //console.log(typeof parseInt(req.params.uid))
const user =members.filter(member=>member.id===parseInt(req.params.uid))
user.length !==0 ? res.status(200).json(user) : res.status(200).json("this record is not found") 
})

app.post('/addUser/',(req,res)=>{
    //console.log(req.body.name)
    //const name = req.body.name
    //const email = req.body.email
    //const password = req.body.password
    //console.log(name,email,password)

    const {email,name,password} = req.body
    //console.log(email,name,password)
members.push({id:uuid.v4(),name,email,password})
res.status(200).json(members)
})

app.delete("/deleteUser/:uid",(req,res)=>{
    const id = parseInt(req.params.uid)
    //console.log(id)
    const found = members.some(member => member.id === id)
    if(found){
const results = members.filter(member => member.id !== id)
res.status(200).json(results)
    }
    else{
        res.status(400).json({msg:`this is an invalid request`})
    }
})

app.put("/updateUser/:uid",(req,res)=>{
const id = parseInt(req.params.uid)
const found = members.some(member => member.id === id)
if(found){
const updMember = req.body
members.forEach(member =>{
    if(member.id === id){
        member.name = updMember.name
        member.email = updMember.email
    }
})
res.status(200).json(members)
}
else{
    res.status(200).json({msg:`this request is invalid`})
}
})

const PORT =3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))