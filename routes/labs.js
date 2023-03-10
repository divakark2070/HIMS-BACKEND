let express = require("express");
let bodyparser = require("body-parser");
let Lab = require("../models/Lab")

let router = express.Router();

router.post("/", (req,res)=>{
    let body = req.body;
    let object = new Lab();
    object.name = body.name;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
})

router.put("/:id", (req,res)=>{
    let body = req.body;
    let object = new Lab();
    object.name = body.name;
    object.id = req.params.id

    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
    
})

router.get("/", (req,res)=>{
    let object = new Lab();

    object.list().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
})

router.get("/:id", (req,res)=>{
    let object = new Lab();
    object.id = req.params.id;

    object.get().then((result)=>{
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

router.delete("/:id", (req,res)=>{
    let object = new Lab();
    object.id = req.params.id
    object.delete().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}))
    }).catch(err=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
})

module.exports = router;