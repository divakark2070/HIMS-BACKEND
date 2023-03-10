let Ipdoptions = require("../models/Ipdoption");
let express = require("express");

let router = express.Router();

router.post("/",(req,res)=>{
    let body = req.body;
    let object =new Ipdoptions();
    object.id = 0;
    object.srno = body.srno;
    object.title = body.title;
    object.link = body.link;
    object.optionfor = body.optionfor;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));

    },(err)=>{
        req.end(JSON.stringify({status:"failed", data:err}));
    })
});
router.get("/",(req,res)=>{
    let object = new Ipdoptions();
    object.list().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    },(err)=>{
        res.end(JSON.stringify({status:"failed", data:err}))
    })
});


router.put("/:id",(req,res)=>{
    let body = req.body;
    let object =new Ipdoptions();
    object.id = req.params.id;
    object.srno = body.srno;
    object.title = body.title;
    object.link = body.link;
    object.optionfor = body.optionfor;
    object.save().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));

    },(err)=>{
        req.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.get("/:id",(req,res)=>{
    let object =new Ipdoptions();
    object.id = req.params.id;
    object.get().then((result)=>{
        if(result.length > 0)
            res.end(JSON.stringify({status:"success", data:result[0]}));
        else
            res.end(JSON.stringify({status:"failed", data:"Record not found"}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
});

router.delete("/:id", (req, res)=>{
    let object = new Ipdoptions();
    object.id = req.params.id;
    object.delete().then((result)=>{
        res.end(JSON.stringify({status:"success", data:result}));
    }, (err)=>{
        res.end(JSON.stringify({status:"failed", data:err}));
    })
 })
 


module.exports = router;