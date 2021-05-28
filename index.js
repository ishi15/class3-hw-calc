
const express=require('express');
const app = express();
app.use(express.json());

const routes=require('./routes/router')
app.use('/',routes)




//app.get('/xyz',(req,res)=>{
    //res.send('abc')
//})


//app.get('/get/:a/:b',(req,res)=>{
    //let v1=Number(req.query.a)
    //let v2=Number(req.query.b)
//res.json({success:true,addition:v1+v2,subtraction:v1-v2,multiplication:v1*v2,division:v1/v2})
//})

//app.post('/post',(req,res)=>{
    //const {a,b}=req.body
    //res.json({success:true,paramresults:a+b})
//})
app.listen(5004,()=>{
    console.log('sever is running on port 5004')
})


