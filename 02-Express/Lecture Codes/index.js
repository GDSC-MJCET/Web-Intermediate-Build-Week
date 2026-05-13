import express from 'express'
import { v4 as uuidv4 } from "uuid";
const app = express()
app.use(express.json())//middleware, for the next session

const users=[]

app.post("/signup", function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const user = users.find((u)=>u.email==email)
    if(user){
        return res.status(401).json({
            success:false,
            message:"User already exists"
        })
    }
    if(password.length<6){
        return res.status(401).json({
            success:false,
            message:"Password should be more than 6 characters"
        })
    }
    const id = uuidv4()
    users.push({
        id:id,
        email:email,
        password:password
    })
    res.status(200).json({
        success:true,
        users:users
    })
});
app.post("/signin", (req,res)=>{
    const {email, password} = req.body;
    const user = users.find((u)=>u.email==email && u.password==password)
    if(!user){
        return res.status(401).json({
            success:false,
            message:"Invalid Credentials"
        })
    }
    res.status(200).json({
        user:user
    })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})