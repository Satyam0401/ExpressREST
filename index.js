const express = require("express")
const app = express()
const uuid = require("uuid")


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


const members = [{
    id :1,
    name:"Satyam",
    email:"satyam@gmail.com",
    status:"active"
},
{
    id :2,
    name:"Satu",
    email:"satu@gmail.com",
    status:"inactive"
},
{
    id :3,
    name:"Sanskar",
    email:"sanskar@gmail.com",
    status:"active"
}]
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

const PORT =3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))