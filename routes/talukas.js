
let express = require("express");
let Talukas = require("../models/Talukas");
let bodyparser = require("body-parser");
const e = require("express");

let router = express.Router();

router.post("/", (req, res)=>{
    let body = req.body;
    let object = new Talukas();
    object.id = 0;
    object.name = body.name;
    object.districtid = body.districtid;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.get("/:districtid", (req, res)=>{
    let object = new Talukas();
    object.districtid = req.params.districtid;
    object.list().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.get("/:districtid/:id", (req, res)=>{
    let object = new Talukas();
    object.id = req.params.id;
    object.get().then((result)=>{
        if(result.length > 0)
            res.end(JSON.stringify({status:"success", data:result[0]}));
        else
            res.end(JSON.stringify({status:"failed", data:"Record not found"}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
 })

router.put("/:id", (req, res)=>{
    let body = req.body;
    let object = new Talukas();
    object.id = req.params.id;
    object.name = body.name;
    object.districtid = body.districtid;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

router.delete("/:id", (req, res)=>{
    let body = req.body;
    let object = new Talukas();
    object.id = req.params.id;
    object.delete().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    });
})

module.exports = router;