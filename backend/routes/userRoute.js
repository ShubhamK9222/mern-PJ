const express = require("express");

const mongoose = require("mongoose");
const User = require("../models/usermodel");
const router=express.Router();



router.post('/', async (req,res)=>{
    // var name = req.body.name
    const {name, email, age}=req.body; 
    const User=require("../models/usermodel");
    try{
    const userAdded=await User.create({
        name:name,
        email:email,
        age:age,
    });
    
    res.status(201).json(userAdded);
    
    
    } catch(error)
    {console.log(error)
    res.send(400).json({error:error.message})
    }
    
    
    });
    
    
    router.get("/",async (req,res)=>{
        try{
        const showAll = await User.find();
        res.status(200).json(showAll);
        }
        catch(error)
        {
            console.log(error);
            res.send(500).json({error:error.message});
        }
    });

    //single user
    router.get("/:id",async (req,res)=>{
        const {id}=req.params;
        try{
        const singleUser = await User.findById({_id:id});
        res.status(200).json(singleUser);
        }
        catch(error)
        {
            console.log(error);
            res.send(500).json({error:error.message});
        }
    });



//delete operation

router.delete("/:id",async (req,res)=>{
    const {id}=req.params;
    try{
    const singleUser = await User.findByIdAndDelete({_id:id});
    res.status(200).json(singleUser);
    }
    catch(error)
    {
        console.log(error);
        res.send(500).json({error:error.message});
    }
});

//update
router.patch("/:id",async (req,res)=>{
    const {id}=req.params;
    const{name,email,age}=req.body;
    try{
    const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true,});
    res.status(200).json(updateUser);
    }
    catch(error)
    {
        console.log(error);
        res.send(500).json({error:error.message});
    }
});


    module.exports=router;