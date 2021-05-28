exports.getAddition=(req,res)=>{
    res.send('abc')
}

exports.postAddition=(req,res)=>{
    const {a,b}=req.body
    res.json({success:true,paramresults:a+b})
}
