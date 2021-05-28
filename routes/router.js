const express=require('express')
const router=express.Router()


const additionController=require('../controllers/additionController')

//router.get('/xyz',(req,res)=>{
    //res.send('abc')
//})

router.post('/post',(req,res)=>{
    const {a,b}=req.body
    res.json({success:true,addition:a+b,subtraction:a-b,multiplication:a*b,division:a/b})
})

module.exports=router