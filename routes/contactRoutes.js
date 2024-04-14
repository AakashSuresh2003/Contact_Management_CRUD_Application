const express = require("express")
const router = express.Router();

router.get("/",(req,res)=>{
    res.status(200).json({message:"Get All contacts"});
})

router.post("/",(req,res)=>{
    res.status(200).json({message:"Created a new contact"});
})

router.put("/:id",(req,res)=>{
    res.status(200).json({message:"Updated a new contact"});
})

router.delete("/:id",(req,res)=>{
    res.status(200).json({message:"Deleted a new contact"});
})

module.exports = router;