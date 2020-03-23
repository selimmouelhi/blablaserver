const express = require('express')
const body_parcer = require('body-parser')

const router = express.Router()



router.get("/sum/:arg1/:arg2",function(req,res){

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  
    
    var arg1 = req.params.arg1;
    var arg2 = req.params.arg2;
    res.status(200)
    console.log("success")
    res.json(parseInt(arg1)+parseInt(arg2))
})
module.exports = router
