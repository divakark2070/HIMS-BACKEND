let express = require("express");
let bodyparser = require("body-parser");
let Labtest = require("../models/Labtest")

let router = express.Router();

router.post("/:labid",(req,res)=>{
    let body = req.body;

    let object = new Labtest();
    object.name = body.name;
    object.labid = req.params.labid;
    object.testtype = body.testtype;
    object.rate = body.rate;

    object.save().then(result=>{
        res.end(JSON.stringify({status:"success", data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
})

router.put("/:labid/:id",(req,res)=>{
    let body = req.body;

    let object = new Labtest();
    object.name = body.name;
    object.labid = req.params.labid;
    object.testtype = body.testtype;
    object.rate = body.rate;
    object.id = req.params.id

    object.save().then(result=>{
        res.end(JSON.stringify({status:"success", data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
})

router.get("/:labid",(req,res)=>{
    let object = new Labtest();
    object.labid = req.params.labid;

    object.list().then(result=>{
        res.end(JSON.stringify({status:"success", data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
})

router.get("/",(req,res)=>{
    let object = new Labtest();

    object.list().then(result=>{
        res.end(JSON.stringify({status:"success", data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
})

router.get("/:labid/:id",(req,res)=>{
    let object = new Labtest();
    object.labid = req.params.labid;
    object.id = req.params.id;

    object.get().then(result=>{
        if(result.length > 0){
        res.end(JSON.stringify({status:"success", data:result[0]}))
        }
        else{
        res.end(JSON.stringify({status:"failed", data:"Record not found"}))

        }
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
})

router.delete("/:labid/:id",(req,res)=>{
    let object = new Labtest();
    object.labid = req.params.labid;
    object.id = req.params.id;

    object.delete().then(result=>{ 
        res.end(JSON.stringify({status:"success", data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
})

module.exports = router;