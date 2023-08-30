const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
// const User=require("./models/usermodel");

const cors=require("cors");
app.use(cors());

const userrouter=require("../backend/routes/userRoute");

app.use(express.json());


mongoose.connect(process.env.URI)
.then(()=>{
console.log("success");
app.listen(process.env.PORT || 4000,(err)=>
{
    if(err) console.log(err);
    console.log("running successfully at",process.env.PORT);
}); 
})
.catch((error)=>
{
    console.log("error",error);
});

//create 
// app.post('/', async (req,res)=>{
// // var name = req.body.name
// const {name, email, age}=req.body; 
// const User=require("./models/usermodel");
// try{
// const userAdded=await User.create({
//     name:name,
//     email:email,
//     age:age,
// });

// res.status(201).json(userAdded);


// } catch(error)
// {console.log(error)
// res.send(400).json({error:error.message})
// }


// });


// app.get("/",async (req,res)=>{
//     try{
//     const showAll = await User.find();
//     res.status(200).json(showAll);
//     }
//     catch(error)
//     {
//         console.log(error);
//         res.send(500).json({error:error.message});
//     }
// });

app.use(userrouter);